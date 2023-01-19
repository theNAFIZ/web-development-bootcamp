btns = document.querySelectorAll("button");
console.log(btns);
for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    btn = this.innerHTML;
    animation = document.querySelector("." + btn);
    animation.classList.add("pressed");
    setTimeout(() => {
      animation.classList.remove("pressed");
    }, 20);
    playAudio(btn);
  });
}

document.addEventListener("keypress", function (event) {
  playAudio(event.key);
  animation = document.querySelector("." + event.key);
  if (animation) {
    animation.classList.add("pressed");
    setTimeout(() => {
      animation.classList.remove("pressed");
    }, 20);
  }
});

function playAudio(key) {
  switch (key) {
    case "w":
      file = new Audio("./sounds/tom-1.mp3");
      break;
    case "a":
      file = new Audio("./sounds/tom-2.mp3");
      break;
    case "s":
      file = new Audio("./sounds/tom-3.mp3");
      break;
    case "d":
      file = new Audio("./sounds/tom-4.mp3");
      break;
    case "j":
      file = new Audio("./sounds/snare.mp3");
      break;
    case "k":
      file = new Audio("./sounds/crash.mp3");
      break;
    case "l":
      file = new Audio("./sounds/kick-bass.mp3");
      break;
    default:
      file = new Audio();
      break;
  }
  file.play();
}
