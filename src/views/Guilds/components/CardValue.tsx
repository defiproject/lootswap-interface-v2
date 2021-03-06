import React, { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'
import { Text } from '@pancakeswap/uikit'
import { DISPLAY_DECIMAL_FORMAT_PREF } from 'config'

export interface CardValueProps {
  value: number
  decimals?: number
  fontSize?: string
  lineHeight?: string
  prefix?: string
  bold?: boolean
  color?: string
  prefixOverride?: string
}

const CardValue: React.FC<CardValueProps> = ({
  value,
  decimals,
  fontSize = '40px',
  lineHeight = '1',
  prefix = '',
  bold = true,
  color = 'text',
  prefixOverride = '',
}) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals:
      // eslint-disable-next-line no-nested-ternary
      decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : DISPLAY_DECIMAL_FORMAT_PREF,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    let isUpdate = true
    if (isUpdate) {
      updateValue.current(value)
    }
    isUpdate = false
  }, [value, updateValue])

  return (
    <Text bold={bold} fontSize={fontSize} style={{ lineHeight }} color={color}>
      {prefixOverride || prefix}
      {countUp}
    </Text>
  )
}

export default CardValue
