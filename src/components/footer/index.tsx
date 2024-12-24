import { Send } from "components/svg-renderer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addChat } from "redux/actions";
import { Input, SendButton, Wrapper } from "./styles";

const Footer = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === "") return;
    dispatch(
      addChat({ message: value, isResponse: false, timestamp: Date.now() })
    );
    setValue("");
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type your query here..."
      />
      <SendButton type="submit">
        <Send />
      </SendButton>
    </Wrapper>
  );
};

export default Footer;
