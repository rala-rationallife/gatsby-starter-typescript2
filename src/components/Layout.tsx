import * as React from "react"
import { createGlobalStyle } from "styled-components"
import { Header } from "./header"
import { Footer } from "./footer"
import "typeface-montserrat"

type Props = {
  children: React.ReactNode
}

type OpenType = {
  open: boolean
  handleClick: () => void
}

function createCtx<ContextType>() {
  const ctx = React.createContext<ContextType | undefined>(undefined)
  function useCtx() {
    const c = React.useContext(ctx)
    if (!c) throw new Error("useCtx must be inside a Provider with a value")
    return c
  }
  return [useCtx, ctx.Provider] as const
}

export const [useOpen, CtxProvider] = createCtx<OpenType>()

const OpenProvider: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = React.useState<boolean>(false)

  const handleClick = () => {
    setOpen(!open)
    document.querySelector("html")?.classList.toggle("open")
  }

  const value = {
    open,
    handleClick,
  }

  return <CtxProvider value={value}>{children}</CtxProvider>
}

const GlobalStyle = createGlobalStyle`
  :root {
    --v-space: clamp(90px, 9vw, 120px);
  }

  .open body {
    position: fixed;
    overflow: hidden;

    @media (min-width: 768px) {
      position: revert;
      overflow: revert;
    }
  }

  body {
    margin: 0;
    background-color: #eeeeee;
    color: #222222;
    font-family: sans-serif;
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

  .w-container {
    position: relative;
    width: min(92%, 1166px);
    margin: auto;
  }
`

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <OpenProvider>
        <Header />

        {children}

        <Footer />
      </OpenProvider>
    </>
  )
}
