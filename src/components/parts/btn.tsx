import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

type Props = {
  url: string
  children?: React.ReactNode
  accent: boolean
}

type AccentType = {
  $isAccent: boolean
}

const StyledBtn = styled(Link)<AccentType>`
  display: block;
  width: 260px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${props => (props.$isAccent ? "#b72661" : "#e8b368")};
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  text-shadow: 0 0 6px #00000052;
`

export const Btn: React.FC<Props> = ({ url, children, accent }) => {
  return (
    <StyledBtn to={url} className="btn" $isAccent={accent}>
      {children}
    </StyledBtn>
  )
}
