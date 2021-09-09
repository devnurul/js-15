
// function arrayjog (num){
//     var sum = 0;

//     for( var i= 0; i <num.length; i++){
//     var element = num[i];
//         sum = sum + element;
//     }
//     return sum
// }
// var num = [45, 48, 42, 54, 62, 16];
// var result = arrayjog(num)
// console.log(result);

// var numbers = [4, 8, 5, 6, 4, ];

// var sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i] + sum;
//     sum = element;
    
// }
// console.log(sum);

// functions

function addArrayNumber(numbers){
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum += element;
    }
    return sum
}
 var Numbers = [1, 2, 3, 4 ,5]

 var result = addArrayNumber(Numbers);
 console.log(result);
