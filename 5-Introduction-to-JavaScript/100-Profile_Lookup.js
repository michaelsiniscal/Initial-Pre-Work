// Can't figure out how to make look up advance to next contact even looking up all hints and actual solution, still doesn't work...only returns x = () given.

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line

  for (var x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
        } else {
            return "No such property";
        }
    }

return "No such contact";
}

// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Kristian", "likes"));
console.log(contacts.length)
