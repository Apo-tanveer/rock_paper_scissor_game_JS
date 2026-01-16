    let para = document.querySelector("p")
    let buttons = document.querySelectorAll("button");

    buttons.forEach(btn=>{
        btn.addEventListener("click", (e)=>{
//---------------USER---CHOICE-------------------///
            let user_choice = 0;
            
            if(e.target.id === "rock"){
                user_choice= 1;
            }
            else if(e.target.id === "paper"){
                user_choice= 2;
            }
            else if(e.target.id === "scissor"){
                user_choice= 3;
            }
        
     
    //--------------COMPUTER--CHOICE---------//
            
            function computerChoice(){
   
              return Math.floor (Math.random()*3) + 1;
             }

            let computer_choice = computerChoice();
    

            if (user_choice===computer_choice){
                  para.textContent= "Tie";
               }
            else if ((user_choice=== 1 && computer_choice===3) || (user_choice===2 && computer_choice===1) || (user_choice===3 && computer_choice===2)){
                 para.textContent= "You won";
                    
             }
            else if ((computer_choice===1 && user_choice===3) || (computer_choice===2 && user_choice===1) || ((computer_choice===3 && user_choice===2)) ){
                 para.textContent= "Robot won";
                
             }





        } )
    })
    


    