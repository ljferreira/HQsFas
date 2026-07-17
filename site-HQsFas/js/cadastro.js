import { buscarCep } from './services/viacep.js';

document.getElementById("cep").addEventListener("input", consultarCep);
document.getElementById("btnConfirmarCadastro").addEventListener("click", validaCadastro);
window.addEventListener("load", telaFundo);

async function consultarCep() {
    
    let cep = validaEntradaCep().replace(/[^0-9]/ig, "");
    if ( cep.length === 8 ) {
        let dados = await buscarCep(cep);
        document.getElementById("cidade").value = (dados.localidade !== undefined) ? dados.localidade : "";
        document.getElementById("estado").value = (dados.uf !== undefined) ? dados.uf : "";

    } else {
        document.getElementById("cidade").value = "";
        document.getElementById("estado").value = "";
    }     

}

function validaEntradaCep(){
                        
    let cep, cepParte1, cepParte2;
    cep = ajustaCepParte1(document.getElementById("cep").value);
    cepParte1 = cep.substring(0,5);
    cepParte2 = ajustaCepParte2(cep);

    cep = cepParte1 + cepParte2;
    
    document.getElementById("cep").value = cep;

    return cep;

    function ajustaCepParte1(cep) {

        let cepParte1, cepParte2, tamanhoCepParte1, tamanhoCepParte2;

        cepParte1 = cep.substring(0, 5);
        tamanhoCepParte1 = cepParte1.length;
        cepParte2 = cep.substring(5);
        tamanhoCepParte2 = cepParte2.length;

        cepParte1 = cepParte1.replace(/[^0-9]/ig, "");
        cep = cepParte1 + cepParte2;

        if (!(tamanhoCepParte1 === cepParte1.length && tamanhoCepParte2 === cepParte2.length))
            return ajustaCepParte1(cep);
            
        return cep;
    }

    function ajustaCepParte2(cep) {

        let cepParte2;

        cepParte2 = cep.substring(5);

        if (cepParte2.length) {
            cepParte2 = cepParte2.substring(0, 1).replace(/[^0-9-]/ig, "") + cepParte2.substring(1).replace(/[^0-9]/, "");
            cepParte2 = (cepParte2.substring(0, 1) !== '-') ? '-' + cepParte2 : cepParte2;
        }
        
        return cepParte2.substring(0,4);

    }

}

function validaCadastro() {

    const nome   = document.getElementById("nome").value.trim();
    const email  = document.getElementById("email").value.trim();
    const senha  = document.getElementById("senha").value.trim();
    const cidade = document.getElementById("cidade").value.trim();

    if ( nome === "" )  { 
        alert( "Informe um nome! " );
        document.getElementById("nome").value = nome;   
        return; 
    }

    if ( email === "" ) { 
        alert( "Informe um email! " ); 
        return; 
    }

    if ( senha === "" ) { 
        alert( "Informe uma senha! " ); 
        document.getElementById("senha").value = senha; 
        return; 
    }

    if ( cidade === "" ) { 
        alert( "Informe um CEP válido! " );
        document.getElementById("cep").focus(); 
        return; 
    }

    alert("Cadastro Concluído!");
    window.location.assign('index.html');

}

function telaFundo() {

    const imagens = ["./assets/images/quadrinhos1.jpg", 
                     "./assets/images/quadrinhos2.jpg",
                     "./assets/images/quadrinhos3.jpg"
                    ];
    const numeroImagem = Math.floor(Math.random() * 3);
    document.getElementById("tela").style.backgroundImage = `url(${imagens[numeroImagem]})`;
    
}