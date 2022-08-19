/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/_dist",
    public: "/",
  },
  plugins: [
    "snowpack-svgr-plugin",
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-webpack",
    "@snowpack/plugin-postcss",
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    polyfillNode: true,
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  buildOptions: {
    /* ... */
  },
};
