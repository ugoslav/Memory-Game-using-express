//importing levelNumber from the main html file
const levelNumber = sessionStorage.getItem("LEVELNUMBER");

//Displaying the previous level message
//The plan is,to generate random congrats messages


const previousLevel = document.getElementById("previous-level");
const nextLevel = document.getElementById("next-level");

//Writing all the posible messages
const congoMessages = [
    "Hip Hip Hooray!! You finished level number ",
    "Congratularions on finishing level number ",
    "Genius!!You cleared level number ",
    "That required skill!!You completed level number ",
    "10/10! With ease did you complete level number "
];

//Generating an array of random numbers ranging from 0 to 4
let randomNumbers = [];

while(randomNumbers.length < congoMessages.length)
{
    let randomNumber = Math.floor(Math.random() * 5);
    if (randomNumbers.includes(randomNumber) === false)
        randomNumbers.push(randomNumber);
}

const previousMessage = document.createElement("p");
previousMessage.setAttribute("id","pmessage");
previousMessage.textContent = `${congoMessages[randomNumbers[0]]} ${levelNumber}`;
previousLevel.appendChild(previousMessage);


let time = 10 - (parseInt(levelNumber) - 1);

const nextMessage = document.createElement("p");

nextMessage.setAttribute("id","nmessage");

nextMessage.textContent = `Starting level number ${parseInt(levelNumber) + 1} in ${time--} seconds`;

let startTime = setInterval(() => {
    nextMessage.textContent = `Starting level number ${parseInt(levelNumber) + 1} in ${time} seconds`;
    if(time === 0)
    {
        clearInterval(startTime);
        window.location.href = "/game";
    }
    time--;
},1000);

nextLevel.appendChild(nextMessage);