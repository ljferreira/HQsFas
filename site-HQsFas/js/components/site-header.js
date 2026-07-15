class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<header>
            <!--button>Teste</button-->
            <h2 class="logo" onclick="window.location.assign('index.html')">HQs Fãs</h2>
            <img id="iconeMenu" src="./assets/icon/menu.png" width="40px"/>
            <nav class="menu">
                <a href="#">EXPLORAR</a>
                <a href="#">COMUNIDADE</a>
                <a href="#">CONHECIMENTO</a>
                <a href="index.html">GALERIA</a>
                <button class="button-cadastro" onclick="window.location.assign('./pages/cadastro.html')">CADASTRE-SE</button>
            </nav>
        </header>`;
    }
}

customElements.define('site-header', SiteHeader);

let iconeMenu = document.getElementById("iconeMenu");

iconeMenu.addEventListener("mouseover", iconeMouseOverMenu);
iconeMenu.addEventListener("mouseout", iconeMouseOutMenu);

function iconeMouseOverMenu() {
    iconeMenu.src = "./assets/icon/menu_hover.png";
}

function iconeMouseOutMenu() {
    iconeMenu.src = "./assets/icon/menu.png";
}