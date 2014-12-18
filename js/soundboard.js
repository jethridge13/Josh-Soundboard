$(document).ready(function() {
    $("li").click(function() {
        $("audio").trigger("load").eq($(this).index() % 4).trigger("play");
    });
});

function AudioQueue() {
    
    var self = this;
    
    var list = [];
    
    this.addAudio = function(audio) {
        list.push(audio);
    };
    
    this.play = function() {
        var audio = list.shift();
        if (audio !== null) {
            audio.addEventListener("ended", self.play);
            audio.load();
            audio.play();
        }
    };
    
}