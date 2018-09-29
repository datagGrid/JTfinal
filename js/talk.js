window.onload=function () {
    $(".one ol").click(function () {
        $(".one ol").removeClass("kuang");
        $(this).addClass("kuang");
        text=$(this).text();
    })
    let yuefen=$("li.oo").eq(0).children().next().text();
    $("li.oo").click(function () {
        let i=$(this).index();
        $(".dd").css("display","none").eq(i).css("display","block");
        $("li.oo").removeClass("kk");
        $(this).addClass("kk");
        yuefen=$(this).children().next().text();
        // console.log(yuefen);

    })
    $(".he").click(function () {
        $(".tangchu").slideDown();
    })
    $(".tangchu i").click(function () {
        $(".tangchu").slideUp();
    })
    // console.log($(".one ol"));
    // console.log($(".true"));
    $(".true").click(function () {
        $(".shij").text(text);
        $(".yr").text(yuefen);
        $(".tangchu").slideUp();
    })
}