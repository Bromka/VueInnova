import Commentary from "./Commentary";
// import getRandomInt from "./Utils";

export default class Tree {
    #data;

    constructor() {

        this.data = [{
            comment: 'Lorem0',
            children: [{comment: 'Lorem2'}, {comment: 'Lorem3'}, {comment: 'Lorem4', children: [{comment: 'Lorem5'}]}]
        }, {
            comment: 'Lorem11',
            children: [{comment: 'Lorem21'}, {comment: 'Lorem31'}, {comment: 'Lorem41', children: [{comment: 'Lorem51'}]}]
        }]
        this.createTree(10)
    }

    get Data(){
        return this.data
    }
    set Data(data){
        this.data = data
    }

    createComment(author, text){
        let comment = new Commentary (author, text)
        return comment
    }

    async fetchData(url){
        // let a = await fetch(`https://jsonplaceholder.typicode.com/comments/1`)
        let a = await fetch(url)
        let k = await a.json()

        return k

    }

    async createTree(numberOfComments = 10){
        let a = [];
        for (let i=0; i<numberOfComments; i++){
            this.fetchData(`https://jsonplaceholder.typicode.com/comments/${i+1}`)
            .then(json =>  this.createComment(json.email,  json.body))
            .then(com => {a.push({id: i, comment: com})})
        }
        console.log(a);
        this.data = a;
    }
}