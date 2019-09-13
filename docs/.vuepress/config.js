module.exports = {
  title: "Hello VuePress!",
  description: "Blog v0.0.1",
  themeConfig: {
    nav: [],
    sidebar: "auto"
  },
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  },
  plugins: [
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10
      }
    ]
  ]
};
