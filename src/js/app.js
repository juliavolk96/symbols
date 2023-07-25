/* eslint-disable no-unused-vars */

import 'regenerator-runtime/runtime';

import Character from './character';

// Создание класса Team с массивом персонажей противника на текущий раунд
class Team {
  constructor() {
    this.characters = [];
  }

  // Метод добавления персонажей в Team
  add(character) {
    if (character instanceof Character) {
      this.characters.push(character);
    } else {
      throw new Error('Можно добавлять только объекты класса Character');
    }
  }

  // Symbol.iterator должен возвращать объект с методом next()
  /* [Symbol.iterator]() {
    let currentIndex = 0;
    const characters = this.characters;

    return {
      next() {
        if (currentIndex < characters.length) {
          return { done: false, value: characters[currentIndex++] };
        } else {
          return { done: true };
        }
      }
    };
  } */

  // Генератор для перебора персонажей
  // * [Symbol.iterator]() {
  //   for (const character of this.characters) {
  //     yield character;
  //   }
  // }
}
