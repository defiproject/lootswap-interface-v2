import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { lootMarketHarvestStaking, harvest, harvestGuild } from 'utils/callHelpers'
import { updateUserBalance, updateUserPendingReward } from 'state/actions'
import { useMasterchef, useLootMarketContract, useMasterGuildLooter } from './useContract'

export const useHarvest = (farmPid: number) => {
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const txHash = await harvest(masterChefContract, farmPid, account)
    return txHash
  }, [account, farmPid, masterChefContract])

  return { onReward: handleHarvest }
}

// Loot Market
export const useLootMarketsHarvest = (pid) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const lootMarketContract = useLootMarketContract(pid)

  const handleHarvest = useCallback(async () => {
    await lootMarketHarvestStaking(lootMarketContract, account)
    dispatch(updateUserPendingReward(pid, account))
    dispatch(updateUserBalance(pid, account))
  }, [account, dispatch, lootMarketContract, pid])

  return { onReward: handleHarvest }
}

// Guild
export const useGuildHarvest = (farmPid: number, guildSlug: string) => {
  const { account } = useWeb3React()
  const masterGuildContract = useMasterGuildLooter(guildSlug)

  const handleHarvest = useCallback(async () => {
    const txHash = await harvestGuild(masterGuildContract, farmPid, account)
    console.info(txHash)
    return txHash
  }, [account, farmPid, masterGuildContract])

  return { onReward: handleHarvest }
}
