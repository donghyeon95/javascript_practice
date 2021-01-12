// function isLeapYear(year){
//     if((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))){
//         return true;
//     }
//     return false;
// }

// window.onload = function(){
//     document.getElementById("button").onclick = function(){
//         var hp = parseFloat(document.getElementById("highpressure").value);
//         var lp = parseFloat(document.getElementById("lowpressure").value);
//         var judgement = document.getElementById("judgement");
//         if(hp<120 && lp<80){
//             judgement.innerHTML = "당신의 혈압은 정상입니다.";
//         }else if(hp<139 && lp<89){
//             judgement.innerHTML = "당신의 혈압은 다소 높습니다.";
//         }else{
//             judgement.innerHTML =  "당신은 고혈압입니다.";
//         }
//     };
// };

// function binaryOperation(a,b,operator){
//     switch(operator){
//         case "+" : return a+b;
//         case "-" : return a-b;

//     }
// }

// function fact(n){
//     var k =1, i=1;
//     while(i<n){
//         k *= (++i);
//     }
//     return k;
// }

// console.log(fact(5));

// function linearSearch(x,a){
//     var i = 0;
//     var n = a.length;
//     while(i<n && x>a[i]) i++;
//     if (x == a[i]) return i;
//     return null;
// }
// var a= [2,4,7,12,15,21, 34, 35, 46, 57, 70, 82, 86, 92, 99];
// console.log(linearSearch(35,a));

// function binarySearch(x,a){
//     var n = a.length;
//     var left = 0, right = n-1;
//     while(left<right){
//         var middle = Math.floor((left+right)/2);
//         if(x<= a[middle]){
//             right= middle;
//         }
//         else left = middle+1;
//     }
//     if( x == a[right]) return right;
//     return null;
// }
// var a= [2,4,7,12,15,21, 34, 35, 46, 57, 70, 82, 86, 92, 99];
// console.log(linearSearch(35,a));

// function sumArray(a){
//     var sum = 0;
//     for(var i =0; i< a.length; i++){
//         sum += a[i];
//     }
//     return sum;
// }
// var a= [3,5,1,2,6,7];
// console.log(sumArray(a));

// var n = parseInt(prompt("n?"));
// var p = [];
// for(var i=2; i <= n; i++) p[i] = true;
// var max = Math.floor(Math.sqrt(n));
// var x = 2;
// while(x<=max){
//     for(var i = 2*x; i<=n; i +=x) p[i] =false;
//     while(!p[++x]);
// }
// for(var i=2; i<=n-2; i++){
//     if(p[i] && p[i+2]){
//         document.write(i+","+(i+2)+"<br>");
//     }
// // }

// var n = 20;
// for(var a=1; a<=n; a++){
//     for(var b=1; b<=n; b++){
//         for(var c=1; c<=n; c++){
//             if(a*a + b*b == c*c){
//                 console.log(a+"^2+"+b+"^2="+ c + "^2");
//             }
//         }
//     }
// }

// function diamond(c,n,x,y,r,color){
//     c.strokeStyle = color;
//     c.beginPath();
//     for(var i =0; i<n; i++){
//         var t = i*2*Math.PI/n;
//         for(var j = i+1; j<n; j++){
//             var s = j*2*Math.PI/n;
//             c.moveTo(x+r*Math.cos(t), y+r*Math.sin(t));
//             c.lineTo(x+r*Math.cos(s), y+r*Math.sin(s));
//         }
//     }
//     c.stroke();
// }

// window.onload =function(){
//     var canvas = document.getElementById("mycanvas");
//     var ctx = canvas.getContext("2d");
//     diamond(ctx, 6,170,170,150,'darkblue');
//     diamond(ctx, 12,490,170,150,'darkblue');
//     diamond(ctx, 18,810,170,150,'darkblue');
// };

var obj = {a:1, b:2, c:3};
for(var p in obj){
    //s
    console.log("obf." + p + "=" +obj[p]);
    // console.log(obj.p); 이거는 안됨.
}

var a= [2,4,6,8,10], b = [1,3,5,6,9,11];
loop : for(var i = 0; i ,a.length; i++){
    for(var j = 0; j<b.length; j++){
        if(a[i] == b[j]) break loop;
    }
}
console.log("a["+i+"] =b[" + j +"]");