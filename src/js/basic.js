export default class Character {
  static types = ['bowman', 'swordsman', 'magician', 'daemon', 'undead', 'zombie'];

  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
  		throw new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!');
  	} else {
  		this.name = name;
  	}
  	if (!Character.types.includes(type)) {
  		throw new Error('Ошибка! Неверный тип персонажа!');
  	} else {
  		this.type = type;
  	}
  	this.health = 100;
    this.level = 1;
  }
}
