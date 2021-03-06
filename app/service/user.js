const Service = require('egg').Service;
const md5 = require('md5');

class user extends Service {

    async login(option) {
    	console.log('用户登录的密码对应MD5'+md5(option.passwd))
        let result = await this.app.mysql.get('user',{
        	'username':option.username,
			'passwd':md5(option.passwd),
		});
        return result;
    }

	async queryUsers() {
		let result = await this.app.mysql.get('user');
		return result;
	}
}

module.exports = user;