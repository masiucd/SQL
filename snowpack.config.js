// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {
      url: "/",
      static: true,
    },
    src: {
      url: "/dist",
    },
  },
  plugins: [
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-react-refresh",
    [
      "@snowpack/plugin-webpack",
      {
        htmlMinifierOptions: false, // disabled entirely,
      },
    ],
  ],
  // experiments: {
  //   optimize: {
  //     bundle: true,
  //     minify: true,
  //     target: "es2018",
  //   },
  // },
  // installOptions: {},
  // devOptions: {},
  // buildOptions: {},
};

// https://www.snowpack.dev/guides/optimize-and-bundle
