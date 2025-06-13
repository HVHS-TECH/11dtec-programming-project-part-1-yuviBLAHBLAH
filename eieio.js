let getMeColor;
let getuserName; 
let abcdef;
let ageidk;

function start() {
getMeColor = getFavColor()
getuserName = getUserName()
ageidk = askUserAge()

}

function getFavColor() {
    userFavColor = prompt("What is your favourite color?");
    alert("Your favourite color is: " + userFavColor);
};


function getUserName() {
    getUserName = prompt("What's your name?")
    alert("Welcome " + getUserName);
};


function askUserAge() {
    userAge = prompt("How old are you?");
    alert("Welcome " + userAge + " year old👋🙋‍♂️🙋‍♂️🙋‍♂️");
};

let classArray = ["Fiat 500", "Corvette ZR1", "Ford Focus", "Nissan Cube", "Toyota Prius"];
let choice = prompt("pick a car between 0 and 4");
alert("car " + choice + " is " + classArray[choice]);