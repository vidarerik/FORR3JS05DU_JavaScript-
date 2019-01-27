#### 1. Búðu til object með upplýsingar um þig; nafn, kennitala, heimilsfang, heimasími og gsm.
```javascript
let person = 
{
	nafn:"Viðar",
	kennitala:"123456-7890", 
	heimilisfang:"home1",
	heimasimi:"123-4567",
	gsm:"666-6666"
};
```
#### 2. Notaðu for…in lykkjuna til að birta öll eigindin (e. property) ásamt gildum í objectinu í lið 1.
```javascript
for (let i in person) {
	console.log(i + " : " + person[i]);
}
```
#### 3. Bættu við aðferð í objectið sem þú gerðir í lið 1. Aðferðin á að skila streng sem inniheldur
#### nafn og aldur.
```javascript
let person = 
{
	nafn:"Viðar",
	kennitala:"123456-7890", 
	heimilisfang:"home1",
	heimasimi:"123-4567",
	gsm:"666-6666",
	print : function printInfo(aldur){
		return "Nafn: " + person.nafn + " \nAldur: " + aldur;
	}
};
person.print(27);
```
#### 4. Prentaðu út með console.log() Nonni.
```javascript
let family = {
"parents":
{
"fathers": [{"name":"Jakob"},{"name":"Nonni"}],
"mothers":[{"name":"Rakel"},{"name":"Sara"}]
}
 };

 console.log(family.parents.fathers[1]);
```
#### 5. Leystu lið 8 í lesson 7 - Objects á Udacity
```javascript
let breakfast =
{
    name : "The Lumberjack",
    price : 9.95,
    ingredients : ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};
```
#### 6. Leystu lið 9 í lesson 7 - Objects á Udacity
```javascript
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    print: function (){
        return "Welcome! Your balance is currently " + savingsAccount.balance + " and your interest rate is " + 				savingsAccount.interestRatePercent + ".";
    }
};

console.log(savingsAccount.print());
```
#### 7. Leystu lið 12 í lesson 7 - Objects á Udacity
```javascript
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];


donuts.forEach(function(element) {
	console.log(element.type + " donuts cost $" + element.cost + " each");
});
```
#### 8. Eru öll eigindi (e. properties) í sömu röð og þeim var bætt í object, rökstuddu?
Öll **eigindi (e. properties)**  sem eru af type **Integer** *("þótt að það sé inní gæsalappir sem er væntanlega string eða char")* inní objecta eru raðaðir eftir númeratali *("lægsta talan verður alltaf efst")* frá key value en það er hægt að *"svindla"* með þvi að setja t.d. plús '+' merki eða önnur tákn til þess að sleppa við röðunaraðgerðir.
... Hins vegar, ef key er ekki **heiltala**, þá eru þau skráð í **sköpunarfyrirmæli**(Creation order)

#### 9. Útskýrðu hvað eftirfarandi kóði gerir.
```javascript
let user = { name: "John" };
let admin = user;
```
Á bakvið tjöldin er tilbúinn **Copy constructor** sem er hannaður í c++  *(fer eftir hvaða browser er notaður t.d. mozilla notar java)* svo að þetta virki,
Þegar hlutur er afritaður þá er tilvísunin *(Reference)* afrituð en ekki hluturinn *(Object)* sjálfur,
Eða í öðrum orðum er það verið að afrita **addressuna** með **pointera**.

#### 10. Afhverju virkar eftirfarandi?
```javascript
const user = {
 name: "John"
};
user.age = 25;
alert(user.age); // 25
```
Hlutir sem eru skilgreindir með keywordinu **"const"** geta verið breyttir semsagt bætt við key og values...
:school: :space_invader:
/play trololo
