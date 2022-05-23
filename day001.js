/*  
"Add Document Elements with D3"
Use the select method to select the body tag in the document. Then append an h1 tag to it, and add the text Learning D3 into the h1 element.
*/

// d3.select("body")
//     .append("h1")
//     .text("Learning D3");


/*
Select a Group of Elements with D3

Select all of the li tags in the document, and change their text to the string list item by chaining the .text() method.
*/

d3.selectAll("li")
    .text("list item")