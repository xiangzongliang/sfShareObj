layui.use(['element','jquery','form'], function(element,$){
	var element = layui.element,
		form = layui.form,
		$ = layui.jquery;
	form.render();




	var page = {
		listenFun:function () {
			$('.saveJob').click(function () {
				page.saveJobPost()
			})
		},
		//校验数据
		checkData:function (callback,errCallback) {
			var postName = $('.postName'),
				workingPlace = $('.workingPlace'),
				needPeople = $('.needPeople'),
				validityTime = $('.validityTime'),
				education = $('.education'),
				experience = $('.experience'),
				salary = $('.salary'),
				department = $('.department'),
				urgent = $('.urgent'),
				jobDuty = $('.jobDuty'),
				jobRequirement = $('.jobRequirement');

			if(postName.val() == ''){
				errCallback(postName)
			}else if(workingPlace.val() == ''){
				errCallback(workingPlace)
			}else if(needPeople.val() == ''){
				errCallback(needPeople)
			}else if(validityTime.val() == ''){
				errCallback(validityTime)
			}else if(education.val() == ''){
				errCallback(education)
			}else if(experience.val() == ''){
				errCallback(experience)
			}else if(salary.val() == ''){
				errCallback(salary)
			}else if(department.val() == ''){
				errCallback(department)
			}else if(urgent.val() == ''){
				errCallback(urgent)
			}else if(jobDuty.val() == ''){
				errCallback(jobDuty)
			}else if(jobRequirement.val() == ''){
				errCallback(jobRequirement)
			}else{
				callback({
					postName : postName.val(),
					workingPlace : workingPlace.val(),
					needPeople : needPeople.val(),
					validityTime : validityTime.val(),
					education : education.val(),
					experience : experience.val(),
					salary : salary.val(),
					department : department.val(),
					urgent : urgent.val(),
					jobDuty : jobDuty.val(),
					jobRequirement : jobRequirement.val()
				});
			}

		},

		// 发送保存请求
		saveJobPost:function () {
			page.checkData(function (postData) {
				$.ajax({
					url:'/editJob',
					type:'POST',
					dataType:'json',
					data:postData,
					success:function (data) {
						layer.msg(data.msg);
					}
				})
			},function (dom) {
				layer.tips('内容不能为空', dom);
				return;
			})
		},

	}
	page.listenFun()
});