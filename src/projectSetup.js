import{updateProjectName} from "./dataStorage";



function editProject(targetA) // event listener from selectProject
{



    // remove event listener 
    let old_element = document.querySelector(".projectEditSelected");
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

// need to then update the storage 
// need to make it so letters stay in the same place 
// need to clean the code 

function editProjectName(projectTarget)
{   
    let newProjectName = document.querySelector("#projectName").value;
    let oldProjectNamePath = projectTarget.parentElement.parentElement.firstElementChild;
    let oldProjectName = oldProjectNamePath.textContent;

    updateProjectName(oldProjectName, newProjectName); 
    oldProjectNamePath.textContent = newProjectName; 
    closeProjectInputScreen(); 
}


function closeProjectInputScreen()
{
    let projectInputScreen = document.querySelector(".positionProjectInputContainer");
    projectInputScreen.style.display = "none"; 
    projectName.value = ""; 
}



export{editProject};