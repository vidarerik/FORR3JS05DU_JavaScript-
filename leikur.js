"use strict";
/*
	Vidar Erik Vidarsson
	Skilaverkefni - 4
*/
// By til striga(e. canvas) umhverfi til ad embedda i html
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.setAttribute('style', "display: block; margin-left: auto; margin-right: auto; border:6px groove gray");
let isStart = false;
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);
/*
  Hlada inn myndir
*/

// Hlada inn bakgrunnsmyndina
let backGroundReady = false;
let backGroundImage = new Image();
backGroundImage.onload = function () {
  // syna bakgrunnsmynd
  backGroundReady = true;
};
backGroundImage.src = "background.png";
// Hlada inn spilara
let characterReady = false;
let characterImage = new Image();
characterImage.onload = function () {
  // Syna spilara
  characterReady = true;
};
characterImage.src = "character.png";

// Hlada inn stjornu eda slikt
let gnomeReady = false;
let gnomeImage = new Image();
gnomeImage.onload = function () {
  // etc
  gnomeReady = true;
};
gnomeImage.src = "gnome.png";
// Hlada inn blod
let bloodReady = false;
let bloodImage = new Image();
bloodImage.onload = function () {
  // etc
  bloodReady = true;
};
bloodImage.src = "Blood.png";
// By leikja hluti (e.objects)
let character = {
  speed: 100
};

let gnome = {};
let gnomesCaught = 0;

let blood = {};

let keys = {};
// na i hlustara til thess ad fylgjast med hvada takkar eru slegnir inn
addEventListener("keydown", function (key) {
  keys[key.keyCode] = true;
}, false);
addEventListener("keyup", function (key) {
  delete keys[key.keyCode];
}, false);
// Uppfaerir leikjahlut eftir þvi hvada takki er sleginn inn
let update = function (modifier) {
  if (38 in keys) { // Upp takki
    character.y -= character.speed * modifier;
  }
  if (40 in keys) { // Niður
    character.y += character.speed * modifier;
  }
  if (37 in keys) { // vinstri
    character.x -= character.speed * modifier;
  }
  if (39 in keys) { // Hægri
    character.x += character.speed * modifier;
  }
  // Tjekkar hvort ad spilari hefur klesst (e.collidad) vid dverginn
  if (
    character.x <= (gnome.x + 32) && gnome.x <= (character.x + 32) && character.y <= (gnome.y + 32) && gnome.y <= (character.y + 32)
  ) {

    // Haekka hraða i hvert skipti sem spilari etur dverg
    character.speed += 100;
    ++gnomesCaught;
    // Blod fylgir dauda dvergs
    blood.x = gnome.x;
    blood.y = gnome.y;
    // Reseta stadsetningu
    reset();
  }
};
/*
  Fall sem ser um ad teikna a skja texta og myndir.
*/
let render = function () {
  if (backGroundReady) {
    ctx.drawImage(backGroundImage, 0, 0);
  }
  if (bloodReady) {
      ctx.drawImage(bloodImage, blood.x, blood.y);    
  }
  if (characterReady) {
    ctx.drawImage(characterImage, character.x, character.y);
  }
  if (gnomeReady) {
    ctx.drawImage(gnomeImage, gnome.x, gnome.y);
    // filter mettun(e.saturation) fyrir dverg svo hann se meir aberandi
    ctx.globalCompositeOperation = "saturation";
    ctx.fillStyle = "hsl(0,100%,50%)";
    ctx.fillRect(gnome.x,gnome.y,gnomeImage.width,gnomeImage.height); 
    ctx.globalCompositeOperation = "source-over";
  }

  // Syna upplysingar um stodu leiksins.
  ctx.fillStyle = "#f7e6e6";
  ctx.font = "24px Verdana";
  ctx.textAlign = "right";
  ctx.textBaseline = "top";
  ctx.fillText("Dvergar etid: " + gnomesCaught, 500, 410);
  ctx.fillText("Timi eftir: " + count, 500, 440);

  if(finished===true){
    ctx.fillStyle = "#f7e6e6";
    ctx.font = "50px Ariel";
    ctx.textAlign = "left";
    ctx.fillText("Leikur endar!", 200, 220);
  }
  
};
let count = 30; // Telja nidur tima hvad er mikid eftir af leik
let finished = false;

/*
  Adferd sem ser um ad endursetja stadsetningu dverg og setja spilara a byrjunar stad 
*/
let reset = function () {
  if (isStart === false){
    // Stadsetja spilara i midju canvas
    character.x = canvas.width / 2;
    character.y = canvas.height / 2 + 100;
  }
  isStart = true;
  // Stadsetja hlut a random stadi
  gnome.x = 32 + (Math.random() * (canvas.width - 64));
  gnome.y = 32 + (Math.random() * (canvas.height - 64));
};
/*
  Fall sem ser um ad telja nidur tima hvad er mikid eftir af leiknum
*/
let counter =function(){
  count=count-1; // Telja nidur hverja eina sekundu
  // þegar þad telur nidur í null a ad fela spilara og dverg
    if (count <= 0)
    {
      // stoppar timann
       clearInterval(counter);
       // leikur buinn
       finished = true;
       count=0;
       // fela
       gnomeReady=false;
       characterReady=false;
    }
};
// Segja ad telja eina secondu hja fallinu counter
setInterval(counter, 1000);
/*
  Megin fall
*/
let main = function () {
  // keyrir update og render follin
  update(0.02);
  render();
  // Uppfaera main fallid (loop)
  requestAnimationFrame(main);
};

// Verdur ad keyra her ad minsta kosti einu sinni til ad hefja loop
reset();
main();
