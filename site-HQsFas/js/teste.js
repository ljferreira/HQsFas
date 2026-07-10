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

function carregarCards(){
    //alert("Teste!!!");
    document.getElementById('repo-cards').innerHTML=`<div>
                <div style="margin: auto; margin-top: 5px; width: 190px; height: 250px;">
                    <img style="border-radius: 15px; object-fit: cover; width: 100%; height: 100%;" src="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/70-batman.jpg" alt="imagem de personagem" />
                </div>
                <h3 style="background-color: inherit; font-family: var(--fonte-geral);">Batman</h3>
                <h6 style="background-color: inherit; font-family: var(--fonte-geral);">DC Comics</h6>
                <p style="background-color: inherit; font-family: var(--fonte-geral); font-size: .8rem;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                <h5 style="background-color: inherit; font-family: var(--fonte-geral);">Poder</h5>
                <h5 style="background-color: inherit; font-family: var(--fonte-geral);">67</h5>
                
            </div>
            <div>
                <div style="margin: auto; margin-top: 5px; width: 190px; height: 250px;">
                    <img style="border-radius: 15px; background-color: aqua; object-fit: cover; width: 100%; height: 100%;" src="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/80-beyonder.jpg" alt="imagem de personagem" />
                </div>
                <h3 style="background-color: inherit; font-family: var(--fonte-geral);">Batman</h3>
                <h6 style="background-color: inherit; font-family: var(--fonte-geral);">Testing...</h6>
                <p style="background-color: inherit; font-family: var(--fonte-geral); font-size: .8rem;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                <h5 style="background-color: inherit; font-family: var(--fonte-geral);">Poder</h5>
                <h5 style="background-color: inherit; font-family: var(--fonte-geral);">67</h5>
            </div>
            <div>Imagem</div>
            <div>Imagem</div>
            <div>Imagem</div>
            <div>Imagem</div>
            <div>Imagem</div>
            <div>Imagem</div-->`;
}