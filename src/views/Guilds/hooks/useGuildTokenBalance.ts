import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { getBep20Contract, getGuildTokenContract } from 'utils/contractHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import { ZERO_DEAD_ADDRESS } from 'config'
import useWeb3 from '../../../hooks/useWeb3'
import useRefresh from '../../../hooks/useRefresh'
import useLastUpdated from '../../../hooks/useLastUpdated'

type UseTokenBalanceState = {
  balance: BigNumber
  fetchStatus: FetchStatus
}

export enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  SUCCESS = 'success',
  FAILED = 'failed',
}

const useGuildTokenBalance = (tokenAddress: string) => {
  const { NOT_FETCHED, SUCCESS, FAILED } = FetchStatus
  const [balanceState, setBalanceState] = useState<UseTokenBalanceState>({
    balance: BIG_ZERO,
    fetchStatus: NOT_FETCHED,
  })
  const web3 = useWeb3()
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBep20Contract(tokenAddress, web3) // TODO change Bep20Contract name to be Erc20Contract
      try {
        const res = await contract.methods.balanceOf(account).call()
        setBalanceState({ balance: new BigNumber(res), fetchStatus: SUCCESS })
      } catch (e) {
        console.error(e)
        setBalanceState((prev) => ({
          ...prev,
          fetchStatus: FAILED,
        }))
      }
    }

    if (account) {
      fetchBalance()
    }
  }, [account, tokenAddress, web3, fastRefresh, SUCCESS, FAILED])

  return balanceState
}

export const useGuildTotalSupply = (guildSlug: string) => {
  const { slowRefresh } = useRefresh()
  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  useEffect(() => {
    async function fetchTotalSupply() {
      const guildTokenContract = getGuildTokenContract(guildSlug)
      const supply = await guildTokenContract.methods.totalSupply().call()
      setTotalSupply(new BigNumber(supply))
    }

    fetchTotalSupply()
  }, [slowRefresh, guildSlug])

  return totalSupply
}

export const useGuildUnlockTotalSupply = (guildSlug: string) => {
  const { slowRefresh } = useRefresh()
  const [unlockTotalSupply, setUnlockTotalSupply] = useState<BigNumber>()

  useEffect(() => {
    async function fetchUnlockTotalSupply() {
      const guildContract = getGuildTokenContract(guildSlug)
      const unlockTotal = await guildContract.methods.unlockedSupply().call()
      setUnlockTotalSupply(new BigNumber(unlockTotal))
    }

    fetchUnlockTotalSupply()
  }, [slowRefresh, guildSlug])

  return unlockTotalSupply
}

export const useBurnedBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(BIG_ZERO)
  const { slowRefresh } = useRefresh()
  const web3 = useWeb3()

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBep20Contract(tokenAddress, web3) // TODO rename getBep20Contract
      const res = await contract.methods.balanceOf(ZERO_DEAD_ADDRESS).call()
      setBalance(new BigNumber(res))
    }

    fetchBalance()
  }, [web3, tokenAddress, slowRefresh])

  return balance
}

export const useGetOneBalance = () => {
  const [balance, setBalance] = useState(BIG_ZERO)
  const { account } = useWeb3React()
  const { lastUpdated, setLastUpdated } = useLastUpdated()
  const web3 = useWeb3()

  useEffect(() => {
    const fetchBalance = async () => {
      const walletBalance = await web3.eth.getBalance(account)
      setBalance(new BigNumber(walletBalance))
    }

    if (account) {
      fetchBalance()
    }
  }, [account, web3, lastUpdated, setBalance])

  return { balance, refresh: setLastUpdated }
}

export default useGuildTokenBalance
