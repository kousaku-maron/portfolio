import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { keyframes } from 'styled-components'
// import { Transition } from 'react-transition-group'
// import colors from '../../constants/colors'
import PinkFluidButton from '../button/PinkFluidButton'
// import PinkFluidButton from '../lottie/PinkFluidButton'
import PurpleFluidButton from '../button/PurpleFluidButton'

const Layout = ({ children, handleMenuChange, menu }) => {
  const [ maxWidth, setMaxWidth ] = useState(null)
  const [ maxHeight, setMaxHeight ] = useState(null)
  useEffect(() => {
    setMaxWidth(window.innerWidth)
    setMaxHeight(window.innerHeight)
  },[])


  // const [ welcomeElement, setWelcomeElement ] = useState(null)
  // const [ skillElement, setSkillElement ] = useState(null)
  // const [ priceElement, setPriceElement ] = useState(null)
  // const [ apoElement, setApoElement ] = useState(null)
  
  // const [ circlePos, setCirclePos ] = useState({ top: 0, right: 0, bottom: 0, left: 0 })
  // const [ circleSize, setCircleSize ] = useState({ width: 0, height: 0 })
  
  // const [ animate, setAnimate ] = useState(false)
  // useEffect(() => {
  //   setAnimate(true)
  // }, [menu])

  // const switching = element => {
  //   const { top, right, bottom, left, width, height } = element.getBoundingClientRect()
  //   setCirclePos({ top, right, bottom, left })
  //   setCircleSize({ width, height })
  // }
  
  return (
    <div>
      {children}
      {/* <Welcome ref={(el) => setWelcomeElement(el)}>
        <PurpleFluidButton
          onClick={() => handleMenuChange('welcome')}
        >
          ホームに戻る
        </PurpleFluidButton>
      </Welcome> */}

      <Welcome
        menu={menu}  
        maxWidth={maxWidth}
        maxHeight={maxHeight}
      >
        <PurpleFluidButton
          onClick={() => handleMenuChange('welcome')}
        >
          ホームに戻る
        </PurpleFluidButton>
      </Welcome>
      <Profile
        menu={menu}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
      >
        <PurpleFluidButton
          onClick={() => handleMenuChange('profile')}
        >
          彼の能力を知る
        </PurpleFluidButton>
      </Profile>
      <Price
        menu={menu}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
      >
        <PurpleFluidButton
          onClick={() => handleMenuChange('price')}
        >
          彼の単価を知る
        </PurpleFluidButton>
      </Price>
      <Apo
        menu={menu}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
      >
        <PinkFluidButton
          size={menu === 'welcome'? 200: 130}
          onClick={() => handleMenuChange('contacts')}
        >
          コンタクトをとる
        </PinkFluidButton>
      </Apo>

      {/* <Transition in={animate} timeout={500}>
        {(state) => {
          return (
            <Circle state={state} position={circlePos} size={circleSize} />
          )
        }}
      </Transition> */}
    </div>
  )
}

const Apo = styled.div`
  position: fixed
  right: 48px
  bottom: ${({ menu, maxHeight }) => menu === 'welcome'? 
    28 : (menu === 'contacts'? maxHeight - 148 : 18)}px
  display: flex
  justify-content: center
  align-items: center
  width: ${({ menu }) => menu === 'welcome'? 210 : 136.5}px
  height: ${({ menu }) => menu === 'welcome'? 210 : 136.5}px
  transition: width 1s, heigth 1s, right 1s, bottom 1s
`

const Price = styled.div`
  position: fixed
  right: ${({ menu }) => menu === 'welcome'? 258 : 188}px
  bottom: ${({ menu, maxHeight }) => menu === 'welcome'? 
    28 : (menu === 'contacts'? maxHeight - 148 : 18)}px
  display: flex
  justify-content: center
  align-items: center
  width: 136.5px
  height: 136.5px
  transition: width 1s, heigth 1s, right 1s, bottom 1s
`

const Profile = styled.div`
  position: fixed
  right: ${({ menu }) => menu === 'welcome'? 398 : 328}px
  bottom: ${({ menu, maxHeight }) => menu === 'welcome'? 
    28 : (menu === 'contacts'? maxHeight - 148 : 18)}px
  display: flex
  justify-content: center
  align-items: center
  width: 136.5px
  height: 136.5px
  transition: width 1s, heigth 1s, right 1s, bottom 1s
`

const Welcome = styled.div`
  position: fixed
  right: ${({ menu }) => menu === 'welcome'? 538 : 468}px
  bottom: ${({ menu, maxHeight }) => menu === 'welcome'? 
    28 : (menu === 'contacts'? maxHeight - 148 : 18)}px
  display: flex
  justify-content: center
  align-items: center
  width: 136.5px
  height: 136.5px
  transition: width 1s, heigth 1s, right 1s, bottom 1s
`

// const scaleUp = keyframes`
//   from {
//     transform: scale(1)
//   }
//   to {
//     transform: scale(10)
//   }
// `

// const Stop = keyframes`
// from {
//   transform: scale(0)
// }
// to {
//   transform: scale(0)
// }
// `

// const Circle = styled.div`
//   position: absolute
//   top: ${({ position }) => position.top}px
//   right: ${({ position }) => position.right}px
//   bottom: ${({ position }) => position.bottom}px
//   left: ${({ position }) => position.left}px
//   width: ${({ size }) => size.width}px
//   height: ${({ size }) => size.height}px
//   border-radius: ${({ size }) => size.width/2}px
//   background: black
//   z-index: -1
//   animation-name: ${({ state }) => state === 'enterd' || state === 'entering'? scaleUp : Stop}
//   animation-duration: 0.5s
//   animation-timing-function: ease-in
//   animation-iteration-count: 1
// `

export default Layout
