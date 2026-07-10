class SiteSearch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<section class="search">
            <button class="button-publisher">MARVEL</button>
            <button class="button-publisher">DC</button>
            <button class="button-publisher">DARK HORSE</button>
            <button class="button-publisher">NBC - HEROES</button>
            <button class="button-publisher">TODOS</button>
            <div>
                <input type="text" placeholder="Pesquise seu personagem favorito..."/>
                <img src="../assets/icon/search.svg"></img>
            </div>
        </section>`;
    }
}

customElements.define('site-search', SiteSearch);