export async function listaPersonagem() {

    let obtemLista = null;
    let listaPersonagens = null;
    console.log("Testando");

    try{

        obtemLista = await fetch("https://akabab.github.io/superhero-api/api/all.json");
        
        if ( !obtemLista.ok ) {

            console.log( `Http erro: ${obtemLista.status}` );
            return;

        }

        listaPersonagens = await obtemLista.json();

    } catch( erro ) {

        throw new Error( "Houve um provável erro de rede!" );

    }

    return listaPersonagens;

}