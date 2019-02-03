### 1. Útskýrðu hvernig objectar tengjast í JavaScript. (0.5%)
Þegar það er átt við eða spurt hvernig objectar tengjast í `javascript` er það þegar það er búið til object segjum það heitir testobject\
það testobject tengist erfir(e.inherit) aðferðir sem object hefur. Það er hægt að sjá \__proto__ er líka í því sem tengist fleirri
objecta sem erfa fleirri aðferðir og svo framvegis. Dýpsta level er `null` og næst dýpsta level inniheldur nokkrar aðferðir eins og `toString()`

### 2. Útskýrðu kóðann línu fyrir línu. (0.5%)
```javascript
function Book(isbn) { //Fall Smiður(e.function constructor) skilgreindur (e.defined)
 this.isbn = isbn;
}

Book.prototype.getIsbn = function () { //Aðferðin sem Book constructor á og hans children erfa.
 return "Isbn is " + this.isbn;
};

let bookObject = new Book(12345); /* Búa til instance af Book með því 
                                     að nota smiðinn og hann hefur einnig aðferina getIsbn
                                     og hann fær gildið 12345 int */
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

//Fá upphafsgildi
let Dhuvas = new Geimflaug(); // f1 
let Bhatath = new Geimflaug(); // f2
let Caugvon = new Geimflaug(); // f3
```


##### b) Gefðu geimflaugunum mismunandi speed gildi.
```javascript
//Breyta gildi fyrir ákveðna flaug
Dhuvas.speed = 30;
Bhatath.speed = 657;
Caugvon.speed = 42;
```
##### c) Notaðu Prototype til að bæta við nýrri method fly sem hækkar gildið
##### speed um 1. Þetta fá allar flaugarnar (f1,f2,f3).
```javascript
//Fall sem hækkar gildi um einn fyrir allar flaugar ef keyrt(e.invoke)
Geimflaug.prototype.fly = function() {
	 preInc = this.speed++;// pre incrementeation fyrir display
  return this.constructor.name + " speed incremented by one: " + ++preInc;
};
```
##### d) Láttu flaug f1 hafa setLife() sem hækkar life um 1. Þessa aðferð eiga hinar
##### flaugarnar ekki að hafa.
```javascript
//Gef f1(Dhuvas) fallið sem hækkar líf hans um eitt
Dhuvas.setLife = function () {
  preInc = this.life++;
  return ++preInc;
};
```

##### 4. Gerðu það sama (sambærilegt) og síðasta lið en með notkun class. Notaðu
##### eftir þörfum; constructor, get, set, static, extends, super, mix-ins. (1.5%)
```javascript
class Geimflaug {

  constructor(speed = 10, life = 10) {
    // invokes the setter
    this.speed = speed;
    this.life = life;
  }

  get getSpeed() {
    return this.speed;
  }
  
  get getLife() {
    return this.life;
  }

  set setSpeed(value) {
    this.speed = value;
  }
  
  set setLife(value) {
    this.life = value;
  }

}

let Dhuvas = new Geimflaug(); // fær upphafsgildi
let Bhatath = new Geimflaug();
let Caugvon = new Geimflaug(); 
```
##### 5. Hver er munurinn á Class og Prototype? (0.5%)

`Class` er frekar nýtt í javascript og er í raun og veru ekki klasi.\
Á bakvið tjöldin er þetta function, þetta kom árið 2015 með ECMA script 6 og er frekar svona \
**syntactical sugar** eins og þeir kalla það.\
Munurinn á *klasa* og *protoype* er ekki svo mikill nema syntaxinn er öðruvísi(hvernig hann er skrifaður/útfærður).\
Ef það er notað `protoype` aðferðina þarf að nota *function constructor* first og aðskilja síðan method frá body að utan.\
Allt sem er mótað frá þann *constructor* erfa aðferðina sem tilheyra því nema annað sé tekið fram. \
Það er líka hægt að búa til instance af *klasa* með keyword "**new**" sem er athugið ekki rétt eða mælt með því þá er staðsetning komin utan klasan yfir í window(sem er ekki rétt) þannig að "**new**" er mikilvægt í þessu tilfelli.\
En með því að nota `Class` hins vegar þá kemur ***error*** ef það er ekki notað "**new**" keyword.
