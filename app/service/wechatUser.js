const Service = require('egg').Service;

class wechatUser extends Service {

    async login(option) {
        let result = await this.app.mysql.get('wechat_user',{
            'openid':option.openid,
            'name':option.name,
            'token':option.token,
            'date': this.ctx.service.utils.getNowFormatDate(),
            'unionid':option.unionid,
        });
        return result;
    }

    async queryWechatUsers() {
        let result = await this.app.mysql.get('wechat_user');
        return result;
    }
}

module.exports = wechatUser;