import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@pancakeswap/uikit'
import { CommunityTag, CoreTag } from 'components/Tags'
import { useTranslation } from 'contexts/Localization'

// import { useParams } from 'react-router-dom'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
  startBlock?: number
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
  tokenSymbol,
  startBlock = 0,
}) => {
  // const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Image src={`/images/questlog/${farmImage}.svg`} alt={tokenSymbol} width={64} height={64} />
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel.split(' ')[0]}</Heading>
        <Flex justifyContent="center">
          {isCommunityFarm ? <CommunityTag /> : <CoreTag />}
          {multiplier && <MultiplierTag variant="secondary">{`lvl ${multiplier}`}</MultiplierTag>}
        </Flex>
        <Flex>{startBlock > 0 && <Tag>{`${t('Starts in')} ~${startBlock} blocks`}</Tag>}</Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
