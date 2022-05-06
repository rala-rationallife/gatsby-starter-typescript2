import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import styled from "styled-components"
import { HeadingDecoration } from "./parts/heading-decoration"

type Props = {
  image: IGatsbyImageData
  alt: string
  title: string
  subTitle: string
  children: React.ReactNode
}

const StyledEntry = styled.article`
  padding-bottom: var(--v-space);
  background-color: #ffffff;

  & .heading-decoration {
    font-size: clamp(30px, 6.25vw, 48px);
  }
`

const StyledWrapper = styled.div`
  max-width: 720px;
`

const StyledContainer = styled.div`
  font-size: clamp(16px, 2.4vw, 18px);

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }

  & :where(h1, h2, h3, h4, h5, h6, p, figure, ul) {
    margin-block: revert;
    padding: revert;
    list-style: revert;
  }

  & p {
    margin-block: 1.8em;
  }
`

export const Entry: React.FC<Props> = ({
  image,
  alt,
  title,
  subTitle,
  children,
}) => {
  return (
    <StyledEntry>
      <GatsbyImage
        image={image}
        alt={alt}
        as="figure"
        style={{
          maxHeight: "400px",
          marginBottom: "calc(var(--v-space) * 2 / 3)",
        }}
      />

      <StyledWrapper className="w-container">
        <HeadingDecoration>{title}</HeadingDecoration>
        <p>{subTitle}</p>

        <StyledContainer>{children}</StyledContainer>
      </StyledWrapper>
    </StyledEntry>
  )
}
