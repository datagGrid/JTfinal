window.onload=function () {
    $(".p123").click(function () {

        let i=$(this).index();
        $(".aa").eq(i).slideToggle();
        $(".p123").removeClass("bo");
        $(this).addClass("bo");
        $("header").toggleClass("lo");
    })
}