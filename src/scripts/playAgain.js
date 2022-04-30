const startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
    let count = sessionStorage.getItem("LEVELNUMBER");
    sessionStorage.setItem("LEVELNUMBER",parseInt(--count));
})