const path = require("path"); // node 加载模块
// 对外暴露文件
module.exports = {
    // 入口文件配置 webpack默认打包文件路径 src/index.js
    entry:{
        index:"./src/index.js",
        // alerter:"./src/alerter.js"
    },
    // 输出文件配置 webpack默认输出文件路径 dist/mainModule.js
    output:{
        path:path.resolve(__dirname, "../dist/"), // 打包文件输出路径 绝对路径
        // 带有 hash 的文件名
        filename:"[name].[hash].js"
    },
    module:{
        rules:[
            {
                test:/\.css$/ , //文件解析匹配规则 以css结尾的文件
                use:[
                    {loader:"style-loader"}, //把引入css文件写入style标签
                    {loader:"css-loader"}//把css文件引入并处理
                ]
            }
        ]
    }

}
