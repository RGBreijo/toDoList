import {toDoListCard} from "./toDoCard.js";
import{createCard} from "./newToDoCard.js";






document.querySelector("#createToDoBtn").addEventListener("click", createCard); // OUTSIDE + 
document.querySelector("#addList").addEventListener("click", displayToDoInput);


function displayToDoInput()
{
    document.querySelector("#createToDoBtn").removeEventListener("click", () => {editMode(target)});
    document.querySelector("#createToDoBtn").addEventListener("click", createCard);

    document.querySelector(".positionInputContent").style.display = "flex"; 
}


