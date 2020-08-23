import{createCardThroughInput} from "./newToDoCard.js";
import{createCardWithoutInputBlock, clearAllCards} from "./newToDoCard.js"



addEventListenersForProject(); 

document.querySelector("#createToDoBtn").addEventListener("click", createCardThroughInput); // OUTSIDE + 
document.querySelector("#addList").addEventListener("click", displayToDoInput);



document.querySelector("#todoInputCardClose").firstElementChild.addEventListener("click", closeToDoInputScreen);


function displayToDoInput()
{
    // Fix for button having multiple event listeners 
    let old_element = document.getElementById("createToDoBtn");
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    document.querySelector("#createToDoBtn").addEventListener("click", createCardThroughInput);
    document.querySelector(".positionInputContent").style.display = "flex"; 
    clearToDoInputCard();
}

function closeToDoInputScreen()
{
    document.querySelector(".positionInputContent").style.display = "none";
}


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

/////  project section 
function addEventListenersForProject()
{
    let projects = Array.from(document.querySelectorAll(".selectedProjectTitle"));

    for(let i = 0; i < projects.length; i++)
    {
        projects[i].addEventListener('click', selectProject);
    }
}

function selectProject(e)
{
    let target = e.target || e.srcElement;

    let selectedProject = target.parentElement;

    let previousSelectedProject = document.querySelector(".projectSelected"); 
    previousSelectedProject.classList.remove("projectSelected"); 

    selectedProject.classList.add("projectSelected");
    clearAllCards();
    // repulate with new one
}





function repopulateProject(projectListObj)
{

    for(let i = 0; i < projectListObj.length; i++)
    {
        for( let toDoCard = 0; toDoCard < storeProjectObj[i].storedProjectList.length; toDoCard++)
        {
            // change const because they could actual change so make it all lowercase 

            const TITLE = storeProjectObj[i].storedProjectList[toDoCard].TITLE; 
            const DESCRIPTION = storeProjectObj[i].storedProjectList[toDoCard].DESCRIPTION; 
            const PRIORITY = storeProjectObj[i].storedProjectList[toDoCard].PRIORITY; 
            const DUE_DATE= storeProjectObj[i].storedProjectList[toDoCard].DUE_DATE; 

            createCardWithoutInputBlock(TITLE, DESCRIPTION, PRIORITY, DUE_DATE);
        }
    }
}