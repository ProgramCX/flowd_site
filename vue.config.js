const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    pwa: {
      iconPaths: {
        favicon32: 'logo.png',
        favicon16: 'logo.png',
        appleTouchIcon: 'logo.png',
        maskIcon: 'logo.png',
        msTileImage: 'logo.png'
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

