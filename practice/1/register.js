function checkEmail() {
    console.log("checkEmail");
    let email=document.getElementById("input_email").value;
    let right_text=document.getElementById("text_email");
    console.log(email);
    if(email===""){
        right_text.innerHTML="此项为必填项，Email不能为空";
        return false;
    }
    if(email.indexOf("@")===-1){
        right_text.innerHTML="Email格式不正确.必须包含@";
        return false;
    }
    if(email.indexOf(".")===-1){
        right_text.innerHTML="Email格式不正确.必须包含.";
        return false;
    }
    right_text.innerHTML="";
    return true;
}
function checkNickName() {
    let nickName=document.getElementById("input_nickName").value;
    let right_text=document.getElementById("text_nickName");
    if(nickName===""){
        right_text.innerHTML="此项为必填项，昵称不能为空";
        return false;
    }
    right_text.innerHTML="";
    return true;
}
function checkPassword() {
    let password=document.getElementById("input_password").value;
    let right_text=document.getElementById("text_password");
    if(password===""){
        right_text.innerHTML="此项为必填项，密码不能为空";
        return false;
    }
    right_text.innerHTML="";
    return true;
}
function checkPasswordAgain() {
    let password=document.getElementById("input_password").value;
    let passwordAgain=document.getElementById("input_password_again").value;
    let right_text=document.getElementById("text_password_again");
    if(passwordAgain===""){
        right_text.innerHTML="此项为必填项，密码不能为空";
        return false;
    }
    if(passwordAgain!==password){
        right_text.innerHTML="两次密码不一致";
        return false;
    }
    right_text.innerHTML="";
    return true;
}
function enable() {
    document.getElementById("submit_button").disabled=false;
}
function disable() {
    document.getElementById("submit_button").disabled=true;
}