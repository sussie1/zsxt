var validate = {
    codeValidate : false
};
var message = '';

var frm = $('form[name=zscx]');
frm.submit(function () {
    var isOK = validate.codeValidate;
    if (isOK) {
        return true;
    } else {
        $('input[name=code]', frm).trigger('blur');
        return false;
    }
});
//追溯码验证
$("input[name=code]", frm).blur(function(){
    var code = $(this).val();
    var length = code.length;

    //输入框为空时进行判断
    if( code == ''){
        message="请输入追溯码";
        var span = $(this).next();
        span.html("<span style='color: red;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ message +"</span>");
        $(this).css("border-color", "red");
        $(this).css("border-width", "1px");
        validate.codeValidate = false;
        return;
    }
    if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(code)){
        message="请输入正确的追溯码";
        var span = $(this).next();
        span.html("<span style='color: red;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ message +"</span>");
        $(this).css("border-color", "red");
        $(this).css("border-width", "1px");
        validate.codeValidate = false;
        return;
    } else {    //这个是模拟数据格式正确，后台要改为$.post或者$.ajax进行异步
        message="";
        var span = $(this).next();
        span.html("<span class='code_error'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ message +"</span>");
        $(this).css("border-color", "");
        $(this).css("border-width", "");
        validate.codeValidate = true;
    }
});/**
 * Created by susiwei on 2017/5/16.
 */
