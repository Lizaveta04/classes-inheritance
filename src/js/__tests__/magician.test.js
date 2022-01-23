import Magician from '../magician';

test('should create new character Magician', () => {
  const result = new Magician('Маг', 'magician');
  const expected = {
    name: 'Маг',
    type: 'magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(result).toEqual(expected);
});
