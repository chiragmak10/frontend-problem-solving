/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (arr, target) {
    let result = Infinity;
    for (let i = 0; i < arr.length; i++) {
        //sort
        arr.sort((a, b) => a - b);

        let left = i + 1;
        let right = arr.length - 1;

        while (left < right && left < arr.length && right >= 0) {
            console.log('fsda', left, right, arr[i], result);
            const sum = arr[i] + arr[left] + arr[right];
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum
            }

            if (sum > target) {
                right--;
            }
            else {
                left++;
            }
        }



    }
    return result
};


nums = [0, 0, 0]
target = 100000

console.log(threeSumClosest(nums, target));