import styled from "@emotion/styled";
import React from "react";
import { GlobalStyles } from "./global-styles";

const Main = styled.main`
  margin: 0 auto;
  max-width: 900px;
  min-height: 100vh;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Main>{children}</Main>
    </>
  );
};
