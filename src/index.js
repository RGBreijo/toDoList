import {toDoListCard} from "./toDoCard.js";
import{createCard} from "./newToDoCard.js";






document.querySelector("#createToDoBtn").addEventListener("click", createCard); // OUTSIDE + 
document.querySelector("#addList").addEventListener("click", displayToDoInput);


function displayToDoInput()
{

    // Fix for button having multiple event listeners 
    let old_element = document.getElementById("createToDoBtn");
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    document.querySelector("#createToDoBtn").addEventListener("click", createCard);

    document.querySelector(".positionInputContent").style.display = "flex"; 
}
