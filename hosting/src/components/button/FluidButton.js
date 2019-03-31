import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import colors from '../../constants/colors'

const FluidButton = ({ onClick, inner, outer, text, size, children }) => {
  const [ hover, setHover ] = useState(false)

  const scaleUp = keyframes`
    from {
      transform: scale(1)
    }
    to {
      transform: scale(${hover? 1.05 : 1})
    }
  `

  const Container = styled.div`
    position: relative
    display: flex
    justify-content: center
    align-items: center
    width: ${size? size + 10 : 210}px
    height: ${size? size + 10 : 210}px
    disbled: true
  `

  const Outer = styled.div`
    position: absolute
    top: 0
    left: 0
    width: ${size? size + 10 : 210}px
    height: ${size? size + 10 : 210}px
    background: ${outer || colors.secondary.main}
    border-radius: ${size? size/2 + 5 : 105}105px
    animation-name: ${scaleUp}
    animation-duration: 0.5s
    animation-timing-function: ease-in
    animation-iteration-count: infinite
    animation-direction: alternate
    z-index: -1
  `

  const Inner = styled.div`
    display: flex
    justify-content: center
    align-items: center
    text-align: center
    width: ${size || 200}px
    height: ${size || 200}px
    border-radius: ${size? size/2 : 100}px
    background: ${inner || colors.inherit}
    font-size: ${size < 200? 12 : 24}px
    color: ${text || colors.default}
    cursor: pointer

  `
  
  return (
    <Container>
      <Outer />
      <Inner
        onClick={onClick}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {children}
      </Inner>
    </Container>
  )
}

export default FluidButton
