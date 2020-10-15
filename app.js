
 /* - La tarifa de la habitación por noche es de:
    100€ para categoría Standard, 
    120€ Junior Suite y 
    150€ Suite.
    - El uso del SPA incrementa la tarifa anterior en 20€.
    - Una vez tengas la tarifa en función de la categoría y el SPA: 
    el uso individual reduce un 25% la tarifa por noche, 
    el uso triple la incrementa en un 25%. 
    El uso doble la deja tal cual.
    - Cada noche de parking suma 10€.
 */

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
    if (roomType === "Standard") result = 100;
    if (roomType === "Junior Suite") result = 120;
    if (roomType === "Suite") result = 150;

    if (haveSpa) result = result + 20;

    if (roomOcupation === "single") result = result - result*0.25;
    else if (roomOcupation === "triple") result = result + result*0.25;

    result = result*numberOfNights + 10*parkingNights;

    document.getElementById("result").innerText = result+" €";
}

//Add event handler to button
document.getElementById("calculate").addEventListener("click",eventHandler);
