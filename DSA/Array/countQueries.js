/**
 * I had Uber phone screen last week after OA.

I was told it was leetcode style problem for this 60-minute interview. At the beginning, interviewer sort of spent 15 minutes to go over the resume / past experience. The rest is for a leetcode medium question.

Question: Implement a Counter class that has the following methods:

put(number): put the number to the data structure
count(number): count the number of times number was put during the last window=5 minutes
countAll(): count the number of times any number was put during the last window=5 minutes.
Example:
At t = 10PM, put(2)
At t = 10:02PM, put(2)
At t = 10:03PM, put(3)
At t = 10:04PM, count(2) should return 2
At t = 10:04PM, countAll() should return 3
At t = 10:06PM, count(2) should return 1 (the one that was put at 10:02PM)
At t = 10:06PM, countAll() should return 2

Follow-ups:

If you were to write unit tests, what would they be
If your code was to be in production, what issues may it cause?
I'm going to onsite.
 * 
 */


function countQueries() {
    let map = new Map();

    function put(item) {
        const value = !map.has(item) ? 1 : map.get(item) + 1;
        //console.log(value)
        map.set(item, value);
    }
    function count(item) {
        return map.get(item);
    }
    function countAll() {
        return Array.from(map.values()).reduce((prev, curr) => prev + curr, 0)
    }
    return { put, countAll, count }
}
let queries = countQueries();
queries.put(2);
queries.put(3);
queries.put(2);
queries.put(4);
queries.put(5);
queries.put(2);
queries.put(6);
queries.put(7);

console.log(queries.count(2));
console.log(queries.countAll());

