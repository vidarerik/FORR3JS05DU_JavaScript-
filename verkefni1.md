1. Hvað er null og undefined?
	Undefined þýðir að breytu hefur verið skilgreint en hefur ekki enn verið úthlutað gildi
	Null Það er hægt að úthluta breytu sem framsetning án gildi
2. Hvað gerir 'use strict' í JavaScript kóða?
	Það er til þess að tryggja að það sé notað nýjasta version af ECMAscript svo það sé notað rétt data type,block scope etc.
3. Hver er munurinn á let, var og const?
	"var" er eldri útgáfa af "let". munurinn á þeim er að "var" hegðar sér alltaf eins og global scope á meðan "let" fær sitt scope.
	"const" keyword þýðir að það sé ekki hægt að breyta því þegar það er búið skrifa í hann.
4. Endurskrifaðu eftirfarandi kóða með for lykkjunni.
let x = 9;
while (x >= 1) {
 console.log("hello " + x);
 x = x - 1;
}

for(let i = 9;i < 0; i--){
	console.log("hello " + i);
}
5. Skilgreindu sama fallið á þrjá mismunandi vegu.
	function firstaFall(tala1,tala2){
		return tala1 + tala2;
	}

	let nafnlaustFall = function (tala1,tala2){
		return tala1 + tala2;
	};

	const arrowFunc = (tala1, tala2) => { return tala1 + tala2 };


6. Útskýrðu hvað eftirfarandi kóði gerir, hvað gera svigarnir?
 (function() { alert('Hello World'); })();
 Þetta hugtak kallast Immediately-Invoked Function Expression eða IIFE skammstöfun. Það keyrir strax eftir að það er búið til. Þetta mynstur er oft notað þegar reynt er að forðast að menga global nöfn.

7. Af hverju birtist 1 en ekki 10?
Í hvaða röð er kóðinn keyrður í raun eftir að JS þýðandinn (e. interpreter) er búinn að fá
hann til sín? Raðaðu kóðanum rétt fyrir JS þýðandann.
"use strict";
let a = 1;
function b() {
 a = 10;
 return;
 function a() {}
}
b();
console.log(a);
8. Leystu lið 20 í Lesson 6 (Arrays) á Udacity https://classroom.udacity.com/courses/ud803
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(t) {
    if(t % 3 === 0){
         t += 100;
    }
  console.log(t);
});
9. Leystu lið 22 í Lesson 6 (Arrays) á Udacity https://classroom.udacity.com/courses/ud803
	var bills = [50.23, 19.12, 34.01,
	    100.11, 12.15, 9.90, 29.11, 12.99,
	    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
	];
	const totals = bills.map(x => x * 1.15);

	totals.forEach(function(t) {
	    
	  console.log(t.toFixed(2));
	});
10. Skrifaðu forrit í JavaScript sem sprengir staflan (stack overflow).
function chicken(){
	egg();
}

function egg(){
	chicken();
}
chicken();