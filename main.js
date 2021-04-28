
var input = process.argv.slice(2);
let recipeMap = new Map([
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
output = [];
var a = 0;
for (var num of input){
    sNumber = num.toString();
    var n = "";
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        n += recipeMap.get(+sNumber.charAt(i));
    }
    output.push(n);
    var str=output.join(",")
}
console.log(str);
