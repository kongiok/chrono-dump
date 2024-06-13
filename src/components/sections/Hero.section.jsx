import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Hero = (
  { title, subtitle, linkArray }
) => (
  <Background>
    <Wrapper>
      <TitleContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TitleContainer>
      <ButtonContainer>
        {linkArray?.map((button, index) => (
          <Button
            key={index}
            to={button.href}
            title={button.description}
          >
            {button.title}
          </Button>
        ))}
      </ButtonContainer>
    </Wrapper>
  </Background >
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  linkArray: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    description: PropTypes.string
  }))
};

const Background = styled.section`
  width: auto;
  height: 55dvh;
  margin: auto;
  background-color: var(--color-primary-bg);
  background: conic-gradient(from 0.20turn at 50% 60%, #DEBFD9,
      #EDDDEA);
  display:grid;
  place-items:center;
  `;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  backdrop-filter: blur(10px);
  `;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
  `;

const Button = styled(Link)`
  text-decoration: none;
  padding: 0.8em 1em;
  border-radius: 0.5em;
  font-family: "GenSekiGothic", sans-serif;
  font-weight: 700;
  background-color: var(--color-primary);
  color: var(--color-neutral);
  `;

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 800;
  margin: 0.5em 0em;
  font-family: "GenWanMin", serif;
  color: var(--color-neutral);
  text-align: center;
  @media (min-width: 768px) {
    font-size: 5em;
  };
  `;

const Subtitle = styled.h2`
  font-size: 1.65em;
  margin: 0.5em 0em;
  font-family: "chenyuluoyan", serif;
  color: var(--color-neutral);
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2em;
  };
  `;
