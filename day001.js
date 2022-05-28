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

// d3.selectAll("li")
//     .text("list item")



/*
Work with Data in D3

Select the body node, then select all h2 elements. Have D3 create and append an h2 tag for each item in the dataset array. The text in the h2 should say New Title. Your code should use the data() and enter() methods.
 */

// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// d3.select("body").selectAll("h2")
//     .data(dataset)
//     .enter()
//     .append("h2")
//     .text((d) => d + ' USD')


// Work with Dynamic Data in D3
/*
Change the text() method so that each h2 element displays the corresponding value from the dataset array with a single space and the string USD. For example, the first heading should be 12 USD.
*/

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2")
    .data(dataset)
    .enter()
    .append("h2")
    .text((d) => d + ' USD')
    // Add the style() method to the code in the editor to make all the displayed text have a font-family of verdana.
    // .style("font-family", "verdana");




// Add the style() method to the code in the editor to set the color of the h2 elements conditionally. Write the callback function so if the data value is less than 20, it returns red, otherwise it returns green.

// Note: You can use if-else logic, or the ternary operator.


.style("color", (d) => {
    if (d < 20) {
        return "red"
    } else if (d > 20) {
        return "green"
    }
});