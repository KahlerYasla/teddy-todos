import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "teddy-todos docs",
    tagline: "teddy is a harmless bear that helps you manage your todos",
    favicon: "brand/web/favicon.ico",

    // Set the production url of your site here
    url: "https://your-docusaurus-site.example.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "teddy-todos", // Usually your GitHub org/user name.
    projectName: "teddy-todos", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "teddy-todos",
            logo: {
                alt: "teddy-todos Logo",
                srcDark: "brand/raw.png",
                src: "brand/web/icon-512-maskable.png",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "right",
                    label: "Documents",
                },
                {
                    href: "https://github.com/kahleryasla/teddy-todos",
                    label: "Source",
                    position: "right",
                },
            ],
        },
        prism: {
            theme: prismThemes.dracula,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,

    markdown: {
        mermaid: true,
    },
    themes: ["@docusaurus/theme-mermaid"],
}

export default config
