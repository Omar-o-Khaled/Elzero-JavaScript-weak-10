let myString = "EElllzzzzzzzeroo";

noReapet = myString.split("").filter(function(ele,i,arr){
    return ele !== arr[++i]
}).join("")

console.log(noReapet)