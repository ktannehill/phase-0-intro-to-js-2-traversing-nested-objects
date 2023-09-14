const userInfo = {
    firstName: "Avi",
    lastName: "Flombaum",
    company: {
      name: "Flatbook Labs",
      jobTitle: "Developer Apprentice",
    },
    friends: [
      {
        firstName: "Nancy",
        lastName: "Burgess",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Developer Apprentice",
        },
      },
      {
        firstName: "Corinna",
        lastName: "Jackson",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Lead Developer",
        },
      },
    ],
    projects: [
      {
        title: "Flatbook",
        description:
          "The premier Flatiron School-based social network in the world.",
      },
      {
        title: "Scuber",
        description:
          "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
      },
    ],
};

console.log(userInfo.lastName)
console.log(userInfo.company.jobTitle)
console.log(userInfo.friends[0].firstName)
console.log(userInfo.projects[1].title)



const letters = ["a", ["b", ["c", ["d", ["e"]], "f"]]];
console.log(letters[1])
console.log(letters[1][1][1])
console.log(letters[1][1][1][1][0])



// // shallow iterator only goes two levels, not very productive
// const shallowIterator = function(target) {
//     for(const key in target) {
//         if(typeof target[key] === "object") {
//             for(const nestedKey in target[key]) {
//                 console.log(target[key][nestedKey])
//             }
//         } else {
//             console.log(target[key])
//         }
//     }
// }

// console.log(shallowIterator(letters))


// RECURSIVE FUNCTION
function deepIterator(target) {
    if (typeof target === 'object') {
      for (const key in target) {
        deepIterator(target[key]);
      }
    } else {
      console.log(target);
    }
}

deepIterator(userInfo)
deepIterator(letters)

// better with arrays, but why ?? previous seemed to work fine
function deepIterator2(target) {
    if (Array.isArray(target)) {
      for (const element of target) {
        deepIterator(element);
      }
    } else if (typeof target === "object") {
      for (const key in target) {
        deepIterator(target[key]);
      }
    } else {
      console.log(target);
    }
  }
  
  deepIterator2(userInfo);
  deepIterator2(letters)
  
