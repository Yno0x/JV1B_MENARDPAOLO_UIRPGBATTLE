//boutton
var bouttonattk = document.getElementById("Attaque");
var bouttonspe =document.getElementById("SpecialAttack");
var bouttondef =document.getElementById("Defense");
//bouton

//hp
var shadowhp = document.getElementById("en1hp");
var ornhp = document.getElementById("en2hp");
var pontifhp = document.getElementById("en3hp");
var swamphp = document.getElementById("en4hp");

var rorihp = document.getElementById("al1hp");
var sarahhp = document.getElementById("al2hp");
var patochehp = document.getElementById("al3hp");
var nickyhp = document.getElementById("al4hp");
//hp

//img monstre
var shadow=document.getElementById("shadow");
var orn=document.getElementById("orn")
var pontif=document.getElementById("pontif");
var swamp=document.getElementById("swamp");
//img monstre

//autre
var mana=document.getElementById("mana")
var tour = 0;
var att=false;
var spe=false
var def=false
var mana1=200
var mana2=200
var mana3=200
var mana4=200
//autre

function enattk(){
    if (tour == 3){
        for (i = 0; i < 3; i++) { 
            var cible_attaque = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            if(cible_attaque==1){
                al1hp.innerHTML = al1hp.innerHTML -10;
            }
            if(cible_attaque==2){
                al2hp.innerHTML = al2hp.innerHTML -20;
            }
            if(cible_attaque==3){
                al3hp.innerHTML = al3hp.innerHTML -10;
            }
            if(cible_attaque==4){
                al4hp.innerHTML = al4hp.innerHTML -30;
            }
        }
        tour=0;
    }
}

