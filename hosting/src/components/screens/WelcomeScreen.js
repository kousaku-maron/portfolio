import * as React from 'react'
import styled from 'styled-components'
import Text from '../typography/Text'
import WelcomeDonChan from '../lottie/WelcomeDonChan'

const WelcomeScreen = () => {
  return (
    <Root>
      <Container>
        <Text size={38} weight='bold'>ホーム</Text>
        <Donchan>
          <WelcomeDonChan width={450} height={450}/>
        </Donchan>
      </Container>
    </Root>
  )
}

const Root = styled.div`
  width: 100vw
  height: 100vh
`

const Container = styled.div`
  padding: 48px
`

const Donchan = styled.div`
  position: fixed
  bottom: 12px
  left: 12px
`

export default WelcomeScreen
