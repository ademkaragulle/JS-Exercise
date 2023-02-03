let arr = [20, 13, 60, 800, 1568]
let arr2 = [1, 2, 3]

function bigNummers(value) {
    return value > 25
}



document.write(`${arr.filter(bigNummers)} <br>`)    //atanan fonksiyona göre yeni bir dizi oluşturur.
document.write(`${arr.concat(arr2)} <br>`)          //dizileri birleştirir.
document.write(`${arr.indexOf(60)} <br>`)           //dizi içinde arama yapar. 
document.write(`${arr.indexOf(60, 3)} <br>`)        //(x,3) 3. indix numarasından sonra aramaya başlar.
document.write(`${arr.join(' ')} <br>`)             //dizideki elemanların arasına belirlenen ifade ile birleştirir.
document.write(`${arr.pop()} <br>`)                 //dizideki son değeri atar.
document.write(`${arr} <br>`)                       
document.write(`${arr.push('adem')} <br>`)          //push diziye eleman ekler
document.write(`${arr} <br>`)
document.write(`${arr.reverse()} <br>`)             //diziyi tersine çevirir.
document.write(`${arr.sort()} <br>`)                //diziyi sıralar

let arr3 = arr.sort(() => Math.random() - 0.5);     //diziyi karıştırır.
document.write(`${arr} <br>`)        