'use strict';
const path = require('path');
const fs = require('fs');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523945581913_1196';

  // 全局中间件配置
  config.middleware = [];




	// ————————启动端口配置
	config.cluster = {
		listen: {
			//path: '',
			port:8009,
			//hostname: '',
		},
	};

	

	//——————————数据库连接
	config.mysql = {
		client: {
			host: 'localhost',
			port: '3306',
			user: 'xiangzongliang',
			password: 'xiang0612liang327411',
			database: 'sf_innovativeapplication',
		},
		app: true,  // 是否加载到 app 上，默认开启
		agent: false,   // 是否加载到 agent 上，默认关闭
	};



	//模板文件配置
	config.view = {
		defaultViewEngine: 'nunjucks',
		mapping: {
			'.html': 'nunjucks'
		},
	};

	// config.view = {
	// 	defaultViewEngine: 'vue',
	// 	mapping: {
	// 		'.js':'vue'
	// 	},
	// };


	//安全策略模块配置
	config.security = {
		csrf: {
			enable: false, //禁用部分安全策略功能
		}
	};





	// config.vue = {
	// 	cache: true,
	// 	renderOptions: {
	// 	  template: `<!DOCTYPE html><html lang="en"><body>this vue dom<!--vue-ssr-outlet--></body></html>`,
	// 	}
	// };




	//扩展上传文件的配置，否则会返回400
	config.multipart = {
		fileExtensions: [
			'.xlsx',
		],
	};








  return config;
};
