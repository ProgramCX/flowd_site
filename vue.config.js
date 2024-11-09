const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
    args[0].title = 'FlowD多线程下载器';
    return args;
    });
    },
  publicPath: './',
  transpileDependencies: true
})

