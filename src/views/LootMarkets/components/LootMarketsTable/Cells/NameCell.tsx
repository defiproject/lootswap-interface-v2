import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Text, Image, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { LootMarket } from 'state/types'
import { BIG_ZERO } from 'utils/bigNumber'
import BaseCell, { CellContent } from './BaseCell'

interface NameCellProps {
  lootmarket: LootMarket
}

const StyledCell = styled(BaseCell)`
  flex: 5;
  flex-direction: row;
  padding-left: 12px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1 0 150px;
    padding-left: 32px;
  }
`

const NameCell: React.FC<NameCellProps> = ({ lootmarket }) => {
  const { t } = useTranslation()
  const { isXs, isSm } = useMatchBreakpoints()
  const { stakingToken, earningToken, userData, isFinished } = lootmarket

  const stakingTokenSymbol = stakingToken.symbol
  const earningTokenSymbol = earningToken.symbol
  // let iconFile = `${earningTokenSymbol}-${stakingTokenSymbol}.svg`.toLocaleLowerCase()

  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const isStaked = stakedBalance.gt(0)
  const showStakedTag = isStaked

  const title = `${t('Earn')} ${earningTokenSymbol}`
  const subtitle = `${t('Stake')} ${stakingTokenSymbol}`
  const showSubtitle = !isXs && !isSm
  const [iconFile, setIconFile] = useState(`${earningTokenSymbol}-${stakingTokenSymbol}.svg`.toLocaleLowerCase())

  useEffect(() => {
    // Run! Like go get some data from an API.
    const xhr = new XMLHttpRequest()
    // listen for `onload` event
    xhr.onload = () => {
      if (xhr.status === 200 && xhr.response.type !== 'text/html') {
        // console.log('Image exists.');
      } else {
        console.info('Image does not exist., replacing', iconFile)
        const newIconFile = `${earningTokenSymbol}-${stakingTokenSymbol}.png`.toLocaleLowerCase()
        setIconFile(newIconFile)
      }
    }
    // create a `HEAD` request
    xhr.open('HEAD', `/images/lootmarkets/${iconFile}`, true)
    xhr.responseType = 'blob'
    // send request
    xhr.send()
  }, [iconFile, earningTokenSymbol, stakingTokenSymbol])

  return (
    <StyledCell role="cell">
      <Image src={`/images/lootmarkets/${iconFile}`} alt="icon" width={40} height={40} mr="8px" />
      <CellContent>
        {showStakedTag && (
          <Text fontSize="12px" bold color={isFinished ? 'failure' : 'secondary'} textTransform="uppercase">
            {t('Staked')}
          </Text>
        )}
        <Text bold={!isXs && !isSm} small={isXs || isSm}>
          {title}
        </Text>
        {showSubtitle && (
          <Text fontSize="12px" color="textSubtle">
            {subtitle}
          </Text>
        )}
      </CellContent>
    </StyledCell>
  )
}

export default NameCell
