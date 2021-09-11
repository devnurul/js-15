var nam = [15, 25, 15, 42, 54, 15, 25, 18, 25, 42,];


// var uniqueName = [];
// for (var i = 0; i < nam.length; i ++){
//     var element = nam[i]; 
//     var index = uniqueName.indexOf(element);
//     if (index == -1){ 
//         uniqueName.push(element)
//     }
// }
 
// console.log(uniqueName);
var uniquename = [];
for (let i = 0; i < nam.length; i++) {
    const element = nam[i];
    var index = uniquename.indexOf(element);
    if (index == -1) {
        uniquename.push(element)  
    } 
}
console.log(uniquename);