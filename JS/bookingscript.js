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
    console.log('init = klar');


}

function eListener(){
    console.log('elistener = klar');
    tab1Click();

}

function tab1Click(){
    console.log('tab1 = klar')
    tab1.addEventListener('click', function(){
        bConfirm.style.display = 'block';
    })
}


