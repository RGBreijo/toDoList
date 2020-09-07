import{createCardThroughInput} from "./newToDoCard.js";
import{createCard, clearAllCards} from "./newToDoCard.js"
import{getStoreProjectObjs, loadDataFromLocal, saveProjectNameManually} from "./dataStorage";
import{editProject, deleteProjectEventListener, selectProjectOne} from "./projectSetup.js";
import{createNewProject} from "./project.js";




// Check to see if local storage contains saved data 
if (JSON.parse(localStorage.getItem("storeProjectObj")) != null)
{
    let savedProject = JSON.parse(localStorage.getItem("storeProjectObj"));
    loadDataFromLocal(savedProject); 
    populateProjectTitle(); 
    selectProjectOne();

}else
{
    addEventListenersForProject(); 
    selectProjectOne();         
}


// Sets general functionality 
document.querySelector("#hamburgerIcon").addEventListener("click", openNavBar); 
document.querySelector("#closeSidebarContainer").addEventListener("click", closeNavBar); 
document.querySelector("#projectInputCardClose").addEventListener("click", closeProjectInputScreen);

document.querySelector("#createToDoBtn").addEventListener("click", createCardThroughInput);  
document.querySelector("#addList").addEventListener("click", displayToDoInput);
document.querySelector("#todoInputCardClose").firstElementChild.addEventListener("click", closeToDoInputScreen);
document.querySelector("#addProjectBtn").addEventListener("click", newProject);




/**
 * open the side navgiation bar 
 */
function openNavBar()
{
    let windowWidth = window.innerWidth;

    if(windowWidth > 500)
    {
        document.querySelector("#sidebarContentContainer").style.width = "200px"; 
    }else
    {
        document.querySelector("#sidebarContentContainer").style.width = "160px"; 
    }

    document.getElementById("sidebarContentContainer").style.transition = "all 0.2s";

}

/**
 * close the side navigation bar
 */
function closeNavBar()
{
    document.querySelector("#sidebarContentContainer").style.width = "0"; 
}



/**
 * Displays the screen that allows the user to input information about a there to do card 
 */
function displayToDoInput()
{
    // Fix for finish button having multiple event listeners due to finish button 
    // having both an edit and create a create to do card functionality 
    let old_element = document.getElementById("createToDoBtn");
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    document.querySelector("#createToDoBtn").addEventListener("click", createCardThroughInput);
    document.querySelector(".positionInputContent").style.display = "flex"; 
    clearToDoInputCard();
}

/**
 * Closes the to do card input screen 
 */
function closeToDoInputScreen()
{
    document.querySelector(".positionInputContent").style.display = "none";
}




/**
 * Clears all data that the user inputed in the to do card input
 */
function clearToDoInputCard()
{
    const TITLE_ELEMENT = document.querySelector("#title"); 
    const DESCRIPTION_ELEMENT = document.querySelector("#toDoDescription"); 
    const PRIORITY_ELEMENTS = Array.from(document.querySelectorAll(".priorityLevel")); 
    const DUE_DATE = document.querySelector("#dueDate"); 

    TITLE_ELEMENT.value = null;
    DESCRIPTION_ELEMENT.value = null; 
    DUE_DATE.value = null;

    for(let i = 0; i < PRIORITY_ELEMENTS.length; i++)
    {
        PRIORITY_ELEMENTS[i].checked = false;
    }
}


/**
 * Ads the ability to click on the different projects in the sidebar 
 */
function addEventListenersForProject()
{
    let projects = Array.from(document.querySelectorAll(".selectedProjectTitle"));

    for(let i = 0; i < projects.length; i++)
    {
        projects[i].addEventListener('click', selectProject);

    }
}



/**
 * Highlights the project that the user clicked and populates 
 * the to do list section with the appropriate to do list cards 
 * for that project. 
 */
function selectProject(e)
{   


    let target = e.target || e.srcElement;
    let selectedProject = target.parentElement;
    

    let previousSelectedProject = document.querySelector(".projectSelected"); 
    previousSelectedProject.classList.remove("projectSelected"); 

    selectedProject.classList.add("projectSelected");

    
    editProject(target);
    deleteProjectEventListener(target); 

    clearAllCards();
    populateSelectedProject();

    document.querySelector("#currentProjects").textContent = target.textContent;
}



