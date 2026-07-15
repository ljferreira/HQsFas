class SiteSearch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<section class="search">
            <button class="button-publisher" id="btnMarvel">MARVEL</button>
            <button class="button-publisher" id="btnDC">DC</button>
            <button class="button-publisher" id="btnDarkHorse">DARK HORSE</button>
            <button class="button-publisher" id="btnNBCHeroes">NBC - HEROES</button>
            <button class="button-publisher" id="btnTodos">TODOS</button>
            <!--div>
                <input type="text" placeholder="Pesquise seu personagem favorito..."/>
                <img src="../assets/icon/search.svg" ></img>
            </div-->
            <div>
                <input type="text" list="search"  placeholder="Pesquise seu personagem favorito..."/>
                <img src="./assets/icon/search.svg" ></img>
                <datalist id="search">
                    <!--option value="Batman"-->
                </datalist>
            </div>
        </section>
        
        <div style="display: none">
            <nav class="menu">
                <a href="#">EXPLORAR</a>
                <a href="#">COMUNIDADE</a>
                <a href="#">CONHECIMENTO</a>
                <a href="index.html">GALERIA</a>
            </nav>
        </div>`;
    }
}

customElements.define('site-search', SiteSearch);