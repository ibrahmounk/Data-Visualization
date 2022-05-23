/*  
Use the select method to select the body tag in the document. Then append an h1 tag to it, and add the text Learning D3 into the h1 element.
*/

d3.select("body")
    .append("h1")
    .text("Learning D3");