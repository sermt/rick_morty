const axios = require('axios');
const fs=require('fs').promises;
const path=require('path');
const main = async () => {
    let response = await axios.get(' https://rickandmortyapi.com/api/character');
    let { data: { results } } = response;
    let characters = results.map((item) => { return { id: item.id, name: item.name, status: item.status, species: item.species } }).map((extra) =>
        Object.values(extra).join(','))
        .join('\n');
    await fs.writeFile(path.join(__dirname,'data.csv'), characters);
}
main();