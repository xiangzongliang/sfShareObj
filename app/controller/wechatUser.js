'use strict';

const Controller = require('egg').Controller;

class WechatUserController extends Controller {

    async login(){
        let queryBody = this.ctx.request.body;
        let result = await this.ctx.service.wechatUser.login(queryBody);

        this.ctx.body = {
            status: result,
        };
    }

    async queryWechatUsers(){
        let queryBody = this.ctx.request.body;
        let users = await this.ctx.service.wechatUser.queryWechatUsers(queryBody);
        this.ctx.body = {
            status: true,
            message:users
        };
    }

}

module.exports = WechatUserController;