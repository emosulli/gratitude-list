
document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the value from the input field
    const userInput = document.getElementById('userInput').value;

    //create new element and store it in a variable
    const newEl = document.createElement('li');

    //create the text node and put it in a variable
    const newText = document.createTextNode(userInput);

    //attach the new text node to the new element
    newEl.appendChild(newText);

    //find the position where the new element should be added
    const position = document.getElementById('show-list');

    //insert the new element into its position
    position.appendChild(newEl);

    // Clear the input field for new input
    document.getElementById('userInput').value = '';
});