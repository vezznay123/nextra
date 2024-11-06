import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>SEO Recommendations & Requirements</span>,
  project: {
    link: '',
  },
  chat: {
    link: 'mailto:jonathan.verrall@jellyfish.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Boots | Project Condor',
  },
  sidebar: {
    defaultMenuCollapseLevel: 0, // Ensures all levels stay expanded by default
    toggleButton: true, // Adds a toggle button to control collapse manually
  },
  toc: {
    float: true, // Keeps the table of contents floating on scroll, if applicable
  },
};

export default config;
