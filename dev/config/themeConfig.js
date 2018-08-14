'use strict';

module.exports = {
	theme: {
		slug: 'sipping-broth',
		name: 'Sipping Broth',
		author: 'Eric Patrick'
	},
	dev: {
		browserSync: {
			live: true,
			proxyURL: 'wprig.local',
			bypassPort: '8181'
		},
		browserslist: [ // See https://github.com/browserslist/browserslist
			'> 1%',
			'last 2 versions'
		],
		debug: {
			styles: false, // Render verbose CSS for debugging.
			scripts: false // Render verbose JS for debugging.
		}
	},
	export: {
		compress: true
	}
};
