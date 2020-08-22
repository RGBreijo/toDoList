let storeProjectObj = []; // Store all the projects created 

let projectObj = () =>
{
    let storedProjectList = []; // to do card associated with the project 
    let originalProjectName = "";  // project name 

    return{storedProjectList, originalProjectName}; 
}


/**
 * Make a new project object if one is not already made (Need to watch out for duplicates)
 */
function saveProjectName()
{
    // Gets the highlighted project
    let PROJECTS = Array.from(document.querySelectorAll(".projectSelected")); 
    let projectSelectedName = PROJECTS[0].firstElementChild.textContent;
    let found = false; 


    // Check if project was already created 
    for(let i = 0; i < storeProjectObj.length; i++)
    {
        if(storeProjectObj[i].originalProjectName === projectSelectedName)
        {
            found = true; 
        }
    }

    // If not created adds it to the list 
    if(!found)
    {
        let newProject = projectObj(); 
        newProject.originalProjectName = projectSelectedName;
        storeProjectObj.push(newProject); 
    }
}


/**
 * Save a to do list card obj to a project 
 * 
 * @param {*} projectName  
 * @param {*} listObj 
 */
function saveToDoCard(listObj)
{
    saveProjectName(); // Checks to see if the selected project is already made. If not made saved it makes it.  

    let PROJECTS = Array.from(document.querySelectorAll(".projectSelected"));  
    let projectSelectedName = PROJECTS[0].firstElementChild.textContent; // project name to determine where to do list should be stored 

    for(let i = 0; i < storeProjectObj.length; i++)
    {
        if(storeProjectObj[i].originalProjectName === projectSelectedName)
        {
            storeProjectObj[i].storedProjectList.push(listObj); 
        }
    }
    displayCard();
}

// math do homework 1   physics do homework one   or math do homework one  math call proff
function deleteToDoCard(title, description, priority, dueDate)
{
    let PROJECTS = Array.from(document.querySelectorAll(".projectSelected"));  
    let projectSelectedName = PROJECTS[0].firstElementChild.textContent; // project name to determine where to do list should be stored 

    for(let i = 0; i < storeProjectObj.length; i++)
    {

        if(storeProjectObj[i].originalProjectName === projectSelectedName) // Find project 
        {
            for(let toDoCard = 0; toDoCard < storeProjectObj[i].storedProjectList.length; toDoCard++) 
            {
                let cardTitle = storeProjectObj[i].storedProjectList[toDoCard].TITLE; 
                let cardDescription = storeProjectObj[i].storedProjectList[toDoCard].DESCRIPTION; 
                let cardPriority = storeProjectObj[i].storedProjectList[toDoCard].PRIORITY; 
                let cardDueDate= storeProjectObj[i].storedProjectList[toDoCard].DUE_DATE; 

                // If it works then add the priority and due date the same 
                if(cardTitle === title && cardDescription === description && cardPriority === priority && cardDueDate == dueDate)
                {
                    storeProjectObj[i].storedProjectList.splice(toDoCard, 1); 
                }
            }
        }
    }
    console.log("deleted");
    console.log(storeProjectObj); 
}


function displayCard()
{
    console.log(storeProjectObj); 
}

function updateToDoCard()
{


}

export{saveToDoCard, saveProjectName, displayCard, deleteToDoCard};

