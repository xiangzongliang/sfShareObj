const Service = require('egg').Service;

class user extends Service {
	async queryUser() {
		let SQLuser = await this.app.mysql.get('user');
		return SQLuser;
	}
}

module.exports = user;