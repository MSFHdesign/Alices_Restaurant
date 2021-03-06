
console.log('JavaScript Allices: up and running!');
var d = new Date();
var uge = ['Søndag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag'];
var maaneder = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];

//uret
var c = document.getElementById('current-time');
var week = document.getElementById('dato');

//fetch JSON
fetch("js/excel-to-json.json")
.then(response => response.json())
.then(console.log('json er loaded'))
.then(json => console.log(json.menu));






//Events
var events = document.getElementById('eventsdato');
var eventbeskrivelse = document.getElementById('eventbeskrivelse')
var openhours = document.getElementById('opening');
// Selvstudie I.iii.
let vis, ansatte = [
    'Alice Thunderbird - ejer',
    'Tjener: Manuel de Cordoba',
    'Tjener: Polly Prentice',
    'Tjener: Sokrates Petersen',
    'Tjener: Valdemar Atterdag',
    'Sous-chef: Hanne X. Nielsen',
    'Køkkenchef: Frank Jensen',
    'Kok: Frederik Grundtvig',
    'Opvask: James Anderson',
    'Opvasker: Isaac Newton',
    'Pedel: Laylah Smith'
].sort();

//citater
//Selvstudie I.iiii
let citater = [
    '"All you need is Love." <br> The Beatles',
    '"You don\'t learn from experience. You learn by reflecting on experience" <br> John Dewey',
    '"Jeg lytter efter en hvisken<br>som bærer tavsheden<br>gennem natten." <br> Ulrikka Gernes',
    '"We\'re gonna have a real good time togeter" <br> Lou Reed',
    '"Life is like a mayonaise soda" <br> Lou Reed',
    '"All I ever wanted was to cook the perfect meal."<br>Alice',
    '"You can get anything you want at Alice\'s restaurant" <br> Arlo Guthrie'
];

let happening =[
   'Det er Søndag', 'Det er Mandag','Det er Tirsdag','Det er Onsdag','Det er Torsdag','Det er Fredag','Det er Lørdag'
];

let happeningbeskrivelse = ['Det er i dag vi fejre at det er blevet søndag', 'Det er i dag vi fejre at det er blevet mandag', 'Det er i dag vi fejre at det er blevet tirsdag','Det er i dag vi fejre at det er blevet onsdag','Det er i dag vi fejre at det er blevet torsdag','Det er i dag vi fejre at det er blevet fredag','Det er i dag vi fejre at det er blevet lørdag'

] 

document.addEventListener('DOMContentLoaded', function() {
setInterval(updateTime, 1000);
function updateTime(){
    var d = new Date();     
    var hours = d.getHours();
    if(hours >= 8 && hours <= 16){
        opening.style.color ="green";
        isOpen.innerHTML = 'Vi har åbent'
    }
    if(hours <= 7 && hours >= 17){
        opening.style.color ="red";
        isOpen.innerHTML ='Vi desværre lukket'
    }


    var minutter = d.getMinutes();
    if (minutter < 10){
        minutter = "0" + minutter}
    var dag =uge[ d.getDay() ];
    var maaned = maaneder[ d.getMonth() ];
    var dagImaaned = d.getDate();
    

        var sep = "<span>:</span>";
        if (d.getSeconds() % 2 === 1) sep = "<span>   </span>";
        
        c.innerHTML = hours + sep + minutter;
        week.innerHTML = dag + " d. " + dagImaaned + " " + maaned  ;
        events.innerHTML = "Event: "+ happening[ d.getDay()];
        eventbeskrivelse.innerHTML = happeningbeskrivelse[ d.getDay()];
}



})


