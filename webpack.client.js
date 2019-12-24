const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 服务端的webpack
module.exports = {
    mode:"development",
    // 客户端入口
    entry:'./client/index.js',
    devtool:'source-map',
    // 客户端输出
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.csr.html',
            template:'src/index.csr.html',
            inject:true
        })
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:['@babel/preset-react',['@babel/preset-env']]
                }
            },
            {
                test:/\.css$/,
                use:['style-loader',{
                    loader:'css-loader',
                    options:{
                        modules:true
                    }
                }]
            }
        ]
    }
}