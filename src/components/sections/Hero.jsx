import styled from "styled-components";
import PropTypes from "prop-types";


const Hero = ({ title, subtitle, children }) => (
  <Section>
    {/* Title Text */}
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
    {/* Buttons */}
    <Container flexDirection="row" gap="1rem">
      {children}
    </Container>
  </Section>
);

const Section = styled.section`
  width: 100dvw;
  height: 60dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary-bg);
`
const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || "column"};
  justify-content: center;
  align-items: center;
  gap: ${props => props.gap || "1rem"};
`;
const Title = styled.h1`
  font-size: 4.5rem;
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 1rem;
`;
const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: var(--color-neutral);
  text-align: center;
  margin-bottom: 1rem;
`;

Container.propTypes = {
  flexDirection: PropTypes.string,
  gap: PropTypes.string,
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
