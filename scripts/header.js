/* Make model of kettle rotate over time */
var timePassed = 0;
window.setInterval(function () {
    timePassed++;
    document.getElementById("model").querySelector("a-entity").setAttribute("rotation", "0 " + timePassed / 10 + " 0");
}, 1);

// TODO: allow small screens; stop gyro positioning; focus on accessibility