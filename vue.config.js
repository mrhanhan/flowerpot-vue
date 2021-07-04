// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, "./src/less/base.less")] // 引入全局样式变量（文件路径）
        }
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
                lessOptions: {

                },
            },
        },
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:7082'
            },
            '/v2': {
                target: 'http://localhost:7082'
            },
            '/doc.html': {
                target: 'http://localhost:7082'
            },
            '/webjars': {
                target: 'http://localhost:7082'
            },
            '/swagger-resources': {
                target: 'http://localhost:7082'
            },

        }
    }

};
