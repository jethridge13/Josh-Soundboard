$(document).ready(function() {
    $("li").click(function() {
        var audio = $("audio");
        audio.trigger("load");
        audio.trigger("play");
    });
});