import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import ButtonImage from '../../assets/images/arrow_left.png'

const LeftArrowButton = ({ onClick, size }) => {
  const [ defaultSize ] = useState(30)
  const [ hover, setHover ] = useState(false)

  return (
    <Container
      size={size || defaultSize}
      defaultSize={defaultSize}
      hover={hover}
      onClick={onClick}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Image src={ButtonImage} />
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
  color: ${({ color }) => color}
  cursor: pointer
  transition: width 0.2s, heigth 0.2s
`

const Image = styled.img`
  position: absolute
  width: 100%
  z-index: -1
`

export default LeftArrowButton
