const Service = require('egg').Service;

class webJob extends Service {

    async addJob(option){
        const result = await this.app.mysql.insert('jobPost',{
             'postName':option.postName,'workingPlace':option.workingPlace,'needPeople':option.needPeople,'validityTime':option.validityTime,
            'education':option.education,'experience':option.experience,'department':option.department,'urgent':option.urgent,'salary':option.salary,
            'jobDuty':option.jobDuty,'jobRequirement':option.jobRequirement,'createrTime':this.ctx.service.utils.getNowFormatDate(),'display':option.display,
        });
        return result.affectedRows === 1;
    }

    async deleteJob(option){
        const result = await this.app.mysql.delete('jobPost',{
            'id':option.id,
        });
        return result.affectedRows === 1;
    }

}

module.exports = webJob;