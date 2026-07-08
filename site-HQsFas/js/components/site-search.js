class SiteSearch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<section class="search">
            <button class="button">MARVEL</button>
            <button class="button">DC</button>
            <button class="button">DARK HORSE</button>
            <button class="button">NBC - HEROES</button>
            <button class="button">TODOS</button>
            <div>
                <input type="text" placeholder="Pesquise seu personagem favorito..."/>
                <img src="../assets/icon/search.svg"></img>
            </div>
        </section>`;
    }
}

customElements.define('site-search', SiteSearch);