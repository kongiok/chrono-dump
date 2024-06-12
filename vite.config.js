import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [
          remarkFrontmatter,
          remarkMdxFrontmatter,
          remarkGfm],
        providerImportSource: '@mdx-js/react',
      })
    },
    react({ include: /\.(jsx|mdx|md|tsx|ts)$/ }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
