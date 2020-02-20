let imgBall = null;
imgBall = document.getElementById("ball");

function moveBall() {
    imgBall.style.position = "relative";
    imgBall.style.left = "0px";
}

function moveRight() {
    imgBall.style.left = parseInt(imgBall.style.left) + 100 + "px";
}

window.onload = moveBall;