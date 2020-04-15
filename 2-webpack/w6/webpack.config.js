const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { VueLoaderPlugin } = require('vue-loader');

const merge = require('webpack-merge');
const isDev = process.env.NODE_ENV !== "production";

// Common ====================

const common = {
    entry: [
        "./app/main.js",
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.[scss|sass]$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
                // extract( css( sass(KOD) ) )
                // sass ( css ( extract(KOD) ) )
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        }),
        new VueLoaderPlugin(),
    ]
};

// Dev =======================

if (isDev) {
    module.exports = merge(
        common,
        {
            mode: "development",
            plugins: [new BundleAnalyzerPlugin()]
        }
    );
}

// Prod ======================

if (!isDev) {
    module.exports = merge(
        common,
        {
            mode: "production",
            optimization: {
                minimize: true
            }
        }
    );
}