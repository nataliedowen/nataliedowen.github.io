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
}

  function showhide() {
    var d = new Date();
    var s = document.getElementById(+d.getDay());
    s.style.display = (s.style.display == 'block') ? 'none' : 'block';
  }