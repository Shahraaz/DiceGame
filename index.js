var a = Math.floor((Math.random() * 5) + 1);
var b = Math.floor((Math.random() * 5) + 1);

console.log(a);
var v = document.getElementsByTagName("H1")[0];
if (a == b)
    v.innerHTML = "Draw!";
else if (a > b)
    v.innerHTML = "🚩Player One Wins!";
else v.innerHTML = "Player Two Wins!🚩";

var srca = "images/dice" + a + ".png";
var srcb = "images/dice" + b + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src", srca);
document.getElementsByClassName("img2")[0].setAttribute("src", srcb);