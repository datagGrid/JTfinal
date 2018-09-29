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
                        if(tel.value==yu.value){
                            if(name.value!=="" && address.value!=="" && tel.value!=="" && yu.value!==""){
                                alert("登录成功");
                                window.open("XinXi.html",'_self');
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
                            alert("两次密码输入不一致");
                        }
                    }else{
                        alert("请确认您的密码");
                    }
                }else{
                    alert("密码不可以为空");
                }
            }else{
                alert("手机验证码不可以为空");
            }
        }else{
            alert("手机号不可以为空");
        }
    }
    $(".hezi").click(function () {
        let time=30;
        let t=setInterval(djs,1000);
        function djs() {
            $(".hezi p").text(`${time}S后重发`);
            time--;
            if(time==-1){
                $(".hezi p").text(`获取验证码`);
                clearInterval(t);
            }
        }
        let yan=Math.round(Math.random()*9999);
        setTimeout(fn,1000);
        function fn(){
            $(".address").val(yan);
        }
    })
}