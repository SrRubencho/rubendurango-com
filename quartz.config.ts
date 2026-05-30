import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Rubén Durango",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "es-ES",
    baseUrl: "rubendurango.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fraunces",
        body: "DM Sans",
        code: "JetBrains Mono",
      },
      colors: {
        // Palette: ADR-0007 "Tinta & oro" — warm editorial, mustard-forward.
        // Link color is AA-safe dark gold; brightest mustard is reserved for highlights.
        lightMode: {
          light: "#faf6ea",
          lightgray: "#eae0cb",
          gray: "#beb295",
          darkgray: "#2c261d",
          dark: "#16110a",
          secondary: "#8a5e00",
          tertiary: "#5e3f00",
          highlight: "rgba(214, 160, 40, 0.18)",
          textHighlight: "#ffd86688",
        },
        darkMode: {
          light: "#1a1712",
          lightgray: "#35302a",
          gray: "#6b6353",
          darkgray: "#e7decf",
          dark: "#f5efe2",
          secondary: "#e3ae45",
          tertiary: "#c8923a",
          highlight: "rgba(214, 160, 40, 0.15)",
          textHighlight: "#caa43055",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
