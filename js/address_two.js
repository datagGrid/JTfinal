$(function () {
    let address=$("main .del .left");
    let yuan=$("main .del .change");
    yuan.click(function () {
        // let i=$(this).index();
        yuan.removeClass("icon-duihao");
        $(this).addClass("icon-duihao");
        yuan.removeClass("active");
        $(this).addClass("active");

    })
})