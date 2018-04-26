'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

	// ---------------------------   后台页面 -------------------------
	async index() {
		await this.ctx.render('index/index.html',{
			title:'添加招聘'
		});
	}

	async recruitmentList() {
		await this.ctx.render('jobList/jobList.html',{
			title:'招聘列表'
		});
	}

	// ------------------------- END ---------------------------------





	async user() {
		let queryUser = await this.ctx.service.user.queryUser();
		this.ctx.body = queryUser;
	}
}

module.exports = HomeController;

