//this script is scripted totally by Abdelrahman Mohamed
let Anemo = 0;
let cryo = 0;
let pyro = 0
let hydro = 0; 
let geo = 0;
let dendro = 0;
let electro = 0;
console.log(cryo);
function Ti1(){
    cryo+=2;
   console.log(cryo);
    document.getElementById('quiz-container2').style.display = "flex";
    document.getElementById('quiz-container1').style.display= "none";
}
function Te1(){
  geo+=1
 console.log(geo);
  electro+=1
    document.getElementById('quiz-container2').style.display = "flex";
    document.getElementById('quiz-container1').style.display= "none";
}
function Fi2(){
   dendro+=2;
   Anemo+=1;
   pyro+=1;
    document.getElementById('quiz-container3').style.display = "flex";
    document.getElementById('quiz-container2').style.display= "none";
}
function Fe2(){
   hydro+=1;
    document.getElementById('quiz-container3').style.display = "flex";
    document.getElementById('quiz-container2').style.display= "none";
}
function Ni3(){
   hydro+=2;
    electro+=2;
    document.getElementById('quiz-container4').style.display = "flex";
    document.getElementById('quiz-container3').style.display= "none";
}
function Ne3(){
   Anemo+=2;
  dendro+=1;
    document.getElementById('quiz-container4').style.display = "flex";
    document.getElementById('quiz-container3').style.display= "none";
}
function Ni4(){
    hydro+=2;
    electro+=2;
    document.getElementById('quiz-container5').style.display = "flex";
    document.getElementById('quiz-container4').style.display= "none";
}
function Ne4(){
   Anemo+=2;
   dendro+=1;
    document.getElementById('quiz-container5').style.display = "flex";
    document.getElementById('quiz-container4').style.display= "none";
}
function Ne5(){
    Anemo+=2;
    dendro+=1;
     document.getElementById('quiz-container6').style.display = "flex";
     document.getElementById('quiz-container5').style.display= "none";
 }
 function Ni5(){
    hydro+=2;
    electro+=2;
    document.getElementById('quiz-container6').style.display = "flex";
    document.getElementById('quiz-container5').style.display= "none";
}
function Si6(){
    geo+=2;
    document.getElementById('quiz-container7').style.display = "flex";
    document.getElementById('quiz-container6').style.display= "none";
}
function Se6(){
    pyro+=2;
    cryo+=1
    document.getElementById('quiz-container7').style.display = "flex";
    document.getElementById('quiz-container6').style.display= "none";
}
function Si7(){
    geo+=2;
    document.getElementById('quiz-container8').style.display = "flex";
    document.getElementById('quiz-container7').style.display= "none";
}
function Se7(){
    pyro+=2;
    cryo+=1
    document.getElementById('quiz-container8').style.display = "flex";
    document.getElementById('quiz-container7').style.display= "none";
}
function Si8(){
    geo+=2;
    document.getElementById('quiz-container9').style.display = "flex";
    document.getElementById('quiz-container8').style.display= "none";
}
function Se8(){
    pyro+=2;
    cryo+=1
    document.getElementById('quiz-container9').style.display = "flex";
    document.getElementById('quiz-container8').style.display= "none";
}
function Fi9(){
    dendro+=2
    Anemo+=1
    document.getElementById('quiz-container10').style.display = "flex";
    document.getElementById('quiz-container9').style.display= "none";
}
function Fe9(){
    hydro+=1;
    document.getElementById('quiz-container10').style.display = "flex";
    document.getElementById('quiz-container9').style.display= "none";
}
function Fi10(){
    dendro+=2
    Anemo+=1
    document.getElementById('quiz-container11').style.display = "flex";
    document.getElementById('quiz-container10').style.display= "none";
}
function Fe10(){
    hydro+=1;
    document.getElementById('quiz-container11').style.display = "flex";
    document.getElementById('quiz-container10').style.display= "none";
}
function Ti11(){
    cryo+=2;
    document.getElementById('quiz-container12').style.display = "flex";
    document.getElementById('quiz-container11').style.display= "none";
}
function Te11(){
  geo+=1
  electro+=1
    document.getElementById('quiz-container12').style.display = "flex";
    document.getElementById('quiz-container11').style.display= "none";
}
function Ti12(){
    cryo+=2;
    document.getElementById('result').style.display = "flex";
    document.getElementById('quiz-container12').style.display= "none";
    const visions = Math.max(cryo,geo,hydro,electro,Anemo,pyro,dendro);
    function postresult(v) {
        document.getElementById('visionR').innerHTML='your vision is '+ v;
    }
    if (visions==cryo) {
       postresult('cryo')
    }
    if (visions==geo) {
        postresult('geo')
     }
     if (visions==electro) {
        postresult('electro')
     }
     if (visions==dendro) {
        postresult('dendro')
     }
     if (visions==hydro) {
        postresult('hydro')
     }
     if (visions==pyro) {
        postresult('pyro')
     }
     if (visions==Anemo) {
        postresult('Anemo')
     }
     
}
function Te12(){
  geo+=1
  electro+=1
    document.getElementById('result').style.display = "flex";
    document.getElementById('quiz-container12').style.display= "none";
    const visions = Math.max(cryo,geo,hydro,electro,Anemo,pyro,dendro);
    function postresult(v) {
        document.getElementById('visionR').innerHTML='your vision is   '+v;
    }
    if (visions==cryo) {
       postresult('cryo')
    }
    if (visions==geo) {
        postresult('geo')
     }
     if (visions==electro) {
        postresult('electro')
     }
     if (visions==dendro) {
        postresult('dendro')
     }
     if (visions==hydro) {
        postresult('hydro')
     }
     if (visions==pyro) {
        postresult('pyro')
     }
     if (visions==Anemo) {
        postresult('Anemo')
     }
     
   
}
