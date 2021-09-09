var marks = [63, 45, 82, 14, 29, 38, 99 ,10]

var max = marks[0];
for(var i =0; i < marks.length; i++){
    var element = marks[i];
    if(element >max){
        max= element;
    }
}
console.log("This is height number= ", max );