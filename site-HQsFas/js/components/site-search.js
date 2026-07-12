class SiteSearch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<section class="search">
            <button class="button-publisher" id="btnMarvel">MARVEL</button>
            <button class="button-publisher" id="btnDC">DC</button>
            <button class="button-publisher" id="btnDarkHorse">DARK HORSE</button>
            <button class="button-publisher" id="btnNBCHeroes">NBC - HEROES</button>
            <button class="button-publisher" id="btnTodos">TODOS</button>
            <div>
                <input type="text" placeholder="Pesquise seu personagem favorito..."/>
                <img src="../assets/icon/search.svg"></img>
            </div>
        </section>`;
    }
}

customElements.define('site-search', SiteSearch);