import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import styled from "styled-components"
import { ImgText } from "./parts/imgtext"

type DataType = {
  tool: {
    gatsbyImageData: IGatsbyImageData
  }
  helpful: {
    gatsbyImageData: IGatsbyImageData
  }
}

const StyledConcept = styled.section`
  display: grid;
  row-gap: var(--v-space);
  padding-block: var(--v-space);
  background-color: #ffffff;
`

export const Concept: React.FC = () => {
  const data = useStaticQuery<DataType>(graphql`
    query {
      tool: contentfulAsset(title: { eq: "tool" }) {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      helpful: contentfulAsset(title: { eq: "helpful" }) {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  `)

  return (
    <StyledConcept>
      <ImgText
        reverse={false}
        title="日常のツールたち"
        subTitle="Convenient"
        description="どこにでもある、誰でも使ったことがある、普段は存在を意識しないけどないと困るツールたち。日常をちょっと楽しくしてくれます。"
        image={data.tool.gatsbyImageData}
        alt=""
      />

      <ImgText
        reverse={true}
        title="効率化の手助け"
        subTitle="Helpful"
        description="さまざまな作業を効率よく進めるためには、目的に応じて最適な道具を使うことが大切です。そんな道具たちが揃っています。"
        image={data.helpful.gatsbyImageData}
        alt=""
      />
    </StyledConcept>
  )
}
