/*---------3.14 변수 끌어올림과 변수 중복선언---------------

console.log(x);
var x;
x = 3;
console.log(x);
var x;//같은 이름으로 실행된 변수는 끌어올려져서 하나의 영역에만 저장이 된다. 따라서 3의 값을 잃어버림.
x = 5;
console.log(x);*/



/*-------------3.2.1 데이터 타입과 변수의 동적 타이핑 ------------------*/
/*var pi = 3.14;
console.log(pi);
pi = "원주율";
console.log(pi);*/
/*----------------------------------------------------------------*/


/*-------------3.2.4 문자열 ------------------*/
// var escape_string = "hi\v\vbye";//수직 탭 문자 '/v' == '/n+/t'
// console.log(escape_string);
// escape_string = "hi\fbye";//폼피드 == 프린트에서 다음 페이지로 넘어가게 만드는 것이다.
// console.log(escape_string);
// escape_string = "hi\rbye";//개행 문자이긴하나 현재 줄의 처음으로 커서를 옮긴다. 따라서 hi가 덧씌워짐.
// console.log(escape_string)
/*------------------------------------------*/

/*----------------3.3.1 심벌 ----------------*/
// var sym1= Symbol();
// var sym2= Symbol();
// console.log(sym1 == sym2);//False
// console.log(sym1);//Symbol()
// console.log(sym2);//Symbol()

// var HEART = Symbol("하트");
// console.log(HEART);//Symbol(하트)
// console.log(HEART.toString());//Symbol(하트)
// console.log(HEART.toString() == '하트');//False
// console.log(HEART == '하트');//False

//--------- 심벌과 문자열 연결하기 ---------------//
// var sym1 = Symbol.for("club");
// var sym2 = Symbol.for("club");
// console.log(sym1);
// console.log(Symbol.keyFor(sym1));
// console.log(sym1 == sym2); //true

// var sym1 = Symbol.for("club");
// var sym2 = Symbol("club");
// console.log(sym1);
// console.log(sym2);
// console.log(sym1 == sym2);//False
// console.log(Symbol.keyFor(sym1));
// console.log(Symbol.keyFor(sym2));//새로운 심볼이 만들어 진 것은 맞으나 문자열에 연동되지 않았다.
var symbolProperty  = Symbol('key'); // Symbol(key)
var ob = {};

ob[symbolProperty] = 'value'

console.log(ob[symbolProperty] === 'value');
console.log(typeof symbolProperty === 'symbol');

console.log(ob);
//// {Symbol(key): "value"}
