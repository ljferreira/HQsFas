class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<header>
            <h2 class="logo" onclick="window.location.assign('index.html')">HQs Fãs</h2>
            <nav class="menu">
                <a href="#">EXPLORAR</a>
                <a href="#">COMUNIDADE</a>
                <a href="#">CONHECIMENTO</a>
                <a href="index.html">GALERIA</a>
                <button class="button-cadastro" onclick="window.location.assign('cadastro.html')">CADASTRE-SE</button>
            </nav>
        </header>`;
    }
}

customElements.define('site-header', SiteHeader);