//Adding ingredient to the list
// First up, let's create a new list item and store it in a variable.
//var newListItem = document.createElement('li');

// Now let's update the text content of that list item.
//newListItem.textContent = 'Nori seaweed strips';

// And finally, let's add that list item as a child of the ul.
//document.querySelector('ul').appendChild(newListItem);


//Adding checkbox
const ingredientList=["Spicy salted pollock roe or cod roe (karashi mentaiko)",
"Whole milk",
"Heavy (whipping) cream",
"Unsalted butter",
"Soy sauce",
"Spaghetti",
"Kosher salt and black pepper",
"Toppings: shredded nori seaweed (kizami nori) and shiso leaves (perilla/ooba)",'Nori seaweed strips'];

const ul = document.getElementById("ingredientsList");
//const li = document.createElement("li");
//Iterate through list items
for (let i = 0; i < ingredientList.length; i++) {
    // Step 3: Create a new checkbox for each list item
    const li = document.createElement("li");
    let CheckboxInput = document.createElement("input");
    let newLabel = document.createElement("label");
    CheckboxInput.setAttribute("type","checkbox");
    newLabel.innerHTML = ingredientList[i];
    newLabel.style.display = "block";
    
    //Step 4: Attach the checkbox to the list item
            newLabel.prepend(CheckboxInput);
            li.prepend(newLabel);
            ul.appendChild(li);
    

    li.addEventListener("click",(e)=>{
        console.log(e.target);
        if (e.target.className =="checked"){
            e.target.className="";
        }
        else {e.target.className="checked";}})
}


const stepList = document.getElementById("steps").getElementsByTagName("li")
//console.log(stepList);
for (let i=0; i<stepList.length; i++){
    
    stepList[i].addEventListener("click",(e)=>{
        if (e.target.className =="checked"){
            e.target.className="";
        }
        else {e.target.className="checked";}


})
}

