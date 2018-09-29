window.onload=function () {
    let name=document.getElementsByClassName("name")[0];
    console.log(name);
    let address=document.getElementsByClassName("address")[0];
    console.log(address);
    let tel=document.getElementsByClassName("tel")[0];
    console.log(tel);
    let yu=document.getElementsByClassName("yu")[0];
    console.log(yu);
    let tj=document.getElementsByClassName("q_sign")[0];
    console.log(tj);
    tj.onclick=function(){
        if(name.value!==""){
            if(address.value!==""){
                if(tel.value!==""){
                    if(yu.value!==""){
                        if(name.value!=="" && address.value!=="" && tel.value!=="" && yu.value!==""){
                            window.open("PT_Login.html",'_self');
                            $(".tj").css("background","#3bacfe");
                            $(".tj").css("box-shadow","0 0 0.8rem 0.01rem rgba(41,167,255,0.13)");
                            $(".tj p").css("color","white");
                        }else{
                            alert("登陆失败，请重新登录");
                            name.value="";
                            address.value="";
                            tel.value="";
                            yu.value="";
                        }
                    }else{
                        alert("您的所在区域不可以为空");
                    }
                }else{
                    alert("电话号码不可以为空");
                }
            }else{
                alert("地址不可以为空");
            }
        }else{
            alert("姓名不可以为空");
        }
    }
}

