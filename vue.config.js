const path = require('path')

function resolve(dir){
  return path.resolve(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
  publicPath: '/jingyi/',
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
  },
  // configureWebpack:{
  //   resolve:{
  //     alias:{
  //       'assets':resolve('src/assets')
  //     }
  //   }
  // }
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@a", resolve("src/assets"))
  },
}


