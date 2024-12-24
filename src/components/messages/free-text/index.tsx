import HtmlContent from "components/html-content";
import { timeConverter } from "helper/time-converter";
import { Container, Time } from "./styles";

type FreeTextProps = {
  message: string;
  timestamp: string | number | Date;
};

const FreeText = ({ message, timestamp }: FreeTextProps) => {
  return (
    <Container>
      <HtmlContent content={message} />
      <Time>{timeConverter(timestamp)}</Time>
    </Container>
  );
};

export default FreeText;
