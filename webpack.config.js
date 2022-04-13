var path = require("path"); // path是node里面的一个模块
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 类似于./
      "@/components": path.resolve(__dirname, "src/components"),
    },
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.react$/,
        loader: "react-loader",
      },
      {
        test: /\.less$/,
        use: ["style-loader", "less-loader"],
      },
    ],
  },
};
// import HtmlWebpackPlugin from "html-webpack-plugin";

// module.exports = (webpackConfig) => {
//   const htmlWebpackPlugin = new HtmlWebpackPlugin({
//     filename: "index.html",
//     template: "!!html!./src/index.html",
//     favicon: "./favicon.ico",
//     hash: true,
//     minify: {
//       collapseBooleanAttributes: true,
//     },
//     resolve: {
//       alias: {
//         "@": require("path").resolve(__dirname, "src"),
//       },
//     },
//   });

//   webpackConfig.plugins.push(htmlWebpackPlugin);
//   return webpackConfig;
// };
