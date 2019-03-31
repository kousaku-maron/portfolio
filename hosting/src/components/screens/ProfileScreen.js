import * as React from 'react'
import { useEffect, useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import styled from 'styled-components'
import { qiitaArticlesCollection, githubReposCollection } from '../../modules/firebase'
import GreenFluidBoxButton from '../button/GreenFluidBoxButton'
import LeftArrowButton from '../button/LeftArrowButton'
import RightArrowButton from '../button/RightArrowButton'
import Text from '../typography/Text'
import AvatarImage from '../../assets/images/avatar.png'
import ExperienceMapImage from '../../assets/images/experience_map.png'

const ProfileScreen = () => {
  const [ qiitaSectionIndex, setQiitaSectionIndex ] = useState(0)
  const [ githubSectionIndex, setGithubSectionIndex ] = useState(0)

  const [ qiitaArticles, setQiitaArticles ] = useState(null)
  useEffect(() => {
    qiitaArticlesCollection.orderBy('created_at').onSnapshot(querySnapshot => {
      const articles = []
      querySnapshot.forEach(doc => {
        articles.push({ id: doc.id, ...doc.data() })
      })
      articles.reverse()
      setQiitaArticles(articles)
    })
  }, [])

  const [ githubRepos, setGithubRepos ] = useState(null)
  useEffect(() => {
    githubReposCollection.orderBy('updated_at').onSnapshot(querySnapshot => {
      const repos = []
      querySnapshot.forEach(doc => {
        repos.push({ id: doc.id, ...doc.data() })
      })
      repos.reverse()
      setGithubRepos(repos)
    })
  }, [])

  return (
    <Root>
      <Container>
        <Text size={38} weight='bold'>彼の能力</Text>

        <Section>
          <Thumbnail size={400} src={AvatarImage} />
          
          <SplitSpace />

          <Text size={32} weight='bold'>Kosaku Kurino (25)</Text>
          <Text height={5}>
            フロントエンドエンジニア/Unityエンジニア<br />
            趣味は、太鼓の達人とロッククライミング(アメリカの崖登りにいきました)<br />
          </Text>
        </Section>

        <Section>
          <Text size={32} weight='bold'>Qiita記事</Text>
          <Text height={5}>私が書いた技術系ネタの記事です。</Text>
          {qiitaArticles && qiitaArticles.length > 0 && 
            <SwipeableViews
              enableMouseEvents={false}
              index={qiitaSectionIndex}
              style={{
                width: '100vw',
              }}
            >
              {Array(Math.ceil(qiitaArticles.length / 3)).fill(null).map((_, containerIndex) => (
                <BoxContainer key={`qiita_container_${containerIndex}`}>

                  {containerIndex > 0? (
                    <LeftArrowButton
                      onClick={() => setQiitaSectionIndex(qiitaSectionIndex - 1)}
                    />
                  ): <ArrowSpace />}
                  
                  {Array(3).fill(null).map((_, index) => {
                    const articleIndex = index + containerIndex * 3
                    if(qiitaArticles.length > articleIndex) {
                      return (
                        <GreenFluidBoxButton
                          key={`qiita_article_${articleIndex}`}
                          onClick={() => { window.open().location.href = qiitaArticles[articleIndex].url }}
                        >
                          {qiitaArticles[articleIndex].title}
                        </GreenFluidBoxButton>
                      )
                    }
                    else {
                      return null
                    }
                  })}

                  {containerIndex < (Math.ceil(qiitaArticles.length / 3) - 1)? (
                    <RightArrowButton
                      onClick={() => setQiitaSectionIndex(qiitaSectionIndex + 1)}
                    />
                  ): <ArrowSpace />}
                </BoxContainer>
              ))}
            </SwipeableViews>  
          }
          
        </Section>

        <Section>
          <Text size={32} weight='bold'>Githubレポジトリ</Text>
          <Text height={5}>私が書いたコードのサンプルです。</Text>
          {githubRepos && githubRepos.length > 0 &&
            <SwipeableViews
              enableMouseEvents={false}
              index={githubSectionIndex}
              style={{
                width: '100vw',
              }}
            >
              {Array(Math.ceil(githubRepos.length / 3)).fill(null).map((_, containerIndex) => (
                <BoxContainer key={`github_container_${containerIndex}`}>

                  {containerIndex > 0? (
                    <LeftArrowButton
                      onClick={() => setGithubSectionIndex(githubSectionIndex - 1)}
                    />
                  ): <ArrowSpace />}
                  
                  {Array(3).fill(null).map((_, index) => {
                    const repoIndex = index + containerIndex * 3
                    if(githubRepos.length > repoIndex) {
                      return (
                        <GreenFluidBoxButton
                          key={`github_article_${repoIndex}`}
                          onClick={() => { window.open().location.href = githubRepos[repoIndex].html_url }}
                        >
                          {githubRepos[repoIndex].full_name}
                        </GreenFluidBoxButton>
                      )
                    }
                    else {
                      return null
                    }
                  })}

                  {containerIndex < (Math.ceil(githubRepos.length / 3) - 1)? (
                    <RightArrowButton
                      onClick={() => setGithubSectionIndex(githubSectionIndex + 1)}
                    />
                  ): <ArrowSpace />}
                </BoxContainer>
              ))}
            </SwipeableViews>
          }
        </Section>

        <Section>
          <Text size={32} weight='bold'>使える言語</Text>
          <Text height={5}>
            業務で触った言語は、Nodejs、Python、C# (Unity)、VBS、です。<br />
            この中で得意な言語はNodejsとC#(Unity)で、<br />
            Nodejsでフロントエンドからバックエンドまで全て書けます。<br />
            C#(Unity)では、UniRxでReactive Extensionを採用して書くのが得意です。<br />
            シェダー、ライティング等のグラフィックス系の処理は詳しくないです。
          </Text>
        </Section>

        <Section>
          <Text size={32} weight='bold'>使えるクラウドサービス</Text>
          <Text height={5}>
            業務で触ったクラウドサービスは、AWS、Azureです。<br />
            趣味でGCPとFirebaseにも触れています。<br />
            IaaS、PaaS、FaaSをそつなく触れるレベルで、<br />
            FaaSが一番好き(得意)です。<br />
            Firebaseは趣味でしか触れていませんが、<br />
            コアな部分(認証やストレージなど)は業務でやっている人並みに使える自信があります。<br />
            Firebaseのアナリティクス、品質あたりは触っていません。
          </Text>
        </Section>

        <Section>
          <Text size={32} weight='bold'>使えるAdobe系ソフト</Text>
          <Text height={5}>
            Adobe Illustrator、Adobe Photoshop、Adobe After Effectsです。
            Adobe系ソフトは趣味程度のレベルです。
          </Text>
        </Section>

        <Section>
          <Text size={32} weight='bold'>業務経験</Text>

          <SplitSpace />
          
          <Map src={ExperienceMapImage} alt='私の業務経験のイメージ図'/>

          <SplitSpace />

          <Text height={5}>
            プロトタイプ開発、スモール規模の開発が得意です。<br />
            また、新しい技術と業務内容のキャッチアップが早いです。<br />
            ほぼ全ての業務をNodejsで実装してきました。
          </Text>

          <SplitSpace />

          <Text height={5}>
            「<Bold>新しくできたショールームの支援</Bold>」では、<br />
            新技術を利用したインタラクティブな体験ができるコンテンツが点在していました。<br />
            コンテンツごとにデモ時の操作が複雑だったため、<br />
            コンテンツのブラッシュアップを行い、ある程度自動化できるようにました。<br />
            また、商談時に近未来感を出すためにUnityでコンテンツ操作用アプリを作ったり、<br />
            時には、新しいコンテンツ作成の一部を手伝ったりしていました。
          </Text>

          <SplitSpace />

          <Text height={5}>
            「<Bold>ある会社の時期サイトのUX/UIの提案とプロト開発</Bold>」では、<br />
            現サイトでの問題を解決するUX/UIをプロトに組み込み提案していました。<br />
            プロトはReact + Redux + (saga) + Typescript + material-ui で開発していました。<br />
            最後のプロトはコンポーネント設計にAtomic Designを採用しました。<br />
            計3つのプロトを作成しました。<br />
            かなりのスピード感(週2ペースで見せていたため)で実装しなければいけないため、<br />
            Reactでのフロントエンド開発のスピードには自信があります。
          </Text>

          <SplitSpace />

          <Text height={5}>他の業務に興味ある方は口頭で説明します。</Text>
        </Section>

      </Container>
    </Root>
  )
}

const Root = styled.div`
  width: 100%
`

const Container = styled.div`
  padding: 48px
`

const Section = styled.div`
  display: flex
  flex-direction: column
  align-items: center
  margin-bottom: 148px
`

const Thumbnail = styled.img`
  width: ${({ size }) => size}px
  height: ${({ size }) => size}px
  border-radius: ${({ size }) => size/2}px
`

const BoxContainer = styled.div`
  display: flex
  justify-content: space-around
  align-items: center
  height: 350px
`

const ArrowSpace = styled.div`
  width: 30px
`

const Map = styled.img`
  width: 80%
`

const Bold = styled.span`
  font-weight: bold
`

const SplitSpace = styled.div`
  margin-bottom: 38px
`

export default ProfileScreen
