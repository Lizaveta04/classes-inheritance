import Swordsman from '../swordsman';

test('should create new character Swordsman', () => {
  const result = new Swordsman('Мечник', 'swordsman');
  const expected = {
    name: 'Мечник',
    type: 'swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(result).toEqual(expected);
});