/**
 * Closes the project input screen 
 */
function closeProjectInputScreen()
{
    let projectInputScreen = document.querySelector(".positionProjectInputContainer");
    projectInputScreen.style.display = "none"; 
    projectName.value = ""; 
}


/**
 * Opens the project input screen 
 */
function openInputScreen()
{
    let projectInputScreen = document.querySelector(".positionProjectInputContainer");
    projectInputScreen.style.display = "flex"; 
}





/**
 * Populates the to do list section with the to do list cards corresponding to the 
 * project selected
 */
function populateSelectedProject()
{
    let projectListObj = getStoreProjectObjs();
    let projectSelected = document.querySelector(".projectSelected p").textContent;

    if(projectListObj.length > 0)
    {
        for(let i = 0; i < projectListObj.length; i++)
        {
            if(projectListObj[i].originalProjectName === projectSelected)
            {
                for(let toDoCard = 0; toDoCard < projectListObj[i].storedProjectList.length; toDoCard++)
                {
                    const TITLE = projectListObj[i].storedProjectList[toDoCard].TITLE; 
                    const DESCRIPTION = projectListObj[i].storedProjectList[toDoCard].DESCRIPTION; 
                    const PRIORITY = projectListObj[i].storedProjectList[toDoCard].PRIORITY; 
                    const DUE_DATE= projectListObj[i].storedProjectList[toDoCard].DUE_DATE; 
        
                    createCard(TITLE, DESCRIPTION, PRIORITY, DUE_DATE, false); 
                }
            }
    
        }
    }
}


/**
 * Called when page first loads to populate the correct project titles
 */
function populateProjectTitle()
{

    let projectListObj = getStoreProjectObjs();


    document.querySelector(".sidebarProject").remove();  // Remove Default Project 

    // Sets the first project stored in the project obj as the selected project 
    let test = createNewProject(projectListObj[0]);
    let firstProjectName = projectListObj[0].originalProjectName;
    test.addEventListener("click", (e) => {setFirstProject(e, firstProjectName)});  // Added event listener so can do things such as .firstElementChild 
    test.click(); 

        for(let i = 1; i < projectListObj.length; i++)
        {
            let projectTitle = projectListObj[i].originalProjectName;
            let projectCard = createNewProject(projectTitle); 
            let projectSidebarContainer = document.querySelector("#sidebar"); 
            projectSidebarContainer.appendChild(projectCard); 
        }

        addEventListenersForProject(); 
}


/**
 * 
 * Sets the first project in the saved local storage array to have 
 * the classes that the default project has.
 * 
 * Note: 
 * When saved div element you can not do .parentElement or .childElement
 * without it being an event. this turns the element into an event 
 * @param {*} e 
 */
function setFirstProject(e, firstProjectName)
{
    let target = e.target || e.srcElement;
    target.classList.add("projectSelected");

    let title = target.firstElementChild;
    title.textContent = firstProjectName; 


    let edit = target.lastElementChild.firstElementChild; 
    let del = target.lastElementChild.lastElementChild; 

    edit.classList.add("projectEditSelected");
    del.classList.add("deleteProjectSelected"); 



    let projectSidebarContainer = document.querySelector("#sidebar"); 
    projectSidebarContainer.appendChild(target); 


    // remove event listener used to set it up first project 
    let old_element = target
    let new_element = target.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    populateSelectedProject();
 }


 

/**
 * 
 * Executes functions needed when creating a new project + is clicked 
 * 
 */
function newProject()
{
    openInputScreen(); 

    // Change the create btn path so it targets a new project instead of an edit 
    let old_element = document.querySelector("#projectInputBtn");
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    document.querySelector("#projectInputBtn").addEventListener("click", addNewProject);
}


/**
 * Add a new project to the sidebar with the given value 
 */
function addNewProject()
{
    let projectName = document.querySelector("#projectName").value; 
    let projectCard = createNewProject(projectName); 
    let projectSidebarContainer = document.querySelector("#sidebar"); 
    projectSidebarContainer.appendChild(projectCard); 
    closeProjectInputScreen(); 
    addEventListenersForProject();

    saveProjectNameManually(projectName); 

}

export{selectProject};