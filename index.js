//Write your code here
 /*document.addEventListener('DOMContentLoaded', function() {
    
    // Change the text on the page using document.querySelector
    const contentDiv = document.querySelector('text');
    if (contentDiv) {
        contentDiv.textContent = 'JavaScript is so cool. It lets me add text to my page programmatically.';
    } else {
        console.error('Element with id "content" not found.');
    }
});*/

//instead of using 'div' use 'paragraph' since 'p' is used in the test description
document.addEventListener('DOMContentLoaded', function() {
    // This function will be executed when the DOM content has loaded
    
    // Target the paragraph element with id="text" and replace the text
    const textParagraph = document.getElementById('text');// I had though the ID text is "JavaScript is so cool. It lets me add text to my page programmatically." and yet it is the original text that is being replaced
    if (textParagraph) {
        textParagraph.textContent = 'This is really cool!';
    } else {
        console.error('Paragraph element with id "text" not found.');
    }
});

