window.onload=function () {
    $(".dl").click(function () {
        let i=$(this).index();
        $(".aa").css("display","none").eq(i).css("display","block");
        $(".dl").removeClass("bo");
        $(this).addClass("bo");
    })
    let user=document.getElementsByClassName("user")[0];
    console.log(user);
    let number=document.getElementsByClassName("number")[0];
    console.log(number);
    let btn=document.querySelector("main .q_sign.one");
    console.log(btn);
    btn.onclick=function(){
        if(user.value!==""){
            if(number.value!==""){
                if(user.value!=="" && number.value!==""){
                    alert("登录成功");
                    window.open("p_ay.html",'_self');
                    $(".one").css("background","#3bacfe");
                    $(".one").css("box-shadow","0 0 0.8rem 0.01rem rgba(41,167,255,0.13)");
                    $(".one p").css("color","white");
                }else{
                    alert("登陆失败，请重新登录");
                    user.value="";
                    number.value="";
                }
            }else{
                alert("验证码不可以为空");
            }
        }else{
            alert("手机号不可以为空");
        }
    }
    let username=document.getElementsByClassName("username")[0];
    let password=document.getElementsByClassName("password")[0];
    let btn1=document.querySelector("main .q_sign.two");
    btn1.onclick=function(){
        if(username.value!==""){
            if(password.value!==""){
                if(username.value!=="" && password.value!==""){
                    alert("登录成功");
                    window.open("index.html",'_self');
                    $(".two").css("background","#3bacfe");
                    $(".two").css("box-shadow","0 0 0.8rem 0.01rem rgba(41,167,255,0.13)");
                    $(".two p").css("color","white");
                }else{
                    alert("登陆失败，请重新登录");
                    username.value="";
                    password.value="";
                }
            }else{
                alert("验证码不可以为空");
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
            $(".number").val(yan);
        }
    })




}