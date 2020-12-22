var card = {"suit":"heart", "rank":"A"};

console.log(card.suit);
console.log(card["rank"]);
console.log(card.heart);

var obj = {};
console.log(obj);
//card.value = 14;
//console.log(card);
//delete card.rank;
//console.log(card);
console.log(card[1]);// 안됨.. 그냥 이거는 자바의 클래스라 생각하자.

console.log("suit" in card);
console.log("color" in card);
console.log("toString" in card);//상속 때문에 to Srting이 없는데도 true

// 객체리터럴 == 구조체
var p = {x: 1.0, y: 2.5};

var circle={
    center : p,
    radius : 2.5
};

console.log(circle.center == p);//true 
//console.log("%x,%x,%x,%x,%x,%x,%x,%x,%x,%x,%x,%x,%x,%x,%x", p,p,p,p,p,p,p,p,p,p,p);//포맷스트링이 안됨
console.log(circle.center.x);
p["x"]= 4.0;
console.log(circle.center.x);
//이로써 p와 center는 같은 객체를 가르키는 것을 알 수 있다.  ==> 주소공유

var person = {
    name : "이정규",
    age : 18,
    sex : "man",
    married : false 
};
console.log(person);
var person = {
    name : " ",
    age : 0,
    sex : 0,
    married : false 
}
console.log(person);
console.log("name" in person);
person["name"]="william";
console.log(person.name);



