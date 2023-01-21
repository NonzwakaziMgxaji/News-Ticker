//base url
//"https://sheets.googleapis.com/v4/spreadsheets/{@spreadsheetId}/values/{@range}?key={@apiKey}";

// api url
const api_url = "https://sheets.googleapis.com/v4/spreadsheets/1BcHsmd79DlDmq2riZMCP6lCQw8pZgpQc7vPxNOycLHE/values/Sheet1?key=AIzaSyDzcGI0lZ4xnYQOEge8jbu0hh1Wj3huW1M";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
    // Setting innerHTML as tab variable
    let tab;

    // Loop through to access all rows 
    for (let i of data.values) {
        tab += i[0] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
    }

    // Setting innerHTML as tab variable
    document.getElementById("tickerinfo").innerHTML = tab;
}