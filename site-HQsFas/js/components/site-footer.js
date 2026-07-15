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
                <img id="logoFacebook" src="../assets/icon/facebook-gray.svg" width="20px" alt="facebook"></img>
                <img id="logoDiscord"  src="../assets/icon/discord-gray.svg"  width="20px" alt="discord"</img>
                <img id="logoGithub"   src="../assets/icon/github-gray.svg"   width="20px" alt="github"></img>
            </div>
        </footer>`;
    }
}

customElements.define('site-footer', SiteFooter);

let logoFacebook = document.getElementById("logoFacebook");
let logoDiscord  = document.getElementById("logoDiscord");
let logoGithub   = document.getElementById("logoGithub");

logoFacebook.addEventListener("mouseover", logoMouseOverFacebook);
logoFacebook.addEventListener("mouseout", logoMouseOutFacebook);
logoDiscord.addEventListener("mouseover", logoMouseOverDiscord);
logoDiscord.addEventListener("mouseout", logoMouseOutDiscord);
logoGithub.addEventListener("mouseover", logoMouseOverGithub);
logoGithub.addEventListener("mouseout", logoMouseOutGithub);

function logoMouseOverFacebook() {
    logoFacebook.src = "../assets/icon/facebook-black.svg";
}

function logoMouseOutFacebook() {
    logoFacebook.src = "../assets/icon/facebook-gray.svg";
}

function logoMouseOverDiscord() {
    logoDiscord.src = "../assets/icon/discord-black.svg";
}

function logoMouseOutDiscord() {
    logoDiscord.src = "../assets/icon/discord-gray.svg";
}

function logoMouseOverGithub() {
    logoGithub.src = "../assets/icon/github-black.svg";
}

function logoMouseOutGithub() {
    logoGithub.src = "../assets/icon/github-gray.svg";
}