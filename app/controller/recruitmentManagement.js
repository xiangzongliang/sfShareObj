'use strict';

const Controller = require('egg').Controller;
class recruitmentManagement extends Controller {

	async editJobPage(){
		let getid =  this.ctx.query;
		let queryJob = await this.ctx.service.job.queryJobDetailed(getid);
		let resCen = queryJob[0];
		resCen.title = '招聘信息编辑'

		await this.ctx.render('editJob/editJob.html',resCen);
	}
}

module.exports = recruitmentManagement;

