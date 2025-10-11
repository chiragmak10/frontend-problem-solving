const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

function curry(fn) {
    return function (...args) {

        if (args.length === 3) {
            return fn(...args)
        }
        // we are directly binding arguments to callaback function
        return fn.bind(this, ...args)
    }
}


const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); 


function curry(fn) {
    return function currying(...args) {
        //console.log(fn.length, currying.length)
        if (args.length < fn.length) {
        //    args is arguments length
        //   fn is fn paraments length
            return function (...nextargs) {
                // console.log(nextargs)
                return currying(...args, ...nextargs)
            }

        }
        else {
            return fn(...args)
        }
    }

}

function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));   // 6
console.log(curriedSum(1, 2)(3));   // 6
console.log(curriedSum(1)(2, 3)); 