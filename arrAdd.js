
function arrayjog (num){
    var sum = 0;

    for( var i= 0; i <num.length; i++){
    var element = num[i];
        sum = sum + element;
    }
    return sum
}
var num = [45, 48, 42, 54, 62, 16];
var result = arrayjog(num)
console.log(result);

