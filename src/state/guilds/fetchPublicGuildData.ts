import BigNumber from 'bignumber.js'
import masterLooterABI from 'config/abi/masterlooter.json'
import erc20 from 'config/abi/erc20.json'
import { getAddress, getGuildsMasterLooterAddress } from 'utils/addressHelpers'
import { BIG_TEN, BIG_ZERO } from 'utils/bigNumber'
import multicall from 'utils/multicall'
import { Guild, SerializedBigNumber } from '../types'

type PublicGuildData = {
  tokenAmountMc: SerializedBigNumber
  quoteTokenAmountMc: SerializedBigNumber
  tokenAmountTotal: SerializedBigNumber
  quoteTokenAmountTotal: SerializedBigNumber
  lpTotalInQuoteToken: SerializedBigNumber
  lpTotalSupply: SerializedBigNumber
  tokenPriceVsQuote: SerializedBigNumber
  poolWeight: SerializedBigNumber
  multiplier: string
  percentLockupBonus: number
  percentUnlockedBonus: number
  poolRewardsPerBlock: SerializedBigNumber
  baseEmissionRate: SerializedBigNumber
  lastRewardBlock: SerializedBigNumber
  userDepositFee: SerializedBigNumber
  allocPoint: SerializedBigNumber
}

const fetchGuild = async (guild: Guild): Promise<PublicGuildData> => {
  const { pid, lpAddresses, token, quoteToken, guildSlug } = guild
  const lpAddress = getAddress(lpAddresses)
  const calls = [
    // Balance of token in the LP contract
    {
      address: getAddress(token.address),
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of quote token on LP contract
    {
      address: getAddress(quoteToken.address),
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of LP tokens in the master chef contract
    {
      address: lpAddress,
      name: 'balanceOf',
      params: [getGuildsMasterLooterAddress(guildSlug)],
    },
    // Total supply of LP tokens
    {
      address: lpAddress,
      name: 'totalSupply',
    },
    // Token decimals
    {
      address: getAddress(token.address),
      name: 'decimals',
    },
    // Quote token decimals
    {
      address: getAddress(quoteToken.address),
      name: 'decimals',
    },
  ]

  const [tokenBalanceLP, quoteTokenBalanceLP, lpTokenBalanceMC, lpTotalSupply, tokenDecimals, quoteTokenDecimals] =
    await multicall(erc20, calls)

  // Ratio in % of LP tokens that are staked in the MC, vs the total number in circulation
  const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))

  // Raw amount of token in the LP, including those not staked
  const tokenAmountTotal = new BigNumber(tokenBalanceLP).div(BIG_TEN.pow(tokenDecimals))
  const quoteTokenAmountTotal = new BigNumber(quoteTokenBalanceLP).div(BIG_TEN.pow(quoteTokenDecimals))

  // Amount of token in the LP that are staked in the MC (i.e amount of token * lp ratio)
  const tokenAmountMc = tokenAmountTotal.times(lpTokenRatio)
  const quoteTokenAmountMc = quoteTokenAmountTotal.times(lpTokenRatio)

  // Total staked in LP, in quote token value
  const lpTotalInQuoteToken = quoteTokenAmountMc.times(new BigNumber(2))

  // Only make masterchef calls if guild has pid
  const [info, totalAllocPoint, percentLockbonus, poolRewardsPerBlock, baseEmissionRate, userDepFee] =
    pid || pid === 0
      ? await multicall(masterLooterABI, [
          {
            address: getGuildsMasterLooterAddress(guildSlug),
            name: 'poolInfo',
            params: [pid],
          },
          {
            address: getGuildsMasterLooterAddress(guildSlug),
            name: 'totalAllocPoint',
          },
          {
            address: getGuildsMasterLooterAddress(guildSlug),
            name: 'PERCENT_LOCK_BONUS_REWARD',
          },
          {
            address: getGuildsMasterLooterAddress(guildSlug),
            name: 'getNewRewardPerBlock',
            params: [pid + 1], // poolRewardsPerBlock indexes have to be +1'd to get the actual specific pool data
          },
          {
            address: getGuildsMasterLooterAddress(guildSlug),
            name: 'getNewRewardPerBlock',
            params: [0], // baseEmission rate
          },
          {
            address: getGuildsMasterLooterAddress(guildSlug),
            name: 'userDepFee',
          },
        ])
      : [null, null]

  const allocPoint = info ? new BigNumber(info.allocPoint?._hex) : BIG_ZERO
  const lastRewardBlock = info ? new BigNumber(info.lastRewardBlock?._hex) : BIG_ZERO
  const poolWeight = totalAllocPoint ? allocPoint.div(new BigNumber(totalAllocPoint)) : BIG_ZERO
  const percentLockupBonus = percentLockbonus ? percentLockbonus / 100 : 0
  const percentUnlockedBonus = 1 - percentLockupBonus
  const rewardsPerBlock = new BigNumber(poolRewardsPerBlock).div(BIG_TEN.pow(18)).toJSON()
  const emissionRate = new BigNumber(baseEmissionRate).div(BIG_TEN.pow(18)).toJSON()
  const userDepositFee = userDepFee ? new BigNumber(userDepFee) : BIG_ZERO

  return {
    tokenAmountMc: tokenAmountMc.toJSON(),
    quoteTokenAmountMc: quoteTokenAmountMc.toJSON(),
    tokenAmountTotal: tokenAmountTotal.toJSON(),
    quoteTokenAmountTotal: quoteTokenAmountTotal.toJSON(),
    lpTotalSupply: new BigNumber(lpTotalSupply).toJSON(),
    lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
    tokenPriceVsQuote: quoteTokenAmountTotal.div(tokenAmountTotal).toJSON(),
    poolWeight: poolWeight.toJSON(),
    multiplier: `${allocPoint.div(BIG_TEN.pow(18)).toString()}`,
    percentLockupBonus,
    percentUnlockedBonus,
    poolRewardsPerBlock: rewardsPerBlock,
    baseEmissionRate: emissionRate,
    lastRewardBlock: lastRewardBlock.toJSON(),
    userDepositFee: userDepositFee.toJSON(),
    allocPoint: allocPoint.toJSON(),
  }
}

export default fetchGuild
