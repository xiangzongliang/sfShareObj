'use strict';

const Controller = require('egg').Controller;

class FavoriteController extends Controller {

    async addFavor(){
        let queryBody = this.ctx.request.body;
        let result = await this.ctx.service.favorite.addFavor(queryBody);
        this.ctx.body = {
            status: result,
        };
    }

    async deleteFavor(){
        let queryBody = this.ctx.request.body;
        let result = await this.ctx.service.favorite.deleteFavor(queryBody);
        this.ctx.body = {
            status: result,
        };
    }

    async queryFavors(){
        let queryBody = this.ctx.query;
        let result = await this.ctx.service.favorite.queryFavors(queryBody);
        this.ctx.body = {
            status: true,
            message:result,
        };
    }
}

module.exports = FavoriteController;