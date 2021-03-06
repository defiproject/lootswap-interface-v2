import { useMemo } from 'react'
import useWeb3 from 'hooks/useWeb3'
import {
  getBep20Contract,
  getCakeContract,
  getMasterchefContract,
  getLootMarketContract,
  getMasterGuildLooterContract,
  getGuildTokenContract,
} from 'utils/contractHelpers'

/**
 * Helper hooks to get specific contracts (by ABI)
 */
export const useERC20 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getBep20Contract(address, web3), [address, web3])
}

export const useCake = () => {
  const web3 = useWeb3()
  return useMemo(() => getCakeContract(web3), [web3])
}

export const useMasterchef = () => {
  const web3 = useWeb3()
  return useMemo(() => getMasterchefContract(web3), [web3])
}

export const useLootMarketContract = (id) => {
  const web3 = useWeb3()
  return useMemo(() => getLootMarketContract(id, web3), [id, web3])
}

export const useMasterGuildLooter = (guildSlug: string) => {
  const web3 = useWeb3()
  return useMemo(() => getMasterGuildLooterContract(guildSlug, web3), [guildSlug, web3])
}

export const useGuildToken = (guildSlug: string) => {
  const web3 = useWeb3()
  return useMemo(() => getGuildTokenContract(guildSlug, web3), [guildSlug, web3])
}
