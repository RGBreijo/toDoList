




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


function editProjectEventListener()
{
    let projectInputScreen = document.querySelector(".positionProjectInputContainer");
    projectInputScreen.style.display = "flex"; 
}


export{editProject};