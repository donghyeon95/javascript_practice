// var card = {"suit":"heart", "rank":"A"};

// console.log(card.suit);
// console.log(card["rank"]);
// console.log(card.heart);

// var obj = {};
// console.log(obj);
// //card.value = 14;
// //console.log(card);
// //delete card.rank;
// //console.log(card);
// console.log(card[1]);// 안됨.. 그냥 이거는 자바의 클래스라 생각하자.

// console.log("suit" in card);
// console.log("color" in card);
// console.log("toString" in card);//상속 때문에 to Srting이 없는데도 true

// // 객체리터럴 == 구조체
// var p = {x: 1.0, y: 2.5};

// var circle={
//     center : p,
//     radius : 2.5
// };

// console.log(circle.center == p);//true 
// //console.log("%x,%x,%x,%x,%x,%x,%x,%x,%x,%x,%x,%x,%x,%x,%x", p,p,p,p,p,p,p,p,p,p,p);//포맷스트링이 안됨
// console.log(circle.center.x);
// p["x"]= 4.0;
// console.log(circle.center.x);
// //이로써 p와 center는 같은 객체를 가르키는 것을 알 수 있다.  ==> 주소공유

// var person = {
//     name : "이정규",
//     age : 18,
//     sex : "man",
//     married : false 
// };
// console.log(person);
// var person = {
//     name : " ",
//     age : 0,
//     sex : 0,
//     married : false 
// }
// console.log(person);
// console.log("name" in person);
// person["name"]="william";
// console.log(person.name);

// //함
// function square(x){
// return x*x;
// }

// q ={ x:1, y: 2};
// function dist(p,q){
//     var dx = q.x-p.x;
//     var dy = q.y-p.y;
//     return Math.sqrt(dx*dx + dy*dy);
// }

// console.log(dist(p,q));

// function f(){
//     hi = "global";
//     console.log(hi);
//     //var hi = "local";
//     console.log(hi);
//     return hi;
// }
// //console.log(hi);
// f();
// console.log(hi);//함수에서 전역변수가 된 hi를 다시 지역변수로 하면 전역변수도 사라짐...69번 줄
// let x = "outer x";
// {
//     let x = "inner x";
//     let y = "inner y";
//     console.log(x);
//     console.log(y);
// }
// console.log(x);
// //console.log(y);//이건 실행이 안됨.

// // const c = 2;
// const origin = {x:1, y:2};
// origin.x = 3;
// console.log(origin);

// var square = function sq(x) {return x*x;};
// console.log(square(5));
// //console.log(sq(5));// 익명함수는 이름을 지어줘도 해당 블록 안에서만 사용가능하다.

// var circle = {
//     center : {x:1.0, y:2.0},
//     radius : 2.5,
//     area : function (){
//         return Math.PI* this.radius*this.radius;
//     }
// }

// function translate(a,b){
//     this.center.x = this.center.x + a;
//     this.center.y = this.center.y + b;
// }
// circle.translate = function(a,b){
//     this.center.x = this.center.x + a;
//     this.center.y = this.center.y + b;
// }

// circle.translate= translate;
// circle.translate(1,2);
// console.log(circle.center);

// function Card(suit, rank){
//     this.suit = suit;
//     this.rank = rank;
// }

// // var card = new Card("하트",  "A");
// // console.log(Card);
// // console.log(card);
// var card = {};
// console.log(card);
// card.suit = "Heart";
// card.rank = "K";
// console.log(card);


// function Particle(x,y,vx,vy){
//     this.x = x;
//     this.y = y;
//     this.vx= vx;
//     this.vy = vy;
//     this.velocity = Math.sqrt(vx*vx + vy+vy);
// }

// var p = new Particle(0,0,3,4);
// console.log(p);

// function Circle(center, radius){
//     this.center = center;
//     this.radius = radius;
//     this.area = function(){
//         return Math.PI * this.radius *this.radius;
//         }
// }

// var p = {x:0, y:0};
// var c = new Circle(p, 2.0);
// console.log("넓이= "+ c.area);
// console.log("넓이= "+ c.area());

// var now = new Date();
// console.log(now);

// var then = new Date(2008, 05, 10);
// console.log(then);

// var elapsed = now - then;
// console.log(elapsed);

// var start = new Date();
// c.area();
// var end = new Date();
// var elapsed = end- start;
// console.log(elapsed);

// var func = new Function("num1","num2","console.log(num3= num2+num1)");

// func(1,2);

// var evens = [2,4,6,8];
// var empty =[];
// console.log(empty);

// var a = [2, ,4];
// console.log(a);

// var various = [3.14, "pi", true, {x:1, y:2}, [2,4,6,8]];
// console.log(various);

var evens = [2,4,6,8];
console.log(evens.length);

var a = ["A","B","C","D"];
a.length = 2;
console.log(a);
a.length =4;
console.log(a);

var evens = new Array(2,4,6,8);
var empty = new Array();
// var a = new Array(2,4);
var various = new Array(3.14, "pi", true, {x:1, y:2}, [2,4,6,8]);

var x= new Array(3);
console.log(x.length);
console.log(x);

console.log("this =" + a["1"]);

var a =["a",'b','c'];
a[3] = "d";
console.log(a);
a[5] = 'f';
console.log(a);
console.log(a[4]);
a.push("G");
console.log(a);
console.log(a.length);
delete a[1];
console.log(a);
