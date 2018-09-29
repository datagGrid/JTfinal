window.onload=function () {
    $(".dl").click(function () {
        let i=$(this).index();
        $(".aa").eq(i).slideToggle();
        $(".dl").removeClass("bo");
        $(this).addClass("bo");
        $("header").toggleClass("lo");
    })
}