while (shadow>0 && ornhp>0 && pontifhp>0 && swamphp>0 || rorihp>0 && sarahhp>0 && patochehp>0 && nickyhp>0){
    if (tour=0){
        bouttonattk.onclick = function(){
            if(att==false){
                att=true
            
            }
        }

        bouttonspe.onclick = function(){
            if(spe==false){
                spe=true
            
            }
        }

        bouttondef.onclick = function(){
            rorihp.innerHTML = rorihp.innerHTML +10;
            tour=tour+1;
            enattk();
        }

        swamp.onclick = function(){
            if(att==true){
                swamphp.innerHTML = swamphp.innerHTML -30;
                att=false
                tour=tour+1;
                enattk();
            }
        }
        swamp.onclick = function(){
            if(spe==true){
                ornhp.innerHTML = ornhp.innerHTML -60;
                spe=false
                tour=tour+1;
                enattk();
            }
        }
        pontif.onclick = function(){
            if(att==true){
                pontifhp.innerHTML = pontifhp.innerHTML -30;
                att=false
                tour=tour+1;
                enattk();
            }
        }
        pontif.onclick = function(){
            if(spe==true){
                ornhp.innerHTML = ornhp.innerHTML -60;
                spe=false
                tour=tour+1;
                enattk();
            }
        }
        shadow.onclick = function(){
            if(att==true){
                shadowhp.innerHTML = shadowhp.innerHTML -30;
                att=false
                tour=tour+1;
                enattk();
            }
        }
        shadow.onclick = function(){
            if(spe==true){
                ornhp.innerHTML = ornhp.innerHTML -60;
                spe=false
                tour=tour+1;
                enattk();
            }
        }
        orn.onclick = function(){
            if(att==true){
                ornhp.innerHTML = ornhp.innerHTML -30;
                att=false
                tour=tour+1;
                enattk();
            }
        }
        orn.onclick = function(){
            if(spe==true){
                ornhp.innerHTML = ornhp.innerHTML -60;
                spe=false
                tour=tour+1;
                enattk();
            }
        }
    }

    if (tour=1){
        bouttonattk.onclick = function(){
            if(att==false){
                att=true
            
            }
        }

        bouttonspe.onclick = function(){
            if(spe==false){
                spe=true
            
            }
        }

        bouttondef.onclick = function(){
            patochehp.innerHTML = patochehp.innerHTML +10;
            tour=tour+1;
            enattk();
        }

        swamp.onclick = function(){
            if(att==true){
                swamphp.innerHTML = swamphp.innerHTML -20;
                att=false
                tour=tour+1;
                enattk();
            }
        }
        swamp.onclick = function(){
            if(spe==true){
                ornhp.innerHTML = ornhp.innerHTML -50;
                spe=false
                tour=tour+1;
                enattk();
            }
        }

        pontif.onclick = function(){
            if(att==true){
                pontifhp.innerHTML = pontifhp.innerHTML -20;
                att=false
                tour=tour+1;
                enattk();
            }
        }
        pontif.onclick = function(){
            if(spe==true){
                ornhp.innerHTML = ornhp.innerHTML -50;
                spe=false
                tour=tour+1;
                enattk();
            }
        }

        shadow.onclick = function(){
            if(att==true){
                shadowhp.innerHTML = shadowhp.innerHTML -20;
                att=false
                tour=tour+1;
                enattk();
            }
        }
        shadow.onclick = function(){
            if(spe==true){
                ornhp.innerHTML = ornhp.innerHTML -50;
                spe=false
                tour=tour+1;
                enattk();
            }
        }

        orn.onclick = function(){
            if(att==true){
                ornhp.innerHTML = ornhp.innerHTML -20;
                att=false
                tour=tour+1;
                enattk();
            }
        }
        orn.onclick = function(){
            if(spe==true){
                ornhp.innerHTML = ornhp.innerHTML -50;
                spe=false
                tour=tour+1;
                enattk();
            }
        }
    }

    if (tour=2){
        bouttonattk.onclick = function(){
            if(att==false){
                att=true
            
            }
        }

        bouttonspe.onclick = function(){
            if(spe==false){
                spe=true
            
            }
        }

        bouttondef.onclick = function(){
            sarahhp.innerHTML = sarahhp.innerHTML +10;
            tour=tour+1;
            enattk();
        }

        swamp.onclick = function(){
            if(att==true){
                swamphp.innerHTML = swamphp.innerHTML -30;
                att=false
                tour=tour+1;
                enattk();
            }
        }
        swamp.onclick = function(){
            if(spe==true){
                ornhp.innerHTML = ornhp.innerHTML -60;
                spe=false
                tour=tour+1;
                enattk();
            }
        }

        pontif.onclick = function(){
            if(att==true){
                pontifhp.innerHTML = pontifhp.innerHTML -30;
                att=false
                tour=tour+1;
                enattk();
            }
        }
        pontif.onclick = function(){
            if(spe==true){
                ornhp.innerHTML = ornhp.innerHTML -60;
                spe=false
                tour=tour+1;
                enattk();
            }
        }

        shadow.onclick = function(){
            if(att==true){
                shadowhp.innerHTML = shadowhp.innerHTML -30;
                att=false
                tour=tour+1;
                enattk();
            }
        }
        shadow.onclick = function(){
            if(spe==true){
                ornhp.innerHTML = ornhp.innerHTML -60;
                spe=false
                tour=tour+1;
                enattk();
            }
        }

        orn.onclick = function(){
            if(att==true){
                ornhp.innerHTML = ornhp.innerHTML -30;
                att=false
                tour=tour+1;
                enattk();
            }
        }
        orn.onclick = function(){
            if(spe==true){
                ornhp.innerHTML = ornhp.innerHTML -60;
                spe=false
                tour=tour+1;
                enattk();
            }
        }

    }

    if (tour=3){
        bouttonattk.onclick = function(){
            if(att==false){
                att=true
            
            }
        }

        bouttonspe.onclick = function(){
            if(spe==false){
                spe=true
            
            }
        }

        bouttondef.onclick = function(){
            nickyhp.innerHTML = nickyhp.innerHTML +10;
            tour=tour+1;
            enattk();
        }
    
        swamp.onclick = function(){
            if(att==true){
                swamphp.innerHTML = swamphp.innerHTML -40;
                att=false
                tour=tour+1;
                enattk();
            }
        }
        swamp.onclick = function(){
            if(spe==true){
                swamphp.innerHTML = swamphp.innerHTML -70;
                spe=false
                tour=tour+1;
                enattk();
            }
        }

        pontif.onclick = function(){
            if(att==true){
                pontifhp.innerHTML = pontifhp.innerHTML -40;
                att=false
                tour=tour+1;
                enattk();
            }
        }
        pontif.onclick = function(){
            if(spe==true){
                pontifhp.innerHTML = pontifhp.innerHTML -70;
                spe=false
                tour=tour+1;
                enattk();
            }
        }

        shadow.onclick = function(){
            if(spe==true){
                shadowhp.innerHTML = shadowhp.innerHTML -70;
                spe=false
                tour=tour+1;
                enattk();
            }
        }
        shadow.onclick = function(){
            if(spe==true){
                shadowhp.innerHTML = shadowhp.innerHTML -70;
                spe=false
                tour=tour+1;
                enattk();
            }
        }

        orn.onclick = function(){
            if(att==true){
                ornhp.innerHTML = ornhp.innerHTML -40;
                att=false
                tour=tour+1;
                enattk();
            }
        }

        orn.onclick = function(){
            if(spe==true){
                ornhp.innerHTML = ornhp.innerHTML -70;
                spe=false
                tour=tour+1;
                enattk();
            }
        }

    }
}