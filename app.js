const myHeading = document.getElementById("heading");

myHeading.addEventListener("click", () => {
    myHeading.style.color = "red";
});

myHeading.addEventListener("contextmenu", (event) => {
    myHeading.style.color = "#ccc";
    event.preventDefault();
});


const myInput = document.getElementById("input");
const myButton = document.getElementById("button");

myButton.addEventListener("click", () => {
    const myColor = myInput.value;
    console.log(myInput);
    myHeading.style.color = myColor;
});


const drinks = document.getElementsByTagName('li');

drinks[0].style.color = "red";


//const listLi = document.getElementsByTagName("ul")[0].getElementsByTagName('li');
const listLi = document.getElementsByTagName('li');
console.log('list', listLi);

for(let lx of listLi) lx.style.color = 'orange';


const listLiNotOrange = document.getElementsByClassName('not-orange');
//console.log( typeof listLiNotOrange );
//console.log( Array.from(listLiNotOrange) );

// for(let lx of listLiNotOrange) {
//     lx.style.color = 'blue';
//     console.log('purple',lx);
// }
Array.from(listLiNotOrange).forEach(el => {
    el.style.color = 'blue';
});



const listItems = document.querySelectorAll('#selector-list > li:nth-child(even)');
console.log('selector list', listItems.length, listItems);
//for(let lix of listItems) lix.style.color = "lightgreen";

document.querySelectorAll('#selector-list > li:nth-child(even)').
    forEach( el => {
        console.log('2nd:', el);
        el.style.color = "lightgreen";
    });
