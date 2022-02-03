/*
  showMenu.addEventListener('click', function() {
    displayNone.style.display = 'block';
    bNav.style.left = '37'+'px'; // Selvstudie II.iiiiii
    showMenu.style.display = 'none';
    bNav.innerHTML = `    
    <ul class="menu">
    <li>
      Menu No. 1
      <ul class="submenu">
        <li id="sub1"><a href=index.html>Forside</a> </li>
        <li id="sub2"><a href="#hvem">Ansatte</a></li> <!-- Selvstudie II.iiiii -->
        <li id="sub3"><a href="Booking.html">Booking</a></li>
      </ul>
    </li>
    </ul>

    </ul>
    `;
  })
  /*
  displayNone.addEventListener('click', function() {
    displayNone.style.display = 'none';
    showMenu.style.display = 'block';
    bNav.style.left = '-410'+'px';// Selvstudie II.iiiiii
  }) */
  let input = document.getElementById('burgerCheck');
  menuToggle.addEventListener('click', function(){
    if(input.checked){ 
        bNav.style.opacity = '1'; // Selvstudie II.iiiiii
        bNav.style.top = '45'+'px'
        bNav.innerHTML = `    
        <ul class="menu">
        <li>
        Menu No. 1
        <ul class="submenu">
            <li id="sub1"><a href=index.html>Forside</a> </li>
            <li id="sub2"><a href="#hvem">Ansatte</a></li> <!-- Selvstudie II.iiiii -->
            <li id="sub3"><a href="Booking.html">Booking</a></li>
        </ul>
        </li>
        </ul>

        </ul>
    `;

    }
    else{
        bNav.style.top = '5'+'px';// Selvstudie II.iiiiii
				bNav.style.opacity = '0';
        
    }

  })