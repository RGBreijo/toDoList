

/*
    get all the informaiton from the to do card input
*/

function getToDoFormInformation()
{
    const TITLE  = getTitle(); 
    const DESCRIPTION = getDiscription(); 
    const PRIORITY = getPriority(); 
    const DUE_DATE = getDueDate();  

    return{TITLE, DESCRIPTION, PRIORITY, DUE_DATE};
}



/**
 * Grab the content of the title in the to do input form 
 */
function getTitle()
{
    const TITLE_ELEMENT = document.querySelector("#title"); 
    return TITLE_ELEMENT.value;
}


/**
 * Grab the content of the description in the to do input form 
 */
function getDiscription()
{
    const DESCRIPTION_ELEMENT = document.querySelector("#toDoDescription"); 
    return DESCRIPTION_ELEMENT.value; 
}



/**
 * Grab the priority in the to do input form 
 */
function getPriority()
{
    const PRIORITY_ELEMENTS = Array.from(document.querySelectorAll(".priorityLevel")); 
    let priorityLvlPicked = null;

    for (let prioritylvlElements = 0; prioritylvlElements < PRIORITY_ELEMENTS.length; prioritylvlElements++)
    {
        if(PRIORITY_ELEMENTS[prioritylvlElements].checked)
        {
            priorityLvlPicked = PRIORITY_ELEMENTS[prioritylvlElements].value; 
        }
    }

    if(priorityLvlPicked != null)
    {
        return priorityLvlPicked;
    }else
    {
        return;
    }
}


/**
 * Get the due date 
 */
function getDueDate()
{
    const DUE_DATE = document.querySelector("#dueDate"); 
    return DUE_DATE.value; 
}

export{getToDoFormInformation};


