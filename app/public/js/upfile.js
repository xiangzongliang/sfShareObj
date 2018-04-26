layui.use(['element','jquery','upload'], function(element,$){
	var element = layui.element,
		$ = layui.jquery,
		upload = layui.upload;


	//指定允许上传的文件类型
	upload.render({
		elem: '#filrUPBtn',
		url: '/upFileExcel',
		// headers:{
		// 	'content-type':'multipart/form-data'
		// },
		accept: 'file', //所有文件
		done: function(res,index,upload){
			console.log(res,index,upload)
		}
	});


});