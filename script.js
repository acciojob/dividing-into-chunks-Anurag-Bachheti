const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
console.log("Value of n:", n);
    let newArr = [];
    let subArr = [];
    let sum = 0;
    for(let item of arr){
        if(sum + item > n){
        newArr.push(subArr);
        subArr = [];
        sum = 0;
        }
        subArr.push(item);
        sum += item;
    }
    if(subArr.length){
        newArr.push(subArr)
    }
    return newArr
};
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
