import styled from "styled-components";
import PropTypes from "prop-types";

export const Error = ({ title }) => (
  <ErrorContainer>
    <ErrorTitle>{title}</ErrorTitle>
  </ErrorContainer>
)

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ErrorTitle = styled.h1`
  font-size: 2em;
  font-weight: 700;
  color: #3d3d3d;
  font-family: "GenSekiGothic", sans-serif;
`;

Error.propTypes = {
  title: PropTypes.string.isRequired,
};
