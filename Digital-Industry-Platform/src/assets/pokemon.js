import axios from 'axios';

function getPokemon(){
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
            .then((res) => {
                console.log('axios: ' + JSON.stringify(res.data.results));
                return res.data.results;
            });
}

export {
    getPokemon,
}