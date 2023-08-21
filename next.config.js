module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/, // Adjust the file extensions as needed
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/files", // Adjust the public path as needed
          outputPath: "static/files", // Adjust the output path as needed
          name: "[name].[ext]",
          esModule: false,
        },
      },
    });

    return config;
  },
};
