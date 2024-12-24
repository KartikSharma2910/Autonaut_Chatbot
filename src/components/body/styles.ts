import styled from "styled-components";

const Wrapper = styled.div({
  overflowY: "auto",
  padding: "12px",
  backgroundColor: "#fff",
  height: "calc(100dvh - 70px - 70px)",
});

const ChatsRenderer = styled.div({
  gap: "16px",
  display: "flex",
  overflowY: "auto",
  flexDirection: "column",
});

export { Wrapper, ChatsRenderer };
