const Service = require('egg').Service;

class favorite extends Service {

    async addFavor(option) {
        let result = await this.app.mysql.insert('favorite',{
            'openid':option.openid,
            'jobid':option.jobid,
            'date':this.ctx.service.utils.getNowFormatDate(),
        });
        return result.affectedRows === 1;
    }

    async deleteFavor(option) {
        let result = await this.app.mysql.delete('favorite',{
            'jobid':option.jobid,
            'openid':option.openid,
        });
        console.log("删除result",result)
        return result.affectedRows === 1;
    }

    async queryFavors(option) {
        let result = await this.app.mysql.query(`select f.openid as openid, j.* from favorite f, jobPost j where f.openid = '${option.openid}' and f.jobid = j.id` );
        let arr = []
        for (let item in result){
              arr.push({
                  'postName':result[item].postName,'workingPlace':result[item].workingPlace,'needPeople':result[item].needPeople,'validityTime':result[item].validityTime,
                  'education':result[item].education,'experience':result[item].experience,'department':result[item].department,'urgent':result[item].urgent,'salary':result[item].salary,
                  'jobDuty':result[item].jobDuty,'jobRequirement':result[item].jobRequirement,'createrTime':result[item].createrTime,'display':result[item].display,'jobId':result[item].id,
              });
        }
        result.openid =  option.openid;
        result.jobs =  arr;
        return result.jobs;
    }

}

module.exports = favorite;