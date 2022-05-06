import * as React from "react"
import { createGlobalStyle } from "styled-components"

type Props = {
  children: React.ReactNode
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p, figure, ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    line-height: 1.8;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      filter: brightness(90%) contrast(120%);
    }
  }
`

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      {children}
    </>
  )
}
