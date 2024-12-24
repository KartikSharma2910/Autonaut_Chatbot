import styled from "styled-components";

const Bubble = styled.div<{ isResponse: boolean }>(({ isResponse }) => ({
  maxWidth: "82%",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "10px 12px",
  wordWrap: "break-word",
  lineHeight: "18px",
  position: "relative",
  color: "#0F0F10",
  fontSize: "12px",
  fontWeight: 400,
  alignSelf: isResponse ? "flex-start" : "flex-end",
  borderRadius: isResponse ? "12px 12px 12px 0" : "12px 12px 0 12px",
  backgroundColor: isResponse ? "#F5F5F5" : "#E5F3FF",

  "& p": {
    margin: "0",
  },
  "& ul": {
    paddingInlineStart: "16px",
  },
  "& ol": {
    paddingInlineStart: "16px",
  },
  "& li": {
    padding: "1px 0",
    listStyleType: "disc",
  },
  "& code": {
    padding: "0px",
  },
  "& pre": {
    padding: "6px",
    whiteSpace: "break-spaces",
  },
}));

export { Bubble };
