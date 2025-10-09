// Suppose you have input like:

var skillsArray = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];

// Convert it into result of the following form:
// [
//   { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
//   { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
//   { skill: 'html', user: [ 'Sue' ], count: 1 }
// ]

/***
 * use map. key as css then value as
 * css  { skill: 'css', user: 'Bill', count:1 }
 *
 */

function groupBy(arr) {
  let map = new Map();
  arr.forEach((x) => {

    if (map.has(x.skill)) {
      map.set(x.skill, { ...x, user: [...map.get(x.skill).user, x.user], count: map.get(x.skill).count + 1 });

    } else {
      map.set(x.skill, { ...x, user: [x.user], count: 1 });
    }
  });
  console.log(map)
}

var skillsArray = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];
groupBy(skillsArray);
