import styled from "styled-components";
import { FaRegCopyright } from "react-icons/fa";
import PropTypes from "prop-types";

const Footer = ({ copyright }) => (
  <Container>
    <FaRegCopyright /> <CopyrightText>{copyright}</CopyrightText>
  </Container>
)

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 5dvh;
  width: 100%;
  // background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  & > span, & > svg {
    margin-top: 1.5rem;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
  & > span, & > svg {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`
const CopyrightText = styled.span`
  margin-left: 1rem;
  font-family: GenSekiGothic;
`

Footer.prototype = {
  copyright: PropTypes.string
};

export default Footer;
