const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, 
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }, 
        {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: "images/[hash]-[name].[ext]"
                }
            }]
        }

    ]
    }, resolve: {
        extensions: ['*', '.js', '.jsx']
        }
};