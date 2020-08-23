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

export{closeToDoInputCard, openToDoInputCard, populateInputWithCurrentData};