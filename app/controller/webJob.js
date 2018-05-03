'use strict';

const Controller = require('egg').Controller;

class WebJobController extends Controller {
    // 添加
    async addJob(){
        let queryBody = this.ctx.request.body;
        let result = await this.ctx.service.webJob.addJob(queryBody);
        this.ctx.body = {
            status: result,
        };
    }

    // 删除
    async deleteJob(){
        let queryBody = this.ctx.request.body;
        let result = await this.ctx.service.webJob.deleteJob(queryBody);
        this.ctx.body = {
            status: result,
        };
    }
}

module.exports = WebJobController;