(function() {

    const ostatni = document.querySelector("#ostatni"),
          obecny = document.querySelector("#obecny"),
          wodaCK = document.querySelector("#wodaCK"),
          wodaZK = document.querySelector("#wodaZK"),
          wodaCL = document.querySelector("#wodaCL"),
          wodaZL = document.querySelector("#wodaZL"),
          gaz = document.querySelector("#gaz"),
          prad = document.querySelector("#prad"),
          oplata = document.querySelector("#oplata"),
          calosc = document.querySelector("#calosc"),
          dodaj = document.querySelector("#dodaj");
    
    wodaCK.addEventListener("click",
    function wc(e){
        let ost = parseFloat(ostatni.value);
        let obe = parseFloat(obecny.value);
        let wynik = (obe-ost)*32.5;
        oplata.value = wynik.toFixed(2);
        document.getElementById("rachunkiwck").innerHTML = "Woda ciepła kuchnia:  " + "("+obe+"-"+ost+")*"+32.5+"="+wynik.toFixed(2); 
        e.preventDefault();
    }, false);

    wodaZK.addEventListener("click",
    function wz(e){
        let ost = parseFloat(ostatni.value);
        let obe = parseFloat(obecny.value);
        let wynik = (obe-ost)*8.91;
        oplata.value = wynik.toFixed(2);
        document.getElementById("rachunkiwzk").innerHTML = "Woda zimna kuchnia:  " + "("+obe+"-"+ost+")*"+8.91+"="+wynik.toFixed(2);
        e.preventDefault();
    }, false);

    wodaCL.addEventListener("click",
    function wc(e){
        let ost = parseFloat(ostatni.value);
        let obe = parseFloat(obecny.value);
        let wynik = (obe-ost)*32.5;
        oplata.value = wynik.toFixed(2);
        document.getElementById("rachunkiwcl").innerHTML = "Woda ciepła łazienka:  " + "("+obe+"-"+ost+")*"+32.5+"="+wynik.toFixed(2); 
        e.preventDefault();
    }, false);

    wodaZL.addEventListener("click",
    function wz(e){
        let ost = parseFloat(ostatni.value);
        let obe = parseFloat(obecny.value);
        let wynik = (obe-ost)*8.91;
        oplata.value = wynik.toFixed(2);
        document.getElementById("rachunkiwzl").innerHTML = "Woda zimna łazienka:  " + "("+obe+"-"+ost+")*"+8.91+"="+wynik.toFixed(2);
        e.preventDefault();
    }, false);

    gaz.addEventListener("click",
    function gaz(e){
        let ost = parseFloat(ostatni.value);
        let obe = parseFloat(obecny.value);
        let wynik = (obe-ost)*10.972*18.141/100+6.84;
        oplata.value = wynik.toFixed(2);
        document.getElementById("rachunkigaz").innerHTML = "Gaz:  " + "("+obe+"-"+ost+")*"+10.972+"*"+18.141+"/"+100+"+"+6.84+"="+wynik.toFixed(2);
        e.preventDefault();
    }, false);

    prad.addEventListener("click",
    function pr(e){
        let ost = parseFloat(ostatni.value);
        let obe = parseFloat(obecny.value);
        let wynik = (obe-ost)*(0.58+0.001*2.51)+10.7133;
        oplata.value = wynik.toFixed(2);
        document.getElementById("rachunkiprad").innerHTML = "Prąd:  " + "("+obe+"-"+ost+")*"+"(0.58+"+0.001+"*"+2.51+")"+"+"+10.7133+"="+wynik.toFixed(2);
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