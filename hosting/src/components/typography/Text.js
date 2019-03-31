import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'

const Text = ({ color, size, height, weight, align, children }) => {
  const [ defaultSize ] = useState(18)
  const [ defaultHeight ] = useState(2)
  const [ defaultWeight ] = useState('normal')
  const [ defaultAlign ] = useState('center')

  return (
    <Container
      color={color || colors.default}
      height={height || defaultHeight}
      size={size || defaultSize}
      weight={weight || defaultWeight}
      align={align || defaultAlign}
    >
      {children}
    </Container>
  )
}

const Container = styled.p`
  text-align: ${({ align }) => align}
  line-height: ${({ height }) => height}em
  font-size: ${({ size }) => size}px
  font-weight: ${({ weight }) => weight}
  color: ${({ color }) => color}
`

export default Text
