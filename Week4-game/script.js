document.addEventListener("DOMContentLoaded", () => {
    const Button = document.getElementById("button");
    const pictureContainer = document.getElementById("pictureContainer");
  
    Button.addEventListener("click", () => {
      // Toggle the visibility of the picture container: checking condition if not=="block"
      pictureContainer.style.display = pictureContainer.style.display !== "block" ? "block" : "none";
  
      
    });
  })

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const submitButton = document.getElementById("submit");
    const errorMessage = document.getElementById("error");
    const winMessage = document.getElementById("winLose");
    
  function compareResult() {
    let input = document.getElementById("guess").value;
    errorMessage.innerHTML="";
    let coinFlip = Math.round(Math.random());
    let userGuess; 
    if (input==="Tail" || input==="tail"){ userGuess=0 }
    else if (input==="Head" || input==="head"){ userGuess=1}
    else {errorMessage.innerHTML="Please enter a valid guess: (Tail/Head)";
      return; // Exit the function if input is not valid}
    }
    console.log(input)
  console.log(coinFlip)
  console.log(userGuess)
  if (userGuess === coinFlip){
    winMessage.innerHTML = "Congradulations! Your guess was correct."
  }
  else{
    winMessage.innerHTML = "Sorry, your guess was incorrect."
  }
  }
    
  form.addEventListener("submit", (event) => {
      
      event.preventDefault(); // Prevent the form from submitting
  
      compareResult();
    });
})


  
   
    
  

  