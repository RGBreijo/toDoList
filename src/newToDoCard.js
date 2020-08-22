import {getToDoFormInformation} from "./getToDoCardInput.js";
import {toDoListCard} from "./toDoCard.js";
import{saveToDoCard} from "./dataStorage.js";


/*
    Executes the methods required to create a new card. 
    This is called by the finish button located in the input box where the user fills 
    out the card information. 
*/
function createCard()
{
    const TO_DO_CARD_SECTION = document.querySelector("#toDoListSection"); 

    // Grab the informatino that the user typed into the input elements 
    const CARD_INFORMATION = getToDoFormInformation(); 

    const TITLE = CARD_INFORMATION.TITLE; 
    const DESCRIPTION = CARD_INFORMATION.DESCRIPTION;
    const PRIORITY = CARD_INFORMATION.PRIORITY;
    const DUE_DATE = CARD_INFORMATION.DUE_DATE; 


    // Create new card object based on the uesr value and display it in the screen 
    let newCardObj = new toDoListCard(); 
    newCardObj.createToDoListCard(TITLE, DESCRIPTION, PRIORITY, DUE_DATE);

    TO_DO_CARD_SECTION.appendChild(newCardObj.createToDoListCard(TITLE, DESCRIPTION, PRIORITY, DUE_DATE));
    
    setEventListeners() // Sets the event listeners for the newely created card 
    saveToDoCard({TITLE, DESCRIPTION, PRIORITY, DUE_DATE}); 
    closeToDoInputCard(); 
}


/**
 * Closes the input card. The input card is the element displayed 
 * when the user is filling information about the to list card. 
 */
function closeToDoInputCard()
{   
    document.querySelector(".positionInputContent").style.display = "none"; 
}

/**
 * opens the input card. The input card is the element displayed 
 * when the user is filling information about the to list card. 
 */
function openToDoInputCard()
{   
    document.querySelector(".positionInputContent").style.display = "flex"; 
}


/**
 * Populates the input card with the information that was written in a do list card. 
 * 
 * when the user edits a card the input card is empty. 
 * This function fills the input card using information from a specific card 
 * so that the user does not have to retype all the content if they want to make a small change. 
 * 
 * @param {*} cardObj to do list card object containing the information of the card 
 */
function populateInputWithCurrentData(cardObj)
{
    let title = cardObj.CURRENT_TITLE; 
    let description = cardObj.CURRENT_DESCRIPTION; 
    let priority = cardObj.CURRENT_PRIORITY; 
    let dueDate = cardObj.CURRENT_DUE_DATE; 

    const TITLE_ELEMENT = document.querySelector("#title"); 
    const DESCRIPTION_ELEMENT = document.querySelector("#toDoDescription"); 
    const PRIORITY_ELEMENTS = Array.from(document.querySelectorAll(".priorityLevel")); 
    const DUE_DATE = document.querySelector("#dueDate"); 


    TITLE_ELEMENT.value = title;
    DESCRIPTION_ELEMENT.value = description; 
    DUE_DATE.value = dueDate;

    
    for(let i = 0; i < PRIORITY_ELEMENTS.length; i++)
    {
       if(PRIORITY_ELEMENTS[i].value === priority)
       {
        PRIORITY_ELEMENTS[i].checked = true; 
       }
    

    }
}


/**
 * Sets the event listeners for newly created to do list card  
 * 
 * @param {*} e 
 */
function setEventListeners(e)
{
    const EDIT = Array.from(document.querySelectorAll(".toDoEdit")); 
    const CLOSE = Array.from(document.querySelectorAll(".deleteToDoContainer")); 

    if(EDIT.length >= 1)
    {
        EDIT[EDIT.length - 1].addEventListener('click', editCard);
        CLOSE[CLOSE.length - 1].firstElementChild.addEventListener('click', deleteCard);
    }
}


/**
 * 
 * This is added to the edit button when a new card is created 
 * 
 * Changes the action that should be preformed when finish is clicked 
 * in the input card. 
 * 
 * The new action of the finish button will edit the content of the 
 * card that the edit option was selected instead of creating a new card. 
 * 
 * 
 * @param {*} e event 
 */
function editCard(e)
{
    let target = e.target || e.srcElement;

    populateInputWithCurrentData(getEditCardInformation(target)); 

    // Gets rid of the previous event listeners attached to createToDoBtn
    let old_element = document.getElementById("createToDoBtn");
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);  

    // Ads a new event listener for input card to change the action and opens the input card 
    document.querySelector("#createToDoBtn").addEventListener("click", () => {editMode(target)});
    openToDoInputCard(); 
}



/**
 * Changes the action that should be preformed when finish is clicked 
 * in the input card. 
 * 
 * The new action of the finish button will edit the content of the 
 * card that the edit option was selected instead of creating a new card. 
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
 * Changes the content of a card to new values. If no new value is specfied the 
 * old value will remain. 
 * 
 * @param {*} target Path of the card selected 
 * @param {*} title new title for the card
 * @param {*} description new description for the card
 * @param {*} priority new priority status for the card
 * @param {*} dueDate new date status for the card
 */
function changeCardContent(target, title, description, priority, dueDate)
{
    const TITLE_PATH = target.parentElement.parentElement.parentElement.parentElement.children[1].firstChild.firstChild;
    const DESCRIPTION_PATH = target.parentElement.parentElement.parentElement.parentElement.children[1].lastChild;
    const PRIORITY_PATH = target.parentElement.parentElement.parentElement.parentElement.lastChild.firstChild.firstChild.firstChild.firstChild;
    const DUE_DATE_PATH = target.parentElement.parentElement.parentElement.parentElement.lastChild.firstChild.lastChild.lastChild.firstChild;

    TITLE_PATH.textContent = title; 
    DESCRIPTION_PATH.textContent = description; 

    let setPriority = `priority${priority}`;

    PRIORITY_PATH.parentElement.setAttribute("class", setPriority); 
    PRIORITY_PATH.textContent = priority; 

    DUE_DATE_PATH.textContent = dueDate; 
}



/**
 * Grabs the information that the card which the edit option was clicked 
 * in contians. 
 */
 function getEditCardInformation(target)
 {

    const CURRENT_TITLE = target.parentElement.parentElement.parentElement.parentElement.children[1].firstChild.firstChild.textContent;
    const CURRENT_DESCRIPTION = target.parentElement.parentElement.parentElement.parentElement.children[1].lastChild.textContent;
    const CURRENT_PRIORITY = target.parentElement.parentElement.parentElement.parentElement.lastChild.firstChild.firstChild.firstChild.firstChild.textContent;
    const CURRENT_DUE_DATE = target.parentElement.parentElement.parentElement.parentElement.lastChild.firstChild.lastChild.lastChild.firstChild.textContent;


    return{CURRENT_TITLE, CURRENT_DESCRIPTION, CURRENT_PRIORITY, CURRENT_DUE_DATE}
 }

/**
 * Deletes the selected to do card 
 * @param {*} e 
 */
 function deleteCard(e)
 {
    let target = e.target || e.srcElement;
    target.parentElement.parentElement.remove();
 }


export{createCard};