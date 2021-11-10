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
let auguDB = await fetch('https://savieno.codeprxey.repl.co/api/augi')
let auguJson = await auguDB.json();
let ierakstuSkaits=auguJson.dati.length;
//alert(ierakstuSkaits)    

    
for(let i=0;i<ierakstuSkaits;i++){
       augTips=auguJson.dati[i]['augatips'];
       if(augTips=="darzenis")
               {
            darzSkaits++;
        }
        if(augTips=="graudaugs")
            {
            graudSkaits++;
        } 

    }
alert(darzSkaits) 
//let tabRindas = document.getElementById('daudzums');
//let rskaits = document.getElementById('daudzums').rows.length;
//let texts = kabinetuSkaits.toString();
if (document.querySelector('#izv').value == 1) {
    document.querySelector('#ask').value = graudSkaits;
}
if (document.querySelector('#izv').value == 2){
    document.querySelector('#ask').value = darzSkaits;   
}

/*if (document.querySelector('#1izv').value == "graudaugi") {
    document.querySelector('#2izv').value = graudSkaits;
}
if (document.querySelector('#1izv').value == "darzeni") {
    document.querySelector('#2izv').value = graudSkaits;
}


let kg = auguJson.dati[i]['daudzums'];
let choice;
let rinda = document.querySelector('.rinda');
choice = document.querySelector('#1izv').value;

switch (true){
    case choice == "graudaugs":
            rinda.innerHTML += `
            <tr>
            <td>${kg}</td>
            </tr>`;
        break;
*/
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
