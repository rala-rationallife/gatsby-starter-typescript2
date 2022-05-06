import * as React from "react"
import styled from "styled-components"

type Props = {
  title: string
  subTitle: string
}

const StyledHeading = styled.h2`
  position: absolute;
  top: calc((var(--v-space) + 0.6em) * -1);
  font-family: "Montserrat", sans-serif;
  font-size: clamp(40px, 5.2vw, 70px);
  min-height: 0vw;
  font-weight: 300;

  & span {
    display: block;
    color: #666666;
    font-size: 18px;
  }
`

export const Heading: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <StyledHeading>
      {title}
      <span>{subTitle}</span>
    </StyledHeading>
  )
}
