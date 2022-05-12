module.exports = {
  reactStrictMode: true,
  //Configure loader for next.js images
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/images/',
            publicPath: 'static/images/',
            emitFile: true,
          },
        },
      ],
    });
    return config;
  }
}
