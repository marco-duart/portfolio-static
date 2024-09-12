import { ThemeProvider } from "styled-components"
import GlobalStyles from "./assets/styles/global-styles"
import Router from "./routes";
import { light } from "./assets/styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />

          <Router />

      </ThemeProvider>
    </>
  )
}

export default App
