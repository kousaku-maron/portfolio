import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import ButtonImage from '../../assets/images/pink_button.png'

const PinkFluidButton = ({ onClick, color, size, children }) => {
  const [ defaultSize ] = useState(130)
  const [ hover, setHover ] = useState(false)
  
  return (
    <Container
      size={size || defaultSize}
      defaultSize={defaultSize}
      color={color || colors.default}
      onClick={onClick}
      hover={hover}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Image src={ButtonImage} />
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  position: relative
  width: ${({ size, hover }) => hover? (size * 1.05) : size}px
  height: ${({ size, hover }) => hover? (size * 1.05) : size}px
  font-size: ${({ size, defaultSize }) => size < (defaultSize + 1)? 12 : 18}px
  color: ${({ color }) => color}
  cursor: pointer
  transition: width 0.2s, heigth 0.2s
`

const Image = styled.img`
  position: absolute
  width: 100%
  z-index: -1
`

export default PinkFluidButton
