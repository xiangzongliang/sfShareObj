'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const {router, controller} = app;


	//--------------------小程序访问的接口

	router.post('/user', controller.home.user);
	router.post('/jobList', controller.job.init); //工作列表
	router.post('/jobDetailed', controller.job.jobDetailed); //工作详细


	//-------------------后台模块访问的接口 --------------

	router.get('/', controller.home.index); //首页
	router.get('/recruitmentList', controller.home.recruitmentList); //招聘列表
	router.get('/upfile',controller.file.init); //文件上传测试页面
	router.post('/upFileExcel', controller.file.upfileExcel); //文件上传接口
};
