//Author Minxi Duan
// Kargo assessment
//Convert an array of integers into an array of strings representing the phonetic equivalent of the integer.

// parse command line arguments
var input = process.argv.slice(2);

//create a map for integers[0-9] and their phonetic equivalent
let phoneticMap = new Map([
  [0,'Zero'],
  [1,'One'],
  [2,'Two'],
  [3,'Three'],
  [4,'Four'],
  [5,'Five'],
  [6,'Six'],
  [7,'Seven'],
  [8,'Eight'],
  [9,'Nine'],
]);

// create an empty arry to store the ouptput
output = [];

//loop through each input integer
for (var num of input){
    //convert to a string
    sNumber = num.toString();
    //use n to store converted phonetic equivalent for this integer
    var n = "";
    //for each integer, find out all the digits and convert to the phonetic equvalent
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        //add each digits of the integer's converted equvalent into n
        n += phoneticMap.get(+sNumber.charAt(i));
    }
    //push n into the output array
    output.push(n);
    //connect the data in output array with ',' and store in a new array named "result"
    var result = output.join(",")
}
//print result
console.log(result);
