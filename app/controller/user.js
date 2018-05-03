'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

    async login(){
        let queryBody = this.ctx.request.body;
        let result = await this.ctx.service.user.login(queryBody);
        let status = result != null;
        if (status === true) {
            this.ctx.sesion = {
                uid:result.id,
                loginTime:new Date().getTime()
            }
        }
        this.ctx.body = {
            status: status,
            message:result,
        };
    }

    async queryUsers(){
        let users = await this.ctx.service.user.queryUsers();
        this.ctx.body = {
            status: true,
            message:users
        };
    }

}

module.exports = UserController;