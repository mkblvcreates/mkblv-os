// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'MKBLV OS',
  tagline: 'Soulware Booted',
  url: 'https://mkblv-os.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mkblv-os',
  projectName: 'mkblv-os',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  themeConfig: {
    navbar: {
      title: 'MKBLV OS',
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} MKBLV.WORLD`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;
