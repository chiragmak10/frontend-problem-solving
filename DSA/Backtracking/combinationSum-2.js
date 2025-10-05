function findTarget(index, arr, target, subset, result) {
    let sum = subset.reduce((value, acc) => acc + value, 0)


    if (sum > target || index > arr.length) {
        return
    }

    if (sum === target) {
        result.push([...subset])
        return
    }

    subset.push(arr[index])
    findTarget(index + 1, arr, target, subset, result)

    while (index + 1 < arr.length && arr[index] === arr[index - 1]) {
        index++

    }
    subset.pop();
    findTarget(index + 1, arr, target, subset, result)


}


function combinationSum(arr, target) {
    let result = [];
    arr.sort((a, b) => a - b)
    findTarget(0, arr, target, [], result)
    console.log(result)
}

let arr = [9, 2, 2, 4, 6, 1, 5];
let target = 8;
combinationSum(arr, target)


/******
 * in my case 1 2 5 forms eight now if we have duplicate that 2 was getting pushed and again it was forming [1, 2, 5] which was resulting in formation of duplicate 
 * we are checking if +1 exist in array don't push it find the next element index  so we dont duplicate 
 * 
 * 
 */