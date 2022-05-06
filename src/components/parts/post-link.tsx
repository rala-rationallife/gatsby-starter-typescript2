import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import styled from "styled-components"

type Props = {
  url: string
  image: IGatsbyImageData
  alt: string
  title: string
  description: string
}

const StyledPostLink = styled(Link)`
  display: block;

  & figure {
    aspect-ratio: 3 / 2;

    @supports not (aspect-ratio: 3 / 2) {
      height: 180px;
    }
  }
`

const StyledPostTitle = styled.h3`
  margin-block: 1em 0.5em;
  font-size: clamp(12px, 2vw, 20px);
  min-height: 0vw;
`

const StyledPostDesc = styled.p`
  max-width: 20em;
  font-size: clamp(10px, 1.6vw, 14px);
  min-height: 0vw;
`

export const PostLink: React.FC<Props> = ({
  url,
  image,
  alt,
  title,
  description,
}) => {
  return (
    <StyledPostLink to={url}>
      <GatsbyImage image={image} alt={alt} as="figure" />
      <StyledPostTitle>{title}</StyledPostTitle>
      <StyledPostDesc>{description}</StyledPostDesc>
    </StyledPostLink>
  )
}
