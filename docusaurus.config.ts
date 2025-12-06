import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const isDev = process.env.NODE_ENV === 'development';

const config: Config = {
  title: 'SuppaUtils',
  tagline: 'All-In-One Minecraft Server Management Tool',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://suppautils.workofthe.day',
  baseUrl: '/',

  organizationName: 'OliverFida',
  projectName: 'SuppaUtils',

  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          includeCurrentVersion: isDev,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    ...(isDev
      ? [
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'internal',
            path: 'internal',
            routeBasePath: 'internal',
            sidebarPath: './sidebars.ts',
          },
        ],
      ]
    : []),
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SuppaUtils',
      logo: {
        alt: 'SuppaUtils Logo',
        src: 'img/logo.svg',
      },
      items: [
        ...(isDev
          ? [
            {
              type: 'docSidebar',
              sidebarId: 'internalSidebar',
              label: 'Internal Docs',
              docsPluginId: 'internal',
              position: 'left',
            } as const,
          ]
        : []),
        {to: '/download', label: 'Download', position: 'left'},
        {to: '/docs/getting-started', label: 'Getting Started', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'documentationSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/OliverFida/SuppaUtils',
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
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Features',
              to: '/docs/features',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Download',
              to: '/download',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Code',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/OliverFida/SuppaUtils',
            },
            {
              label: 'GitHub (website)',
              href: 'https://github.com/OliverFida/SuppaUtils-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Oliver Fida`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
