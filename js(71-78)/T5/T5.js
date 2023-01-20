let nums = [2, 12, 11, 5, 10, 1, 99];

answer=nums.reduce(function(acc,ele){
    return Boolean(ele%2)? acc+ele : acc*ele;
},1)

console.log(answer)