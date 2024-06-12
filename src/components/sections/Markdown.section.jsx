import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  CodeBlock,
  Emphasis,
  Strong,
  UnsortedList,
  InlineCode,
  Link,
  BlockQuote,
  Table,
  TableCell,
  TableHeader,
} from '../parts/Markdown.part';

const DisplaySection = styled.main`
  max-width: 100vw;
  min-height: 100dvh;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-neutral-bg);
`;

const DocumentSection = styled.div`
  padding: 10em 1em;
  @media (min-width: 768px) {
    max-width: 65dvw;
    padding: 10em 10em;
  }
`;


const Markdown = ({ children }) => {

  const renderComponents = useMDXComponents({
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    p: Paragraph,
    pre: CodeBlock,
    em: Emphasis,
    strong: Strong,
    ul: UnsortedList,
    code: InlineCode,
    a: Link,
    blockquote: BlockQuote,
    table: Table,
    th: TableHeader,
    td: TableCell,

  })
  const RenderMDX = ({ children }) => (
    <MDXProvider components={renderComponents}>
      {children}
    </MDXProvider>
  )

  return (
    <DisplaySection>
      <DocumentSection>
        <RenderMDX>{children}</RenderMDX>
      </DocumentSection>
    </DisplaySection>
  );
};

Markdown.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Markdown };
