const fetch = require('node-fetch');

describe('PokeAPI Ditto Tests', () => {
  const dittoUrl = 'https://pokeapi.co/api/v2/pokemon/132/';
  let dittoData;

  // Setup to fetch data once before all tests
  beforeAll(async () => {
    const response = await fetch(dittoUrl);
    dittoData = await response.json();
  });

  it('should get Ditto data correctly', () => {
    expect(dittoData.id).toBe(132);
    expect(dittoData.name).toBe('ditto');
  });

  it('should have "limber" as main ability', () => {
    const limberAbility = dittoData.abilities.find(
      ability => ability.ability.name === 'limber' && !ability.is_hidden
    );
    expect(limberAbility).toBeDefined();
  });

  it('should have "imposter" as hidden ability', () => {
    const imposterAbility = dittoData.abilities.find(
      ability => ability.ability.name === 'imposter' && ability.is_hidden
    );
    expect(imposterAbility).toBeDefined();
  });

  it('should have "transform" as only move', () => {
    expect(dittoData.moves.length).toBe(1);
    expect(dittoData.moves[0].move.name).toBe('transform');
  });

  it('should have "metal-powder" and "quick-powder" as held items', () => {
    const metalPowder = dittoData.held_items.find(
      item => item.item.name === 'metal-powder'
    );
    const quickPowder = dittoData.held_items.find(
      item => item.item.name === 'quick-powder'
    );
    expect(metalPowder).toBeDefined();
    expect(quickPowder).toBeDefined();
  });
});