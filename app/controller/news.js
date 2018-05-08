'use strict';

const Controller = require('egg').Controller;

class news extends Controller {



	//  查询招聘职位列表
	async init() {
		let jobList = await this.ctx.service.news.queryNewsList();
		this.ctx.body = {
			status: true,
			type:2,
			msg: jobList,
		};
	}




	// 查询职位详情
	async jobDetailed(){
		let queryBody = this.ctx.request.body;
		let queryDetailed = await this.ctx.service.news.queryNewsDetailed(queryBody);
		this.ctx.body = {
			status: true,
			type:2,
			msg: queryDetailed,
		};
	}
}


module.exports = news;



