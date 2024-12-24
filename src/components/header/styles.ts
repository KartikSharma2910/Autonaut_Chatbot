import styled from "styled-components";

const Wrapper = styled.form({
  top: 0,
  zIndex: 10,
  width: "100%",
  height: "70px",
  display: "flex",
  position: "sticky",
  padding: "0px 12px",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#ffffff",
  boxShadow: "0 -10px 6px 10px rgba(0, 0, 0, 0.2)",
});

const Image = styled.img({
  width: "46px",
  height: "46px",
  objectFit: "contain",
});

const Container = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const DataContainer = styled.div({
  gap: "12px",
  display: "flex",
  alignItems: "center",
});

const TextContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "2px",
});

const Heading = styled.div({
  fontSize: "16px",
  fontWeight: 600,
  color: "#0F0F10",
});

const Description = styled.div({
  fontSize: "14px",
  fontWeight: 400,
  color: "#717272",
});

export {
  Wrapper,
  Container,
  DataContainer,
  Heading,
  Description,
  Image,
  TextContainer,
};
