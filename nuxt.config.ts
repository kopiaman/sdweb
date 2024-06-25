// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title:
        "NakSelesaiHutangCepat.my - Settle hutang, tambah pendapatan dan simpanan anda",
      meta: [
        {
          name: "description",
          content:
            "Kami ada cara untuk anda mengurangkan komitmen sekurang-kurangnya 40% sampai sifar hutang. Malah kami beri solusi tambah simpanan sampai 5-6 angka! Lagi best, cara tambah duit side income RM2K-RM20K++!",
        },
      ],
      script: [],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@vesp/nuxt-fontawesome", "nuxt-aos"],
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
        "comments",
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
      ],
    },
  },
});
