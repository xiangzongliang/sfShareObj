layui.use(['element','jquery','table'], function(element,$){
	var element = layui.element,
		table = layui.table;





	var page = {

		//入口
		init:function () {

			$.ajax({
				url:'/jobList',
				type:'POST',
				dataType:'json',
				success:function (data) {
					page.renderTable(data.msg)
				}
			})
			return this;
		},


		// 表格渲染
		renderTable:function (data) {
			table.render({
				elem: '#jobListTable',
				data:data,
				page: true, //开启分页
				cols: [[ //表头
					{field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'},
					{field:'postName',title:'职位名称',sort: true},
					{field: 'workingPlace', title: '工作地点'},
					{field: 'education', title: '学历'},
					{field: 'experience', title: '工作经验'},
					{field: 'department', title: '部门'},
					{field: 'salary', title: '薪资范围'},
					{fixed: 'right',title: '操作', width:178, align:'center', toolbar: '#barDemo'}
				]]
			});
		},



		
		//页面方法监听
		listenFun:function () {
			//监听工具条
			table.on('tool(jobTable)', function(obj){
				var data = obj.data;
				if(obj.event === 'detail'){
					layer.msg('ID：'+ data.id + ' 的查看操作');
				} else if(obj.event === 'del'){
					layer.confirm('真的删除行么', function(index){
						obj.del();
						layer.close(index);
					});
				} else if(obj.event === 'edit'){
					layer.alert('编辑行：<br>'+ JSON.stringify(data))
				}
			});
		}
	}







	//  页面入口
	page.init().listenFun()

});