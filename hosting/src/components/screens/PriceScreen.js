import * as React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import breakpoints from '../../constants/breakpoints'
import Text from '../typography/Text'

const PriceScreen = () => {
  return (
    <Root>
      <Container>
        <Text size={38} weight='bold'>彼の単価</Text>
        <CircleContainer>
          <Circle color={colors.secondary.main}>
            フロントエンドエンジニア<br />
            70 〜 90 万円/月
          </Circle>
          <Circle color={colors.quinary.main}>
            フルスタックエンジニア<br />
            80 〜 100 万円/月
          </Circle>
          <Circle color={colors.priamry.main}>
            Unityエンジニア<br />
            60 〜 80 万円/月
          </Circle>
        </CircleContainer>

        <SplitSpace />
        
        <Text>※ UXデザイン等、他の分野での単価は相談させてください。</Text>
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

const CircleContainer = styled.div`
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-around
  align-items: center
  @media (max-width: ${breakpoints.sm}px) {
    flex-direction: column
  }
`

const Circle = styled.div`
  display: flex
  justify-content: center
  align-items: center
  min-width: 200px
  min-height: 200px
  width: 23vw
  height: 23vw
  border-radius: 500px
  text-align: center
  line-height: 2em
  color: ${colors.inherit}
  font-size: 18px
  background: ${({ color }) => color? color: colors.secondary.main}
  @media (max-width: ${breakpoints.md}px) {
    font-size: 16px
  } 
  @media (max-width: ${breakpoints.sm}px) {
    margin-bottom: 12px
    font-size: 12px
  }
`

const SplitSpace = styled.div`
  margin-bottom: 38px
`

export default PriceScreen
