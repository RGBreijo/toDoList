
/**
 * Used for creating to do card objects
 */

class toDoListCard
{

    constructor()
    {
    }


    /**
     *  Create a to do list card 
     * 
     * @param {*} title title of the card 
     * @param {*} textContent content to be reminded of 
     * @param {*} priorityLevel level of priority given to the task 
     * @param {*} dueDate date when task is due 
     */
    createToDoListCard(title, textContent, priorityLevel, dueDate)
    {
        let encapsulateToDoListCard = this.createDiv("toDoListCard"); 
        let encapsulateFooterContent = this.createDiv();


        let delCard = this.createDeleteTodoListCard(); 

        let toDoListMainContent = this.createToDoListCardContent(title, textContent); 

        let toDoListFooterContent = this.createToDoListCardFooterContent(priorityLevel, dueDate); 
        encapsulateFooterContent.appendChild(toDoListFooterContent); 

        encapsulateToDoListCard.appendChild(delCard); 
        encapsulateToDoListCard.appendChild(toDoListMainContent); 
        encapsulateToDoListCard.appendChild(encapsulateFooterContent); 

        return encapsulateToDoListCard;
    }




    /**
     * Creates the elements needed for deleting a card
     */
    createDeleteTodoListCard()
    {   
        let encapsulateDelText = this.createDiv("deleteToDoContainer"); 
        let del = this.CreateParagraph("X"); 

        encapsulateDelText.appendChild(del); 

        return encapsulateDelText; 
    }   



    /**
     * Creates the main content for the to do list card 
     * 
     * @param {*} title title of the card 
     * @param {*} textContent content to be reminded of 
     */

    createToDoListCardContent(title, textContent)
    {   

        let encapsulateTitleAndContent = this.createDiv("toDoListCardContent"); 
    
        let toDoCardTitlePContainer = this.CreateParagraph(undefined, "toDoListTitle");
        let toDoCardTitle = this.createStrong(title);
        toDoCardTitlePContainer.appendChild(toDoCardTitle);
        
        let mainContent = this.CreateParagraph(textContent, "toDoListText"); 

        encapsulateTitleAndContent.appendChild(toDoCardTitlePContainer); 
        encapsulateTitleAndContent.appendChild(mainContent); 


        return encapsulateTitleAndContent; 
    }


    /**
     * Creates the elements needed for the footer of the to do list card 
     * 
     * @param {*} UserpriorityLevel level of priority given to the task 
     * @param {*} dueDate date when task is due 
     */

    createToDoListCardFooterContent(UserpriorityLevel, dueDate)
    {
        let toDoListCardFooter = this.createFooter("toDoListCardFooter"); 

 

        let priorityLevel = this.CreateParagraph(UserpriorityLevel); 
        let editBtn = this.CreateButton("Edit", "toDoEdit"); 
        
        let setPriority = `priority${UserpriorityLevel}`;

        let encapsulatePrioityLvl = this.createDiv(setPriority);
        encapsulatePrioityLvl.appendChild(priorityLevel); 

        let encapsulatePrioityLvlAndEditBtn = this.createDiv(); 
        encapsulatePrioityLvlAndEditBtn.appendChild(encapsulatePrioityLvl); 
        encapsulatePrioityLvlAndEditBtn.appendChild(editBtn); 



        let TaskDonecheckBox = this.createInput("checkbox"); 

        let encapsulateTaskDueDate = this.createDiv("toDoDate"); 
        let taskDueDate = this.CreateParagraph(dueDate);
        encapsulateTaskDueDate.appendChild(taskDueDate);


        let encapsulateCheckBoxAndDueDate = this.createDiv(); 
        encapsulateCheckBoxAndDueDate.appendChild(TaskDonecheckBox); 
        encapsulateCheckBoxAndDueDate.appendChild(encapsulateTaskDueDate); 



        toDoListCardFooter.appendChild(encapsulatePrioityLvlAndEditBtn); 
        toDoListCardFooter.appendChild(encapsulateCheckBoxAndDueDate); 

        return toDoListCardFooter;
    }




    /**
     * Create a button element 
     * 
     * @param {*} buttonName Button text to be displayed 
     * @param {*} buttonClass  Optional class name for the button element 
     */
    CreateButton(buttonName, buttonClass)
    {
        let buttonElement = document.createElement("button"); 
        buttonElement.textContent = buttonName; 

        if(buttonClass != undefined)
        {
            buttonElement.setAttribute("class", buttonClass);
        }
       
        return buttonElement; 
    }


    
    /**
     * Create a paragraph element 
     * 
     * @param {c} paragraphContent Text to be put into the paragraph element 
     * @param {*} paragraphClass Optional class name for the paragraph element 
     */
    CreateParagraph(paragraphContent, paragraphClass)
    {
        let paragraphElement = document.createElement("p");
        paragraphElement.textContent = paragraphContent;

        if (paragraphClass != undefined)
        {
            paragraphElement.setAttribute("class", paragraphClass); 
        }

        return paragraphElement;
    }



    /**
     * Creates a div element 
     * 
     * @param {*} divClass Optional class name for the div element 
     */
    createDiv(divClass)
    {
        let divElement = document.createElement("div"); 

        if(divClass != undefined)
        {
            divElement.setAttribute("class", divClass);
        }
        return divElement; 
    }


    /**
     * Creates an input element 
     * 
     * @param {*} type  The type attribute for the input element 
     * @param {*} divClass Optional class name for the input element 
     */
    createInput(type, divClass)
    {
        let inputElement = document.createElement("input"); 

        if(type != undefined)
        {
            inputElement.setAttribute("type", type);
        }

        if(divClass != undefined)
        {
            inputElement.setAttribute("class", divClass);
        }

        return inputElement; 
    }



    /**
     * Creates an input element 
     * 
     * @param {*} divClass Optional class name for the footer element 
     */
    createFooter(footerClass)
    {
        let footerElement = document.createElement("footer"); 

        if(footerClass != undefined)
        {
            footerElement.setAttribute("class", footerClass);
        }

        return footerElement;
    }

    /**
     * Creates strong text 
     * 
     * @param {*} strongText 
     */
    createStrong(strongText)
    {
        let strong = document.createElement("strong"); 
        strong.textContent = strongText; 

        return strong; 
    }

}


export {toDoListCard}; 
