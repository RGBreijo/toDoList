import{updateProjectName, deleteProjectStorage} from "./dataStorage";


function editProject(targetA) // event listener from selectProject
{

    // remove event listener 
    let old_element = document.querySelector(".projectEditSelected");
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);



    // set up the class for the new one 
    let previousSelectedProject = document.querySelector(".projectEditSelected"); 
    previousSelectedProject.classList.remove("projectEditSelected"); 

    
    let editBtn = targetA.parentElement.lastElementChild.firstElementChild;
    editBtn.classList.add("projectEditSelected");

    document.querySelector(".projectEditSelected").addEventListener("click", editProjectEventListener);
}


/**
 * Sets the event listener required to delete a project 
 * @param {*} e 
 */
function editProjectEventListener(e)
{   
    let target = e.target || e.srcElement;

    let projectInputScreen = document.querySelector(".positionProjectInputContainer");
    projectInputScreen.style.display = "flex"; 


    // add event listner add then remove it each time 
    let old_element = document.querySelector("#projectInputBtn");
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    document.querySelector("#projectInputBtn").addEventListener("click", () => {editProjectName(target)});
}





/**
 * Activates the delete option for the selected project 
 * @param {*} projectTitlePath 
 */
function deleteProjectEventListener(projectTitlePath)
{   
        // remove event listener 
        let old_element = document.querySelector(".deleteProjectSelected");
        let new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
            
        
        // // set up the class for the new one 
        let previousSelectedProject = document.querySelector(".deleteProjectSelected"); 
        previousSelectedProject.classList.remove("deleteProjectSelected"); 

        let projectDeletePath = projectTitlePath.parentElement.lastElementChild.lastElementChild;
        projectDeletePath.classList.add("deleteProjectSelected");
        
        document.querySelector(".deleteProjectSelected").addEventListener("click", deleteProjectX);
    
}


/**
 * When a project is deleted a default project needs to be selected 
 */
function selectProjectOne()
{
    let firstProject = document.querySelector(".sidebarProject");
    let firstProjectTitlePath = document.querySelector(".sidebarProject").firstElementChild;

        
    let projectEdit = firstProject.lastElementChild.firstElementChild;
    let projectDelete = firstProject.lastElementChild.lastElementChild;


    firstProject.classList.add("projectSelected"); 
    projectEdit.classList.add("projectEditSelected"); 
    projectDelete.classList.add("deleteProjectSelected");

    firstProjectTitlePath.click(); 
}



/**
 * Executes required method to delete a projec
 * @param {*} e 
 */
function deleteProjectX(e)
{
    let target = e.target || e.srcElement;
    
    const MINIMINIMUM_AMOUNT = 1;  // of projects
    let amountOfProjects = Array.from(document.querySelectorAll(".sidebarProject")).length; 


    if(amountOfProjects === MINIMINIMUM_AMOUNT)
    {
        console.log("Can't delete");
    }else
    {
        let projectContainer = target.parentElement.parentElement;
        let projectTitle = projectContainer.firstElementChild.textContent; 
    
        projectContainer.remove();
        deleteProjectStorage(projectTitle); 
        selectProjectOne();
    }
}   



/**
 * Change the name of a project 
 * @param {*} projectTarget 
 */
function editProjectName(projectTarget)
{   
    let newProjectName = document.querySelector("#projectName").value;
    let oldProjectNamePath = projectTarget.parentElement.parentElement.firstElementChild;
    let oldProjectName = oldProjectNamePath.textContent;

    updateProjectName(oldProjectName, newProjectName); 
    oldProjectNamePath.textContent = newProjectName; 
    closeProjectInputScreen(); 
}

/**
 * Closes the input screen of the project
 */
function closeProjectInputScreen()
{
    let projectInputScreen = document.querySelector(".positionProjectInputContainer");
    projectInputScreen.style.display = "none"; 
    projectName.value = ""; 
}



export{editProject, deleteProjectEventListener, selectProjectOne};