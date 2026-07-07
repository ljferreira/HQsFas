class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<footer>
            <h2 class="logo-footer">HQs<br>Fãs</h2>
            <ul>
                <li><span>Recursos</span></li>
                <li><a href="#">Banco de dados</li></a>
                <li><a href="#">Wiki</li></a>
                <li><a href="#">FAQ</li></a>
            </ul>
            <ul>
                <li><span>Comunidade</span></li>
                <li><a href="#">Foruns</li></a>
                <li><a href="#">Perfis</li></a>
                <li><a href="#">Eventos</li></a>
            </ul>
            <ul>
                <li><span>Legal</span></li>
                <li><a href="#">Termos</li></a>
                <li><a href="#">Privacidade</li></a>
                <li><a href="#">DMCA</li></a>
            </ul>
            <div class="direitos">
                <h6>&copy; 2026 HQs Fãs</h6>
                <img src="../assets/icon/facebook-gray.svg" width="20px"></img>
                <img src="../assets/icon/discord-gray.svg" width="20px"></img>
                <img src="../assets/icon/github-gray.svg" width="20px"></img>
            </div>
        </footer>`;
    }
}

customElements.define('site-footer', SiteFooter);