export async function buscarCep(cep){
    
    let resposta = null;
    let dados = null;

    try{

        resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        
        if ( !resposta.ok ) {

            console.log( `Http erro: ${resposta.status}` );
            return;

        }

        dados = await resposta.json()

    } catch( erro  ) {

        throw new Error( "Houve um provável erro de rede!" );

    }

    return dados
    
}
