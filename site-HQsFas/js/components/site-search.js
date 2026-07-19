class SiteSearch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<section class="search">
            <button class="button-publisher" id="btnMarvel">MARVEL</button>
            <button class="button-publisher" id="btnDC">DC</button>
            <button class="button-publisher" id="btnDarkHorse">DARK HORSE</button>
            <button class="button-publisher" id="btnNBCHeroes">NBC - HEROES</button>
            <button class="button-publisher" id="btnTodos">TODOS</button>
            <div id="campoPesquisaPersonagem">
                <input type="text" id="pesquisarPersonagem" list="sugestaoPersonagem"  placeholder="Pesquise seu personagem favorito..."/>
                <img id="botaoPesquisa" src="./assets/icon/search.svg" ></img>
                <datalist id="sugestaoPersonagem">
                </datalist>
            </div>
        </section>
        <nav id="menu" style="display: none">
            <a href="#">EXPLORAR</a>
            <a href="#">COMUNIDADE</a>
            <a href="#">CONHECIMENTO</a>
            <a href="#" onclick="personagensTodos()">GALERIA</a>
        </nav>`;
    }
}

customElements.define('site-search', SiteSearch);

let botaoPesquisa = document.getElementById("botaoPesquisa");

botaoPesquisa.addEventListener("mouseover", botaoPesquisaMouseOver);
botaoPesquisa.addEventListener("mouseout", botaoPesquisaMouseOut);

function botaoPesquisaMouseOver() {
    botaoPesquisa.src = "./assets/icon/search_hover.svg";
}

function botaoPesquisaMouseOut() {
    botaoPesquisa.src = "./assets/icon/search.svg";
}