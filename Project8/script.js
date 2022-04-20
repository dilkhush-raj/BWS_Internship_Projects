const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");


let getPokeData = () => {
    // Generating a random number between 1 and 150 

    let id = Math.floor(Math.random() * 150) + 1;
    document.getElementById('number').innerHTML = id;

    // Combining the pokeapi url with pokemon id
    const finalUrl = url + id;
    
    // Fetch generated URL
    fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
        generateCard(data);
        // console.log(data)
    });
};

let generateCard = (data) => {
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name;
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
    document.getElementById('img').src = imgSrc;
    document.getElementById('name').innerHTML = pokeName;
    document.getElementById('attack').innerHTML = statAttack;
    document.getElementById('defence').innerHTML = statDefense;
    document.getElementById('speed').innerHTML = statSpeed;
    document.getElementById('hp').innerHTML = hp;
};

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);