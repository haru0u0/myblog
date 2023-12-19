const { resolve } = require('path')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyFilePlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  trailingSlash: true,
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
			  noErrorOnMissing: true,
		  },
		],
	  }),
		new WriteFilePlugin(),
		new CaseSensitivePathsPlugin()
    )
    return config
  },
}


//module.exports = nextConfig
