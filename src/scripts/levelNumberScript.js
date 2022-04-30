let data = window.performance.getEntriesByType("navigation")[0];

if(data.type === "navigate")
{
    let levelCount = sessionStorage.getItem("LEVELNUMBER") || 0;
    sessionStorage.setItem("LEVELNUMBER",parseInt(++levelCount));
}

else if(data.type === "back_forward")
{
    let levelCount = parseInt(sessionStorage.getItem("LEVELNUMBER")) - 2;
    let checkedLevelCount = securityCheck(levelCount);
    sessionStorage.setItem("LEVELNUMBER",checkedLevelCount);
    window.location.href = "/";
}

function securityCheck(parameter){
    if(parameter == -1)
        return 0;
    else if(parameter == 3)
        return 4;
    return parameter;
}