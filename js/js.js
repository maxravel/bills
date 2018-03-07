(function() {
    
    const ostatni = document.querySelector("#ostatni"),
          obecny = document.querySelector("#obecny"),
          wodaC = document.querySelector("#wodaC"),
          wodaZ = document.querySelector("#wodaZ"),
          gaz = document.querySelector("#gaz"),
          prad = document.querySelector("#prad"),
          oplata = document.querySelector("#oplata"),
          calosc = document.querySelector("#calosc"),
          dodaj = document.querySelector("#dodaj");
    

    wodaC.addEventListener("click",
    function wc(e){
        let ost = parseFloat(ostatni.value);
        let obe = parseFloat(obecny.value);
        let wynik = (obe-ost)*32.5;
        oplata.value = wynik.toFixed(2);
        document.getElementById("rachunki").innerHTML = "Woda ciepła:  " + "("+obe+"-"+ost+")*"+32.5+"="+wynik.toFixed(2); 
        e.preventDefault();
    }, false);

    wodaZ.addEventListener("click",
    function wz(e){
        let ost = parseFloat(ostatni.value);
        let obe = parseFloat(obecny.value);
        let wynik = (obe-ost)*8.91;
        oplata.value = wynik.toFixed(2);
        document.getElementById("rachunki").innerHTML = "Woda zimna:  " + "("+obe+"-"+ost+")*"+8.91+"="+wynik.toFixed(2);
        e.preventDefault();
    }, false);

    gaz.addEventListener("click",
    function gaz(e){
        let ost = parseFloat(ostatni.value);
        let obe = parseFloat(obecny.value);
        let wynik = (obe-ost)*10.972*18.141/100+6.84;
        oplata.value = wynik.toFixed(2);
        document.getElementById("rachunki").innerHTML = "Gaz:  " + "("+obe+"-"+ost+")*"+10.972+"*"+18.141+"/"+100+"+"+6.84+"="+wynik.toFixed(2);
        e.preventDefault();
    }, false);

    prad.addEventListener("click",
    function pr(e){
        let ost = parseFloat(ostatni.value);
        let obe = parseFloat(obecny.value);
        let wynik = (obe-ost)*(0.58+0.001*2.51)+10.7133;
        oplata.value = wynik.toFixed(2);
        document.getElementById("rachunki").innerHTML = "Prąd:  " + "("+obe+"-"+ost+")*"+"(0.58+"+0.001+"*"+2.51+")"+"+"+10.7133+"="+wynik.toFixed(2);
        e.preventDefault();
    }, false);

    dodaj.addEventListener("click",
    function total(e){
        let c= Number(calosc.value);
        let o= Number(oplata.value);
        c+=o;
        calosc.value=c.toFixed(2);
        e.preventDefault();
    }, false);

 })();