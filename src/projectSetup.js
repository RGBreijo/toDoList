import{updateProjectName, deleteProjectStorage} from "./dataStorage";
import{selectProject, test} from "./index.js";


function editProject(targetA) // event listener from selectProject
{

    // remove event listener 
    let old_element = document.querySelector(".projectEditSelected");
    console.log(old_element);
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);



    // set up the class for the new one 
    let previousSelectedProject = document.querySelector(".projectEditSelected"); 
    previousSelectedProject.classList.remove("projectEditSelected"); 



    console.log(); // removing the class removes the target to it???


    // it could be that add("projectEditSelected");
    // sees that it already has it (because it is looking at the old version) so it does not add it
    // but in reality it does not have it 

    let editBtn = targetA.parentElement.lastElementChild.firstElementChild;
    editBtn.classList.add("projectEditSelected");

    document.querySelector(".projectEditSelected").addEventListener("click", editProjectEventListener);
}



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
        let projetTitle = projectTitlePath.textContent; 

        // remove event listener 
        let old_element = document.querySelector(".deleteProjectSelected");
        console.log(old_element + "delete project not showing up");
        let new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        
    
        // // set up the class for the new one 
        let previousSelectedProject = document.querySelector(".deleteProjectSelected"); 
        previousSelectedProject.classList.remove("deleteProjectSelected"); 

        let projectDeletePath = projectTitlePath.parentElement.lastElementChild.lastElementChild;
        projectDeletePath.classList.add("deleteProjectSelected");
    
        document.querySelector(".deleteProjectSelected").addEventListener("click", deleteProjectX);

       

        // need to switch 


        // SET PROJECT ONE TO BE SELECTED
        // 
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


    firstProjectTitlePath.addEventListener("click", bla); 
    firstProjectTitlePath.click(); 


    // editProject(firstProject.firstElementChild);

}


function bla(e)
{
    let target = e.target || e.srcElement;
    // selectProject(target);
}




function deleteProjectX(e)
{
    let target = e.target || e.srcElement;

    let projectContainer = target.parentElement.parentElement;
    let projectTitle = projectContainer.firstElementChild.textContent; 

    projectContainer.remove();
    deleteProjectStorage(projectTitle); 
    selectProjectOne();
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



export{editProject, deleteProjectEventListener};