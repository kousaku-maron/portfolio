import * as React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../../assets/animations/pink_white_fluid_button.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const PinkFluidButton = ({ size, children }) => {
  return (
    <div>
      <Lottie
        id='pink-fluid-button'
        options={defaultOptions}
        height={size}
        width={size}
      >
        {children}
      </Lottie>
    </div>
  )
}

export default PinkFluidButton
