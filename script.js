function play_game(){

 let computer_score = 0;
 let Your_score     = 0;
 let i= 0;
 while( i<5 ){

   function play_round(){
       function computer_choice(){
   
       return Math.floor (Math.random()*3) + 1;
       }
   
   
       function user_choice(){
       let a = prompt("            CHOOSE!\nRock       Paper       Scissor");
           let b = a.toUpperCase();
       
           if (b!=="ROCK"&& b!=="PAPER"&& b!=="SCISSOR"){
               alert("Plz enter correct word");
               user_choice();
           }
           else if (b=="ROCK"){
               return 1; 
           }
           else if (b==="PAPER"){
               return 2; 
           }
           else{
               return 3; 
           }
       }
   
       user_code = user_choice();
       comp_code = computer_choice();
   
   
       if (user_code===comp_code){
           alert("Tie");
       }
       else if ((user_code=== 1 && comp_code===3) || (user_code===2 && comp_code===1) || (user_code===3 && comp_code===2)){
           alert("You win");
           Your_score+=1;
           i+=1;
       }
       else if ((comp_code===1 && user_code===3) || (comp_code===2 && user_code===1) || ((comp_code===3 && user_code===2)) ){
           alert("Robot won");
           computer_score+=1;
           i+=1;
       }
      
   }
   
   play_round();

 }
 if(Your_score>computer_score){
    alert(`Congratulations! You won!!!\nYour score: ${Your_score} \nRobot's score: ${computer_score}`);
 }
 else{
    alert(`AWww! You lost :(\nYour score: ${Your_score} \nRobot's score: ${computer_score}`);
 }
if(confirm("Do you want to play again")){
    play_game();
}else{
    alert("Good bye!");
}
}

play_game()