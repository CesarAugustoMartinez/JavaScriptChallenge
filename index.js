/**
 * You are given incomplete code below and your task is to complete it.
 * Read thru each problem carefully and follow the instructions.
 * 
 * Have fun coding!!!
 */
 const peopleData = `
 mary,2001-01-02,27518
 john,1997-05-03,75001
 sam,1999-05-04,90210
 jim,1999-05-09,75043
`
const zipcodesData = `
 90210,CA
 75001,TX
 27518,NC
`
/** !!!DO NOT CHANGE ANYTHING ABOVE THIS LINE!!! */

/**
* Problem 1:
*  Given a defined `peopleData` (string),
*  complete the code below so it yields the expected `people` (object).
* 
*  Follow instructions as stated in the in-line comments
* 
* Expected:
*  [
*    {name: 'mary', dob: '2001-01-02', zip: '27518'},
*    {name: 'john', dob: '1997-05-03', zip: '75001'},
*    {name: 'sam',  dob: '1999-05-04', zip: '90210'},
*    {name: 'jim',  dob: '1999-05-09', zip: '75043'}
*  ]
*/

const people = peopleData.split("\n")
.filter(data => (data.length > 1)/* replace with a one-liner `filter` handler -- NO SEMICOLONS */)
.map(elemt =>  elemt.split(",") /* replace with a one-liner `map` handler -- NO SEMICOLONS */)
.map(value => value = {name:value[0].trim(), dob:value[1], zip:value[2]}/* replace with a one-liner `map` handler -- NO SEMICOLONS */)
console.log(people);


/**
* Problem 2:
*  Given a defined `zipcodesData` (string),
*    complete the code below so it yields the expected `zipcodes` (object).
* 
* Expected:
*  { '75001': 'TX', '90210': 'CA' }
*/

const zipcodes = zipcodesData.split("\n")
.filter(data => (data.length > 1)/* replace with a one-liner `filter` handler -- NO SEMICOLON */)
.map(value => value.trim().split(",")/* replace with a one-liner `map` handler -- NO SEMICOLON */)
.reduce((prev_value,curr_value) => {prev_value[curr_value[0]]=curr_value[1];return prev_value;},{}/* define a one-liner reducer -- NO SEMICOLON */)
console.log(zipcodes);


/**
* After completing the scripts above,
*    execute your code to see the `console.log` output.
*  
* Problem 3:
*  If both `people` and `zipcodes` data were pulled from a DB,
*    Write an equivalent `SQL SELECT` statement into
*      the space inside the comment below.
* 
* <SELECT p.name, p.dob, p.zip, zipcodes.zip FROM people p INNER JOIN zipcodes ON p.zip=zipcodes.zip where p.dob >= "1999-01-01" >
*/
people.forEach(p => {
 if (p.dob >= "1999-01-01") {
     console.log(p.name, p.dob, p.zip, zipcodes[p.zip])
 }
})



/**
* Problem 4:
*  After completing Problems 1 and 2,
*    implement the recursive `groupByDobYearMonth` function.
*  The `console.log` line at the bottom, upon calling your function,
*    must generate the following output:
* 
* Expected:
*  {
*    "2001-01": [
*      {
*        "name": "mary",
*        "dob": "2001-01-02",
*        "zip": "27518"
*      }
*    ],
*    "1997-05": [
*      {
*        "name": "john",
*        "dob": "1997-05-03",
*        "zip": "75001"
*      }
*    ],
*    "1999-05": [
*      {
*        "name": "sam",
*        "dob": "1999-05-04",
*        "zip": "90210"
*      },
*      {
*        "name": "jim",
*        "dob": "1999-05-09",
*        "zip": "75043"
*      }
*    ]
*  }
*/
function groupByDobYearMonth(people) {
 /* finish this implementation -- NO LOOPS (for/while/do/etc) ALLOWED */
 return people.reduce(function (newData, data) {
     let key = data["dob"];
     if (!newData[key]) {
         newData[key] = [];
     }
     newData[key].push(data)
     return newData
 }, {})
}

console.log(JSON.stringify(groupByDobYearMonth(people), null, 2))
