//javascript funkcija, kas pievieno datus json failam, ja html lapā nospiež pogu sablabāt

async function pievieno_tehniku() {

let nosaukums, daudzums, maksa;    
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
if (document.querySelector('#izv').value == 1) {
    document.querySelector('#ask').value = graudSkaits;
}
if (document.querySelector('#izv').value == 2){
    document.querySelector('#ask').value = darzSkaits;   
}
}
