/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'AutoToolit for Office - Documentation',
  tagline: 'Easily automate Office',
  url: 'https://autotoolit.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'autotoolit', // Usually your GitHub org/user name.
  projectName: 'autotoolit.github.io', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'AutoToolit for Office Logo',
        src: 'img/logo.svg',
        href: 'https://autotoolit.com/',
        target: '_blank',
      },
      items: [
        {
          type: 'doc',
          docId: 'getstarted',
          position: 'right',
          label: 'Documentation',
        },
        {
          href: 'https://autotoolit.com',
          label: 'Home',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
          ],
        },
        {
          title: 'AutoToolit',
          items: [
            {
              label: 'autotoolit.com',
              href: 'https://autotoolit.com',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/autotoolit',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/showcase/autotoolit',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AutoToolit.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/autotoolit-for-office/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/autotoolit/autotoolit.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
  ],
};
