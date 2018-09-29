$(function () {
    let li=$("main ul li");
    let btn=$("main ul li .right .btn");
    let p=$("main ul li .right .price");

    // console.log(li, btn, p, span);
    li.click(function () {
        let index=$(this).index();
        btn.removeClass("active");
        btn.eq(index).addClass("active");
        p.css("opacity","0");
        p.eq(index).css("opacity","1");

    })
    // 弹框
    let pay=$("footer .btn");
    let tan=$(".tankuang");
    pay.click(function () {
        tan.css("display","block");
    })

    // 关闭
    let guanbi=$(".icon-guanbi");
    guanbi.click(function () {
        tan.css("display","none");
    })

    // 密码
    let password=$(".tankuang ul li");
    password.click(function () {
        let i=$(this).index();
        $(this).addClass("active");
        if(i==5){
            setTimeout(open,1000);
            function open() {
                window.open("pay_success.html","_self");
            }
        }
    })

})
