import { listaPersonagem } from "./services/superhero.js";

let cardsCache = [];

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
    
    /*let listaCards = "";
    lista.forEach(element => {

        listaCards += `<div class="cardPersonagem">
                <div class="cardImagemPersonagem">
                    <img src=${element.images.md} alt="imagem de personagem"/>
                </div>
                <h3 class="nomePersonagem">${element.name}</h3>
                <h6 class="produtorPersonagem">${element.biography.publisher}</h6>
                <h5 class="identidadePersonagem">${(element.biography.fullName != "") ? element.biography.fullName : '&nbsp;'}</h5>
                <div class="qualidadesPersonagem">
                    <div >
                        <img src="../assets/icon/intelligence.png" width="20" title="Inteligência"/>
                        <h5>${element.powerstats.intelligence}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/strength.png" width="20" title="Força"/>
                        <h5>${element.powerstats.strength}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/speed.png" width="20" title="Velocidade"/>
                        <h5>${element.powerstats.speed}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/durability.png" width="20" title="Durabilidade"/>
                        <h5>${element.powerstats.durability}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/power.png" width="20" title="Poder"/>
                        <h5>${element.powerstats.power}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/combat.png" width="20" title="Combate"/>
                        <h5>${element.powerstats.combat}</h5>
                    </div>
                </div>
            </div>`
        
    });*/   

    document.getElementsByTagName("main")[0].style.height="auto";
    //document.getElementById('repo-cards').innerHTML= listaCards;

    personagensTodos();
    
}

carregarCards();

document.getElementById("btnMarvel").addEventListener("click", personagensMarvel);
document.getElementById("btnDC").addEventListener("click", personagensDC);
document.getElementById("btnDarkHorse").addEventListener("click", personagensDarkHorse);
document.getElementById("btnNBCHeroes").addEventListener("click", personagensNBC);
document.getElementById("btnTodos").addEventListener("click", personagensTodos);

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

/*function personagensMarvel( ){

    let listaCards = "";
    cardsCache.forEach(element => {

       if ( (element.publisher ?? "").toLowerCase().includes('marvel') )
        listaCards += `<div class="cardPersonagem">
                <div class="cardImagemPersonagem">
                    <img src=${element.images} alt="imagem de personagem"/>
                </div>
                <h3 class="nomePersonagem">${element.name}</h3>
                <h6 class="produtorPersonagem">${element.publisher}</h6>
                <h5 class="identidadePersonagem">${(element.fullName != "") ? element.fullName : '&nbsp;'}</h5>
                <div class="qualidadesPersonagem">
                    <div >
                        <img src="../assets/icon/intelligence.png" width="20" title="Inteligência"/>
                        <h5>${element.intelligence}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/strength.png" width="20" title="Força"/>
                        <h5>${element.strength}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/speed.png" width="20" title="Velocidade"/>
                        <h5>${element.speed}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/durability.png" width="20" title="Durabilidade"/>
                        <h5>${element.durability}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/power.png" width="20" title="Poder"/>
                        <h5>${element.power}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/combat.png" width="20" title="Combate"/>
                        <h5>${element.combat}</h5>
                    </div>
                </div>
            </div>`
        
    });   

    //document.getElementsByTagName("main")[0].style.height="auto";
    document.getElementById('repo-cards').innerHTML= listaCards;
}*/

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
                        <img src="../assets/icon/intelligence.png" width="20" title="Inteligência"/>
                        <h5>${element.intelligence}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/strength.png" width="20" title="Força"/>
                        <h5>${element.strength}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/speed.png" width="20" title="Velocidade"/>
                        <h5>${element.speed}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/durability.png" width="20" title="Durabilidade"/>
                        <h5>${element.durability}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/power.png" width="20" title="Poder"/>
                        <h5>${element.power}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/combat.png" width="20" title="Combate"/>
                        <h5>${element.combat}</h5>
                    </div>
                </div>
            </div>`
        
    });   
    
    document.getElementById('repo-cards').innerHTML= listaCards;

}