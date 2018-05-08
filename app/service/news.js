const Service = require('egg').Service;
let fmtDate = (timeStamp)=>{
	let date = new Date(timeStamp);
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
	return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
	return ''
}

class job extends Service {
	async queryNewsList() {
		let queryJobSQL = await this.app.mysql.select('news', {
			columns: ['nid', 'title', 'creatTime','poster'],
		});
		let collbackList = [];
		for(let ci in queryJobSQL){
			collbackList.push({
				nid:queryJobSQL[ci].nid,
				title:queryJobSQL[ci].title,
				creatTime:fmtDate(queryJobSQL[ci].creatTime),
				poster:queryJobSQL[ci].poster,
			})
		}
		return collbackList;
	}

	//查询职位详情
	async queryNewsDetailed(opction) {
		let queryDetailedSQL = await this.app.mysql.select('news', {
			where: {
				nid: opction.id
			}
		});
		let callbackDetail = [];
		for(let dci in queryDetailedSQL){
			callbackDetail.push({
				nid:queryDetailedSQL[dci].nid,
				title:queryDetailedSQL[dci].title,
				creatTime:fmtDate(queryDetailedSQL[dci].creatTime),
				poster:queryDetailedSQL[dci].poster,
				content:queryDetailedSQL[dci].content,
				type:queryDetailedSQL[dci].type,
				author:queryDetailedSQL[dci].author,
			})
		}
		return callbackDetail;
	}







	//获取格式化的json数据,并插入数据库
	async insertFormatData(value) {
		var jsonData = {
			postName: '',//岗位名称
			workingPlace: '',//工作地点
			needPeople: '',//需要的人数
			validityTime: '',//有效时间
			education: '',//学历
			experience: '',//工作经验
			salary: '',//薪资范围
			urgent: '',//"紧急状态
			department: '',//职位所属部门
			jobDuty: '',//工作职责
			jobRequirement: ''//岗位要求
		};
		jsonData.postName = value[0];
		jsonData.workingPlace = value[1];
		jsonData.needPeople = value[2];
		jsonData.validityTime = value[3];
		jsonData.education = value[4];
		jsonData.experience = value[5];
		jsonData.salary = value[6];
		jsonData.urgent = value[7];
		jsonData.department = value[8];
		jsonData.jobDuty = value[9];
		jsonData.jobRequirement = value[10];

		console.log("json数据", jsonData);

		//插入数据库
		const result = await this.app.mysql.insert('jobPost',
			jsonData);

		// 判断插入成功
		const insertSuccess = result.affectedRows === 1;
		return insertSuccess;
	}
}

module.exports = job;