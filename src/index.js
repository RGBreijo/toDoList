import {toDoListCard} from "./toDoCard.js";
import{createCard} from "./newToDoCard.js";






document.querySelector("#createToDoBtn").addEventListener("click", createCard); // OUTSIDE + 
document.querySelector("#addList").addEventListener("click", displayToDoInput);



document.querySelector("#todoInputCardClose").firstElementChild.addEventListener("click", closeToDoInputScreen);


function displayToDoInput()
{
    // Fix for button having multiple event listeners 
    let old_element = document.getElementById("createToDoBtn");
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    document.querySelector("#createToDoBtn").addEventListener("click", createCard);
    document.querySelector(".positionInputContent").style.display = "flex"; 
    clearToDoInputCard();
}

function closeToDoInputScreen()
{
    document.querySelector(".positionInputContent").style.display = "none";
}


function clearToDoInputCard()
{
    const TITLE_ELEMENT = document.querySelector("#title"); 
    const DESCRIPTION_ELEMENT = document.querySelector("#toDoDescription"); 
    const PRIORITY_ELEMENTS = Array.from(document.querySelectorAll(".priorityLevel")); 
    const DUE_DATE = document.querySelector("#dueDate"); 

    TITLE_ELEMENT.value = null;
    DESCRIPTION_ELEMENT.value = null; 
    DUE_DATE.value = null;

    for(let i = 0; i < PRIORITY_ELEMENTS.length; i++)
    {
        PRIORITY_ELEMENTS[i].checked = false;
    }
}