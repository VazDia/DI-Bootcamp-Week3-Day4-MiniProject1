/*
Welcome to Coloring Squares.

Your task is to build a coloring game similar to the working project above.

You will need to use HTML, CSS and JS to accomplish this task.

A Few Things To Think About…
HTML, CSS:

How will you make the grid of colors?
How will you make the grid of blank squares?
Hint… GRID :P
JS:

How does a user choose a color?
How does drawing work? How can you tell when the user is clicking and dragging?
Hint, look at the JS events mousedown, mouseup, and mouseover.
*/


// we will create all the elements background color in our js file

let rouge=document.querySelector(".rouge");
rouge.style.backgroundColor="red";

let rouge1=document.querySelector(".rouge_");
rouge1.style.backgroundColor="rgb(247, 48, 48)";

let orange=document.querySelector(".orange");
orange.style.backgroundColor="orange";


let jaune=document.querySelector(".jaune");
jaune.style.backgroundColor="yellow";

let vert1=document.querySelector(".vert_");
vert1.style.backgroundColor="greenyellow";

let vert2=document.querySelector(".vert_Light");
vert2.style.backgroundColor="rgb(37, 218, 37)";

let vert=document.querySelector(".vert");
vert.style.backgroundColor="green";

let bleu1=document.querySelector(".bleu_1");
bleu1.style.backgroundColor="rgb(113, 221, 212)";

let bleuLight=document.querySelector(".bleu_light");
bleuLight.style.backgroundColor="rgb(163, 240, 233)";

let bleu2=document.querySelector(".bleu_2");
bleu2.style.backgroundColor="rgb(70, 180, 231)";

let bleu3=document.querySelector(".bleu_3");
bleu3.style.backgroundColor="rgb(58, 29, 219)";

let bleu=document.querySelector(".bleu");
bleu.style.backgroundColor="rgb(27, 3, 165)";

let bleu_fonce=document.querySelector(".bleu_fonce");
bleu_fonce.style.backgroundColor="rgb(17, 5, 87)";

let violet1=document.querySelector(".violet_");
violet1.style.backgroundColor="rgb(68, 4, 68)";

let violet=document.querySelector(".violet");
violet.style.backgroundColor="purple";

let rose1=document.querySelector(".rose_");
rose1.style.backgroundColor="rgb(226, 65, 154)";

let rose=document.querySelector(".rose");
rose.style.backgroundColor="pink";

let gris1=document.querySelector(".gris_light");
gris1.style.backgroundColor="gainsboro";

let gris=document.querySelector(".gris");
gris.style.backgroundColor="gray";


let noir=document.querySelector(".noir");
noir.style.backgroundColor="black";

let blanc=document.querySelector(".blanc");
blanc.style.backgroundColor="white";


// Now we will add events for drawing with differents colors

let color=null;
let drawing=false;
let grilles=document.querySelectorAll(".laGrille")
let colors=document.querySelectorAll(".couleur");
colors.forEach(element => element.addEventListener("mousedown",SelectColor));

document.body.addEventListener("mouseup",StopColor);
document.body.addEventListener("mousedown",Color);
function Color(){
    drawing=true;
}
function StopColor (){
    drawing=false;
}
function SelectColor(e){
    color= e.target.style.backgroundColor;
   
}
for (grille of grilles){
    grille.addEventListener("mousedown", function (event) {
        if (color!=null){
            event.target.style.backgroundColor=color;
        }
    })
}
for (grille of grilles){
    grille.addEventListener("mouseover", function(event) {
        if (drawing && color!=null){
            event.target.style.backgroundColor=color;
        }
    })
   
}
let buttonClear=document.getElementById("clear");
buttonClear.addEventListener("click",ClearAll);

function ClearAll(){
    grilles.forEach(child => child.style.backgroundColor="white");
    grilles.forEach(couleur => couleur.addEventListener("mousedown",desableColor))
    function desableColor(){
        this.style.backgroundColor="white";
    }

}
