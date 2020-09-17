"use strict"

// 1. Basic JavaScript: Stand in Line

function nextInLine(arr, item) {
    arr.push(item)
    return arr.shift();
}

// 2. Basic JavaScript: Golf Code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  let score;

  if(strokes === 1) {
      score = 0;
  } else if(strokes <= par - 2){
        score = 1
  } else if(strokes === par - 1){
        score = 2
  } else if(strokes === par){
        score = 3
  } else if(strokes === par + 1){
        score = 4
  } else if(strokes === par + 2){
        score = 5
  } else {
        score = 6
  }

  let message = names[score]
  return message;
}

// 3.Basic JavaScript: Counting Cards

var count = 0;

function cc(card) {
  switch(card){
    case 2 :
    case 3 : 
    case 4 : 
    case 5 : 
    case 6 : count +=1
    break
    case 7 :
    case 8 :
    case 9 :
    break
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A': count -=1
    break
  }

  let message;

  if(count >0) {
    message = `${count} Bet`
  } else {
    message = `${count} Hold`
  }

  return message;
}

// 4.Basic JavaScript: Profile Lookup

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

    for(const contact of contacts) {
        if(contact['firstName'] === name){
            if(contact[prop]) {
                return contact[prop] 
            } else {
                return "No such property"
            }
        }
    }
    return "No such contact"
}

// 5. Basic JavaScript: Record CollectionPassed

var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  function updateRecords(object, id, prop, value) {
    if( prop !== 'tracks' && value !== '' ) {
        object[id][prop] = value;
    }
    if(prop === 'tracks' && !object[id][prop]) {

    }
    return object;
  }
  
  updateRecords(collection, 5439, 'artist', 'ABBA');
  updateRecords(collection, 2548, 'artist', 'Bon Jovi');


// If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// If value is an empty string, delete the given prop property from the album.
  

// 6. Basic Algorithm Scripting: Convert Celsius to Fahrenheit

function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

// 7. Basic Algorithm Scripting: Reverse a String

function reverseString(str) {
    str = str.split('').reverse().join('')
    return str;
  }

 // 8. Basic Algorithm Scripting: Factorialize a Number

 function factorialize(num) {
    if (num === 0) {
      return 1
    }
    for(let i = num - 1; i >0 ; i--) {
      num = num * i
    }
    return num;
}

// 9. Basic Algorithm Scripting: Find the Longest Word in a String
 
function findLongestWordLength(str) {
  const newArr = str.split(' ').map(word => word.length);
  let longest = 0;
  for(const word of newArr) {
    if(word > longest) {
      longest = word;
    }
  }
  return longest;
}

// 10. Basic Algorithm Scripting: Return Largest Numbers in Arrays

function largestOfFour(arr) {
  let newArr = [];
  
  for(let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];
    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    newArr.push(largest)
  }
  return newArr;
}

// 11. Basic Algorithm Scripting: Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  let res = '';
  if(num > 0) {
    for(let i = 0; i < num; i++) {
      res += str
    }
  }
  return res;
}

// 12. Basic Algorithm Scripting: Title Case a Sentence

function titleCase(str) {
  let newString = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase() )

  return newString.join(' ');
}

// 13. Basic Algorithm Scripting: Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let newArr = [...arr2]
  newArr.splice(n, 0, ...arr1)
  return newArr;
}

// 14. Basic Algorithm Scripting: Where do I Belong

function getIndexToIns(arr, num) {
  let newArr = arr.sort((a,b) => a - b);
  newArr.push(num)
  for(let i = 0; i < newArr.length; i++) {
    if(num === newArr[i] || num < newArr[i]) {
      return i
    }
  }
}

// 15. Intermediate Algorithm Scripting: Steamroller

function steamrollArray(arr) {
  let newArr = [];
  function getElementsFromArr(arr){
    for(const element of arr) {
      if(Array.isArray(element)) {
        getElementsFromArr(element) 
      } else {
        newArr.push(element)
      }
    }
  }
  getElementsFromArr(arr)
  console.log(newArr)
  return newArr;
}
