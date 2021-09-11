function reversNumber(str){
    var reversNum= "";

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        reversNum = element + reversNum;
    }

    return reversNum
}


var statement = "Hello Brother, How are you?";
var result = reversNumber(statement);

console.log(result);

