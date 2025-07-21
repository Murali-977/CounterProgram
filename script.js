const decre = document.getElementById("dec");
const re = document.getElementById("reset");
const inc = document.getElementById("inc");
const count = document.getElementById("cnt");
let countlabel = 0;
inc.onclick=function(){
    countlabel++;
   count.textContent=countlabel

}
dec.onclick=function(){
    countlabel--;
   count.textContent=countlabel

}
reset.onclick=function(){
    countlabel=0
    count.textContent=countlabel
}

