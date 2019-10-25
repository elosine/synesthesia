var sidenavdiv = document.getElementById("sidenav");
var myname = document.createElement('h6');
var nametxt = document.createTextNode("Justin Yang");
myname.appendChild(nametxt);
sidenavdiv.appendChild(myname);

var m1 = document.createElement('a');
var m1txt = document.createTextNode("Works: chronological");
m1.appendChild(m1txt);
// m1.title = "Works:cronoligical";
m1.href = "#works";
sidenavdiv.appendChild(m1);
