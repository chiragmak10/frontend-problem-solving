var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (object, path,) => {
    let arr = path.split('.');

    function recursive(object, arr) {

        if (!object.hasOwnProperty(arr[0])) {
            return undefined
        }
        let value = object[arr[0]];
        //    console.log(value, arr, arr.length)
        if (arr.length === 1) {
            return value;
        }

        arr.shift();
        return recursive(value, arr)



    }
    return recursive(object, arr);
};
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null
// jump to the end for the solution