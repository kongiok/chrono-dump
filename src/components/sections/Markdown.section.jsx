import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DisplaySection = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: var(--color-neutral-bg);
`;

const DocumentSection = styled.div`
  padding: 1em;
  @media (min-width: 768px) {
    padding: 2em 10em;
  }
`;

const Markdown = ({ children }) => {

  const RenderMDX = ({ children }) => (
    <MDXProvider >
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
