function asteroidCollision(arr) {
    let i = arr.length - 2;
    while (i > -1) {

        if (arr[i] > 0 && arr[i + 1] < 0) {
            if (arr[i] + arr[i + 1] === 0) {
                arr.splice(i, 2)
                i -= 2;
            }
            else if (Math.abs(arr[i]) > Math.abs(arr[i + 1])) {

                arr.splice(i + 1, 1);
                i -= 1
            }
            else {
                arr.splice(i + 2, 1);
                i -= 1
            }

        } else {
            i--;
        }

    }
}
let arr = [8, -8];
asteroidCollision(arr)
console.log(arr)


function asteroidCollision(asteroids) {
  const stack = [];

  for (let curr of asteroids) {
    let alive = true;

    // Only collide if top is right-moving and current is left-moving
    while (alive && stack.length && stack.at(-1) > 0 && curr < 0) {
      const top = stack.at(-1);

      if (Math.abs(top) < Math.abs(curr)) {
        stack.pop(); // top explodes, check current asteroid again
      } else if (Math.abs(top) === Math.abs(curr)) {
        stack.pop(); // both explode
        alive = false;
      } else {
        alive = false; // current asteroid destroyed
      }
    }

    if (alive) stack.push(curr);
  }

  return stack;
}

// Example
console.log(asteroidCollision([2, 3, 2, 5, -5])); // [2, 3, 2]
console.log(asteroidCollision([5, 10, -5]));      // [5, 10]
console.log(asteroidCollision([8, -8]));          // []
console.log(asteroidCollision([-2, -1, 1, 2]));   // [-2, -1, 1, 2]
