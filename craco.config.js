const path = require('path')
const resolve = (pathName) => path.resolve(__dirname, pathName)
const CracoLess = require('craco-less')
// const CracoAntDesign = require('craco-antd')

module.exports = {
  // less
  plugins: [
    // 针对Less的相关配置（如module样式）
    {
      plugin: CracoLess
      // options: {
      // 	lessLoaderOptions: {
      // 		lessOptions: { javascriptEnabled: true }
      // 	},
      // 	modifyLessRule: function () {
      // 		return {
      // 			test: /.module.less$/,
      // 			exclude: /node_modules/,
      // 			use: [
      // 				{ loader: 'style-loader' },
      // 				{
      // 					loader: 'css-loader',
      // 					options: {
      // 						modules: {
      // 							localIdentName: '[local]_[hash:base64:6]'
      // 						}
      // 					}
      // 				},
      // 				{ loader: 'less-loader' }
      // 			]
      // 		}
      // 	}
      // }
    }
    // `Ant Design`相关配置
    // {
    // 	plugin: CracoAntDesign,
    // 	options: {
    // 		customizeThemeLessPath: path.join(
    // 			__dirname,
    // 			'src/antd.customize.less'
    // 		)
    // 	}
    // }
  ],
  // webpack
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      assets: resolve('src/assets'),
      views: resolve('src/views'),
      router: resolve('src/router'),
      store: resolve('src/store'),
      utils: resolve('src/utils'),
      hooks: resolve('src/hooks'),
      service: resolve('src/service')
    }
  }
}
