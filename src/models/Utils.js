export default function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function makeTree(dataset) {
    let hashTable = Object.create(null)
    dataset.forEach( (aData) => {hashTable[aData.id] = { ...aData, children : [], level: 0}} )
    let dataTree = []

    dataset.forEach( aData => {
        let level
        if( aData.parent ) {
            hashTable[aData.parent].children.push(hashTable[aData.id]);
            level = hashTable[aData.parent].level + 1;
            hashTable[aData.parent].children.forEach(item => item.level = level)
        }
        else dataTree.push(hashTable[aData.id])
    } )

    return dataTree
}

export function collapsed(level) {
    if (level >= 1) return true
    else return false
}

// eslint-disable-next-line no-unused-vars
export function getSubGraph(graph, number){
    let newTree = [];
    newTree = [...graph]
    return newTree
}
