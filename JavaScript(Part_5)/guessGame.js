let guess = prompt("Guess the number between 1 to 100 ");

const random = Math.floor(Math.random()*100)+1;

while(true){
    if(guess=="quit"){
        console.log("You quitted the game. ");
        break;
    }
    if(guess == random){
        console.log("Congratulations! You are right. The random number was ",random);
        break;
    }
    else if(guess > random){
        guess= prompt("Your number is bigger! Please try again.");
    }
    else{
        guess= prompt("Your number is smaller! Please try again.");
    }
}