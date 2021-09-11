// var a = 7;
// var b = 8;

// var c = a;
//  a = b;
//  b = c;
//  console.log(a, b);

// var x = 8;
// var y = 10;
// x = x+y;

// y = x- y;
// x = x - y;

// console.log("x=", x , "y=", y);

// var p = 8;
// var q = 10; 

// [p,q] = [q, p]

// console.log("p=", p , "q=", q);

// new practice

var x = 10;
var y = 30;

var z = x;
    x = y;
    y = z;

    console.log("x = ", x , "y = ", y);

    // 2nd system

var p = 20;
var q = 10;

p = p+q;
q = p-q;
p = p-q;



console.log("after swap: p = ", p, "q = ", q);

// 3rd system

[p, q] = [q, p]
console.log("after swap: p = ", p, "q = ", q);
