




function editProject(editProjectPath) // event listener from selectProject
{

    console.log("called");

    // remove event listener 
    let old_element = document.querySelector(".projectEditSelected");
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    // set up the class for the new one 
    let previousSelectedProject = document.querySelector(".projectEditSelected"); 
    previousSelectedProject.classList.remove("projectEditSelected"); 



    editProjectPath.classList.add("projectEditSelected");
    document.querySelector(".projectEditSelected").addEventListener("click", editProjectEventListener);
}


function editProjectEventListener()
{
    let projectInputScreen = document.querySelector(".positionProjectInputContainer");
    projectInputScreen.style.display = "flex"; 
}


export{editProject};