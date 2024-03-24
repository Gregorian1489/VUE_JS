const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
},
{
  css: {
    loaderOptions: {
      scss: {
        data: `@import "~@/styles/global.scss";`
      }
    }
  }
}
)
