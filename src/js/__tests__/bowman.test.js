import Bowman from '../bowman';

test('should create new character Bowman', () => {
  const result = new Bowman('Лучник', 'bowman');
  const expected = {
    name: 'Лучник',
    type: 'bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(expected);
});
