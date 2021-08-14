function teksts() {
    var x = document.getElementById("stadi").value;

    switch (x){
        case 'Kviesi':
            document.querySelector("#Kviesi").className = "radit";
            document.querySelector("#Kartupeli").className = "neradit";
            document.querySelector("#Burkani").className = "neradit";
            document.querySelector("#Bietes").className = "neradit";
        break;
        case 'Kartupeli':
            document.querySelector("#Kviesi").className = "neradit";
            document.querySelector("#Kartupeli").className = "radit";
            document.querySelector("#Burkani").className = "neradit";
            document.querySelector("#Bietes").className = "neradit";
        break;
        case 'Burkani':
            document.querySelector("#Kviesi").className = "neradit";
            document.querySelector("#Kartupeli").className = "neradit";
            document.querySelector("#Burkani").className = "radit";
            document.querySelector("#Bietes").className = "neradit";
        break;
        case 'Bietes':
            document.querySelector("#Kviesi").className = "neradit";
            document.querySelector("#Kartupeli").className = "neradit";
            document.querySelector("#Burkani").className = "neradit";
            document.querySelector("#Bietes").className = "radit";
        break;
    }
}
