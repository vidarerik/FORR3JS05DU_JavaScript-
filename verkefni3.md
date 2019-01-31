### 1. Útskýrðu hvernig objectar tengjast í JavaScript. (0.5%)
  Þegar það er átt við eða spurt hvernig objectar tengjast í javascript er það þegar það er búið til object segjum það heitir testobject
  það testobject tengist erfir(e.inherit) aðferðir sem object hefur. Það er hægt að sjá \__proto__ er líka í því sem tengist fleirri
  objecta sem erfa fleirri aðferðir og svo framvegis. Dýpsta level er `null` og næst dýpsta level inniheldur nokkrar aðferðir eins og `toString()`
  
### 2. Útskýrðu kóðann línu fyrir línu. (0.5%)
```javascript
function Book(isbn) {
 this.isbn = isbn;
}

Book.prototype.getIsbn = function () {
 return "Isbn is " + this.isbn;
};

let bookObject = new Book(12345);
```
### 3. Prototypal pattern (2%)
##### a) Búðu til þrjár geimflauga objecta (f1,f2,f3) með function smið sem hafa mismunandi heiti. 
##### Geimflaugarnar eiga einnig að hafa eigindin speed og life með upphafsgildinu 10.
##### Spaceship-name generator: http://www.fantasynamegenerators.com/spaceshipnames.php#.WnQsPqhl-M8
```javascript
function Geimflaug(speed = 10, life = 10) {
  this.speed = speed;
  this.life = life;
}

let Dhuvas = new Geimflaug(); // fær upphafsgildi
let Bhatath = new Geimflaug();
let Iv\'eks = new Geimflaug(); 
```
##### b) Gefðu geimflaugunum mismunandi speed gildi.
```javascript
let Caugvon = new Geimflaug(30);
let Bhatath = new Geimflaug(657);
let Dhuvas = new Geimflaug(42);
```
##### c) Notaðu Prototype til að bæta við nýrri method fly sem hækkar gildið
##### speed um 1. Þetta fá allar flaugarnar (f1,f2,f3).
```javascript
Geimflaug.prototype.speed = function() {
  return this.speed++;
};
```
##### d) Láttu flaug f1 hafa setLife() sem hækkar life um 1. Þessa aðferð eiga hinar
##### flaugarnar ekki að hafa.

##### 4. Gerðu það sama (sambærilegt) og síðasta lið en með notkun class. Notaðu
##### eftir þörfum; constructor, get, set, static, extends, super, mix-ins. (1.5%)

##### 5. Hver er munurinn á Class og Prototype? (0.5%)
