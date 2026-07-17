import { listaPersonagem } from "./services/superhero.js";

let cardsCache = [];
let inputPesquisa = "";

async function carregarCards(){
    
    const lista = await listaPersonagem();

    cardsCache.length = 0;
    lista.forEach( (element) => {
        cardsCache.push({ 
                            "id":           element.id, 
                            "name":         element.name,
                            "fullName":     element.biography.fullName,
                            "publisher":    element.biography.publisher,
                            "images":       element.images.md,
                            "intelligence": element.powerstats.intelligence,
                            "strength":     element.powerstats.strength,
                            "speed":        element.powerstats.speed,
                            "durability":   element.powerstats.durability,
                            "power":        element.powerstats.power,
                            "combat":       element.powerstats.combat
                        });
    });   

    document.getElementsByTagName("main")[0].style.height="auto";

    personagensTodos();
    
}

carregarCards();

document.getElementById("btnMarvel").addEventListener("click", personagensMarvel);
document.getElementById("btnDC").addEventListener("click", personagensDC);
document.getElementById("btnDarkHorse").addEventListener("click", personagensDarkHorse);
document.getElementById("btnNBCHeroes").addEventListener("click", personagensNBC);
document.getElementById("btnTodos").addEventListener("click", personagensTodos);

document.getElementById("botaoPesquisa").addEventListener('click', focoPesquisa);
document.getElementById("pesquisarPersonagem").addEventListener('focus', ativaPesquisa);
document.getElementById("pesquisarPersonagem").addEventListener('blur', desativaPesquisa);
document.getElementById("pesquisarPersonagem").addEventListener('input', () => {
    listaSugestaoPersonagem(document.getElementById("pesquisarPersonagem").value);
});
document.getElementById("pesquisarPersonagem").addEventListener('keydown', 
    () => { if(event.key === 'Enter') 
            exibeCardPersonagem( cardsCache, document.getElementById("pesquisarPersonagem").value );});


function personagensMarvel( ){

    exibeCards( cardsCache, "Marvel Comics");
}

function personagensDC( ){

    exibeCards( cardsCache, "DC Comics");
}

function personagensDarkHorse( ){

    exibeCards( cardsCache, "Dark Horse Comics");
}

function personagensNBC( ){

    exibeCards( cardsCache, "NBC - Heroes");
}

function personagensTodos( ){

    exibeCards( cardsCache );
}

function exibeCards( cards, produtorPersonagem = "" ) {
   
    let listaCards = "";
    cards.forEach(element => {
        
       if ( (element.publisher ?? "").toLowerCase().includes(produtorPersonagem.toLowerCase()) )
        listaCards += `<div class="cardPersonagem">
                <div class="cardImagemPersonagem">
                    <img src=${element.images} alt="imagem de personagem"/>
                </div>
                <h3 class="nomePersonagem">${element.name}</h3>
                <h6 class="produtorPersonagem">${element.publisher}</h6>
                <h5 class="identidadePersonagem">${(element.fullName != "") ? element.fullName : '&nbsp;'}</h5>
                <div class="qualidadesPersonagem">
                    <div >
                        <img src="./assets/icon/intelligence.png" width="20" title="Inteligência"/>
                        <h5>${element.intelligence}</h5>
                    </div>
                    <div >
                        <img src="./assets/icon/strength.png" width="20" title="Força"/>
                        <h5>${element.strength}</h5>
                    </div>
                    <div >
                        <img src="./assets/icon/speed.png" width="20" title="Velocidade"/>
                        <h5>${element.speed}</h5>
                    </div>
                    <div >
                        <img src="./assets/icon/durability.png" width="20" title="Durabilidade"/>
                        <h5>${element.durability}</h5>
                    </div>
                    <div >
                        <img src="./assets/icon/power.png" width="20" title="Poder"/>
                        <h5>${element.power}</h5>
                    </div>
                    <div >
                        <img src="./assets/icon/combat.png" width="20" title="Combate"/>
                        <h5>${element.combat}</h5>
                    </div>
                </div>
            </div>`
        
    });

    document.getElementById('repo-cards').innerHTML= listaCards;

    alturaTelaVertical();

}
    
function exibeCardPersonagem( cards, nomePersonagem ) {
   
    let listaCards = "";
    if ( !nomePersonagem.toLowerCase().trim() ) return;
    cards.forEach(element => {
        
       if ( element.name.toLowerCase().trim().startsWith(nomePersonagem.toLowerCase().trim()) )
        listaCards += `<div class="cardPersonagem">
                <div class="cardImagemPersonagem">
                    <img src=${element.images} alt="imagem de personagem"/>
                </div>
                <h3 class="nomePersonagem">${element.name}</h3>
                <h6 class="produtorPersonagem">${element.publisher}</h6>
                <h5 class="identidadePersonagem">${(element.fullName != "") ? element.fullName : '&nbsp;'}</h5>
                <div class="qualidadesPersonagem">
                    <div >
                        <img src="./assets/icon/intelligence.png" width="20" title="Inteligência"/>
                        <h5>${element.intelligence}</h5>
                    </div>
                    <div >
                        <img src="./assets/icon/strength.png" width="20" title="Força"/>
                        <h5>${element.strength}</h5>
                    </div>
                    <div >
                        <img src="./assets/icon/speed.png" width="20" title="Velocidade"/>
                        <h5>${element.speed}</h5>
                    </div>
                    <div >
                        <img src="./assets/icon/durability.png" width="20" title="Durabilidade"/>
                        <h5>${element.durability}</h5>
                    </div>
                    <div >
                        <img src="./assets/icon/power.png" width="20" title="Poder"/>
                        <h5>${element.power}</h5>
                    </div>
                    <div >
                        <img src="./assets/icon/combat.png" width="20" title="Combate"/>
                        <h5>${element.combat}</h5>
                    </div>
                </div>
            </div>`
        
    });   
    
    document.getElementById('repo-cards').innerHTML= listaCards;

    alturaTelaVertical();

}

function focoPesquisa(){
   
    document.getElementById("pesquisarPersonagem").focus();
    exibeCardPersonagem( cardsCache, inputPesquisa );

}

function ativaPesquisa() {

    const elementoHTML = document.getElementById("campoPesquisaPersonagem");
    elementoHTML.style.height = "45px";
    elementoHTML.style.border = "solid 2px rgb(41, 147, 209)";

}

function desativaPesquisa() {

    const elementoHTML = document.getElementById("campoPesquisaPersonagem");
    inputPesquisa = document.getElementById("pesquisarPersonagem").value;
    document.getElementById("pesquisarPersonagem").value = "";
    elementoHTML.style.height = "40px";
    elementoHTML.style.border = "none";

}

function listaSugestaoPersonagem( nomeDoPersonagem ) {

    let listaSugestaoPersonagem = "";

    cardsCache.forEach( elemento => {
        if ( elemento.name.toLowerCase().trim().startsWith( nomeDoPersonagem.toLowerCase().trim() ))
          listaSugestaoPersonagem += `<option value=${elemento.name}>`;

    })

    document.getElementById("sugestaoPersonagem").innerHTML = listaSugestaoPersonagem;

}

function alturaTelaVertical() {

    if ( document.documentElement.scrollHeight > window.innerHeight )
        document.getElementsByTagName("body")[0].style.height = "auto";
    else
        document.getElementsByTagName("body")[0].style.height = "100vh";

}