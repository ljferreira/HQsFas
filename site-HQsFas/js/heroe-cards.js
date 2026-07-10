import { listaPersonagem } from "./services/superhero.js";

async function carregarCards(){
    
    const lista = await listaPersonagem();
    
    let listaCards = "";
    lista.forEach(element => {

        listaCards += `<div>
                <div style="margin: auto; margin-top: 5px; width: 190px; height: 250px;">
                    <img style="border-radius: 15px; background-color: aqua; object-fit: cover; width: 100%; height: 100%;" src=${element.images.md} alt="imagem de personagem" />
                </div>
                <h3 style="background-color: inherit; font-family: var(--fonte-geral);">${element.name}</h3>
                <h6 style="background-color: inherit; font-family: var(--fonte-geral);">${element.biography.publisher}</h6>
                <p style="background-color: inherit; font-family: var(--fonte-geral); font-size: .8rem;">${(element.biography.fullName != "") ? element.biography.fullName : '&nbsp;'}</p>
                <!--h5 style="background-color: inherit; font-family: var(--fonte-geral);">Poder</h5-->
                <div style="display:flex; justify-content: space-around;padding: 0 5px;">
                    <div >
                        <img src="../assets/icon/intelligence.png" width="20" title="Inteligência"/>
                        <h5 style="background-color: inherit; font-family: var(--fonte-geral);">${element.powerstats.intelligence}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/strength.png" width="20" title="Força"/>
                        <h5 style="background-color: inherit; font-family: var(--fonte-geral);">${element.powerstats.strength}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/speed.png" width="20" title="Velocidade"/>
                        <h5 style="background-color: inherit; font-family: var(--fonte-geral);">${element.powerstats.speed}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/durability.png" width="20" title="Durabilidade"/>
                        <h5 style="background-color: inherit; font-family: var(--fonte-geral);">${element.powerstats.durability}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/power.png" width="20" title="Poder"/>
                        <h5 style="background-color: inherit; font-family: var(--fonte-geral);">${element.powerstats.power}</h5>
                    </div>
                    <div >
                        <img src="../assets/icon/combat.png" width="20" title="Combate"/>
                        <h5 style="background-color: inherit; font-family: var(--fonte-geral);">${element.powerstats.combat}</h5>
                    </div>
                </div>
            </div>`
        
    });   

    document.getElementById('repo-cards').innerHTML= listaCards;
    
}

carregarCards();