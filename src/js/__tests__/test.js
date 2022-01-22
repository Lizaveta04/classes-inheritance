import Character from '../basic';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

test('should create character', () => {
  const bowman = new Bowman('Лучник');
  const swordsman = new Swordsman('Мечник');
  const magician = new Magician('Маг');
  const daemon = new Daemon('Демон');
  const undead = new Undead('Вампир');
  const zombie = new Zombie('Зомби');
  const result = [
    [bowman.name, bowman.type, bowman.attack, bowman.deffence],
    [swordsman.name, swordsman.type, swordsman.attack, swordsman.deffence],
    [magician.name, magician.type, magician.attack, magician.deffence],
    [daemon.name, daemon.type, daemon.attack, daemon.deffence],
    [undead.name, undead.type, undead.attack, undead.deffence],
    [zombie.name, zombie.type, zombie.attack, zombie.deffence],
  ];
  const expected = [
    ['Лучник', 'bowman', 25, 25],
    ['Мечник', 'swordsman', 40, 10],
    ['Маг', 'magician', 10, 40],
    ['Демон', 'daemon', 10, 40],
    ['Вампир', 'undead', 25, 25],
    ['Зомби', 'zombie', 40, 10],
  ];
  expect(result).toEqual(expected);
});
