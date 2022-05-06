import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import styled from "styled-components"
import { HeadingDecoration } from "./heading-decoration"

type Props = {
  reverse: boolean
  title: string
  subTitle: string
  description: string
  image: IGatsbyImageData
  alt: string
}

type ReverseType = {
  isReverse: boolean
}

const StyledImgText = styled.div`
  & .hero-image {
    flex: 2;
  }
`

const StyledContainer = styled.div<ReverseType>`
  display: flex;
  flex-direction: column;
  gap: clamp(45px, 6vw, 80px);

  @media (min-width: 768px) {
    flex-direction: ${props => (props.isReverse ? "row-reverse" : "row")};
    align-items: center;
  }
`

const StyledText = styled.div`
  flex: 1;
  min-width: 17em;
`

export const ImgText: React.FC<Props> = ({
  reverse,
  title,
  subTitle,
  description,
  image,
  alt,
}) => {
  return (
    <StyledImgText>
      <StyledContainer className="w-container" isReverse={reverse}>
        <StyledText>
          <HeadingDecoration>{title}</HeadingDecoration>
          <p>{subTitle}</p>
          <p>{description}</p>
        </StyledText>
        <GatsbyImage
          image={image}
          alt={alt}
          as="figure"
          className="hero-image"
        />
      </StyledContainer>
    </StyledImgText>
  )
}
