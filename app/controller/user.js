'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
	async loginpage() {
		await this.ctx.render('login/login.html',{
			title:'用户登陆'
		});
	}

    async login(){
        let queryBody = this.ctx.request.body;
        let result = await this.ctx.service.user.login(queryBody);
        let status = result != null;
        if (status === true) {
	        this.ctx.session = {
                uid:result.id,
                loginTime:new Date().getTime()
            }
	        this.ctx.body = {
		        status: true,
		        msg:'登陆成功',
	        };
        }else{
	        this.ctx.body = {
		        status: false,
		        msg:'账号或密码错误',
	        };
        }

    }


    async logout(){
		//清除session并退出
	    this.ctx.session = null;
	    await this.ctx.render('login/login.html',{
		    title:'用户登陆'
	    });
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