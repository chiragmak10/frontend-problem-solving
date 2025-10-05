function deepFilter(input, callback) {
    let result = {};

    for (let i in input) {
        if (typeof input[i] !== 'object' && input[i] != null) {
            if (callback(input[i])) {
                result[i] = input[i]
            }
        }
        else {

            let response = deepFilter(input[i], callback);
            if (Object.keys(response).length) {
                result[i] = response;
            }
        }
    }
    return result;
}
const callback = (element) => element > 0

const input = {
    a: 1,
    c: {
        b: {
            d: 2,
        },
        f: '-98',
    }
}
console.log(deepFilter(input, callback));