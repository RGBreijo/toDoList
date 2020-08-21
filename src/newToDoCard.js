/*
   Methods uses to make a new to do card
*/
import {getToDoFormInformation} from "./getToDoCardInput.js";
import {toDoListCard} from "./toDoCard.js";





/*
    Executes the required methods needed to create a new card 
*/
function createCard()
{
    const TO_DO_CARD_SECTION = document.querySelector("#toDoListSection"); 

    const CARD_INFORMATION = getToDoFormInformation(); 

    const TITLE = CARD_INFORMATION.TITLE; 
    const DESCRIPTION = CARD_INFORMATION.DESCRIPTION;
    const PRIORITY = CARD_INFORMATION.PRIORITY;
    const DUE_DATE = CARD_INFORMATION.DUE_DATE; 

    // save info 
    let newCard = new toDoListCard(); 
    TO_DO_CARD_SECTION.appendChild(newCard.createToDoListCard(TITLE, DESCRIPTION, PRIORITY, DUE_DATE));

    closeToDoInputCard();
}




/**
 * Closes to do input card 
 */
function closeToDoInputCard()
{   
    clearToDoInputCard();
    document.querySelector(".positionInputContent").style.display = "none"; 
}


/**
 * Clears out the previous information that the user typed. 
 */
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


export{createCard};