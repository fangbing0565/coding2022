/* 写出一个函数，接受一个由字母，数字和空格组成的字符串str，和一个字符code，然后输出输入字符串中该字符出现的次数。*/

var str = "RrrUnoob";
var patt1 = /r+/i;
var n=str.match(patt1);
console.log(n);
console.log(n.length);




/* search()返回的是相同字符串中第一个字符的位置，从0开始*/