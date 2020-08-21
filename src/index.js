import {toDoListCard} from "./toDoCard.js";
import{createCard} from "./newToDoCard.js";



document.querySelector("#createToDoBtn").addEventListener("click", createCard);
document.querySelector("#addList").addEventListener("click", displayToDoInput);





function displayToDoInput()
{
    document.querySelector(".positionInputContent").style.display = "flex"; 
}


