module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Welcome to my nightmare | Vinay Dawani";
      return args;
    });
  },
  configureWebpack: {
    devtool: "source-map",
  },
};
