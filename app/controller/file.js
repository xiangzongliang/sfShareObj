'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const xlsx = require('node-xlsx');
const fs = require('fs');

class file extends Controller {

	async init(){
		await this.ctx.render('upfile/upfile.html',{
			title:'文件上传测试'
		});
	}



	async upfileExcel() {
		const stream = await this.ctx.getFileStream(); //获取框架封装的流信息以及文件信息等...
		let databuf = stream._readableState.buffer.tail.data, //文件核心流信息获取
			excelData = xlsx.parse(databuf) //将表格数据转换为数组
		console.log(excelData);
		console.log(excelData[0].data);

		this.ctx.body = 'is ok';

	}
}

module.exports = file;

