// Define the Mustache.js template
var template = `
    {{#books}}
    <div class="book-card">
        <h2 class="book-title">{{title}}</h2>
        <p class="book-details">Author: {{author}}</p>
        <p class="book-details">Year: {{year}}</p>
        <p class="book-details">Genre: {{genre}}</p>
    </div>
    {{/books}}
`;

// Get the 'output' div
var output = document.getElementById('output');

// Fetch data from the JSON file
fetch('library.json')
    .then(response => response.json())
    .then(data => {
        // Render the data with Mustache
        var rendered = Mustache.render(template, { books: data });
        output.innerHTML = rendered;
    })
    .catch(error => console.error('Error fetching data:', error));
