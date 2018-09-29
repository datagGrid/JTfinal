window.onload=function () {
    $(".blue ul li").click(function () {
        let i=$(this).index();
        $(".he1").css("display","none").eq(i).css("display","block");
        $("main").css("display","none").eq(i).css("display","block");
    })
    $(".center ul li").click(function () {
        let i=$(this).index();
        $(".center ul li").removeClass("active");
        $(this).addClass("active");
        $(".bigbox23").css("display","none").eq(i).css("display","block");
    })
    $(".one").click(function () {
        let xia=$(this).index();
        $(".one").removeClass("play");
        $(this).addClass("play");
        $(".yang").css({"display":"none"}).eq(xia).css({"display":"block"});
    })



}