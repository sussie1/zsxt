/**
 * Created by jiqishun on 2017/5/14.
 */

//建立全局变量，确保点击提交时是经过验证的正确的数据
var validate = {
    emailValidate : false,
    pwdValidate:false
};
var message = '';
$(function() {
    var frm = $('form[name=login_form]');
    frm.submit(function () {
        var isOK = validate.emailValidate &&validate.pwdValidate;
        if(isOK){
            return true;
        }else {
            $('input[name=email]', frm).trigger('blur');
             $('input[name=pwd]', frm).trigger('blur');
            return false;
        }
    });

    //邮箱验证
    $("input[name=email]", frm).blur(function(){
        var email = $(this).val();
        var length = email.length;

        //输入框为空时进行判断
        if( email == ''){
            message="请输入邮箱";
            var span = $(this).next();
            span.removeClass("i-def").removeClass("i-validate").addClass("i-deferror")
                .html("<span style='color:red;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ message +"</span>");
            $(this).css("border-color", "red");
            $(this).css("border-width", "1px");
            validate.emailValidate = false;
            return;
        }
        if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/){
            message="请输入有效邮箱";
            var span = $(this).next();
            span.removeClass("i-def").removeClass("i-validate").addClass("i-deferror")
                .html("<span style='color:red;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ message +"</span>");
            $(this).css("border-color", "red");
            $(this).css("border-width", "1px");
            validate.emailValidate = false;
            return;
        } else {    //这个是模拟数据格式正确，后台要改为$.post或者$.ajax进行异步
            message="";
            var span = $(this).next();
            span.removeClass("i-def").removeClass("i-validate").addClass("i-deferror")
                .html("<span style='color:red;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ message +"</span>");
            $(this).css("border-color", "");
            $(this).css("border-width", "");
            validate.emailValidate = false;
            return;

        }
    });


//密码验证
    $("input[name=pwd]", frm).blur(function(){
        var pwd = $(this).val();
        var length = pwd.length;
        if( pwd == ''){
            message="请输入密码";
            var span = $(this).next();
            span.removeClass("i-def").removeClass("i-validate").addClass("i-deferror")
                .html("<span style='color:red;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ message +"</span>");
            $(this).css("border-color", "red");
            $(this).css("border-width", "1px");
            validate.pwdValidate = false;
            return;
        }
        if( length<6||length>20){
            message = "请输入6-20位的数字和字母组合密码";
            var span = $(this).next();
            span.removeClass("i-def").removeClass("i-validate").addClass("i-deferror")
                .html("<span style='color:red;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ message +"</span>");
            $(this).css("border-color", "red");
            $(this).css("border-width", "1px");
            validate.pwdValidate = false;
            return;
        } else {    //这个是模拟数据格式正确，后台要改为$.post或者$.ajax进行异步
            var span = $(this).next();
            message = "";
            span.removeClass("i-def").removeClass("i-deferror").addClass("i-validate")
                .html("<span style='color:red;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ message +"</span>");
            $(this).css("border-color", "");
            $(this).css("border-width", "");
            validate.pwdValidate = true;
        }


    });




});