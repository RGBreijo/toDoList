

    /**
     * Creates the elements needed for a project
     * @param {*} name 
     */
    function createNewProject(name)
    {
        let encapsulateProject = createDiv("sidebarProject");
        let projectName = createParagraph(name, "selectedProjectTitle"); 
        encapsulateProject.appendChild(projectName); 

        let encapsulateOptions = createDiv();
        let edit = createParagraph("Edit"); 
        let deleteProject = createParagraph("Delete", "deleteProject"); 

        encapsulateOptions.appendChild(edit); 
        encapsulateOptions.appendChild(deleteProject); 

        encapsulateProject.appendChild(encapsulateOptions);

        return encapsulateProject; 
    }


    
    /**
     * Creates a div element 
     * 
     * @param {*} divClass Optional class name for the div element 
     */
    function createDiv(divClass)
    {
        let divElement = document.createElement("div"); 

        if(divClass != undefined)
        {
            divElement.setAttribute("class", divClass);
        }
        return divElement; 
    }


    /**
     * Create a paragraph element 
     * 
     * @param {c} paragraphContent Text to be put into the paragraph element 
     * @param {*} paragraphClass Optional class name for the paragraph element 
     */
    function createParagraph(paragraphContent, paragraphClass)
    {
        let paragraphElement = document.createElement("p");
        paragraphElement.textContent = paragraphContent;

        if (paragraphClass != undefined)
        {
            paragraphElement.setAttribute("class", paragraphClass); 
        }

        return paragraphElement;
    }

    export{createNewProject};
