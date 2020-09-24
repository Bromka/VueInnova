import getRandomInt from "./Utils";


export default class Commentary{
    #autor;
    #id;
    #text;
    #points;

    constructor(autor, text){
        this.#autor = autor;
        this.#text = text;
        this.#id = getRandomInt(10**8);
        this.#points = 0;
    }
    get Data(){
        return{
            autor: this.#autor,
            id: this.#id,
            text: this.#text,
            points: this.#points
        }
    }
}

