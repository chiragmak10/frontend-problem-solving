function combinationSum(arr, target) {

    let result = []
    function dfs(i, subset, sum) {
        if (sum === target) {
            result.push([...subset])
            return
        }
        if (sum > target || i >= arr.length) {
            return;
        }

        subset.push(arr[i])
        dfs(i, subset, sum + arr[i])
        subset.pop()
        dfs(i + 1, subset, sum)
    }
    dfs(0, [], 0)
    console.log(result)
}

let arr = [2, 3, 6, 7]
let target = 7;
combinationSum(arr, target)