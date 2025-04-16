module.exports = {
  title: 'MKBLV OS',
  tagline: 'Your Belief Is the Entry Point',
  url: 'https://mkblv-os.github.io',
  baseUrl: '/',
  organizationName: 'mkblv-os',
  projectName: 'mkblv-portal',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'MKBLV OS',
      items: [
        { to: 'docs/boot', label: 'Boot', position: 'left' },
        { to: 'docs/onboarding', label: 'Onboarding', position: 'left' },
        { to: 'docs/modules', label: 'Modules', position: 'left' },
        { to: 'docs/pricing', label: 'Pricing', position: 'left' },
        { to: 'docs/mission-log', label: 'Mission Log', position: 'left' },
        { to: 'docs/investors', label: 'Investors', position: 'left' }
      ]
    }
  },
  presets: [['@docusaurus/preset-classic']]
};