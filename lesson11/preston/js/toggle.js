var today = new Date(); 
var localeDate = new Intl.DateTimeFormat("en-GB", {
   weekday: "long",
   year: "numeric",
   month: "long",
   day: "numeric"
});

document.getElementById('timestamp').innerHTML = localeDate.format(today);


function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
};


var x = document.getElementById("announcment");
var day = weekday[now.getDay()];
  if (day == weekday[5]) {
    x.style.display = "block";
      } 
  else {
    x.style.display = "none";
      }
