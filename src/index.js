import{createCardThroughInput} from "./newToDoCard.js";
import{createCard, clearAllCards} from "./newToDoCard.js"
import{getStoreProjectObjs} from "./dataStorage";
import{editProject} from "./projectSetup.js";


projectInputScreenX();

addEventListenersForProject(); 

document.querySelector("#createToDoBtn").addEventListener("click", createCardThroughInput);  
document.querySelector("#addList").addEventListener("click", displayToDoInput);
document.querySelector("#todoInputCardClose").firstElementChild.addEventListener("click", closeToDoInputScreen);


/**
 * displayes the the to do card input screen 
 */
function displayToDoInput()
{
    // Fix for button having multiple event listeners due to button having both and edit to do card and create to do card functionality 
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

    
    let editBtn = target.parentElement.lastElementChild.firstElementChild;
    editProject(target);

    clearAllCards();
    populateSelectedProject();
}




function projectInputScreenX()
{
    document.querySelector("#projectInputCardClose").addEventListener("click", closeProjectInputScreen);
}

function closeProjectInputScreen()
{
    let projectInputScreen = document.querySelector(".positionProjectInputContainer");
    projectInputScreen.style.display = "none"; 
    projectName.value = ""; 
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

