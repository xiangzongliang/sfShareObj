'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const {router, controller} = app;
	const islogin = app.middleware.islogin;
	//--------------------小程序访问的接口

	router.post('/user', controller.home.user);
	// router.post('/jobList', controller.job.init); //工作列表
	// router.post('/jobDetailed', controller.job.jobDetailed); //工作详细
	router.post('/jobList', controller.news.init); //新闻列表
	router.post('/jobDetailed', controller.news.jobDetailed); //新闻详细
	router.post('/addFavor',controller.favorite.addFavor); //收藏
	router.get('/queryFavors', controller.favorite.queryFavors); //查询收藏
	router.post('/deleteFavor', controller.favorite.deleteFavor); //收藏
	router.post('/sfvrList', controller.favorite.sfvrList); //SFVR列表






	//-------------------后台模块访问的接口 --------------

	router.get('/',islogin, controller.home.index); //首页
	router.get('/login',islogin,controller.user.loginpage); //登陆页面
	router.post('/login', controller.user.login); //login接口
	router.get('/logout',islogin, controller.user.logout); //logout接口
	router.get('/recruitmentList',islogin, controller.home.recruitmentList); //招聘列表
	router.get('/upfile',islogin,controller.file.init); //文件上传测试页面
	router.get('/postJob',islogin, controller.file.postJobFile)//文件上传页面
	router.post('/upFileExcel',islogin, controller.file.upfileExcel); //文件上传接口
	router.get('/editJob',islogin, controller.recruitmentManagement.editJobPage)//编辑招聘信息页面
    router.post('/addJob',islogin, controller.webJob.addJob); //新增职位
    router.post('/deleteJob',islogin, controller.webJob.deleteJob); //删除职位
    router.get('/queryUsers',islogin, controller.user.queryUsers); //查询所有用户





};
