//javascript funkcija, kas pievieno datus json failam, ja html lapā nospiež pogu sablabāt

async function pievieno_tehniku()
{
/*let requestBodyJson; 
//izveido json datu struktūru no html lapas input elementu vērtībām
    requestBodyJson = { 
      // "skaits": parseInt(document.querySelector('#skaits').value),            
      "augatips": document.querySelector('#inos1').value, 
      "daudzums": document.querySelector('#inos2').value,
      "maksa": document.querySelector('#inos3').value,                
      }                          
            
let requestBodyString = JSON.stringify(requestBodyJson);*/
    
let augTips, graudSkaits = 0, darzSkaits = 0;
let roomDB = await fetch('https://savieno.codeprxey.repl.co/api/augi')
let roomJson = await roomDB.json();
let ierakstuSkaits=roomJson.dati.length;
//alert(ierakstuSkaits)    

    
for(let i=0;i<ierakstuSkaits;i++){
       augTips=roomJson.dati[i]['augatips'];
       if(augTips=="darzenis")
               {
            darzSkaits++;
        }
        if(augTips=="graudaugs")
            {
            graudSkaits++;
        } 

    }

//let tabRindas = document.getElementById('daudzums');
//let rskaits = document.getElementById('daudzums').rows.length;
//let texts = kabinetuSkaits.toString();
if (document.querySelector('#izv').value == 1) {
    document.querySelector('#ask').value = graudSkaits * 5;
}
if (document.querySelector('#izv').value == 2){
    document.querySelector('#ask').value = darzSkaits * 2;   
}

const dbParam = roomJSON.stringify({table:sel,limit:20});
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  myObj = JSON.parse(this.responseText);
  text = "<table border='1'>"
  for (x in myObj) {
    text += "<tr><td>" + myObj[x].name + "</td></tr>";
  }
  text += "</table>"    
  document.getElementById("demo").innerHTML = text;
}
xmlhttp.open("POST", "json_demo_html_table.php", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);


//alert(kabinetuSkaits)

/*let request = await fetch('https://con.codeprxey.repl.co/api/augi',
         		{
            method:"POST",
  		headers:
  		{            
            'Content-Type': 'application/json'
            },
            body:requestBodyString
        		}).then(response => response.json())
            .then(data => {
                if(data.status == 0) {
                    alert("Kļūda")
                }
                if(data.status == 1) {
                    alert("ieraksts pievienots")
                }
            })
location.reload();*/

}
