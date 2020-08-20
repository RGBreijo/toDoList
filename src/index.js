import {toDoListCard} from "./toDoCard.js";


let test = new toDoListCard("school"); 

let toDoListContainer = document.querySelector("#toDoListSection"); 

toDoListContainer.appendChild(test.createToDoListCard("Math", "Complete physics homework", "High", "Aug 25")); 
toDoListContainer.appendChild(test.createToDoListCard("Stats", "Complete physics homework", "Low", "Aug 25")); 

