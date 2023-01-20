let myArray = ["E", "l", "z", ["e", "r"], "o"];


let newArray=myArray.reduce(function(acc,ele,i,arr){
    return acc.concat(ele)
},[]).join("")

console.log(newArray)