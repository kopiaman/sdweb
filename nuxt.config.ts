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
      script: [
        { children: "https://unpkg.com/taos@1.0.2/dist/taos.js" },
        { src: "https://unpkg.com/taos@1.0.5/dist/taos.js" },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config.js",
    exposeConfig: true,
    config: {},
    viewer: true,
  },
});
