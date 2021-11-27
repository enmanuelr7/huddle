import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styled/Component.styled";

const theme = {
  colors: {
    lightBlue: "#EBFBFF",
    white: "#FFFFFF",
    darkBlue: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
