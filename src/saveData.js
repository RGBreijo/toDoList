

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
    let PROJECTS = Array.from(document.querySelectorAll(".projectSelected")); 
    let projectSelectedName = PROJECTS[0].firstElementChild.textContent;

    if(!(PROJECTS[0] === projectSelectedName))
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
function addToDoCard(projectName, listObj)
{
    for(let i = 0; i < storeProjectObj.length; i++)
    {
        if(storeProjectObj[i].originalProjectName === projectName)
        {
            storeProjectObj[i].storedProjectList.push(listObj); 
        }
    }
}



function test12()
{
    console.log("hi1");

    for(let i = 0; i < storeProjectObj.length; i++)
    {
        console.log(storeProjectObj[i].originalProjectName); 
      
    }
}












function deleteToDoCard()
{
    // Uses description 
}

function updateToDoCard()
{

}

export{addToDoCard, saveProjectName, test12};



