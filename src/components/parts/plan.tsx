import * as React from "react"
import styled from "styled-components"
import { Btn } from "./btn"

type Props = {
  planTitle: string
  planDesc: string
  price: string
  url: string
  accent: boolean
}

const StyledPlan = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 27px;
  border-radius: 20px;
  background-color: #ffffff;
`

const StyledTitle = styled.h3`
  margin-bottom: 38px;
  font-family: "Montserrat", sans-serif;
  font-size: 38px;
  font-weight: 400;
`

const StyledDesc = styled.p`
  margin-bottom: 38px;
`

const StyledPrice = styled.p`
  margin-block: auto 22px;
  font-size: 26px;
  font-weight: bold;
`

export const Plan: React.FC<Props> = ({
  planTitle,
  planDesc,
  price,
  url,
  accent,
}) => {
  return (
    <StyledPlan>
      <StyledTitle>{planTitle}</StyledTitle>
      <StyledDesc>{planDesc}</StyledDesc>
      <StyledPrice>{price}</StyledPrice>
      <Btn url={url} accent={accent}>
        使ってみる
      </Btn>
    </StyledPlan>
  )
}
