import { StyledHeader, Nav, Logo, Image } from "./styled/Header.styled";
import { Container } from "./styled/Container.styled";
import { Button } from "./styled/Button.styled";
import { Flex } from "./styled/Flex.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga
              dolore doloremque recusandae voluptate, maxime atque odit ipsa
              tempore aut asperiores, quae pariatur quibusdam, nobis inventore!
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
