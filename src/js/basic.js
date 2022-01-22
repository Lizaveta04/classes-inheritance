export default class Character {
  constructor(name) {
    this.name = name;
    this.type = 'type';
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  checkName(name) {
  	if (this.name.length < 2 || this.name.length > 10) {
  		throw new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!');
  	}
  }

  checkType(type) {
  	if (typeof this.type !== 'string') {
  		throw new Error('Ошибка! Тип персонажа не может быть числом!');
  	}
  }
}
