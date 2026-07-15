export async function buscarCep(cep){
    /*let cepLimpo = cep.replace(/\D/g, '')

    if(cepLimpo.length !== 8) {
        throw new Error('O CEP deve ter 8 dígitos.')
    }

    let resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)*/
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let dados = await resposta.json()

    /*if(dados.erro) {
        throw new Error ('CEP não encontrado.')
    }*/

    return dados
}

//import { listaPersonagem } from "./superhero.js";

//let dadosIdNomePersonagens = [];

// async function exibirPersonagens() {

//     let personagens = await listaPersonagem();
//     console.table( personagens );
//     console.log("TESTANDO");

// }

/*window.exibirPersonagens = async function () {
    const personagens = await listaPersonagem();
    console.table(personagens);
    console.log("TESTANDO");
};

function testeCons() { console.log("teste")}*/

