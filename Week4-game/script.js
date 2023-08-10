document.addEventListener("DOMContentLoaded", () => {
    const Button = document.getElementById("button");
    const pictureContainer = document.getElementById("pictureContainer");
  
    Button.addEventListener("click", () => {
      // Toggle the visibility of the picture container
      pictureContainer.style.display = pictureContainer.style.display === "none" ? "block" : "none";
  
      // Load and display the picture
      if (pictureContainer.style.display === "block") {
        const picture = document.createElement("img");
        picture.src = "https://freight.cargo.site/w/1080/q/94/i/8c26cb1e6d8b7aead75057ad75428318b5e604d054e018e62d7b3a628c6bb70b/coinflip_01.gif" // Replace with the actual image path
        pictureContainer.innerHTML = ""; // Clear any existing content
        pictureContainer.appendChild(picture);
      }
    });
  })

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const submitButton = document.getElementById("submit");
    const errorMessage = document.getElementById("error");
    const winMessage = document.getElementById("winLose");
    
  function compareResult() {
    let input = document.getElementById("guess").value;
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


  
   
    
  

  