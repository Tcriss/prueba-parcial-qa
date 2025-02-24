// pokeapi.test.js
const fetch = require('node-fetch');

describe('PokeAPI Ditto Tests', () => {
  const dittoUrl = 'https://pokeapi.co/api/v2/pokemon/132/';

  it('Debería obtener los datos de Ditto correctamente', async () => {
    const response = await fetch(dittoUrl);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.id).toBe(132);
    expect(data.name).toBe('ditto');
  });

  it('Debería tener la habilidad "limber" como habilidad principal', async () => {
    const response = await fetch(dittoUrl);
    const data = await response.json();

    const limberAbility = data.abilities.find(ability => ability.ability.name === 'limber' && !ability.is_hidden);
    expect(limberAbility).toBeDefined();
  });

  it('Debería tener la habilidad "imposter" como habilidad oculta', async () => {
    const response = await fetch(dittoUrl);
    const data = await response.json();

    const imposterAbility = data.abilities.find(ability => ability.ability.name === 'imposter' && ability.is_hidden);
    expect(imposterAbility).toBeDefined();
  });

  it('Debería tener "transform" como único movimiento', async () => {
    const response = await fetch(dittoUrl);
    const data = await response.json();

    expect(data.moves.length).toBe(1);
    expect(data.moves[0].move.name).toBe('transform');
  });

  it('Debería tener "metal-powder" y "quick-powder" como items que puede tener', async () => {
    const response = await fetch(dittoUrl);
    const data = await response.json();

    const metalPowder = data.held_items.find(item => item.item.name === 'metal-powder');
    const quickPowder = data.held_items.find(item => item.item.name === 'quick-powder');

    expect(metalPowder).toBeDefined();
    expect(quickPowder).toBeDefined();
  });
});