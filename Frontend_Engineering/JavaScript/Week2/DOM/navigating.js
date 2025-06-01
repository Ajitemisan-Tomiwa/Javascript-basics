// Navigating the DOM

// Children: childNodes, firstChild, lastChild

// list all child nodes of the body tag
console.log(document.body.childNodes); //Note newline characters is a Text node, which is a child of the body tag
// console.log(document.body.children);

// list all children of the body tag
console.log(document.body.children); // Children are not Text nodes

// Get the first child of the body tag
// console.log(document.body.firstChild); // Same as document.body.childNodes[0]
console.log(document.body.children[0].textContent); // extracts the text content of the child

// Get the last child of the body tag
// let lastChild = document.body.lastChild; // Same as document.body.childNodes[document.body.childNodes.length - 1]
// console.log(lastChild);
// console.log(document.body.children[document.body.children.length - 1]); // this will shoe unseen js script in the html
console.log(document.body.children[document.body.children.length - 2]); //this will show the last child element in the html

// check if the body tag has children
// console.log(document.body.hasChildNodes()); // true
console.log(document.body.hasChildren()); // true

// loop through all children of the body tag
for (let i = 0; i < document.body.childNodes.length; i++) {
  console.log(document.body.childNodes[i]); // Siblings: previousSibling, nextSibling
}

for (let i = 0; i < document.body.children.length; i++) {
  console.log(document.body.children[i]);
}

// get the previous sibling of the body tag
// console.log("Previous Sibling ", document.body.previousSibling); // will return the previous node object// null
console.log("Previous Sibling ", document.body.previousElementSibling); // will return the previous html element

// get the next sibling of the head tag
// console.log("Next Sibling: ", document.head.nextSibling); // will return the previous node object // null
console.log("Next Sibling: ", document.body.nextElementSibling); // will return the next html element

// Parent: parentNode
// get the parent of the head tag
console.log(document.body.parentNode);
console.log(document.head.parentNode);
