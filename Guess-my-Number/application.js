$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var computerguess = Math.floor(Math.random()*100) + 1;
  console.log("the computer number is: " + computerguess);
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var playerguess = parseInt($('input').val());
    console.log("the player number is: " + playerguess);
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
   
      //what happens if the guess is correct?
    }
    //if the user guessed too high...
    if (playerguess > computerguess){
      confirm ("Woah your a bit high there pal")
    }
  else
  confirm("TO LOW BROSKI");
  
   if (playerguess === computerguess ){
    confirm ("hey great job, You guess the right Number.");}
    
    if (prompt("Do you want to play again?")==="yes"){
      window.open("http://cwiseguy.github.io/Guess-my-Number/index.html");
      }
    else
    confirm("GG MATE");
      //update the 'feedback' paragraph to tell them to guess lower
      
    //otherwise, the user guessed too low...
    
      //update the 'feedback' paragraph to tell them to guess higher
    
  });
});
