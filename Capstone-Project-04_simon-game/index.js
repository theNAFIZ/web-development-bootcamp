pattern = []
userPattern = []
start = false;
level = 0;

$(document).on("keypress", function() {
    if(!start) {
        nextSequence();
        start = true;
    }
});

$(".btn").click(function() {
    clicked = $(this).attr('id')
    userPattern.push(clicked)
    animate(clicked)
    playSound(clicked)
    
    checkAnswer(userPattern.length - 1)
});

function checkAnswer(position) {
    if(pattern[position] === userPattern[position]) {
        if(pattern.length === userPattern.length) {
            setTimeout(function() {
                nextSequence()
            }, 1000);
        }
    } else {
        playSound("wrong")
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

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
    userPattern = []
    level++;
    $("h1").text("Level "+level)
    colors = ['green', 'red', 'yellow', 'blue'];
    randomColor = colors[Math.floor(Math.random()*3.99)];
    pattern.push(randomColor)
    $("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomColor)
}

function startOver() {
    start = false
    userPattern = []
    pattern = []
    level = 0
}