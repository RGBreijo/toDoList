let storeProjectObj = []; // Store all the projects created 



let projectObj = () =>
{
    let storedProjectList = []; // to do card associated with the project 
    let originalProjectName = "";  // project name 

    return{storedProjectList, originalProjectName}; 
}

/**
 * return the list containg the projects
 */
function getStoreProjectObjs()
{
    return storeProjectObj;
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

    saveDataOnLocal(); 
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

    saveDataOnLocal(); 
}

/**
 * 
 * Deletes a to do card 
 * 
 * @param {*} title title of the to do car d 
 * @param {*} description description of the to do car d 
 * @param {*} priority priority of the to do car d 
 * @param {*} dueDate due date of the to do car d 
 */
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

    saveDataOnLocal(); 

}


/**
 * TEST FUNCTION TO CHECK SUCCESSFUL STORAGE OF PROJECTS 
 */
function displayCard()
{
    console.log(storeProjectObj); 
}


/**
 * Update the contents of a card in storage 
 * 
 * @param {*} selectedProject 
 */
function updateToDoCard(selectedProject)
{

    for(let i = 0; i < storeProjectObj.length; i++)
    {
        if(storeProjectObj[i].originalProjectName === selectedProject)
        {
            storeProjectObj[i].storedProjectList = [];
            let toDoCards = document.querySelectorAll(".toDoListCard"); 

            for(let i = 0; i < toDoCards.length; i++)
            {
                const TITLE = toDoCards[i].children[1].firstElementChild.firstElementChild.textContent;
                const DESCRIPTION = toDoCards[i].children[1].lastElementChild.textContent;
                const PRIORITY = toDoCards[i].children[1].parentElement.lastElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.textContent;
                const DUE_DATE = toDoCards[i].children[1].parentElement.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.textContent;
                
                saveToDoCard({TITLE, DESCRIPTION, PRIORITY, DUE_DATE});
            }
        }
    }
    saveDataOnLocal(); 
    displayCard();
}



/**
 * Change the name of a project
 * 
 * @param {*} oldProjectName 
 * @param {*} newProjectName 
 */
function updateProjectName(oldProjectName, newProjectName)
{

    for(let i = 0; i < storeProjectObj.length; i++)
    {
        if(storeProjectObj[i].originalProjectName === oldProjectName)
        {
            storeProjectObj[i].originalProjectName = newProjectName;
        }
    }
    saveDataOnLocal(); 
}

/**
 * Delete a project from the project list 
 * @param {*} projectName name of project to be deleted
 */
function deleteProjectStorage(projectName)
{
    for(let i = 0; i < storeProjectObj.length; i++)
    {
        if(storeProjectObj[i].originalProjectName === projectName)
        {
            storeProjectObj.splice(i, 1);
        }
    }
    saveDataOnLocal(); 
}


/**
 * Save data that is stored locally 
 */
function saveDataOnLocal()
{
    localStorage.setItem("storeProjectObj", JSON.stringify(storeProjectObj));
}


/**
 * Sets storeProjectObj 
 * 
 * @param {*} loadedData obj containg to do data 
 */
function loadDataFromLocal(loadedData)
{   
    storeProjectObj = loadedData
}
export{saveToDoCard, saveProjectName, displayCard, deleteToDoCard, updateToDoCard, getStoreProjectObjs, updateProjectName, deleteProjectStorage, loadDataFromLocal};

