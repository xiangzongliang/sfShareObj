const Service = require('egg').Service;

class job extends Service {
	async queryJobList() {
		let queryJobSQL = await this.app.mysql.select('jobPost',{
			columns: ['id', 'postName','workingPlace','education','experience','department','urgent','salary'],
		});
		return queryJobSQL;
	}



	//查询职位详情
	async queryJobDetailed(opction){
		let queryDetailedSQL = await this.app.mysql.select('jobPost',{
			where: {
				id : opction.id
			}
		});
		return queryDetailedSQL;
	}
}

module.exports = job;