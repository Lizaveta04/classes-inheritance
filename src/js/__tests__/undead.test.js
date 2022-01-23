import Undead from '../undead';

test('should create new character Undead', () => {
  const result = new Undead('Вампир', 'undead');
  const expected = {
    name: 'Вампир',
    type: 'undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(expected);
});
