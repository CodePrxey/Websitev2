function teksts1() {
    var x = document.getElementById("tehnika").value;

    switch (x){
        case 'Traktori':
            document.querySelector("#Traktori").className = "radit";
            document.querySelector("#Kravasauto").className = "neradit";
            document.querySelector("#Piekabes").className = "neradit";
            document.querySelector("#Celeji").className = "neradit";
        break;
        case 'Kravasauto':
            document.querySelector("#Traktori").className = "neradit";
            document.querySelector("#Kravasauto").className = "radit";
            document.querySelector("#Piekabes").className = "neradit";
            document.querySelector("#Celeji").className = "neradit";
        break;
        case 'Piekabes':
            document.querySelector("#Traktori").className = "neradit";
            document.querySelector("#Kravasauto").className = "neradit";
            document.querySelector("#Piekabes").className = "radit";
            document.querySelector("#Celeji").className = "neradit";
        break;
        case 'Celeji':
            document.querySelector("#Traktori").className = "neradit";
            document.querySelector("#Kravasauto").className = "neradit";
            document.querySelector("#Piekabes").className = "neradit";
            document.querySelector("#Celeji").className = "radit";
        break;
    }
}
