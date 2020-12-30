var msgObj = new String("Everything is practice");
console.log(msgObj.charAt(2));

var str = msgObj.concat(".Yes");
var str = msgObj.concat([1,2,3,4]);
var str = msgObj.concat([,"Yes"]);
console.log(str);

var str = "ABCABCABCBBCABCSBDBD";
var s1 = "ABC";
var s2 = "abc";
console.log(str.replace(s1,s2));//제일 처음만 된다.
console.log(str.toString());
console.log(msgObj);
console.log(str);
console.log(str.length);
console.log(str[3]);//순간에만 가능한 래퍼 객체
console.log(msgObj[3]);



var msg = "Everything is practice";
var msg= new String("Everything is practice");
console.log(msg);
console.log(msg.valueOf());
var msg = new String("Everything is practice").valueOf();
console.log(msg);
console.log(1+msg.valueOf());

function stringToArray(s){
    return s.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
}

var x = 3;
var y = 1;

console.log(x<2 && y>1);
console.log(x>2 && y>=1);
 
var k  = x<2 && y>1;
console.log(k);

var x = 0;
var y =1;
var k = x && y;
console.log(k);

var p = null;
p && p.name
p = {name:"TOM", age:18};
var k = p.name && p;

console.log(k.name);// P의 주소값이 반환됨을 알 수 있다. 

function f(x){
    x = x || 100; 
    console.log(x);
}

f();// 인수가 없으므로 100;
f(2);//인수가 있으므로 2;


var str = "2";
console.log(str.length);

