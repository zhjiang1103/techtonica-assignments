//Adding ingredient to the list
// First up, let's create a new list item and store it in a variable.
var newListItem = document.createElement('li');

// Now let's update the text content of that list item.
newListItem.textContent = 'Nori seaweed strips';

// And finally, let's add that list item as a child of the ul.
document.querySelector('ul').appendChild(newListItem);


//Adding checkbox
// Step 1: Select the list element
const listElement = document.getElementById("myList").getElementsByTagName("ul");
// Step 2: Iterate through list items
const listItems = listElement.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
    // Step 3: Create a new checkbox for each list item
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.name = "name";
    newCheckbox.value = "value";
    newCheckbox.id = "id";
    //Step 4: Attach the checkbox to the list item
            listItems[i].appendChild(newCheckbox);
}


