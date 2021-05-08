import faker from 'faker';

interface PersonProps {
    name: string,
    photo: string,
    pokemons: number[],
    wons: number[],
    power: number
};

const generatePokemons = () => {
    const pokemons: Array<number> = [];
    for(var i = 0; i < 6; i++){
        pokemons.push(Math.floor(Math.random() * 1118) + 1);
    }

    return pokemons;
}

const generateWons = () => {
    const wons: Array<number> = [];
    for(var i = 0; i < 5; i++){
        wons.push(Math.floor(Math.random() * 100) + 1);
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