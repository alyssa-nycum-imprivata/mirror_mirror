// Code for adding an input field to the DOM

const addInputToDom = () => {
    return `
    <form id="form" action="/index.html" method="post">    
        <label for="message">Enter some text:</label>
        <input type="text" name="text" id="message">
    </form>
`
};

const inputElement = document.getElementById("textfield");

inputElement.innerHTML += addInputToDom();

// Code for adding both article elements to the DOM

const addArticleToDom = idName => {
    return `
    <article id="${idName}"></article>
    `
;}

const articleElement = document.getElementById("article");

articleElement.innerHTML += addArticleToDom("blue");

articleElement.innerHTML += addArticleToDom("red");

// Adding a keyup event listener to the input field and mirroring text to both article fields

const blueArticle = document.getElementById("blue");

const redArticle = document.getElementById("red");

const inputKeyup = event => {
    console.log(event);
    blueArticle.textContent = event.target.value; 
    redArticle.textContent = event.target.value;
};

inputElement.addEventListener("keyup", inputKeyup);
















