import { listaPersonagem } from "./superhero.js";

//let dadosIdNomePersonagens = [];

// async function exibirPersonagens() {

//     let personagens = await listaPersonagem();
//     console.table( personagens );
//     console.log("TESTANDO");

// }

window.exibirPersonagens = async function () {
    const personagens = await listaPersonagem();
    console.table(personagens);
    console.log("TESTANDO");
};

function testeCons() { console.log("teste")}