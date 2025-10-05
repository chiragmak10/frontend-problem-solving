
function moveZerosToLeft(arr) {
    let lastIndex = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[lastIndex] = arr[i];
        }
    }
    for (let i = 0; i <= lastIndex; i++) {
        arr[i] = 0
    }


}

let arr = [1, 2, 4, 6, 8, 6, 8];
i
moveZerosToLeft(arr);
console.log(arr)

