// https://nuxt.com/docs/api/configuration/nuxt-config
const title =
  "SUA DIGITAL - Empowering your organization with our tailor-made AI Solutions.";
const desc = "Bridging Innovation and Efficiency Through AI.";
const ogImage = "/img/suadigital-og.png";

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: title,
      meta: [
        { name: "description", content: desc },
        { hid: "og:title", name: "og:title", content: title },
        { hid: "og:description", name: "og:description", content: desc },
        { hid: "og:image", name: "og:image", content: ogImage },
        { hid: "og:locale", name: "og:locale", content: "ms_MY" },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://suadigital.my",
        },
        { hid: "og:type", name: "og:type", content: "website" },
        {
          hid: "og:logo",
          name: "og:logo",
          content: "/favicon/favicon-32x32.png",
        },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
        { name: "twitter:image", content: ogImage },

        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "msapplication-config", content: "/favicon/browserconfig.xml" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
        {
          rel: "mask-icon",
          href: "/favicon/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
        { rel: "shortcut icon", href: "/favicon/favicon.ico" },
      ],
      script: [],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vesp/nuxt-fontawesome",
    "nuxt-aos",
    "nuxt-meta-pixel",
  ],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config.js",
    exposeConfig: true,
    config: {},
    viewer: true,
  },
  fontawesome: {
    component: "fa",
    suffix: true,
    icons: {
      solid: [
        "users",
        "users-cog",
        "comments",
        "comments-dollar",
        "business-time",
        "chalkboard-teacher",
        "archive",
        "dollar-sign",
        "arrow-right",
        "arrow-left",
        "check",
        "check-double",
        "cubes",
        "anchor",
        "warehouse",
        "running",
        "allergies",
        "house-damage",
        "hands-helping",
        "angle-double-up",
        "hand-holding-usd",
        "envelope",
        "phone",
        //use in services
        "brain",
        "robot",
        "file-alt",
        "cogs",
        "chart-bar",
        "laptop-code",
      ],
    },
  },
  runtimeConfig: {
    public: {
      metapixel: {
        default: { id: "345975823310181" },
      },
    },
  },
});
