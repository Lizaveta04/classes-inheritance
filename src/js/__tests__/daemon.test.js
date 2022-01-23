import Daemon from '../daemon';

test('should create new character Daemon', () => {
  const result = new Daemon('Демон', 'daemon');
  const expected = {
    name: 'Демон',
    type: 'daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(result).toEqual(expected);
});
