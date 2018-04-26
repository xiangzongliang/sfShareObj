'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {



	//  查询招聘职位列表
	async init() {
		let jobList = await this.ctx.service.job.queryJobList();
		this.ctx.body = {
			status: true,
			msg: jobList,
		};
	}




	// 查询职位详情
	async jobDetailed(){
		let queryBody = this.ctx.request.body;
		let queryDetailed = await this.ctx.service.job.queryJobDetailed(queryBody);
		this.ctx.body = {
			status: true,
			msg: queryDetailed,
		};
	}
}


module.exports = HomeController;



