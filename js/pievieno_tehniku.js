//javascript funkcija, kas pievieno datus json failam, ja html lapā nospiež pogu sablabāt

async function pievieno_tehniku() {

let liet_izv;
let nosaukums, daudzums, maksa, skaits = 0; 
let augTips, graudSkaits = 0, darzSkaits = 0;
let auguDB = await fetch('https://savieno.codeprxey.repl.co/api/augi')
let auguJson = await auguDB.json();
let ierakstuSkaits=auguJson.dati.length;
       
let tabRindas=document.getElementById('trindas');
let rskaits = document.getElementById('trindas').rows.length;       
let tr = tabRindas.getElementsByTagName("tr");
for (let r = 0; r < rskaits; r++) {
        tr[r].style.display = "none";
    }
       
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
liet_izv = document.querySelector('#izv').value;
if (liet_izv == "graudaugs") {
    document.querySelector('#ask').value = graudSkaits;
}
if (liet_izv == "darzenis"){
    document.querySelector('#ask').value = darzSkaits;   
}
       
let rinda = document.querySelector('.rinda');
for(i=0;i<ierakstuSkaits;i++){
    augTips = auguJson.dati[i]['augatips'];
    nosaukums = auguJson.dati[i]['nosaukums'];
    daudzums = auguJson.dati[i]['daudzums'];
    maksa = auguJson.dati[i]['maksa'];
    if (augTips == liet_izv) {
        skaits++;
        rinda.innerHTML += `
            <tr>
            <td>${nosaukums}</td>
            <td>${daudzums}</td>
            <td>${maksa}</td>
            </tr>`;
}
}
}