// Selvstudie I.i 
const info = {
    author: 'Michael Hovgaard',
    dag: uge[ d.getDay() ],
    maaned: maaneder[ d.getMonth() ],
    dagImaaned: d.getDate(),
    aar: d.getFullYear(),
    time: d.getHours(),
    minut: d.getMinutes(),
    restaurant: "Alice's Restaurant", 
    adresse: 'Volden 234 <br>8000 Aarhus C', 
    telefon: '12345678',


    Footer: function() {
        console.log('footeren.Footer() = klar');
        footerInfo.innerHTML += `
          <div>
            &copy; Verdens mest fiktive resturant<br>
            ${this.author}
            ${this.dag}
            ${this.dagImaaned}.
            ${this.maaned}
            ${this.aar}.
          </div>
        `;
},
//Selvstudie I.ii
skrivAdresse: function() {
    footerInfo.innerHTML += `
      <div class="adresse">
        <h3>${this.restaurant}</h3>
        <p>
          ${this.adresse}<br>
          ${this.telefon}
        </p>
      </div>
    `
  }
}

info.skrivAdresse();
info.Footer();

//ansatte Selvstudie I.iii
for (vis in ansatte){
    hvem.innerHTML += '<li>' + ansatte[ vis ] + '</li>';
}



//citat Selvstudie I.iiii
(function dagensCitat() {
    rndNo = Math.floor(Math.random() * citater.length );
    dagensRet.innerHTML = '<em>' +  citater[ rndNo ] + '</em>';
  })();
  



  // Booking  selvstudie III
  var bU1 = document.getElementById('bU1');
  var bU2 = document.getElementById('bU2');
  var bU3 = document.getElementById('bU3');
  var bU4 = document.getElementById('bU4');

function bU2n(){
    if (document.getElementById('navn_ind').value =="" || document.getElementById('navn_ind').value == null || document.getElementById('email_ind').value == null){ alert('Please fill in your name'); return false}
    
    else {
    bU1.style.display ="none";
    bU2.style.display ="block";
    return true;
    }
}

function bU3n(){
    bU2.style.display ="none";
    bU3.style.display ="block";
}
function bU4n(){
    bU3.style.display ="none";
    bU4.style.display ="block";
}

function bU5n(){
    bU4.style.display ="none";
    bU5.style.display ="block";
}


//Selvstudiedag III
    function copyToNavn(navn) {
        document.getElementById('navn_ud').textContent = 'Navn: ' + navn.value;
    }
    function copyToEmail(email){
        document.getElementById('email_ud').textContent = 'Email: ' + email.value;
    }

    function copyToPax(pax){
        document.getElementById('pax_ud').textContent = 'Antal personer: ' + pax.value;
        document.getElementById('price').innerHTML = "Prisen bliver: " + "<b>" + (pax.value * 14999) + ',- </b>';
        }
   

    function copyToBday(bday){
        document.getElementById('bday_ud').textContent = 'Fødselsdag: ' + bday.value;
    }
    
    function copyToVdato(Vdato){
        document.getElementById('dato_ud').textContent = 'Besøgsdag: ' + Vdato.value;
    }
  

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script_yt');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
 
    videoId: 'ee925OTFBCA',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}

/* Player kontrolleres af funktioner */
function onPlayerReady(event) {
  console.log("player is ready");
  event.target.pauseVideo();
}

function playItSam(event) {
  console.log("player is ready");
  event.target.playVideo(); // event from player
}

function onPlayerStateChange() {
  console.log("player state change");

  if (event.data == YT.PlayerState.PLAYING && !done) {
    //setTimeout(stopVideo, 6000);
    done = true;
  }
}

/* is element visible? if ok playVideo() */
var elementet = document.getElementById("synlig");

window.addEventListener("scroll", function() {

  if (elFllVsbl(elementet)) {
    console.log("play video");
    player.playVideo(); // with player you can manipulate the video
  } else {
    console.log("pause video")
    player.pauseVideo();
  }
}); // end eventlistener

function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}

/**
WHERE TO GO FROM HERE

* Control the video when the user clicks on an icon.
* Control via eventlisteners, such as mouse over, mouse out etc.

**/