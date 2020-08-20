import {getToDoFormInformation} from "./grabToDoCardInput.js";
import {toDoListCard} from "./toDoCard.js";



    // grab content (module)
    // create card (module)
    // save card (module)
    // display card 



function createCard()
{
    const TO_DO_CARD_SECTION = document.querySelector("#toDoListSection"); 

    const CARD_INFORMATION = getToDoFormInformation(); 

    const TITLE = CARD_INFORMATION.TITLE; 
    const DESCRIPTION = CARD_INFORMATION.DESCRIPTION;
    const PRIORITY = CARD_INFORMATION.PRIORITY;
    const DUE_DATE = CARD_INFORMATION.DUE_DATE; 


    // // save info 
    let newCard = new toDoListCard(); 
    TO_DO_CARD_SECTION.appendChild(newCard.createToDoListCard(TITLE, DESCRIPTION, PRIORITY, DUE_DATE));
    closeForm();
}

function closeForm()
{
    document.querySelector(".positionInputContent").style.display = "none"; 
}




export{createCard};