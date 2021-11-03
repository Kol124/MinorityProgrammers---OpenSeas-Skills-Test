import styled from "styled-components";

export const CollectionsCard = () => {
  return (
    <Card>
      <img src="/coll-img.png" alt="" />
      <CardContent>
        <h3>Music Collection</h3>
        <section>
          <aside>
            <p>Floor Price</p>
            <span>$1000</span>
          </aside>
          <aside>
            <p>Volume</p>
            <span>$24,000,000</span>
          </aside>
        </section>
      </CardContent>
    </Card>
  );
};

const Card = styled.div`
  width: 489px;
  display: flex;
  border-radius: 17px;
  background: #27292c;
  border: 1px solid #c4c4c4;

  img {
    margin-bottom: 12px;
    margin-top: -3rem;
    display: block;
    width: 146px;
  }
`;

const CardContent = styled.div`
  width: calc(489px - 146px);
  padding: 0 15px 0 0;

  h3 {
    margin-bottom: 5px;
    border-bottom: 1px solid #fff;
  }

  section {
    display: flex;
    max-width: 90%;
    justify-content: space-between;
  }

  h3,
  aside:first-child {
    margin-left: 10px;
  }
`;
