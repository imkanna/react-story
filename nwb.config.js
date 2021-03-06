const path = require('path')

module.exports = {
	type: 'react-component',
	npm: {
		esModules: true,
		// umd: {
		// 	global: 'ReactStory',
		// 	externals: {
		// 		react: 'React'
		// 	}
		// }
	},
	webpack: {
    uglify: false,
		aliases: {
      'react-story': path.resolve('src'),
    },
		extra: {
			module: {
				rules: [
					{
						test: /\.md$/,
						use: [
              { loader: 'raw-loader' }
            ]
					}
				]
			}
		}
	}
}
