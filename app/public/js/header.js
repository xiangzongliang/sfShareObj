/**
 * Created by 828502 on 2018/5/2.
 */
layui.use('element', function(){
    var element = layui.element;

    element.render();

            //监听nav切换
            element.on('nav(test)', function(obj){

                layer.msg('切换了：'+ this.innerHTML);
                console.log('sdasdadasdsa',this.innerHTML)
                if(this.innerHTML === '发布招聘'){
                    window.location.href ='/postJob'

                } else if(this.innerHTML === '已发布列表'){
                    window.location.href = '/recruitmentList'
                }

            });








        // //发布招聘
        // editJob:function (id) {
        //     window.location.href = './postJob'
        // }
        // //招聘列表
        // delJob:function (id) {
        //     window.location.href = './recruitmentList'
        // }





});