const Service = require('egg').Service;

class job extends Service {
    async queryJobList() {
        let queryJobSQL = await this.app.mysql.select('jobPost', {
            columns: ['id', 'postName', 'workingPlace', 'education', 'experience', 'department', 'urgent', 'salary'],
        });
        return queryJobSQL;
    }

    //查询职位详情
    async queryJobDetailed(opction) {




        let queryDetailedSQL = await this.app.mysql.select('jobPost', {
            where: {
                id: opction.id
            }
        });

		let ifCollection = await this.app.mysql.select('favorite', {
			where: {
				jobid: opction.id,
				openid:opction.openid
			}
		});
		if(ifCollection.length>0){
			queryDetailedSQL[0].ifCollection = true
		}else{
			queryDetailedSQL[0].ifCollection = false
		}

        return queryDetailedSQL;
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