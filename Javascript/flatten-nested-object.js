
const data = [
    { id: 1, name: "Root", parentId: null },
    { id: 2, name: "Child 1", parentId: 1 },
    { id: 3, name: "Child 2", parentId: 1 },
    { id: 4, name: "Grandchild 1.1", parentId: 2 }
];

function createLinkedObject(data) {
    let result = []
    let idToNode = {}
    for (let i in data) {
        idToNode[data[i].id] = { ...data[i], children: [] }

        if (data[i].parentId === null) {
            result.push(idToNode[1])
        } else {

            let parent = idToNode[data[i].parentId]
            console.log(parent)
            if (parent) {
                parent.children.push(idToNode[i.id])
            }
        }

    }
    console.log(JSON.stringify(result, null, 2))
    //     console.log(idToNode)
}
createLinkedObject(data)
