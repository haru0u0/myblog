const { resolve } = require('path')

/*
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
}
*/

const CopyFilePlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.plugins.push(
      new CopyFilePlugin({
        patterns: [
          {
            context: '_posts',
            from: '**/*.{jpg,png}',
            to: resolve(__dirname, 'public/assets/blog/posts'),
          },
        ],
      }),
      new WriteFilePlugin()
    )
    return config
  },
}


//module.exports = nextConfig
