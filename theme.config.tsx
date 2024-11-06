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
    defaultMenuCollapseLevel: 1, // Controls the collapse level; 0 shows all folders, 1 collapses subfolders by default
    toggleButton: true, // Adds a toggle button to collapse or expand the sidebar
  },
  toc: {
    float: true, // Keeps the table of contents floating on scroll, if applicable
  },
};

export default config;
