$(function () {

	//点击刷新验证码
	//var verifyUrl = $('#verify-img').attr('src');
	//$('#verify-img').click(function () {
	//	$(this).attr('src', verifyUrl + '/' + Math.random());
	//});

	//jQuery Validate 表单验证
	
	/**
	 * 添加验证方法
	 * 以字母开头，5-17 字母、数字、下划线"_"
	 */
	jQuery.validator.addMethod("user", function(value, element) {   
	    var tel = /^[a-zA-Z][\w]{4,16}$/;
	    return this.optional(element) || (tel.test(value));
	}, "请输出您的真实姓名");
    $('form[name=login]').validate({
    	errorElement : 'span',
		success : function (label) {
			label.addClass('success')
		},
		rules:{
			account:{
				required:true,
				email:true
			},
			'login-pwd':{
				required:true,
			}
			
		},
		messages:{
			account:{
				required:'请输入邮箱',
				email:'请输入合法的邮箱地址'
			},
			'login-pwd':{
				required:'请输入密码',
			}
		},
		
    });
	
	
	
	
	$('form[name=register]').validate({
		errorElement : 'span',
		success : function (label) {
			label.addClass('success');
		},
		rules : {
			truename : {
				required : true,
				
			},
			idcard:{
				required : true,
				digits:true,
				rangelength:[18,18]
			},
			email:{
				required : true,
				email:true
			},
			'pwd-reg': {
				required : true,
				rangelength:[6,20]
				
			},
			'pwd-reg1' : {
				required : true,
				equalTo : "#pwd-reg"
			}
			
		},
		messages : {
			truename : {
				required : '请输入您的真实姓名，不能为空'
				
			},
			idcard:{
				required:'请输入的身份证号码，不能为空',
				digits:'身份证号码,必须整数',
				rangelength:'身份证号码,必须是18位数'
			},
			email:{
				required:'请输入你的常用邮箱，不能为空',
				email:'请输入合法的邮箱地址'
			},
			'pwd-reg': {
				required : '请设定密码，不能为空',
				rangelength: '密码长度6-20之间'
			},
			'pwd-reg1': {
				required : '请确认密码，不能为空',
				equalTo : '两次密码不一致'
			}
		}
	});

});