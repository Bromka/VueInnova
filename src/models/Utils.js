export default function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function makeTree(dataset, limit) {
  let a = limit || dataset.length;
  let old = [...dataset]
  dataset.splice(a, dataset.length);
  let hashTable = Object.create(null);
  dataset.forEach((aData) => {
    hashTable[aData.id] = {...aData, children: [], level: 0};
  });
  let dataTree = [];

  dataset.forEach((aData) => {
    let level;
    if (aData.parent && hashTable[aData.parent]) {
      hashTable[aData.parent].children.push(hashTable[aData.id]);
      level = hashTable[aData.parent].level + 1;
      hashTable[aData.parent].children.forEach(item => item.level = level);
    } else {
      dataTree.push(hashTable[aData.id]);
    }
  });

  return {dataTree: dataTree, otherComments: old.length-a};
}

export function collapsed(level) {
  if (level >= 1) return true;
  else return false;
}




