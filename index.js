let login = false;

let user = "Lucas";

let password = "1234";

let preguntaNombre = prompt("Cual es tu nombre?");

let preguntaPass = prompt("Ingresa tu password");

const signIn = (preguntaNombre, preguntaPass, user,password) => {
    if(preguntaNombre === user && preguntaPass == password) {
        alert("Bienvenido/a! Te estabamos esperando");
        login = true;
    } else {
        alert(`QUIEN SOS? NADIE TE CONOCE ${preguntaNombre}`);
    }
}



signIn();
