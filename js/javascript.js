
// ########################## Countdown on front page ###########################

// Set the date we're counting down to
var countDownDate = new Date("May 23, 2023 09:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// ########################## NavBar ###########################

// ---------- Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}
  
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// ############### Script to open and close Modal Images ##########
// Modal Setup
var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});

// global handler
document.addEventListener('click', function (e) { 
  if (e.target.className.indexOf('modal-target') !== -1) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
   }
});

// ############## Script to open abstracts ############
function alex_abstract_open() {
  document.getElementById("alex_abstract").style.display = "block";
  }
function alex_abstract_close() {
  document.getElementById("alex_abstract").style.display = "none";
  }

function stefan_abstract_open() {
    document.getElementById("stefan_abstract").style.display = "block";
    }
function stefan_abstract_close() {
    document.getElementById("stefan_abstract").style.display = "none";
    }

function garry_abstract_open() {
  document.getElementById("garry_abstract").style.display = "block";
  }
function garry_abstract_close() {
  document.getElementById("garry_abstract").style.display = "none";
  }
  
function mariel_abstract_open() {
  document.getElementById("mariel_abstract").style.display = "block";
  }
function mariel_abstract_close() {
  document.getElementById("mariel_abstract").style.display = "none";
  }
  
function bethan_abstract_open() {
  document.getElementById("bethan_abstract").style.display = "block";
  }
function bethan_abstract_close() {
  document.getElementById("bethan_abstract").style.display = "none";
  }

function paul_abstract_open() {
  document.getElementById("paul_abstract").style.display = "block";
  }
function paul_abstract_close() {
  document.getElementById("paul_abstract").style.display = "none";
  }

function geoffrey_abstract_open() {
  document.getElementById("geoffrey_abstract").style.display = "block";
  }
function geoffrey_abstract_close() {
  document.getElementById("geoffrey_abstract").style.display = "none";
  }

function james_abstract_open() {
  document.getElementById("james_abstract").style.display = "block";
  }
function james_abstract_close() {
  document.getElementById("james_abstract").style.display = "none";
  }

function benson_abstract_open() {
  document.getElementById("benson_abstract").style.display = "block";
  }
function benson_abstract_close() {
  document.getElementById("benson_abstract").style.display = "none";
  }

function edward_abstract_open() {
  document.getElementById("edward_abstract").style.display = "block";
  }
function edward_abstract_close() {
  document.getElementById("edward_abstract").style.display = "none";
  }

function wei_abstract_open() {
  document.getElementById("wei_abstract").style.display = "block";
  }
function wei_abstract_close() {
  document.getElementById("wei_abstract").style.display = "none";
  }

function josephine_abstract_open() {
  document.getElementById("josephine_abstract").style.display = "block";
  }
function josephine_abstract_close() {
  document.getElementById("josephine_abstract").style.display = "none";
  }

function ali_abstract_open() {
  document.getElementById("ali_abstract").style.display = "block";
  }
function ali_abstract_close() {
  document.getElementById("ali_abstract").style.display = "none";
  }

function hanu_abstract_open() {
  document.getElementById("hanu_abstract").style.display = "block";
  }
function hanu_abstract_close() {
  document.getElementById("hanu_abstract").style.display = "none";
  }

function nan_abstract_open() {
  document.getElementById("nan_abstract").style.display = "block";
  }
function nan_abstract_close() {
  document.getElementById("nan_abstract").style.display = "none";
  }

function momoko_abstract_open() {
  document.getElementById("momoko_abstract").style.display = "block";
  }
function momoko_abstract_close() {
  document.getElementById("momoko_abstract").style.display = "none";
  }

function cassandra_abstract_open() {
  document.getElementById("cassandra_abstract").style.display = "block";
  }
function cassandra_abstract_close() {
  document.getElementById("cassandra_abstract").style.display = "none";
  }

function luning_abstract_open() {
  document.getElementById("luning_abstract").style.display = "block";
  }
function luning_abstract_close() {
  document.getElementById("luning_abstract").style.display = "none";
  }

function lishu_abstract_open() {
  document.getElementById("lishu_abstract").style.display = "block";
  }
function lishu_abstract_close() {
  document.getElementById("lishu_abstract").style.display = "none";
  }

function christos_abstract_open() {
  document.getElementById("christos_abstract").style.display = "block";
  }
function christos_abstract_close() {
  document.getElementById("christos_abstract").style.display = "none";
  }

function killian_abstract_open() {
  document.getElementById("killian_abstract").style.display = "block";
  }
function killian_abstract_close() {
  document.getElementById("killian_abstract").style.display = "none";
  }

function chen_abstract_open() {
  document.getElementById("chen_abstract").style.display = "block";
  }
function chen_abstract_close() {
  document.getElementById("chen_abstract").style.display = "none";
  }