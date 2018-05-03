layui.use(['element','jquery','table'], function(element,$){
	var element = layui.element,
		table = layui.table;




	$('.jobList').addClass('layui-this')
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
				console.log(data.id);
				if(obj.event === 'detail'){
					page.viewJob(data.id);
				} else if(obj.event === 'del'){
					layer.confirm('真的删除当前招聘？', function(index){
						page.delJob(data.id)
						layer.close(index);
					});
				} else if(obj.event === 'edit'){
					page.editJob(data.id)
				}
			});
		},




		//查看招聘信息
		viewJob:function (id) {
			$.ajax({
				url:'/jobDetailed',
				type:'POST',
				dataType:'json',
				data:{id:id},
				success:function (data) {
					var msg = data.msg[0]
					layer.open({
						title:msg.postName,
						area: ['650px', window.screen.availHeight*0.9+'px'],
						shade: [1, '#fff'],
						btn: [],
						id:'viewPopup',
						anim:2,
						content: $('.viewPopupContent').html(),
						success:function () {
							$('#viewPopup .postName').html(msg.postName)
							$('#viewPopup .workingPlace').html(msg.workingPlace)
							$('#viewPopup .needPeople').html(msg.needPeople)
							$('#viewPopup .validityTime').html(msg.validityTime)
							$('#viewPopup .education').html(msg.education)
							$('#viewPopup .experience').html(msg.experience+'年')
							$('#viewPopup .salary').html(msg.salary)
							$('#viewPopup .department').html(msg.department)
							$('#viewPopup .urgent').html(msg.urgent)


							//  注：下面两行要使用原生JS写，否则内容区域无法自动换行
							document.getElementById('viewPopup').getElementsByClassName('jobDuty')[0].innerText = msg.jobDuty
							document.getElementById('viewPopup').getElementsByClassName('jobRequirement')[0].innerText = msg.jobRequirement
							// $('#viewPopup .jobDuty').text(msg.jobDuty)
							// $('#viewPopup .jobRequirement').text(msg.jobRequirement)
						}
					});
				}
			})
		},

		//编辑招聘
		editJob:function (id) {
			window.location.href = './editJob?id='+id
		},
		//删除招聘
		delJob:function (id) {
			$.ajax({
				url:'/deleteJob',
				type:'POST',
				dataType:'json',
				data:{id:id},
				success:function (data) {
					layer.msg(data.msg);
				}
			})
		}



	}







	//  页面入口
	page.init().listenFun()

});