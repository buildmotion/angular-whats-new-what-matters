// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Angular :: What\'s New & What Matters',
  tagline: 'Workshop',
  url: 'https://buildmotion.github.io',
  baseUrl: '/angular-whats-new-what-matters/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BuildMotion', // Usually your GitHub org/user name.
  projectName: 'angular-clean-architecture-workshop', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Angular :: What\'s New & What Matters',
        logo: {
          alt: 'Angular...What\'s New & What Matters',
          src: 'img/logo-icon-gold.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Discussion',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/buildmotion/angular-whats-new-what-matters',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Discussion',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Contact Information',
            items: [
              {
                label: 'AngularArchitecture.com',
                href: 'https://www.AngularArchitecture.com',
              },
              {
                label: 'BuildMotion on Slack',
                href: 'https://buildmotion.slack.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/angularArch',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Matt Vaughn on LinkedIn',
                to: 'https://www.linkedin.com/in/matt-vaughn',
              },
              {
                label: 'Blog',
                to: 'https://www.AngularArchitecture.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/buildmotion',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Build Motion, LLC. Built by Matt Vaughn.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
