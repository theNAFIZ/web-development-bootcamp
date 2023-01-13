random1 = Math.floor(Math.random()*6)+1;
random2 = Math.floor(Math.random()*6)+1;

if(random1 > random2) {
    head = "Player 1 wins!"
} else if(random1 < random2) {
    head = "Player 2 wins!"
} else {
    head = "Match Draw!"
}

h1 = document.querySelector("h1");
img1 = document.querySelector(".img1");
img2 = document.querySelector(".img2");

src1 = "./images/dice"+random1+".png";
src2 = "./images/dice"+random2+".png";

h1.textContent = head;

img1.setAttribute("src", src1);
img2.setAttribute("src", src2);
