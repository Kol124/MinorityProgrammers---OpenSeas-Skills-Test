import styled from "styled-components";
import { Button } from "./Button";
import { CollectionsCard } from "./CollectionsCard";

export const TopCollections = () => {
  return (
    <Container>
      <ContainerTop>
        <h1>Top Collections</h1>
        <Button>View All</Button>
      </ContainerTop>
      <ContainerItems>
        <CollectionsCard />
        <CollectionsCard />
        <CollectionsCard />
      </ContainerItems>
    </Container>
  );
};

const Container = styled.section`
  padding: 30px 20px;
  border-radius: 9px;
  margin: 2rem 1.5rem;
  border: 1px solid #c4c4c4;
`;

const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContainerItems = styled.div`
  display: flex;
  margin-top: 4.5rem;
  align-items: center;
  justify-content: space-between;
`;
