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
  });



document.addEventListener("click",(event)=>{
event.preventDefault()

}
)