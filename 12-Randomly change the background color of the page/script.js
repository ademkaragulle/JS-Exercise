let color = document.getElementById('color').value
console.log(color)

function button() {
    let color = document.getElementById('color').value
    document.body.style.background=color
}



const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();