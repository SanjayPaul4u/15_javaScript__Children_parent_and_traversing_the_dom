console.log("This tutorial is for understanding children, parents and traversing.");

// let content = document.querySelector(".container");
// // childNodes and children📌📌📌

// console.log(content.childNodes);
// console.log(content.children);
// console.log(content.children.length);


// // nodeName and nodeType📌📌📌

// let content2 = document.querySelector(".container");
// console.log(content2);

// let node_name = content2.childNodes[5].nodeName;
// console.log(node_name);

// let node_type = content2.childNodes[1].nodeType;
// console.log(node_type);

/*nodeType----------->important
1. Element 
2. Atribute
3. text
8. comment
9. document
10 .docType
*/

// // we are change color of the element using children and childNodes 📌📌📌

// let node_name2 = content2.childNodes[3];//you can use children instead of childNodes
// node_name2.style.color = "red";
// node_name2.style.background = "black";



// //children under another children📌📌📌

// let container = document.querySelector("div.container")
// console.log(container.children[0].children[1].children);


// // firstChild, firstElementChild, lastChild, lastElementChild📌📌📌
let container2 = document.getElementById("mainContainer");

console.log(container2.firstChild);
console.log(container2.firstElementChild);
console.log(container2.lastChild);
console.log(container2.lastElementChild);
// childElementCount
console.log(container2.childElementCount);

//nextSibling and nextElementSibling
// console.log(container2.firstElementChild.nextSibling);
console.log(container2.firstElementChild.nextElementSibling.nextElementSibling);