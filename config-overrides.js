const path = require("path");

module.exports = function override(config, env) {
  return {
    ...config,
    output: {
      filename: "static/js/my-widget.js",
      chunkFilename: "static/js/my-widget.[name].js",
      path:
        "C:\\Users\\Richard\\Documents\\dev\\nati-chat\\build",
      pathinfo: false,
      futureEmitAssets: true,
      publicPath: "/",
      jsonpFunction: "webpackJsonpmy-embeddable-widget",
      globalObject: "this",
    },
  }
}