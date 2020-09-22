function questions(str) {
    return str + '???'
}

let result1 = questions('hello');
let result2 = questions('what even');
result1;
result2;

function spacer(str, str1) {
    return str + ' ' + str1
}

let result3 = spacer('oh', 'hi');
let result4 = spacer('well', 'hello back');
result3;
result4;

function threeAway(num, num1, num2) {
    return num - num1 - num2;
}

let result5 = threeAway(10, 1, 2);
let result6 = threeAway(8, 3, 5);
let result7 = threeAway(100, 80, 25);
result5;
result6;
result7;

function trioRev(num, num1, num2) {
    return num2 - num1 - num;
}

let result8 = trioRev(10, 1, 2);
let result9 = trioRev(2, 1, 10);
result8;
result9;

function codeTre(str) {
    return str + str + str;
}

let result10 = codeTre('codeimmersives ')
let result11 = codeTre('is the best ')
result10;
result11;

function cube(num) {
    return Math.sqrt(num);;
}

let result12 = cube(16);
let result13 = cube(4);
let result14 = cube(9)
result12;
result13;
result14;