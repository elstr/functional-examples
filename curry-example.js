// Important: Run in browser to be able to use fetch

var getFromAPI = baseURL => endpoint => cb =>
  fetch(`${baseURL}${endpoint}`)
    .then(res => res.json())
    .then(data => cb(data))
    .catch(err => console.log(err.message));

var getPokemons = getFromAPI("https://pokeapi.co/api/v2/"); // PARTIAL APLICATION
var getVinasaur = getPokemons("pokemon/3/"); // Specific pokemon
var getByType = getPokemons("type/10/"); // Fire type

// Until I don't give a cb nothing happens bc curry evaluates when the last arg is received
getVinasaur(data => console.log(data));
getByType(data => console.log(data.pokemon.map(p => p.pokemon.name)));

var getGithub = getFromAPI("https://api.github.com");
var getGithubUsers = getGithub("/users");
getGithubUsers(data => console.log(data.map(user => user.login)));
