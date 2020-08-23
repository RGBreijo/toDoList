import {getToDoInformation} from "./getToDoCardInput.js";
import {toDoListCard} from "./toDoCard.js";
import{saveToDoCard, displayCard, deleteToDoCard, updateToDoCard} from "./dataStorage.js";
import {closeToDoInputCard, openToDoInputCard, populateInputWithCurrentData, editMode} from "./todoInput.js";

/*
    Executes the methods required to create a new card grabing data from the input section
*/
function createCardThroughInput()
{
    const CARD_INFORMATION = getToDoInformation(); 

    const TITLE = CARD_INFORMATION.TITLE; 
    const DESCRIPTION = CARD_INFORMATION.DESCRIPTION;
    const PRIORITY = CARD_INFORMATION.PRIORITY;
    const DUE_DATE = CARD_INFORMATION.DUE_DATE; 

    createCard(TITLE, DESCRIPTION, PRIORITY, DUE_DATE);
    closeToDoInputCard(); 
    displayCard();
}

/*
    Create a to do card without input block 
*/
function createCard(TITLE, DESCRIPTION, PRIORITY, DUE_DATE)
{
    const TO_DO_CARD_SECTION = document.querySelector("#toDoListSection"); 

    let newCardObj = new toDoListCard(); 
    TO_DO_CARD_SECTION.appendChild(newCardObj.createToDoListCard(TITLE, DESCRIPTION, PRIORITY, DUE_DATE));
    
    setEventListeners() 
    saveToDoCard({TITLE, DESCRIPTION, PRIORITY, DUE_DATE}); 
    
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

    const CURRENT_TITLE = target.parentElement.parentElement.children[1].firstChild.firstChild.textContent;
    const CURRENT_DESCRIPTION = target.parentElement.parentElement.children[1].lastChild.textContent;
    const PRIORITY = target.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.firstElementChild.textContent; 
    const DUE_DATE = target.parentElement.parentElement.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.textContent;

    target.parentElement.parentElement.remove();
    deleteToDoCard(CURRENT_TITLE, CURRENT_DESCRIPTION, PRIORITY, DUE_DATE); 

 }



 function clearAllCards()
 {
    let toDoCards = Array.from(document.querySelectorAll(".toDoListCard")); 
   
    for(let i = 0; i < toDoCards.length; i++)
    {
        toDoCards[i].remove(); 
    }

    // also need to set the delete node thing 
    displayCard();
 }




export{createCardThroughInput, createCard as createCardWithoutInputBlock, clearAllCards, changeCardContent};