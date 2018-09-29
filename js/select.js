function select_effect(tui,select) {
    tui.click(function () {
        let index=$(this).index()-1;
        texta=$(this).children().children().children().next().text();
        select.css("opacity","0");
        select.eq(index).css("opacity","1");
    })
}