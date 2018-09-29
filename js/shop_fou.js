window.onload=function () {
    $(".one").click(function () {
        let xia=$(this).index();
        $(".one").removeClass("play");
        $(this).addClass("play");
        $(".yang").css({"display":"none"}).eq(xia).css({"display":"block"});
    })
}