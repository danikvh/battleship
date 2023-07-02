const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
            minify: false,
            scriptLoading: 'blocking',
            css: ['style.css'],
        }),
        // Otros plugins...
      ],
    module: {
        rules: [
            // Otras reglas...
        
            // Regla para cargar archivos CSS
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};