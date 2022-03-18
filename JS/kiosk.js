//fetch JSON
let dishes = fetch("excel-to-json.json").then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  console.log(data);
  // tjek objektet i browserens udviklingsværktøj


}).catch(err => {
  // Error and description
  console.log('Error: ' + err)
})


 let dish = [{
    navn: "Egyptisk suppe",
    pic: "img/ret1.jpg",
    pris: 123,
    alt: "vores meget lækre egyptiske suppe langtidskogt",
    beskrivelse: `Suppen har simmeret i over 72 timer, velegnet til <em> vegetar </em>
      <br>  indeholde: 
      <ul><li> rødelinser </li> <li>løg</li> <li>hvidløg</li> <li>gulerødder</li> <li>pore</li> </ul>
    
    `,
    name: "Egypic suop",
    altE: "Out delious soup",
    disc: "soup been on the way for 72 hours. suited for vegetarian."
  },
  {
    navn: "Mac 'n cheese",
    pic: "img/ret2.jpg",
    pris: 129,
    alt: "Mac and cheese for enhver oste elsker",
    beskrivelse: "Til enhver osteelsker, vil du elske vores vegetarisk Mac 'n cheese, med 38 lag af ost",
    name: "Mac 'n cheese",
    altE: "Mac and Cheese for every cheese lovers",
    disc: "Til every cheesee lover - you'll love out mac 'n cheese with 38 layers of cheese"
  },
  {
    navn: "Laks med snask",
    pic: "img/ret3.jpg",
    pris: 111,
    alt: "En lakse rolade med andet fisk og grønt",
    beskrivelse: "Laks med andet snask",
    name: "Salmon with stuff",
    altE: "A salmon roll with stuff",
    disc: "Salmon with stuff"
  }
]

let amount = 0
sum.innerHTML = amount

/* display the menu */

for (let i = 0; i < dish.length; i++) {
  theMenu.innerHTML += `
  <div class="aDish">
    <h2>  ${dish[i].navn} </h2>
    
      <img src="${dish[i].pic}"  height = 200px width = 200px alt="${dish[i].alt}">
      <p> <i> ${dish[i].beskrivelse} </i> </p>
    <h4> <u> Price: ${dish[i].pris} kr. </u> </h4>
    <button onclick="anOrder(
      '${dish[i].navn}',
      '${dish[i].pris}'
      )"> Order ${dish[i].navn}</button>
  <div>
`}


function nytSprog1(){
  theMenu.innerHTML ="" 
  for (let i = 0; i < dish.length; i++) {
  themenu.innerHTML += `
  <div class="aDish">
    <h2>  ${dish[i].navn} </h2>
    
      <img src="${dish[i].pic}"  height = 200px width = 200px alt="${dish[i].alt}">
      <p> <i> ${dish[i].beskrivelse} </i> </p>
    <h4> <u> Price: ${dish[i].pris} kr. </u> </h4>
    <button onclick="anOrder(
      '${dish[i].navn}',
      '${dish[i].pris}'
      )"> Order ${dish[i].navn}</button>
  <div>
`

    } }   
    function nytSprog2(){
      theMenu.innerHTML =""
      for (let i = 0; i < dish.length; i++) {
        theMenu.innerHTML += `
        <div class="aDish">
          <h2>  ${dish[i].name} </h2>
          
            <img src="${dish[i].pic}"  height = 200px width = 200px alt="${dish[i].altE}">
            <p> <i> ${dish[i].disc} </i> </p>
          <h4> <u> Price: ${dish[i].pris} kr. </u> </h4>
          <button onclick="anOrder(
            '${dish[i].name}',
            '${dish[i].pris}'
            )"> Order ${dish[i].name}</button>
        <div>
      `

          }    }  

  


// add order til orderlist
function anOrder(order, price, i) {
  // create list
  ordersList.innerHTML += '<li class="orderItem">' + order
  +  ' price: ' + price + ' kr.'+
  ' <button onclick="this.parentNode.remove();amount-='+ parseInt(price) +';sum.innerHTML=amount">Remove</button> </li>'
  // update amount
  amount += parseInt( price ) // string to number
  sum.innerHTML = amount + ' kr.';
  sum.innerHTML += `
    <form action="thanx.html">
    <button> Bestil med det samme </button>
    </form>
  `

  // sessionStorage - save data in the session
  sessionStorage.setItem("yourOrders", orders.innerHTML)
  console.log(sessionStorage.getItem("yourOrders"))
}

// save orders session