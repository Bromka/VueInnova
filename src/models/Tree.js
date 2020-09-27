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
            children: [{comment: 'Lorem21'}, {comment: 'Lorem31'}, {
                comment: 'Lorem41',
                children: [{comment: 'Lorem51'}]
            }]
        }]
        this.createTree(10)
    }

    get Data() {
        return this.data
    }

    set Data(data) {
        this.data = data
    }

    createComment(author, text) {
        let comment = new Commentary(author, text)
        return comment
    }

    async fetchData(url) {
        // let a = await fetch(`https://jsonplaceholder.typicode.com/comments/1`)
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
            console.log(a)
            // eslint-disable-next-line no-unused-vars
            let testTree = [];
            a.forEach((el) => {
                if (el.parent !== null) {
                    let d = testTree.find((item) => {
                        console.log(item)
                        item.id == el.parent
                    })
                    console.log(d)
                } else {
                    testTree.push({comment: el.comment, children: [], id: el.id})
                }
            })

            console.log(testTree)
        })


        this.data = a;
    }
}