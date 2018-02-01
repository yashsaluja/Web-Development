var secretNumber = 7;
var guess = prompt("Guess a number");

if(guess == secretNumber)
{
	alert("You got it right");

}
else if(guess>secretNumber)
{
	alert("Too high. Guess again! bc");
}

else{
	alert("Too low. Guess again! bc");
}