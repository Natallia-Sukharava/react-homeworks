import styled from "styled-components";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 100px;
  background-image: url("/BGShape.svg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  html.dark & {
    background-image: none;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 600px;
`;

const Title = styled.h1`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  color: var(--home-title);
  margin: 0 0 24px;

  span {
    color: var(--home-title-accent);
  }
`;

const Subtitle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 18px;
  line-height: 24.12px;
  letter-spacing: 0.36px;
  color: var(--home-subtitle);
  max-width: 85%;
  margin-bottom: 40px;
`;

const Button = styled.button`
  width: 193px;
  height: 52px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: var(--home-btn-text);
  background: var(--home-btn-bg);
  border: none;
  border-radius: 6px;
  cursor: not-allowed;
`;

const RatingWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StarLogo = styled.img`
  height: 20px;
  margin-bottom: 8px;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Score = styled.span`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--home-score);
`;

const Reviews = styled.span`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--home-reviews);
`;

const Right = styled.div`
  width: 600px;
  height: 580px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 30px;
  }
`;

function HomePage() {
  return (
    <Container>
      <Left>
        <Title>
          Beautiful food & takeaway, <span>delivered</span> to your door.
        </Title>
        <Subtitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500.
        </Subtitle>
        <Button disabled>Place an Order</Button>

        <RatingWrapper>
          <StarLogo src="/star.svg" alt="Trustpilot logo" />
          <RatingRow>
            <Score>4.8 out of 5</Score>
            <Reviews>based on 2000+ reviews</Reviews>
          </RatingRow>
        </RatingWrapper>
      </Left>

      <Right>
        <img src="/hero-image.svg" alt="Food delivery" />
      </Right>
    </Container>
  );
}

export default HomePage;
