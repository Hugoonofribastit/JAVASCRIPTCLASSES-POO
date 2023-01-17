// Patrón Módulo ( encapsular funcionalidad )


// Patrón Módulo revelador

const setConfig = (() =>{
    url = "https://rickandmortyapi.com/api/";
   
    return { 
        listar: async (endpoint = "character") => {
            const personajes = await fetch(`${url}${character}`);
            console.log(personajes)
        },

        crear: (data) => {
            return "Personaje creado";
        },
        modificar: (data) => {
            return "Modificar personaje"
        },
    };
})(); //con los parentesis definimos y llamamos a la funcion

setConfig.listar('character')