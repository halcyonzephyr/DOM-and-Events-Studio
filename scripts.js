// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("DOMContentLoaded", (event) => {
    const rocket = document.getElementById("rocket");
    const takeoff = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    let height = 0;
    const upButton = document.getElementById("upControl");
    const downButton = document.getElementById("downControl");
    const leftButton = document.getElementById("leftControl");
    const rightButton = document.getElementById("rightControl");

    takeoff.addEventListener("click", (event) => {
        const flightConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (flightConfirmation) {
            flightStatus.innerText = "Shuttle in flight!";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerText = height + 10000;
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
    });

    upButton.addEventListener("click", (event) => {
        height += 1000;
        rocket.style.bottom = `${height/100}px`;
    })

    downButton.addEventListener("click", (event) => {
        height -= 1000;
        rocket.style.bottom = `${height/100}px`;
    })

    leftButton.addEventListener("click", (event) => {
        rocket.style.left = "-20px";
    })

    rightButton.addEventListener("click", (event) => {
        rocket.style.right = "20px";
    })

});