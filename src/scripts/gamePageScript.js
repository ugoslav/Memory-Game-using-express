const headingSpace = document.getElementById("heading");


let levelNumberString = document.getElementById("level-number");
levelNumberString.innerHTML = sessionStorage.getItem("LEVELNUMBER");



const timeDiv = document.getElementById("time-left");
const flipDiv = document.getElementById("flips-left");
const time = document.getElementById("time");
const flips = document.getElementById("flips");


//importing all the images from the document
const images = document.querySelectorAll("img");

//Old function for the losing consition
function outroMessage() {
    headingSpace.removeChild(document.getElementById("heading-text"));
    const outroText = document.createElement("h2");
    outroText.textContent = "Game Over";
    outroText.setAttribute("id","heading-text");
    headingSpace.appendChild(outroText);
};

//New function for the losing condition
function newOutroMessage() {
    headingSpace.removeChild(document.getElementById("heading-text"));
    const outroText = document.createElement("h2");
    outroText.textContent = "Game Over";
    outroText.setAttribute("id","heading-text");
    headingSpace.appendChild(outroText);
    setTimeout(() => {
        window.location.href = "/playAgain";
    },3000
)
}

//Old function for winning condition
function levelCompleteMessage() {
    headingSpace.removeChild(document.getElementById("heading-text"));
    const outroText = document.createElement("h2");
    outroText.textContent = "Yay you won";
    outroText.setAttribute("id","heading-text");
    headingSpace.appendChild(outroText);
}


//New function for winning condition
function newLevelCompleteMessage()
{
    headingSpace.removeChild(document.getElementById("heading-text"));
    const outroText = document.createElement("h2");
    outroText.textContent = "Yay you won";
    outroText.setAttribute("id","heading-text");
    headingSpace.appendChild(outroText);
    setTimeout(() => {
        if(parseInt(sessionStorage.getItem("LEVELNUMBER")) < 5)
            window.location.href = "/transition";
        else
            window.location.href = "/gameComplete";
    },3000);
}

//creating an array full of random id numbers
const usedNumbers = [];
while (usedNumbers.length < images.length)
{
    let randomNumber = Math.floor(Math.random() * images.length) + 1;
    if(usedNumbers.includes(randomNumber) === false)
        usedNumbers.push(randomNumber);
}


//Assigning random id numbers to the pictures as "id"s
let i = 0;

images.forEach((image) => {
    image.setAttribute("id",usedNumbers[i++])
});




let isTurned = false;
let turnedCards = [];
let closedCards = [];



//Declaring the killswitch function
function killSwitch(){
    setTimeout(() => {
        turnedCards.forEach((idNo) => {
            const img = document.getElementById(idNo);
            img.src = "/assets/imgs/blank_img.jpg"
        });
    },2000);
    
   
    
    clearInterval(reduceTimeinterval);
    
    images.forEach((image) => {
        
        image.style.pointerEvents = "none";

    })
    newOutroMessage();
}



//Defining the level complete function
function levelComplete()
{
    clearInterval(reduceTimeinterval);
    newLevelCompleteMessage();
}



//Main function of handling the changing images
const changeImg = (image) => {
    if((turnedCards.includes(parseInt(image.id)) === false) && (closedCards.includes(parseInt(image.id)) === false))
    {
        turnedCards.push(parseInt(image.id));


        const img = document.getElementById(image.id);
        if(img.id <= 5)
            img.src = `/assets/imgs/pic${img.id}.jpg`;
        else
            img.src = `/assets/imgs/pic${img.id - 5}.jpg`;


        if(turnedCards.length === 2)
        {
            //if the cards get matched,then they get added to an array called closedCards
            if((turnedCards[0]+5 === parseInt(img.id)) || (turnedCards[0]-5 === parseInt(img.id)))
            {
                turnedCards.forEach((card) => {
                    closedCards.push(card);
                });
            }
            else{
                //if the cards dont match,only then will a flip count be deducted
                if(flipRemaining > 0)
                {
                    flipRemaining = flipRemaining - 1;
                    flips.textContent = `${flipRemaining}`;

                    flipDiv.appendChild(flips);
                }
                if(flipRemaining === 0)
                    return killSwitch();
            }
            
            //this consition prevents you from clicking on those cards which are already closed.
            if(turnedCards.every(e => closedCards.includes(e)) === false)
            {
                images.forEach((image) => {
                        image.style.pointerEvents = "none";
                    });
                    
                turnedCards.forEach((idNo) => {
                                       
                    const pic = document.getElementById(idNo);
                    setTimeout(() => {
                        images.forEach((image) => {
                            image.style.pointerEvents = "all";
                        });
                        pic.src = "/assets/imgs/blank_img.jpg";
                    },2000 - ((parseInt(levelNumberString.innerHTML) - 1) * 200));
                });
            }
            //Rendering the level complete conditions
            if(closedCards.length === images.length)
                levelComplete();
            
            turnedCards = [];
        }
    }
    isTurned = !isTurned;
}



images.forEach((image) => {
    image.addEventListener("click",() => changeImg(image))
})



//Handling the time remaining part
let timeRemaining = 90;

time.textContent = `${timeRemaining}`;
timeDiv.appendChild(time);

const reduceTime = () => {
    
    timeRemaining > 0 ? timeRemaining -- : killSwitch();
    time.textContent = `${timeRemaining}`;
    timeDiv.appendChild(time);
}

let reduceTimeinterval = setInterval(reduceTime, 1000 - ((parseInt(levelNumberString.innerHTML) - 1) * 150));


//Handling the flips remaining part
let flipRemaining;
switch(parseInt(levelNumberString.innerHTML))
{
    case 1 : flipRemaining = 6; break;
    case 2 : flipRemaining = 6; break;
    case 3 : flipRemaining = 5; break;
    case 4 : flipRemaining = 4; break;
    case 5 : flipRemaining = 3; break;
    default : flipRemaining = 6;
}

flips.textContent = `${flipRemaining}`;

flipDiv.appendChild(flips);