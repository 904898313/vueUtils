
module.exports = {
  productionSourceMap: false,
  publicPath: "./",
  outputDir: `../dists`,
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
        // target: 'http://115.29.202.161:8088/appadmin/', // 林军
        // target: 'http://115.29.202.161:8066/appadmin/', // 姜小伟
        // target: 'http://115.29.202.161:8330/appadmin/', // 乔天良
        // target: "http://115.29.202.161:8866/appadmin/", // 杨柯
        // target: 'http://115.29.202.161:50001/appadmin/', // 徐弘毅
        // target: 'http://115.29.202.161:8092/appadmin/', // 张慧敏
        // target: 'http://115.29.202.161:10090/appadmin/', // 贾文豪
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          "^/": ""
        }
      }
    }
  }
};
