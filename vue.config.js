
module.exports = {
  productionSourceMap: false,
  publicPath: "./",
  outputDir: `./dist`,
  runtimeCompiler: true,
  devServer: {
    // baseUrl: '/',
    port: 8081,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/": {
        target: "http://o2oqa.dailyyoga.com.cn/appadmin/", // 测试
        // target: "http://115.29.202.161:10080/appadmin/", // 裴小晨
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          "^/": ""
        }
      }
    }
  }
};
