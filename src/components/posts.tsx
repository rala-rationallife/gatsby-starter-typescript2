import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import styled from "styled-components"
import { Heading } from "./parts/heading"
import { PostLink } from "./parts/post-link"

type DataType = {
  news01: {
    gatsbyImageData: IGatsbyImageData
  }
  news02: {
    gatsbyImageData: IGatsbyImageData
  }
  news03: {
    gatsbyImageData: IGatsbyImageData
  }
  news04: {
    gatsbyImageData: IGatsbyImageData
  }
  news05: {
    gatsbyImageData: IGatsbyImageData
  }
  news06: {
    gatsbyImageData: IGatsbyImageData
  }
}

const StyledPosts = styled.section`
  padding-block: var(--v-space);
`

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 25px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const StyledPost = styled.article``

export const Posts: React.FC = () => {
  const data = useStaticQuery<DataType>(graphql`
    query {
      news01: contentfulAsset(title: { eq: "news01" }) {
        gatsbyImageData(layout: FULL_WIDTH)
      }

      news02: contentfulAsset(title: { eq: "news02" }) {
        gatsbyImageData(layout: FULL_WIDTH)
      }

      news03: contentfulAsset(title: { eq: "news03" }) {
        gatsbyImageData(layout: FULL_WIDTH)
      }

      news04: contentfulAsset(title: { eq: "news04" }) {
        gatsbyImageData(layout: FULL_WIDTH)
      }

      news05: contentfulAsset(title: { eq: "news05" }) {
        gatsbyImageData(layout: FULL_WIDTH)
      }

      news06: contentfulAsset(title: { eq: "news06" }) {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  `)

  return (
    <StyledPosts>
      <div className="w-container">
        <Heading title="News Releases" subTitle="最新情報" />
        <StyledContainer>
          <StyledPost>
            <PostLink
              url="/"
              image={data.news01.gatsbyImageData}
              alt=""
              title="スパンコール"
              description="キラキラと光を反射する装飾素材です。いつもの道具にアクセントを付けます。"
            />
          </StyledPost>

          <StyledPost>
            <PostLink
              url="/"
              image={data.news02.gatsbyImageData}
              alt=""
              title="卓上ランタン"
              description="手元に灯りが欲しいときに、便利でかわいい卓上ランタンです。"
            />
          </StyledPost>

          <StyledPost>
            <PostLink
              url="/"
              image={data.news03.gatsbyImageData}
              alt=""
              title="冊子印刷"
              description="スタンダードプランにも手軽な冊子印刷が登場しました。"
            />
          </StyledPost>

          <StyledPost>
            <PostLink
              url="/"
              image={data.news04.gatsbyImageData}
              alt=""
              title="マグネット"
              description="メモやアイデアを貼り出しておくなら、かわいいマグネットがおすすめです。"
            />
          </StyledPost>

          <StyledPost>
            <PostLink
              url="/"
              image={data.news05.gatsbyImageData}
              alt=""
              title="ビジネスノート"
              description="書き心地や開きやすさにこだわった、ビジネス用のノートたちを紹介します。"
            />
          </StyledPost>

          <StyledPost>
            <PostLink
              url="/"
              image={data.news06.gatsbyImageData}
              alt=""
              title="ボールペン"
              description="スタイリッシュなボールペンで仕事環境の雰囲気を変えてみました。"
            />
          </StyledPost>
        </StyledContainer>
      </div>
    </StyledPosts>
  )
}
