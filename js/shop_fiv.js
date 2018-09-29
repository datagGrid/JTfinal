window.onload=function () {
    $(".to").click(function () {
        let box=$(this).index();
        // console.log(box);
        $(".too").css({"display":"none"}).eq(box).css({"display":"block"});
        $(".to").removeClass("xuan");
        $(this).addClass("xuan");
    })
    $(".one").click(function () {
        let box1=$(this).index();
        $(".yiku").css({"display":"none"}).eq(box1).css({"display":"block"});
        $(".one").removeClass("play");
        $(this).addClass("play");
    })
}