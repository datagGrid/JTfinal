window.onload=function () {
    $(".one ol").click(function () {
        $(this).toggleClass("kuang");
    })
    $("li.oo").click(function () {
        let i=$(this).index();
        $(".dd").css("display","none").eq(i).css("display","block");
        $("li.oo").removeClass("kk");
        $(this).addClass("kk");
    })
    $(".he i").click(function () {
        $(".tangchu").slideDown();
    })
    $(".tangchu i").click(function () {
        $(".tangchu").slideUp();
    })
    console.log($(".tangchu i"));
    // console.log($(".one ol"));
}