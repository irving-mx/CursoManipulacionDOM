const parent = document.getElementById("parent");
console.log(parent)

// El método "children" muestra los hijos del elemento parent
const children = parent.children;
console.log(children)

// El método "firstElementChild" muestra el primer hijo del objeto parent
const firstChild = parent.firstElementChild;
console.log(firstChild)

// El método "lastElementChild" muestra el ultimo hijo del objeto parent
const lastChild = parent.lastElementChild;
console.log(lastChild)

// El método "previousElementSibling" muestra el nodo anterior del objeto "parent"
const previousSibling = parent.previousElementSibling;
console.log(previousSibling)

// El método "nextElementSibling" muestra el nodo siguiente del objeto "parent"
const nextSibling = parent.nextElementSibling;
console.log(nextSibling)

// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection

const children2 = document.querySelector("li")
console.log(children2)

// El método "parentNode" nos trae a el papa de la primera etiqueta "li"
const parent2 = children2.parentNode;
console.log(parent2)

// nos devuelve el elemento padre
const grandParent = children2.parentElement;
console.log(grandParent)

// me trae el elemento mas cercano a la etiqueta "menu"
const grandGrandParent = children2.closest("menu"); // este ultimo es el mas utilizado
console.log(grandGrandParent)

// parentNode; // live NodeList
// parentElement; // non-live HTMLCollection
// closest(selector); // este último es el más utilizado