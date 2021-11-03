// import React from 'react';
import { Button } from "./Button";
import styled from "styled-components";
import { CollectiblesCard } from "./CollectiblesCard";

export const Collectibles = () => {
  return (
    <div>
      <Container>
        <ContainerTop>
          <h1>Collectibles</h1>
          <p>Alphabetical</p>
          <Button>View All</Button>
        </ContainerTop>
        <ContainerItems>
          <CollectiblesCard />
          <CollectiblesCard />
          <CollectiblesCard />
          <CollectiblesCard />
        </ContainerItems>
      </Container>
    </div>
  );
};

const Container = styled.section`
  padding: 30px 20px;
  border-radius: 9px;
  margin: 2rem 1.5rem;
  border: 1px solid #c4c4c4;
`;

const ContainerTop = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 0.1fr 0.07fr;
`;

const ContainerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4.5rem;
  align-items: center;
  justify-content: space-between;
`;
