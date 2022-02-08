//Canvas
var house = document.getElementById('house');
var ctx = house.getContext("2d");
// borde
var bord1;
var bord2;
var bord3;
var bord4;
var bord5;

//txtbord
var bTxt1;
var bTxt2;
var bTxt3;
var bTxt4;
var bTxt5;

//dør
var door;

//bar

var bar1;
var bar2;
var txtbar;



//Booking
var bConfirm;

var bDate;
var bAntal;


window.addEventListener('load', init);

function init(){
    bord1 = document.getElementById('tab1');
    bord2 = document.getElementById('tab2');
    bord3 = document.getElementById('tab3');
    bord4 = document.getElementById('tab4');
    bord5 = document.getElementById('tab5');
    bTxt1 = document.getElementById('tabTxt1');
    bTxt2 = document.getElementById('tabTxt2');
    bTxt3 = document.getElementById('tabTxt3');
    bTxt4 = document.getElementById('tabTxt4');
    bTxt5 = document.getElementById('tabTxt5');
    door = document.getElementById('door');
    bar1 = document.getElementById('bar1');
    bar2 = document.getElementById('bar2');
    bar1 = document.getElementById('txtBar');
    bConfirm = document.getElementById('bookingcorfirm');
    bDate = document.getElementById('bookingDate');
    bAntal = document.getElementById('bookingAntal');
    eListener();
    console.log('init = Nej');


}

function eListener(){
    console.log('elistener = ZzzzZzz');
    canvas();
    tab1Click();

}

function canvas(){
    console.log('Canvas = Her!');

    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();



}

function tab1Click(){
    console.log('bord 1 = klar')
    tab1.addEventListener('click', function(){
        bConfirm.style.display = 'block';
    })
}




const myJSON = '{"tdag":["Forret", "Hovedret", "dessert"], "mdag":["Forret", "Hovedret", "dessert"]}';
const myObj = JSON.parse(myJSON);

document.getElementById("demo").innerHTML = "Tirsdags ret: " + myObj.tdag[0] + " " + myObj.tdag[1]+ " " + myObj.tdag[2];


menu = `{
  "menu": [
    {
      "id": 1,
      "Titel": "Gullash m. pure",
      "beskrivelse": "langtidsstegt ",
      "pris": 999,
      "ret": "Hovedret",
      "foto": "gullash.jpg"
    },
    {
      "id": 2,
      "Titel": "Taco",
      "beskrivelse": "Med kød og grønt",
      "pris": 232,
      "ret": "Hovedret",
      "foto": "taco.jpg"
    },
    {
      "id": 3,
      "Titel": "Kyllingesticks",
      "beskrivelse": "nudler, grønt og spejlæg",
      "pris": 543,
      "ret": "forret",
      "foto": "kyllingesticks.jpg"
    },
    {
      "id": 4,
      "Titel": "Grønsagssuppe",
      "beskrivelse": "Direkte fra haven",
      "pris": 2135,
      "ret": "forret",
      "foto": "groensag.jpg"
    },
    {
      "id": 5,
      "Titel": "Creme brúlee",
      "beskrivelse": "flamberet sukker-rush",
      "pris": 9876,
      "ret": "dessert",
      "foto": "brulee.jpg"
    },
    {
      "id": 6,
      "Titel": "Æblekage",
      "beskrivelse": "Med ævler fra moars have",
      "pris": 5628,
      "ret": "dessert",
      "foto": "aeblekage.jpg"
    },
    {
      "id": 7,
      "Titel": "Brød",
      "beskrivelse": "frisk bragt",
      "pris": 3920,
      "ret": "tilbehør",
      "foto": "broed.jpg"
    }
  ]
}`;

  const current_menu = JSON.parse(menu);
    // loop der henter hele arrayet
    for (let i=0; i<current_menu.menu.length; i++){
      console.log( current_menu.menu[i].titel )
      demo.innerHTML += `
        <div class="current_menu">
          <h2> ${current_menu.menu[i].Titel} </h2>
          <h4> ${current_menu.menu[i].pris} kr </h4>
          <p> ${current_menu.menu[i].beskrivelse} </p>
         <!--   <img src="images/${current_menu.menu[i].foto}" alt="${current_menu.menu[i].titel}"> -->
        </div>
      `
  
  
    }

