import * as React from "react"
import styled from "styled-components"

type Props = {
  children?: React.ReactNode
}

const StyledHeadingDecoration = styled.h2`
  font-size: clamp(30px, 3vw, 40px);
  min-height: 0vw;
  font-weight: 400;

  &::after {
    display: block;
    content: "";
    width: 160px;
    height: 0px;
    border-top: solid 1px #b72661;
    margin-block-start: 0.6em;
  }

  & + p {
    margin-block: 1em 2em;
    color: #707070;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
  }
`

export const HeadingDecoration: React.FC<Props> = ({ children }) => {
  return (
    <StyledHeadingDecoration className="heading-decoration">
      {children}
    </StyledHeadingDecoration>
  )
}
