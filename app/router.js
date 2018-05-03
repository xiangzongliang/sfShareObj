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

	router.get('/postJob', controller.file.postJobFile)//文件上传页面
	router.post('/upFileExcel', controller.file.upfileExcel); //文件上传接口

	router.get('/editJob', controller.recruitmentManagement.editJobPage)//编辑招聘信息页面

	// router.post('/downloadJobExcelModel',controller.job.downloadJobExcelModel)//文件下载接口


    router.post('/addJob', controller.webJob.addJob); //新增职位
    router.post('/deleteJob', controller.webJob.deleteJob); //删除职位


    router.post('/login', controller.user.login); //login
    router.get('/queryUsers', controller.user.queryUsers); //查询所有用户

    router.post('/addFavor', controller.favorite.addFavor); //收藏
    router.get('/queryFavors', controller.favorite.queryFavors); //查询收藏
    router.post('/deleteFavor', controller.favorite.deleteFavor); //收藏


};
