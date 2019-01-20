## 1. Hvað er null og undefined?
	null er úthlutað gildi. Það þýðir ekkert.
	Undefined þýðir að breytu hefur verið lýst("Declared") en ekki skilgreint("Defined") ennþá.
	
## 2. Hvað gerir 'use strict' í JavaScript kóða?
	Use strict er nýr eiginleiki sem ECMAScript 5 hefur upp á að bjóða...
	Það er strengur sem þú setur í JavaScript skrárnar þínar (annað hvort efst á skrá eða inní föll)
	þetta tryggir að það sé notað nýjasta version af ECMAscript svo það sé notað viðeigandi reglur...
	getur líka t.d. ekki notað breytu sem hefur ekki verið skilgreint með nafni.
	Dæmi:
```javascript

"use strict"
test = 23; // error variable with no name
```

## 3. Hver er munurinn á let, var og const?
	"var" er eldri útgáfa af "let".
	Munurinn á þeim er að "var" hegðar sér alltaf eins og global scope 
	á meðan "let" introduce-aði block scope, sem þyðir að ef þú ert með t.d. "let" keyword inní
	body er það orðið local scope.
	Í gamla daga voru slaufu svigar skraut eða hjálpar tól fyrir mannveruna 
	til þess að sjá hvaða hlutir tilheyrðu hvort 
	annað einnig þurfti líka að gera function til að einangra "gera local scope".
	"const" keyword þýðir að það sé ekki hægt að breyta því þegar það er búið skrifa í hann.
	
## 4. Endurskrifaðu eftirfarandi kóða með for lykkjunni.
```javascript
let x = 9;

while (x >= 1) {
 console.log("hello " + x);
 x = x - 1;
}
```
```javascript
for(let i = 9;i >= 0; i--)
{
	console.log("hello " + i);
}
```

## 5. Skilgreindu sama fallið á þrjá mismunandi vegu.
```javascript
function firstaFall(tala1,tala2){
	return tala1 + tala2;
}

let nafnlaustFall = function (tala1,tala2){
	return tala1 + tala2;
};

const arrowFunc = (tala1, tala2) => { return tala1 + tala2 };

```

## 6. Útskýrðu hvað eftirfarandi kóði gerir, hvað gera svigarnir?
```javascript
 (function() { alert('Hello World'); })();
 ```
	 Þetta hugtak kallast Immediately-Invoked Function Expression eða IIFE skammstöfun("Abbreviation"). 
	 Það keyrir strax eftir að það er búið til.
	 Þetta mynstur er oft notað þegar reynt er að forðast að menga("Pollution") global nöfn.

## 7. Af hverju birtist 1 en ekki 10?
### Í hvaða röð er kóðinn keyrður í raun eftir að JS þýðandinn (e. interpreter) er búinn að fá
### hann til sín? Raðaðu kóðanum rétt fyrir JS þýðandann.
```javascript
"use strict";
let a = 1;
function b() {
 a = 10;
 return;
 function a() {}
}
b();
console.log(a); // skilar 1
```
### Svarið við firstu spurningu það er vegna þess að það er fall inní falli
### Firsta lagi er það vegna þess að það function heitir það sama og breytan sem assignar það í function í staðinn
### Öðru lagi hoistar hann fallið sem þýðir að það sé hægt að kalla á fallið áður en það er skilgreint("Declared")
### bara með því að breyta eða sleppa("omit") function a() fær maður 10

### Svar við síðari spurningu hvaða röð þýðandinn keyrir
### hann byrjar á lesa "use strict" til að apply nýjustu reglur. hoistar function b() efst í skjali síðan hoistar hann funciton a() efst ### í function body. Eftir hoistin fer hann í að skilgreina breytur í þessu tilfelli let a = 1, síðan er að kallað("invoke") á fall b()
### efst í því falli er fall a() af því að það var hoistað efst inní því sem þýðir að a = 10 er setur í fall a() og að lokum er return
### og fer úr falli b() og beint í console.log  sem á að skrifa út töluna 1.
### en með því að sleppa eða breyta nafni á fall a() verður útkoman 10.
```javascript
"use strict";
let a = 1;
function b() {
 a = 10;
 return;
}
b();
console.log(a); // skilar 10
```
### EÐA
```javascript
"use strict";
let a = 1;
function b() {
 a = 10;
 return;
 function c() {}
}
b();
console.log(a); // skilar 10
```
## 8. Leystu lið 20 í Lesson 6 (Arrays) á Udacity https://classroom.udacity.com/courses/ud803
```javascript
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
```
## 9. Leystu lið 22 í Lesson 6 (Arrays) á Udacity https://classroom.udacity.com/courses/ud803
```javascript
var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
const totals = bills.map(x => x * 1.15);

totals.forEach(function(t) {

  console.log(t.toFixed(2));
});
```
## 10. Skrifaðu forrit í JavaScript sem sprengir staflan (stack overflow).
```javascript
function chicken(){
	egg();
}

function egg(){
	chicken();
}
chicken();
```
