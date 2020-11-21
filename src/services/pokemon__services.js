import axios from 'axios'

export async function getAllPokemon(url){
    let result = await axios.get(url);
    return result;
}

export async function loadingPokemon (pokemonList, setPokemonList, isOfType){
    let pokemonData = await Promise.all(pokemonList.map(async pokemon => {
        let pokemonRecord = await getPokemon(isOfType ? pokemon.pokemon.url : pokemon.url);
        return pokemonRecord;
    }))
    setPokemonList(isOfType ? pokemonData.slice(0, 30) : pokemonData);
}

export async function getPokemon(pokemonUrl){
    let result = await 
    axios.get(pokemonUrl)
    .then(response => {
        return response.data
    })
    .catch(error => {
        return error.response.data.error
    })
    return result;
}

export async function getPokemonTypes(setTypesList){
    let result = await axios.get('https://pokeapi.co/api/v2/type');
    setTypesList(result.data.results.filter(res => !['unknown','shadow'].includes(res.name)));
}

export async function getTypeUrl(typeName){
    let url = await axios.get('https://pokeapi.co/api/v2/type');
    return url.data.results.filter(result => result.name === typeName)[0].url;
}

export async function getPokemonsOfType(typeName, setPokemonList){
    let typeUrl = await getTypeUrl(typeName);
    let typeResults = await axios.get(typeUrl);
    await loadingPokemon(typeResults.data.pokemon, setPokemonList, true);
}

export async function prevPokemons(prevUrl, setPokemonList, setPrevUrl, setNextUrl){
    let allPokemon = await getAllPokemon(prevUrl);
    await loadingPokemon(allPokemon.data.results, setPokemonList);
    setPrevUrl(allPokemon.data.previous);
    setNextUrl(allPokemon.data.next);
}

export async function nextPokemons(nextUrl, setPokemonList, setPrevUrl, setNextUrl){
    let allPokemon = await getAllPokemon(nextUrl);
    await loadingPokemon(allPokemon.data.results, setPokemonList);
    setPrevUrl(allPokemon.data.previous);
    setNextUrl(allPokemon.data.next);
}