function teksts2() {
    var x = document.getElementById("koki").value;

    switch (x){
        case 'Ozoli':
            document.querySelector("#Ozoli").className = "radit";
            document.querySelector("#Berzi").className = "neradit";
            document.querySelector("#Apses").className = "neradit";
            document.querySelector("#Egles").className = "neradit";
        break;
        case 'Berzi':
            document.querySelector("#Ozoli").className = "neradit";
            document.querySelector("#Berzi").className = "radit";
            document.querySelector("#Apses").className = "neradit";
            document.querySelector("#Egles").className = "neradit";
        break;
        case 'Apses':
            document.querySelector("#Ozoli").className = "neradit";
            document.querySelector("#Berzi").className = "neradit";
            document.querySelector("#Apses").className = "radit";
            document.querySelector("#Egles").className = "neradit";
        break;
        case 'Egles':
            document.querySelector("#Ozoli").className = "neradit";
            document.querySelector("#Berzi").className = "neradit";
            document.querySelector("#Apses").className = "neradit";
            document.querySelector("#Egles").className = "radit";
        break;
    }
}
