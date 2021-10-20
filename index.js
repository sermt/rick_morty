const axios= require('axios');
const main =async()=>{
let response=  await axios.get(' https://rickandmortyapi.com/api/character');
let {data:{results}} = response;
let personajes= results.map((item)=> { return {id: item.id, name: item.name}});
console.log(personajes);
}
main();