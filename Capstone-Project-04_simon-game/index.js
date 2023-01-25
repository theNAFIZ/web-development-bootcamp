pattern = []
user = []
start = false;
level = 0;
$("body").on("keypress", function() {
    if(!start) {
        level++;
        $("h1").text("Level "+level)
        nextSequence();
        start = true;
    }
});
$(".btn").click(function() {
    clicked = $(this).attr('id')
    user.push(clicked)
    animate(clicked)
    playSound(clicked)
    //TODO: Check Answer function
})

function playSound(color) {
    sound = new Audio("sounds/"+color+".mp3")
    sound.play()
}

function animate(color) {
    $("#"+color).addClass('pressed')
    setTimeout(function () {
        $("#"+color).removeClass('pressed')
    }, 100);
}

function nextSequence() {
    colors = ['green', 'red', 'yellow', 'blue'];
    randomColor = colors[Math.floor(Math.random()*3.99)];
    pattern.push(randomColor)
    $("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomColor)
}
