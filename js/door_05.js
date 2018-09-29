window.onload=function () {
    $(".gogogo").click(function () {
        $(".tanchu").slideDown();
    })
    $(".cha").click(function () {
        $(".tanchu").slideUp();
    })
    $(".p").click(function () {
        texts=$(this).children().text();
        $(".bluey").css("display","none");
        $(this).children().next().css("display","block");
    })

    $("button").click(function () {
        $(".gogo2").html();
        $(".tanchu").slideUp();
        $(".gogo2").html(texts);

    })
}