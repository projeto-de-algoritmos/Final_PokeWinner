import faker from 'faker';
import PersonProps from '../interface/Person';

const generatePokemons = () => {
    const pokemons: Array<number> = [];
    for(var i = 0; i < 6; i++){
        pokemons.push(Math.floor(Math.random() * 898) + 1);
    }

    return pokemons;
}

const generateWons = () => {
    const wons: Array<number> = [];
    for(var i = 0; i < 5; i++){
        wons.push(Math.floor(Math.random() * 99));
    }

    return wons;
}

const createPeople = () => {
    const persons: Array<PersonProps> = [];
    for(var i = 0; i < 100; i++){
        persons.push(
            {
                name: faker.name.findName(),
                photo: faker.image.avatar(),
                pokemons: generatePokemons(),
                wons: generateWons(),
                power: Math.floor(Math.random() * 10) + 1
            }
        )
    }

    return persons;
}

export default createPeople;