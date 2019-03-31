import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../../assets/animations/welcome_data.json'

const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const WelcomeDonChan = ({ width, height }) => {
  const [ play, setPlay ] = useState(false)
  useEffect(() => {
    setTimeout(() => setPlay(true), 1000)
  }, [])

  return (
    <div>
      <Lottie
        id='welcome-donchan'
        options={defaultOptions}
        height={height}
        width={width}
        isPaused={!play}
      />
    </div>
  )
}

export default WelcomeDonChan
