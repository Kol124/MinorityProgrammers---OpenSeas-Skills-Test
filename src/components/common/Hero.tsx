import styled from "styled-components";

export default function Showcase() {
  return (
    <HeaderImage>
      <h1>Collectibles</h1>
      <h2>Verified market place for NFT artistes</h2>
    </HeaderImage>
  );
}

const HeaderImage = styled.div`
  padding: 2.5rem;
  height: 400px;
  width: 100%;
  color: #fff;
  display: flex;
  position: relative;
  justify-content: end;
  flex-direction: column;
  background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.07) 3.88%,
      rgba(0, 0, 0, 0) 133.98%
    ),
    url("/hero.jpg") center center;

  & * {
    z-index: 20;
  }

  &::after {
    position: absolute;
    height: 100%;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-family: cursive, sans-serif;
    margin-bottom: 1rem;
    font-size: 3rem;

    /* @media only screen and (max-width: 768px) {
      font-size: 5rem;
    } */
  }

  h3 {
    font-size: 20px;
    margin: 0;

    @media only screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }
`;
