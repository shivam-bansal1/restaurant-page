const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const loader = require("css-loader");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                loader: "file-loader",
                options: {
                    outputPath: "fonts/",
                },
            },
        ],
    },
};