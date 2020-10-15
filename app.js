
 /* - La tarifa de la habitación por noche es de:
    100€ para categoría Standard, 120€ Junior Suite y 150€ Suite.
    - El uso del SPA incrementa la tarifa anterior en 20€.
    - Una vez tengas la tarifa en función de la categoría y el SPA: 
    el uso individual reduce un 25% la tarifa por noche, 
    el uso triple la incrementa en un 25%. 
    El uso doble la deja tal cual.
    - Cada noche de parking suma 10€.
 */

 //Get the seleted values 
const roomType = document.getElementById("room-type").value;
const haveSpa = document.getElementById("spa").checked;
const roomOcupation = document.getElementById("room-ocupation").value;
const numberOfNights = document.getElementById("number-of-nights").value;
const parkingNights = document.getElementById("parking-nights").value;

//Formula

//Add event handler to button
