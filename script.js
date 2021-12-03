const evenNumber = document.querySelector(".even");
const oddNumber = document.querySelector(".odd");
const generateButton = document.querySelector(".generate");
let numberRandom;
let numbers = [];


function generateNumbers() {
    for (var i = 0; i < 20; i++) {
        let new_number = getRandom();
        numbers.push(new_number);
    }

    numbers.sort(function (a,b) {
        return a-b;
    });
}

function getRandom() {
    let numberRandom = Math.floor(Math.random() * 100 + 1);
    return numberRandom;
};

generateButton.addEventListener("click", () => {
    numbers.splice(0, 20);
    generateNumbers();
    console.log(numbers);
    let evenHTML = "";
    let oddHTML = "";
    numbers.forEach((nr) => {
        if (nr % 2 == 0) {
            evenHTML += nr + "<br />";
        } else {
            oddHTML += nr + "<br />";
        }
    });
    evenNumber.innerHTML = evenHTML;
    oddNumber.innerHTML = oddHTML;
})

