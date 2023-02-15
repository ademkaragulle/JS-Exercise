window.onmousemove=function(olay)
{
let xpos=olay.clientX;
let ypos=olay.clientY;
 
document.getElementById('x').innerHTML=xpos;
document.getElementById('y').innerHTML=ypos; 
} 