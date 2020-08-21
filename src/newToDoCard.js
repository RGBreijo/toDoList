/****** 
   Methods uses to make a new to do card
******/
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
    let newCardObj = new toDoListCard(); 

    TO_DO_CARD_SECTION.appendChild(newCardObj.createToDoListCard(TITLE, DESCRIPTION, PRIORITY, DUE_DATE));
    
    setEventListeners()
    closeToDoInputCard();
}




/**
 * Closes to do input card 
 */
function closeToDoInputCard()
{   
    // clearToDoInputCard();
    document.querySelector(".positionInputContent").style.display = "none"; 
}


/**
 * Clears out the previous information that the user typed in the to card input box. 
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




/**
 * Sets the event listeners for the cards 
 * 
 * @param {*} e 
 */

function setEventListeners(e)
{
    const EDIT = Array.from(document.querySelectorAll(".toDoEdit")); 

    if(EDIT.length >= 1)
    {
        EDIT[EDIT.length - 1].addEventListener('click', test);
    }
}


/**
 * Changes the action that should be take when the create button is clicked in the to do list input part. 
 * The new action will be to edit the card that the edit option was clicked instead of adding a new card with those values. 
 * 
 * @param {*} e 
 */
function test(e)
{
    let target = e.target || e.srcElement;

    document.querySelector("#createToDoBtn").removeEventListener("click", createCard);


    // Fix for button having multiple event listeners 
    let old_element = document.getElementById("createToDoBtn");
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    document.querySelector("#createToDoBtn").addEventListener("click", () => {editMode(target)});
    document.querySelector(".positionInputContent").style.display = "flex"; 
}


// could it be saving the previous targets?

/**
 * 
 * @param {*} target The to do list card to be edited 
 */
function editMode(target)
{
    const CARD_INFORMATION = getToDoFormInformation(); 
    
    let title = CARD_INFORMATION.TITLE; 
    let description = CARD_INFORMATION.DESCRIPTION; 
    let priority = CARD_INFORMATION.PRIORITY; 
    let dueDate = CARD_INFORMATION.DUE_DATE; 

    changeCardContent(target, title, description, priority, dueDate); 
    closeToDoInputCard();
}


/**
 * 
 * Changes the conent of a card to new values. If no new value is specfied the 
 * old value remains. 
 * 
 * @param {*} target Path of the card selected 
 * @param {*} title new title for the card
 * @param {*} description new description for the card
 * @param {*} priority new priority status for the card
 * @param {*} dueDate new date status for the card
 */
function changeCardContent(target, title, description, priority, dueDate)
{

    console.log(target);
    const TITLE_PATH = target.parentElement.parentElement.parentElement.parentElement.children[1].firstChild.firstChild;
    const DESCRIPTION_PATH = target.parentElement.parentElement.parentElement.parentElement.children[1].lastChild;
    const PRIORITY_PATH = target.parentElement.parentElement.parentElement.parentElement.lastChild.firstChild.firstChild.firstChild.firstChild;
    const DUE_DATE_PATH = target.parentElement.parentElement.parentElement.parentElement.lastChild.firstChild.lastChild.lastChild.firstChild;

    TITLE_PATH.textContent = title; 
    DESCRIPTION_PATH.textContent = description; 
    PRIORITY_PATH.textContent = priority; 
    DUE_DATE_PATH.textContent = dueDate; 
}
















/**
 * Set mode back to default once it once edited 
 * also need to save it 
 */


export{createCard};