let rouge=document.querySelector(".rouge");
rouge.style.backgroundColor="red";
rouge.addEventListener("mousedown",SelectedColorRed)
function SelectedColorRed(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="red";
    }
}


let rouge1=document.querySelector(".rouge_");
rouge1.style.backgroundColor="rgb(247, 48, 48)";
rouge1.addEventListener("mousedown",SelectedColorRed)
function SelectedColorRed(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="rgb(247, 48, 48)";
    }
}


let orange=document.querySelector(".orange");
orange.style.backgroundColor="orange";
orange.addEventListener("mousedown",SelectedColorOrange)
function SelectedColorOrange(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="orange";
    }
}


let jaune=document.querySelector(".jaune");
jaune.style.backgroundColor="yellow";
jaune.addEventListener("mousedown",SelectedColorYellow)
function SelectedColorYellow(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="yellow";
    }
}

let vert1=document.querySelector(".vert_");
vert1.style.backgroundColor="greenyellow";
vert1.addEventListener("mousedown",SelectedColorGreen1)
function SelectedColorGreen1(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="greenyellow";
    }
}

let vert2=document.querySelector(".vert_Light");
vert2.style.backgroundColor="rgb(37, 218, 37)";
vert2.addEventListener("mousedown",SelectedColorGreen2)
function SelectedColorGreen2(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="rgb(37, 218, 37)";
    }
}


let vert=document.querySelector(".vert");
vert.style.backgroundColor="green";
vert.addEventListener("mousedown",SelectedColorGreen)
function SelectedColorGreen(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="green";
    }
}


let bleu1=document.querySelector(".bleu_1");
bleu1.style.backgroundColor="rgb(113, 221, 212)";
bleu1.addEventListener("mousedown",SelectedColorBlue1)
function SelectedColorBlue1(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="rgb(113, 221, 212)";
    }
}

let bleuLight=document.querySelector(".bleu_light");
bleuLight.style.backgroundColor="rgb(163, 240, 233)";
bleuLight.addEventListener("mousedown",SelectedColorBlueLight)
function SelectedColorBlueLight(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="rgb(163, 240, 233)";
    }
}

let bleu2=document.querySelector(".bleu_2");
bleu2.style.backgroundColor="rgb(70, 180, 231)";
bleu2.addEventListener("mousedown",SelectedColorBlue2)
function SelectedColorBlue2(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="rgb(70, 180, 231)";
    }
}

let bleu3=document.querySelector(".bleu_3");
bleu3.style.backgroundColor="rgb(58, 29, 219)";
bleu3.addEventListener("mousedown",SelectedColorBlue3)
function SelectedColorBlue3(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="rgb(58, 29, 219)";
    }
}


let bleu=document.querySelector(".bleu");
bleu.style.backgroundColor="rgb(27, 3, 165)";
bleu.addEventListener("mousedown",SelectedColorBlue)
function SelectedColorBlue(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="rgb(27, 3, 165)";
    }
}

let bleu_fonce=document.querySelector(".bleu_fonce");
bleu_fonce.style.backgroundColor="rgb(17, 5, 87)";
bleu_fonce.addEventListener("mousedown",SelectedColorBlueF)
function SelectedColorBlueF(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="rgb(17, 5, 87)";
    }
}


let violet1=document.querySelector(".violet_");
violet1.style.backgroundColor="rgb(68, 4, 68)";
violet1.addEventListener("mousedown",SelectedColorV1)
function SelectedColorV1(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="rgb(68, 4, 68)";
    }
}


let violet=document.querySelector(".violet");
violet.style.backgroundColor="purple";
violet.addEventListener("mousedown",SelectedColorV)
function SelectedColorV(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="purple";
    }
}

let rose1=document.querySelector(".rose_");
rose1.style.backgroundColor="rgb(226, 65, 154)";
rose1.addEventListener("mousedown",SelectedColorR1)
function SelectedColorR1(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="rgb(226, 65, 154)";
    }
}

let rose=document.querySelector(".rose");
rose.style.backgroundColor="pink";
rose.addEventListener("mousedown",SelectedColorR)
function SelectedColorR(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="pink";
    }
}

let gris1=document.querySelector(".gris_light");
gris1.style.backgroundColor="gainsboro";
gris1.addEventListener("mousedown",SelectedColorG1)
function SelectedColorG1(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="gainsboro";
    }
}

let gris=document.querySelector(".gris");
gris.style.backgroundColor="gray";
gris.addEventListener("mousedown",SelectedColorG)
function SelectedColorG(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="gray";
    }
}

let noir=document.querySelector(".noir");
noir.style.backgroundColor="black";
noir.addEventListener("mousedown",SelectedColorG)
function SelectedColorG(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="black";
    }
}


let blanc=document.querySelector(".blanc");
blanc.style.backgroundColor="white";
blanc.addEventListener("mousedown",SelectedColorWhite)
function SelectedColorWhite(){
    let grilles = document.querySelectorAll(".laGrille");
    grilles.forEach(element =>element.addEventListener("mousedown",bColor));
    function bColor(){
        this.style.backgroundColor="white";
    }
}




let buttonClear=document.getElementById("clear");
buttonClear.addEventListener("click",ClearAll);

function ClearAll(){
    document.querySelectorAll(".laGrille").forEach(child => child.style.backgroundColor="white");
    document.querySelectorAll(".laGrille").forEach(couleur => couleur.addEventListener("mousedown",desableColor))
    function desableColor(){
        this.style.backgroundColor="white";
    }

}