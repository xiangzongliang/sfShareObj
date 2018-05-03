'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const xlsx = require('node-xlsx');
const fs = require('fs');

class file extends Controller {

    async init() {
        await this.ctx.render('upfile/upfile.html', {
            title: '文件上传测试'
        });
    }

    async postJobFile() {
        await this.ctx.render('postJob/postJob.html', {
            title: '发布职位'
        });
    }

    async upfileExcel() {
        const stream = await this.ctx.getFileStream(); //获取框架封装的流信息以及文件信息等...
        let databuf = stream._readableState.buffer.tail.data, //文件核心流信息获取
            excelData = xlsx.parse(databuf) //将表格数据转换为数组
        console.log(excelData[0].data);

        var excelDataList = excelData[0].data;
        for (var i in excelDataList) {
            if (i != 0) {//第一行是表头
                var value = excelDataList[i];
                console.log("解析数据", value);
                let insertResult = await this.ctx.service.job.insertFormatData(value);
            }

        }

        this.ctx.body = {
            status: true,
            msg: 'is ok',
        }

    }
}

module.exports = file;

