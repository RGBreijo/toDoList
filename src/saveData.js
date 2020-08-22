

// Pass in a toDoCardObject

let storeProjectObj = [];


let projectObj = () =>
{
    let storedProjectList = [];
    let originalProjectName = "";  // store project name and then to display it use orginal name 
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
 * Save a to do list card objs to a project 
 * 
 * @param {*} projectName 
 * @param {*} listObj 
 */
function saveToDoCard(listObj)
{
    saveProjectName(); // Checks to see if project already saved if not ads it 

    let PROJECTS = Array.from(document.querySelectorAll(".projectSelected"));  
    let projectSelectedName = PROJECTS[0].firstElementChild.textContent; // Sees where it should be stored 

    for(let i = 0; i < storeProjectObj.length; i++)
    {
        if(storeProjectObj[i].originalProjectName === projectSelectedName)
        {
            storeProjectObj[i].storedProjectList.push(listObj); 
        }
    }
}


function showDataStored()
{

    console.log("here");
    for(let i = 0; i < storeProjectObj.length; i++)
    {
        console.log(storeProjectObj); 
    //    for(let x = 0; x < storeProjectObj[i].storedProjectList.length; x++)
    //    {
    //        console.log(storeProjectObj[i]); 
    //    }
    }
}




function deleteToDoCard()
{
    // Uses description 
}

function updateToDoCard()
{

}

export{saveToDoCard, saveProjectName, showDataStored};



