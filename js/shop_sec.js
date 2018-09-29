window.onload=function(){
    $(".bbb").click(function () {
        let box=$(this).index();
        $(".bbb").removeClass("dis");
        $(this).addClass("dis");
        $(".two").css({"display":"none"});
        $(".two").eq(box).css({"display":"block"});
    })

}



