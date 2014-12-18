$(document).ready(function() {
    $("li").click(function() {
        $("audio").trigger("load").eq($(this).index() % 4).trigger("play");
    });
});