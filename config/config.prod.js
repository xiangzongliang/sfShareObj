'use strict';
const path = require('path');
module.exports = appInfo => {
	const config = exports = {};
	// ————————启动端口配置
	config.cluster = {
		listen: {
			//path: '',
			port:8010,
			//hostname: '',
		},
	};


	return config;
};
