const eventHandler = () => {
    //initalizing result variable
    let result;
    
    //Get the seleted values 
    const roomType = document.getElementById("room-type").value;
    const haveSpa = document.getElementById("spa").checked;
    const roomOcupation = document.getElementById("room-ocupation").value;
    const numberOfNights = document.getElementById("number-of-nights").value;
    const parkingNights = document.getElementById("parking-nights").value;

    //Formula
    //Standard 100€ / Junior Suite 120€ / Suite 150€
    if (roomType === "Standard") result = 100;
    if (roomType === "Junior Suite") result = 120;
    if (roomType === "Suite") result = 150;

    //spa +20€
    if (haveSpa) result = result + 20;

    //single -25% / triple +25%
    if (roomOcupation === "single") result = result - result*0.25;
    else if (roomOcupation === "triple") result = result + result*0.25;

    //*number of nights + 10€ * parking nights
    result = result*numberOfNights + 10*parkingNights;

    //Print result on h2#result
    document.getElementById("result").innerText = result+" €";
}

//Add event handler to button
document.getElementById("calculate").addEventListener("click",eventHandler);

//create functions that add event listeners
const addChangeEventListener = (elementId) => {
    document.getElementById(elementId).addEventListener("change",eventHandler);
}

const addKeyUpEventListener = (elementId) => {
    document.getElementById(elementId).addEventListener("keyup",eventHandler);
}

//Add event handler to each input & select
addChangeEventListener("room-type");
addChangeEventListener("spa");
addChangeEventListener("room-ocupation");
addKeyUpEventListener("number-of-nights");
addKeyUpEventListener("parking-nights");