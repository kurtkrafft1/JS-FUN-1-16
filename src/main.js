const test = prompt ("Do you really wanna see this site?")
let answer = 'no'

const tryTest = () => {
    if (test == answer){
        alert("congrats!")
    } else {
        alert ("AWh man its opposite day yo! I'll let you in anyway.")
    }
}
tryTest ()

console.log("hello world");
const numFour = 2 + 2;
console.log(numFour);

const groceriesArticle = document.querySelector('#groceries');
groceriesArticle.classList.add('new-text')

const groceriesHeader = document.querySelector('.groceries__header');
// groceriesHeader.classList.remove("groceries__header");


// const groceryList = document.querySelectorAll('#grocery-list li');
// console.log(groceryList);
// for (let i=0; i<groceryList.length; i++){
//     if (i===1){
//     groceryList[i].classList.add("groceries__header");
// }
// }


const addedFood = []
const addItem = () => {
    let newFood = document.querySelector('.new-item').value;
    addedFood.unshift(newFood);
    // console.log(addedFood)
    for (let i=0; i<1; i++){
        const list = document.querySelector('#grocery-list');
        const newHTML = `${addedFood[i]}`
        const entry = document.createElement('li');
        entry.appendChild(document.createTextNode(newHTML));
        list.appendChild(entry);

    
    }

}

