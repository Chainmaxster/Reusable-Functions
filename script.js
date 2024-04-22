// Part 1 Thimking Functionally
// Example

/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
function reverseString(str) {
    const strArray = str.split("");
    const revArray = strArray.reverse();
    const revString = revArray.join("");
    return revString;
  }
  
  function reverseString2(str) {
    return str.split("").reverse().join("");
  }
  
  function reverseString3(str) {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revString += str[i];
    }
    return revString;
  }
  
  function reverseString4(str) {
    if (str === "") return "";
    else return reverseString4(str.substr(1)) + str.charAt(0);
  }
  
  function reverseString5(str) {
    return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
  }
  
  console.log(reverseString("!dlroW olleH"))
  console.log(reverseString2("!dlroW olleH"))
  console.log(reverseString3("!dlroW olleH"))
  console.log(reverseString4("!dlroW olleH"))
  console.log(reverseString5("!dlroW olleH"))

  // For me, reverseString2 seems to be the most sense answer to me as its chaining the split while also doiing reverse and join methods

  // Part One Continued... Writing Functions

// Function to return the sum of an array of numbers
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  // Function to return the average of an array of numbers
  function averageArray(arr) {
    if (arr.length === 0) return 0;
    const sum = sumArray(arr);
    return sum / arr.length;
  }
  
  // Function to return the longest string in an array of strings
  function longestString(arr) {
    return arr.reduce((longest, str) => str.length > longest.length ? str : longest, "");
  }
  
  // Function to return an array of strings longer than a given number
  function stringsLongerThan(arr, length) {
    return arr.filter(str => str.length > length);
  }
  
  // Function to print every number between 1 and n without using loops (using recursion)
  function printNumbers(n) {
    if (n > 0) {
      printNumbers(n - 1);
      console.log(n);
    }
  }

  // Part 2: Thinking Methodically

  const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];
  
  // Sort the array by age
  const sortedByAge = data.sort((a, b) => parseInt(a.age) - parseInt(b.age));
  
  // Filter the array to remove entries with an age greater than 50
  const filteredByAge = data.filter(entry => parseInt(entry.age) <= 50);
  
  // Map the array to change the “occupation” key to “job” and increment every age by 1
  const mappedData = data.map(entry => ({
    ...entry,
    job: entry.occupation,
    age: parseInt(entry.age) + 1
  }));
  
  // Use the reduce method to calculate the sum of the ages
  const sumOfAges = data.reduce((acc, entry) => acc + parseInt(entry.age), 0);
  
  // Calculate the average age
  const averageAge = sumOfAges / data.length;
  
  console.log("Sorted by age:", sortedByAge);
  console.log("Filtered by age (<= 50):", filteredByAge);
  console.log("Mapped data:", mappedData);
  console.log("Sum of ages:", sumOfAges);
  console.log("Average age:", averageAge);

  
  // Part 3: Thinking Critically 

  // Function to increment the age field of an object
function incrementAge(obj) {
    if (!obj.hasOwnProperty('age')) {
      obj.age = 0;
    }
    obj.age++;
    obj.updated_at = new Date();
  }
  
  // Function to make a copy of an object and increment the age field of the copy
  function incrementAgeAndCopy(obj) {
    const copy = { ...obj };
    if (!copy.hasOwnProperty('age')) {
      copy.age = 0;
    }
    copy.age++;
    copy.updated_at = new Date();
    return copy;
  }
  // // If we directly modify the Date object stored in the copied object using methods like `setTime()`, it would affect both the original object and the copy, as they both reference the same Date object

// Part 4: Thinking Practically 
// Part 5: Thinking Back