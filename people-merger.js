// Goal:
//
// Develop a program that uses Node's fs library to manipulate local files.
//
// Assignment:
//
// I don't know about you but creating a program that can read from one file and write to another sounds pretty cool! Depending on the task,
// it can also save you a lot of time.
//
// For this assignment, you'll be creating a program that can read from multiple files and writes a new file using that data.
//
// Below are detailed instructions for your program:
//
// 1. Read in a file, named "people1.json", which contains a list of people.
// 2. Read in another file, named "people2.json", which contains another list of people.
// 3. After both of these files have been read, write a new file called "peopleComplete.txt" which contains a sorted list of all the people
//    from the first two files.
//
// Bonus:
//
// Read in the files from a people directory, and merge all of the files in the directory into a "peopleComplete.json" file
//
// Grading Criteria:
//
// The program reads from both the "people1.json" and "people2.json" files.
// The program writes a new file called "peopleComplete.txt" which contains all the people from the first two files.
// The list of people in the "peopleComplete.txt" is sorted.

// Submit the assignment in a zipped project folder.

const fs = require('fs')

fs.readFile('people1.json', function(err, data){
if(err) throw err;
const people1info = JSON.parse(data);
console.log('First array: ' + people1info);

  fs.readFile('people2.json', function(err, data){
    if(err) throw err;
    const people2info = JSON.parse(data);
    console.log('Second array: ' + people2info);

    let combined = people1info.concat(people2info);
    console.log('Combined array: ' + combined);

    let sortCombined = combined.sort();
    console.log('Sorted combined array: ' + sortCombined);

    let stringifySorted = JSON.stringify(sortCombined);
    console.log('Stringified sorted combined array: ' + stringifySorted);

    fs.writeFile('peopleComplete.txt', stringifySorted, function(err){
      if(err) throw err;
      console.log('Stringify sorted combined written');

      fs.writeFile('peopleComplete.json', stringifySorted, function(err){
        if(err) throw err;
        console.log('Stringify sorted combined written to JSON');
      });
    });
  });
});
