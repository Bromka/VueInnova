import Commentary from "./Commentary";
import getRandomInt from "./Utils";

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

    createTree(numberOfComments = 10){
        let a = [];
        for (let i=0; i<numberOfComments; i++){
            let j = this.createComment('Author' + i,  'Lorem ipsum' + i)

            if (getRandomInt(6) %5 == 0 && i !== 0) {
                a[a.length-1].children.push({comment: j})
            } else {
                a.push({comment: j, children: []})
            }
        }
        console.log(a)
        this.data = a;
    }
}