import React, { ReactNode } from "react";
import Hero from "./Hero";
import Header from "./Header";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <Content>
      <Header />
      <Hero />
      {children}
    </Content>
  );
}

const Content = styled.main`
  margin: auto;
  font-family: inherit;
  background-color: #151616;
`;
