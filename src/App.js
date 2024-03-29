import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "./components/styled/Container.styled";
import content from "./content";
import Card from "./components/Card";

const theme = {
  colors: {
    lightBlue: "#EBFBFF",
    white: "#FFFFFF",
    darkBlue: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card item={item} key={item.id} index={index} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
