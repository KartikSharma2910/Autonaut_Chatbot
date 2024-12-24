import { ArrowBack, Menu } from "components/svg-renderer";
import {
  Container,
  DataContainer,
  Description,
  Heading,
  Image,
  TextContainer,
  Wrapper,
} from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <DataContainer>
          <ArrowBack />
          <Image src="/autonaut.png" alt="autonaut" />
          <TextContainer>
            <Heading>Chat with Autonaut</Heading>
            <Description>Your personal AI car advisor</Description>
          </TextContainer>
        </DataContainer>
        <Menu />
      </Container>
    </Wrapper>
  );
};

export default Header;
