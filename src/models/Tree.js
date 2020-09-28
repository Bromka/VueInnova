import Commentary from "./Commentary";
import getRandomInt, {getSubGraph, makeTree} from './Utils';
import {baseUserName} from '../assets/Settings';

export default class Tree {
    #data;

    constructor() {

        this.data = []
        this.show = false;
        this.createTree(20);
    }

    get Data() {
        return this.data
    }

    get ListOfComments(){
        const num = 12;
        console.log(getSubGraph(this.Data, num));

        return this.Data
    }

    set Data(data) {
        this.data = data;
    }

    createComment(author, text) {
        let comment = new Commentary(author, text)
        return comment
    }

    async fetchData(url) {
        let a = await fetch(url)
        let k = await a.json()
        return k
    }

    createTree(numberOfComments = 10) {
        let a = [];
        let par;
        let Promises = []
        for (let i = 0; i < numberOfComments; i++) {
            let Promise = this.fetchData(`https://jsonplaceholder.typicode.com/comments/${i + 1}`)
                .then(json => this.createComment(json.email, json.body))
                .then(com => {
                    if (getRandomInt(3) % 3 !== 0 && i > 1) {
                        par = getRandomInt(i - 1)
                    } else {
                        par = null
                    }
                    a.push({
                        id: i, comment: com, parent: par
                    })
                })
            Promises.push(Promise)
        }

        Promise.all(Promises).then(() => {
            let m = makeTree(a)
            this.data = m
            this.show = true
        })


    }

    // eslint-disable-next-line no-unused-vars
    newCommentary({author = baseUserName, text= 'lorem'}, branch){
        let a = {children: [], level: branch.level+1, parent: branch.id, id: getRandomInt(10**6), comment: this.createComment(author, text)}
        branch.children.push(a)
    }
}