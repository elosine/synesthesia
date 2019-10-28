window.addEventListener('resize', winResize, false);

var sidenavdiv = document.getElementById("sidenav");
var myname = document.createElement('h6');
var nametxt = document.createTextNode("Justin Yang");
myname.appendChild(nametxt);
sidenavdiv.appendChild(myname);

var m1 = document.createElement('a');
var m1txt = document.createTextNode("A colony of black spots: Compositions for interactive sound and image");
m1.appendChild(m1txt);
// m1.title = "Works:cronoligical";
m1.href = "#works";
sidenavdiv.appendChild(m1);

var m2 = document.createElement('a');
var m2txt = document.createTextNode("Works A colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound andA colony of black spots: Compositions for interactive sound and");
m2.appendChild(m2txt);
// m1.title = "Works:cronoligical";
m2.href = "#works";
sidenavdiv.appendChild(m2);

//resize main body div
var mainbody = document.getElementById("main");
var head = document.getElementById("head1");
var headheight = head.offsetHeight;
headheight = headheight + 55;
mainbody.setAttribute( "style", "height:calc(100vh - " + headheight + "px)" );
// FUNCTION: winResize ---------------------------------------------- //
function winResize() {
  headheight = head.offsetHeight;
  headheight = headheight + 55;
  mainbody.setAttribute( "style", "height:calc(100vh - " + headheight + "px)" );
}
