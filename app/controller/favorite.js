'use strict';

const Controller = require('egg').Controller;

class FavoriteController extends Controller {

	async addFavor() {
		let queryBody = this.ctx.request.body;
		let result = await this.ctx.service.favorite.addFavor(queryBody);
		this.ctx.body = {
			status: result,
		};
	}

	async deleteFavor() {
		let queryBody = this.ctx.request.body;
		let result = await this.ctx.service.favorite.deleteFavor(queryBody);
		this.ctx.body = {
			status: result,
		};
	}

	async queryFavors() {
		let queryBody = this.ctx.query;
		let result = await this.ctx.service.favorite.queryFavors(queryBody);
		this.ctx.body = {
			status: true,
			message: result,
		};
	}


	async sfvrList() {
		let postData = {
			"pano": [{
				"type": "风光",
				"list": [{"id": 107, "title": "冰岛蓝湖地热温泉", "isNew": true}, {
					"id": 106,
					"title": "唯美的法属波利尼西亚",
					"isNew": false
				}, {"id": 105, "title": "梦中向往的海底世界", "isNew": false}, {
					"id": 104,
					"title": "惊艳的九寨沟五彩池",
					"isNew": false
				}, {"id": 103, "title": "迪拜城市建筑群", "isNew": false}, {
					"id": 102,
					"title": "俯瞰纽约中央公园",
					"isNew": false
				}, {"id": 101, "title": "震撼心灵的那一抹极光", "isNew": false}]
			}, {
				"type": "建筑",
				"list": [{"id": 205, "title": "纳米比亚鬼镇卡曼斯科", "isNew": true}, {
					"id": 204,
					"title": "巴黎诶菲尔铁塔",
					"isNew": false
				}, {"id": 203, "title": "悉尼歌剧院", "isNew": false}, {
					"id": 202,
					"title": "郑州千玺广场",
					"isNew": false
				}, {"id": 201, "title": "卢克索卡纳克神庙", "isNew": false}]
			}, {
				"type": "人文",
				"list": [{"id": 305, "title": "复活节岛摩艾石像", "isNew": false}, {
					"id": 304,
					"title": "秦始皇兵马俑坑内视角",
					"isNew": false
				}, {"id": 303, "title": "西西伯利亚汉特人的家", "isNew": false}, {
					"id": 302,
					"title": "西藏天葬骷髅墙",
					"isNew": false
				}, {"id": 301, "title": "最后的国营理发店", "isNew": false}]
			}, {
				"type": "其他",
				"list": [{"id": 905, "title": "同城办公环境", "isNew": false}, {"id": 902, "title": "荒凉广袤的火星平原", "isNew": false}, {
					"id": 901,
					"title": "驶离地球航向深空",
					"isNew": false
				}]
			}]
		}
		this.ctx.body = {
			status: true,
			message: postData,
		};
	}
}

module.exports = FavoriteController;