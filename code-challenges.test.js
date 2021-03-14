// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variable provided.

describe("when codedMessage is called", () => {
    it ("returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        
        var secretCodeWord1 = "lackadaisical"
        var secretCodeWord2 = "gobbledygook"

        expect(codedMessage(secretCodeWord1)).toEqual("l4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("g0bbl3dyg00k")
    })
})

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// b) Create the function that makes the test pass.

// create a function that takes a string as an argument
const codedMessage = (str) => {
    //convert a to 4, e to 3, i to 1, and o to 0
    // created an object to store the variables to change and their new values
    var mapObj = {
        a:4,
        e:3, 
        i:1,
        o:0
    }
    // function that finds the values and replaces with the matched values.
    strNew = str.replace(/a|e|i|o/gi, (matched) => {
        return mapObj [matched];
    })
    return strNew
    
}
// return str.replace(/a/g, 4) && str.replace(/i/g, 1)
// console.log(codedMessage(secretCodeWord1))
// console.log(codedMessage(secretCodeWord2))


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

describe("when wordsWithA is called", () => {
    it ("returns all the words that contain the letter a", () => {
        
        var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]

        expect(wordsWithA(arrayOfWords)).toEqual(["Apple", "Banana", "Peach"])
    })
})

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: ["Apple", "Banana", "Peach"]

// b) Create the function that makes the test pass.

// create function that takes an array as an argument
const wordsWithA = (arr) => {
    // filter the array
    let newArr = arr.filter(value => {
        // return the words that include the letter a
        return value.includes('A') || value.includes('a')
    })
    return newArr
}
// console.log(wordsWithA(arrayOfWords))



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

describe("when isFullHouse is called", () => {
    it ("returns whether or not the array is a full house", () => {
        
        var hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        var hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        var hand3 = [5, 5, 5, 5, 4]
        // Expected output: false

        expect(isFullHouse(hand1)).toEqual(true)
        expect(isFullHouse(hand2)).toEqual(false)
        expect(isFullHouse(hand3)).toEqual(false)
    })
})

    var hand1 = [5, 5, 5, 3, 3]

    var hand2 = [5, 5, 3, 3, 4]

    var hand3 = [5, 5, 5, 5, 4]


// b) Create the function that makes the test pass.

// create a function that takes an array as an argument
const isFullHouse = (arr) => {
    // create an object that holds the count of each of the value
    let countObj = {}
    for(let x of arr){
    // checks the count of each value in the array
      countObj[x] = (countObj[x] || 0) + 1;
    }
    // create local variable to store the object of values and the count for each
    let vals = Object.values(countObj);
    // checks if there are 2 of one value and 3 of another
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
  }
// console.log(isFullHouse(hand1))
// console.log(isFullHouse(hand2))
// console.log(isFullHouse(hand3))

// iterating through array check for count of those values
// storing in object makes sense
// need to keep track of how many there are 
// starting with first chaacter first index and check against that instance , add that to object each time you come acrsoos and update 

// find two unique values and check to see if there is 3 of one  two of the other
//isolate one char check for how many times it appears then use another char and see how many times that appearas
// use every? 
// 

// if theres 3 of something and 2 of something then full house is true
// returns a boolean