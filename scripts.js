// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("DOMContentLoaded", (event) => {
    let takeoff = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    takeoff.addEventListener("click", (event) => {
        const flightConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (flightConfirmation) {
            flightStatus.innerText = "Shuttle in flight!";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerText = parseInt(spaceShuttleHeight.innerText) + 10000;
        }
    });

    landButton.addEventListener("click", (event) => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerText = 0;
    });

    missionAbort.addEventListener("click", (event) => {
        const abortConfirmation = window.confirm("Confirm that you want to abort the mission.");
        if (abortConfirmation) {
            flightStatus.innerText = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerText = 0;
        }
    })
});