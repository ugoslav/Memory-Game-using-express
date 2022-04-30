const div = document.getElementById("theDiv");
let message = document.createElement("p");
let secondMessage = document.createElement("p");
let thirdMessage = document.createElement("p");
let button = document.createElement("button");

message.textContent = "You have finished all the levels of this game";
secondMessage.textContent = "Thank you for playing this game";
thirdMessage.textContent = "Not had enough?";
button.textContent = "Start Page";

message.setAttribute("id","fmessage");
secondMessage.setAttribute("id","smessage");
thirdMessage.setAttribute("id","tmessage");
button.setAttribute("id","btn");

div.appendChild(message);

setTimeout(() => {
    div.removeChild(message);
    div.appendChild(secondMessage);
},4100);

setTimeout(() => {
    div.removeChild(secondMessage);
    div.appendChild(thirdMessage);
    div.appendChild(button);
},8100);

button.addEventListener("mouseenter",() => {
    button.style.color = "yellowgreen";
    button.style.boxShadow = "3px 3px 10px 3px yellowgreen"
});

button.addEventListener("mouseleave",() => {
    button.style.color = "bisque";
    button.style.boxShadow = "3px 3px 10px 3px bisque"
});

button.addEventListener("click",() => {
    window.location.href= "/";
});
