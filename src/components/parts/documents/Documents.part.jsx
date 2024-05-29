import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: 2em;
  font-weight: 700;
  margin: 0.67em 0;
  font-family: "GenSekiGothic", serif;
  color: var(--color-primary);
`;

export const Heading2 = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
  margin: 0.83em 0;
  font-family: "GenWanMin", serif;
`;

export const Heading3 = styled.h3`
  font-size: 1.17em;
  font-weight: 700;
  margin: 1em 0;
  font-family: "GenWanMin", serif;
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: var(--color-neutral); /* 使用 color 代替 text-color */
  font-weight: 700;
  font-family: "GenSekiGothic", sans-serif;
`;

export const Emphasis = styled.em`
  font-style: normal;
  font-weight: 700;
  font-family: "GenSekiGothic", sans-serif;
`;
