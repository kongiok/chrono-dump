import styled from "styled-components";

export const Heading1 = styled.h1`
  font-size: 2em;
  padding: 0.25em;
  font-family: "GenWanMin", serif;
  font-weight: 800;
  color: var(--color-neutral);
  text-align: center;
`;

export const Heading2 = styled.h2`
  font-size: 1.5em;
  margin: 0.5em 0;
  font-family: "GenWanMin", serif;
  font-weight: 800;
  color: var(--color-neutral);
`;

export const Heading3 = styled.h3`
  font-size: 1.17em;
  margin: 0.5em 0;
  font-family: "GenWanMin", serif;
  font-weight: 800;
  color: var(--color-neutral);
`;

export const Paragraph = styled.p`
  font-size: 1em;
  margin: 0.5em 0;
  font-family: "GenSekiGothic", sans-serif;
  line-height: 1.5;
  color: var(--color-neutral);
  text-align: justify;
`;

export const Emphasis = styled.em`
  font-style: normal;
  // text-decoration: underline solid var(--color-neutral);
  color: var(--color-accent);
`;

export const Strong = styled.strong`
  font-weight: 800;
  color: var(--color-neutral);
  background-color: var(--color-primary);
  padding: 0.25em;
  border-radius: 0.25em;
`;


export const CodeBlock = styled.pre`
  font-family: "Fira Code", monospace;
  font-size: 0.9em;
  background-color: var(--color-code-bg);
  color: var(--color-neutral);
  padding: 0.25em;
  border-radius: 0.25em;
`;

export const InlineCode = styled.code`
  font-family: "Fira Code", monospace;
  font-size: 0.9em;
  background-color: var(--color-code-bg);
  color: var(--color-neutral);
  line-height: 1.5;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
`;

export const UnsortedList = styled.ul`
  font-size: 1em;
  margin: 0.5em 0;
  line-height: 2;
  font-family: "GenSekiGothic", sans-serif;
  color: var(--color-neutral);
`;

export const ListedItem = styled.li`
  font-size: 1em;
  margin: 0.5em 0;
  line-height: 1.5;
  font-family: "GenSekiGothic", sans-serif;
  color: var(--color-neutral);
`;

export const Link = styled.a`
  color: var(--color-secondary);
  text-decoration: underline solid var(--color-secondary);
`;

export const BlockQuote = styled.blockquote`
  font-size: 1em;
  padding: 1.2em 1.5em;
  border-left: 0.25em solid var(--color-primary);
  background-color: var(--color-neutral-bg);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.25em;
  & p {
    font-size: 1.1em;
    font-family: "Iansui" ,"GenWanMin", serif;
  }
`;
