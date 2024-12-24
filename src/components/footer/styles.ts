import styled from "styled-components";

const Wrapper = styled.form({
  width: "100%",
  padding: "12px",
  position: "fixed",
  bottom: 0,
  zIndex: 10,
  height: "70px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  justifyContent: "space-between",
  marginBottom: "env(safe-area-inset-bottom)",
});

const Input = styled.input({
  height: "48px",
  width: "100%",
  border: "1px solid",
  padding: "0 16px",
  borderColor: "#D6D6D6",
  borderRadius: "8px",
  fontSize: "14px",

  "&:focus": {
    outline: "none",
    borderColor: "#ef6e0b",
  },

  "&::placeholder": {
    color: "#B0B0B0",
  },

  "&:disabled": {
    backgroundColor: "#F5F5F5",
    borderColor: "#F5F5F5",
    cursor: "not-allowed",
  },

  "&:disabled::placeholder": {
    color: "#B0B0B0",
  },
});

const SendButton = styled.button({
  height: "48px",
  width: "48px",
  minWidth: "48px",
  borderRadius: "8px",
  backgroundColor: "#ef6e0b",
  border: "1px solid",
  borderColor: "#ef6e0b",
  outline: "none",
  padding: 0,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "8px",
  transition: "all 200ms ease-in-out",

  "&.active": {
    filter: "brightness(80%)",
    transform: "scale(0.95)",
  },

  "&:focus": {
    outline: "none",
    borderColor: "#ef6e0b",
  },

  "&:disabled": {
    backgroundColor: "#F5F5F5",
    borderColor: "#F5F5F5",
    cursor: "not-allowed",
  },
});

export { Input, SendButton, Wrapper };
