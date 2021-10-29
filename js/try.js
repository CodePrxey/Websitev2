
async function change_myselect(sel) {
let roomDB = await fetch('https://savieno.codeprxey.repl.co/api/augi')  
const dbParam = roomDB.stringify({table:sel,limit:20});
//const xmlhttp = new XMLHttpRequest();
let myObj
let text
let x

roomDB.onload = function() {
  myObj = roomDB.parse(this.responseText);
  text = "<table border='1'>"
  for (x in myObj) {
    text += "<tr><td>" + myObj[x].name + "</td></tr>";
  }
  text += "</table>"    
  document.getElementById("demo").innerHTML = text;
}
