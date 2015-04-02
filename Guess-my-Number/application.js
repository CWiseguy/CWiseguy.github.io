$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var computerguess = Math.floor(Math.random()*100) + 1;
  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var playerguess = parseInt($('input').val());
    
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if (playerguess === computerguess ){
    console.log("hey great job, You guess the right Number.")
    }
      //what happens if the guess is correct?
      prompt("Do you want to play again?")
    //if the user guessed too high...
    if (userguess > computerguess){
      console.log("Woah your a bit high there pal")
    }
  
      //update the 'feedback' paragraph to tell them to guess lower
      
    //otherwise, the user guessed too low...
    
      //update the 'feedback' paragraph to tell them to guess higher
    
  });
});
