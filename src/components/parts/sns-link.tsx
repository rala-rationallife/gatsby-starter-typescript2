import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

type Props = {
  url: string
  children: React.ReactNode
  sns: string
}

const StyledSnsLink = styled(Link)``

export const SnsLink: React.FC<Props> = ({ url, children, sns }) => {
  return (
    <StyledSnsLink to={url}>
      {children}
      <span className="sr-only">{sns}</span>
    </StyledSnsLink>
  )
}
