function getPokemonInfo() {

    const pokemonName = document.getElementById('pokemonName')
    const pokemonInfo = document.getElementById('pokemonInfo')

    fetch(`http://localhost:5000/characters/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            const { name, sprites: { front_default }, height, weight } = data

            pokemonInfo.innerHTML = `
    <h1>${name}</h1>
    <img src='${front_default}' alt='${name}'/>
    <p>${weight}</p>
    <p>${height}</p>
    `
        })
        .catch(error => pokemonInfo.innerHTML = <p>Imposible acceder pokemon</p>)






}