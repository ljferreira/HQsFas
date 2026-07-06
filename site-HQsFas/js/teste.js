//alert("Testando JS...");

/*export async function buscarCep(cep){
    let cepLimpo = cep.replace(/\D/g, '')

    if(cepLimpo.length !== 8) {
        throw new Error('O CEP deve ter 8 dígitos.')
    }

    let resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
    let dados = await resposta.json()

    if(dados.erro) {
        throw new Error ('CEP não encontrado.')
    }

    return dados
}*/

/*import { buscarCep } from "../services/viacep.js";

let form = document.querySelector('#form-cadastro') 
let campoCep = document.querySelector('#cep') 

campoCep.addEventListener('blur', async () => {
    if(!campoCep.value) return

    try {
        let endereco = await buscarCep(campoCep.value)
        document.querySelector('#logradouro').value = endereco.logradouro
        document.querySelector('#bairro').value = endereco.bairro
        document.querySelector('#cidade').value = endereco.localidade
        document.querySelector('#uf').value = endereco.uf
    } catch (error) {
        console.error(error.message)
    }
})*/

async function buscarHeroi(id){
    //let cepLimpo = cep.replace(/\D/g, '')

    // if(cepLimpo.length !== 8) {
    //     throw new Error('O CEP deve ter 8 dígitos.')
    // }

    //let resposta = await fetch(`https://viacep.com.br/ws/${id}/json/`)
    //let resposta = await fetch(`https://viacep.com.br/ws/95800000/json/`)
    let resposta = await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
    // https://akabab.github.io/superhero-api/api/id/70.json
    let dados = await resposta.json()

    alert(dados.name);

    if(dados.erro) {
        throw new Error ('Herói não encontrado.')
    }
    else{
        //alert(dados.name);
        //alert(dados.biography.fullName);
        //alert(dados.powerstats.intelligence);
        //alert(dados.images.md);
    }

    return dados
}

function teste(){
    alert("Teste!!!");
}