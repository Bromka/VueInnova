import getRandomInt from './Utils';

export default class Commentary {
  #author;
  #id;
  #text;
  #basepoints;
  #plus_usersName = [];
  #minus_usersName = [];
  #spoiler = false

  constructor(author, text) {
    this.#author = author;
    this.#text = text;
    this.#id = getRandomInt(10 ** 8);
    this.#basepoints = getRandomInt((10 ** 3) * 2) - 500;
  }

  get Data() {
    return {
      author: this.#author,
      id: this.#id,
      text: this.#text,
    };
  }

//    Active
  set Spoiler(val){

    this.#spoiler = val
  }

  get Spoiler(){
    return this.#spoiler
  }
  get minus() {
    return this.#minus_usersName;
  }

  set minus(username) {
    const index = this.#minus_usersName.indexOf(username);
    const i = this.plus.indexOf(username);
    if (i === -1) {
      if (index === -1) {
        this.#minus_usersName.push(username);
      } else {
        this.#minus_usersName.splice(index, 1);
      }
    } else {
      this.#plus_usersName.splice(i, 1);
    }
  }

  get plus() {
    return this.#plus_usersName;
  }

  set plus(username) {
    const index = this.#plus_usersName.indexOf(username);
    const i = this.minus.indexOf(username);
    if (i === -1) {
      if (i === -1 && index === -1) {
        this.#plus_usersName.push(username);
      } else {
        this.#plus_usersName.splice(index, 1);
      }
    } else {
      this.#minus_usersName.splice(i, 1);
    }
  }

  getValue() {
    return this.#basepoints + this.plus.length - this.minus.length;
  }
}

