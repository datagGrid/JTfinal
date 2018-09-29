window.onload=function(){
    let list=$(".list");
    let card=$(".card");
    list.click(function(){
        let i=$(this).index();
        list.removeClass("active").eq(i).addClass("active");
        card.fadeOut("slow").eq(i).fadeIn("slow");
    })
}