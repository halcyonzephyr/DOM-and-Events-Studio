// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("DOMContentLoaded", (event) => {
    let button = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    button.addEventListener("click", (event) => {
        window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (window.confirm) {
            
            flightStatus.innerHTML = "Shuttle in flight!";
            shuttleBackground.style.backgroundColor = "blue";
            
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        }
    });

    landButton.addEventListener("click", (event) => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    missionAbort.addEventListener("click", (event) => {
        
    })
});