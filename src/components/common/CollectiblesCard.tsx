import styled from "styled-components";

export const CollectiblesCard = () => {
  return (
    <Card>
      <img src="/card-img.png" alt="" />
      <CardContent>
        <CardContentTop>
          <h3>Music Collection</h3>
          <span>by Chance the Rapper</span>
        </CardContentTop>
        <section>
          <aside>
            <p>Drop in</p>
            <span>2d 1h 23m</span>
          </aside>
          <aside>
            <p>Mint Amount</p>
            <span>25,000</span>
          </aside>
        </section>
      </CardContent>
    </Card>
  );
};

const Card = styled.div`
  border-radius: 17px;
  background: #27292c;
  border: 1px solid #c4c4c4;

  img {
    margin-bottom: 12px;
    margin-top: -3rem;
    width: 252px;
    display: block;
    border-radius: 17px;
  }
`;

const CardContent = styled.div`
  text-align: center;
  padding: 5px 12px;

  section {
    display: flex;
    text-align: left;
    justify-content: space-between;

    aside:not(:first-child) {
      text-align: right;
    }
  }
`;

const CardContentTop = styled.div`
  border-bottom: 1px solid #fff;
  padding-bottom: 9px;
  margin-bottom: 9px;

  span {
    font-size: 10px;
  }
`;
