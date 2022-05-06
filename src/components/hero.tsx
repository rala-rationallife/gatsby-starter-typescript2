import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Btn } from "./parts/btn"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

type DataType = {
  hero: {
    gatsbyImageData: IGatsbyImageData
  }
}

const StyledHero = styled.section`
  display: grid;
  grid-template-rows: 650px;

  & > * {
    grid-area: 1 / 1;
  }

  & h1 {
    margin-block-end: 42px;
    font-family: "Montserrat", sans-serif;
    font-size: clamp(48px, 5vw, 68px);
    min-height: 0vw;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
  }

  & p {
    margin-block-end: 72px;
  }
`

const StyledContainer = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  z-index: 2;
`

export const Hero: React.FC = () => {
  const data = useStaticQuery<DataType>(graphql`
    query {
      hero: contentfulAsset(title: { eq: "hero" }) {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  `)

  return (
    <StyledHero>
      <GatsbyImage
        image={data.hero.gatsbyImageData}
        alt=""
        as="figure"
        className="hero-image"
      />

      <StyledContainer>
        <h1>Stationery Services</h1>
        <p>便利な道具とサービスをお届けします</p>
        <Btn url={`/content/`} accent={false}>
          無料で始める
        </Btn>
      </StyledContainer>
    </StyledHero>
  )
}
