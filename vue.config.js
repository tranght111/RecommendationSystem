const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
});

// module.exports = {
//   outputDir: path.resolve(__dirname, "../docs"),
//   publicPath: "/vue3-apexcharts/",
//   configureWebpack: {
//     resolve: {
//       symlinks: false
//     }
//   },
//   chainWebpack: config => {
//     config.resolve.alias.set("vue$", path.join(__dirname, "node_modules/vue"));
//     config.resolve.alias.set("apexcharts$", path.join(__dirname, "node_modules/apexcharts"));
//   }
// };
