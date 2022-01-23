import Zombie from '../zombie';

test('should create new character Zombie', () => {
  const result = new Zombie('Зомби', 'zombie');
  const expected = {
    name: 'Зомби',
    type: 'zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(result).toEqual(expected);
});
