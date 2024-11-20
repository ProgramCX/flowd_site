const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    pwa: {
      iconPaths: {
        favicon32: 'favicon.ico',
        favicon16: 'favicon.ico',
        appleTouchIcon: 'favicon.ico',
        maskIcon: 'favicon.ico',
        msTileImage: 'favicon.ico'
      }
    },
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

