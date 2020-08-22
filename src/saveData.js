

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
}


function deleteToDoCard()
{
    // Uses description 
}

function updateToDoCard()
{

}

export{saveToDoCard, saveProjectName};

