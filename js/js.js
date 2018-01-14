(function() {
    
    const ostatni = document.querySelector("#ostatni");
    const obecny = document.querySelector("#obecny");
    const wodaC = document.querySelector("#wodaC");
    const wodaZ = document.querySelector("#wodaZ");
    const gaz = document.querySelector("#gaz");
    const prad = document.querySelector("#prad");
    const oplata = document.querySelector("#oplata");
    // const calosc = document.querySelector("#calosc");
    wodaC.addEventListener("click",
    function wc(e){
        let ost = parseFloat(ostatni.value);
        let obe = parseFloat(obecny.value);
        let wynik = (obe-ost)*32.5;
        oplata.value = wynik.toFixed(2);
        // calosc.value=+oplata.value;
        e.preventDefault();
    }, false);

    wodaZ.addEventListener("click",
    function wz(e){
        let ost = parseFloat(ostatni.value);
        let obe = parseFloat(obecny.value);
        let wynik = (obe-ost)*8.91;
        oplata.value = wynik.toFixed(2);
        // calosc.value=+oplata.value;
        e.preventDefault();
    }, false);

    gaz.addEventListener("click",
    function gaz(e){
        let ost = parseFloat(ostatni.value);
        let obe = parseFloat(obecny.value);
        let wynik = (obe-ost)*10.972*18.141/100+6.84;
        oplata.value = wynik.toFixed(2);
        // calosc.value=+oplata.value;
        e.preventDefault();
    }, false);

    prad.addEventListener("click",
    function gaz(e){
        let ost = parseFloat(ostatni.value);
        let obe = parseFloat(obecny.value);
        let wynik = (obe-ost)*0.58*(1+0.001*2.51)+10.7133;
        oplata.value = wynik.toFixed(2);
        // calosc.value=+oplata.value;
        e.preventDefault();
    }, false);


 })();