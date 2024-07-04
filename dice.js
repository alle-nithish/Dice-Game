var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

var diceImage1 = "dice" + randomNum1 + ".png";
var diceImage2 = "dice" + randomNum2 + ".png";

document.querySelector(".img1").setAttribute("src", "./images/" + diceImage1);
document.querySelector(".img2").setAttribute("src", "./images/" + diceImage2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML="Player1 Wins!";
}
else if(randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML="Player2 Wins!";
}
else { 
    document.querySelector("h1").innerHTML="Draw!";
}
