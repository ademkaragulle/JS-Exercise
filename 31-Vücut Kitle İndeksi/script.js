
//  kadın 0.9
// erkek 1.1

// kilo/boy*2

// her yaş aralığı için 10 yaş arttığında bke +1.01
// Eğer Kişi kadınsa bke *1.1
// Eğer Kişi kadınsa bke *0.9

// bke<18.5 zayıf
// 18.5<bke<24.9 normal
// 25<bke<29.9 kilolu
// 24.9<bke obez


function bke() {
    let boy = Number(document.getElementById("boy").value)
    let kilo = Number(document.getElementById("kilo").value)
    let yas = Number(document.getElementById("yas").value)
    let cinsiyet = document.getElementById("cinsiyet").value
    let bkeSonuc = document.getElementById("bkeSonuc")

    yasKatsayı = 1 + (yas / 10 - (yas % 10) / 10) / 100
    let bkeIdex = (kilo) / (boy / 100 * boy / 100)
    let sonuc;

    if (cinsiyet == 'erkek') {
        sonuc = bkeIdex * yasKatsayı * 1.1
    } else {
        sonuc = bkeIdex * yasKatsayı * 0.9
    }


    if (sonuc < 18.5) {
        bkeSonuc.innerText = 'Zayıf'
    }
    else if (sonuc < 24.9) {
        bkeSonuc.innerText = 'Normal'
    }
    else if (sonuc < 29.9) {
        bkeSonuc.innerText = 'Kilolu'
    }
    else {
        bkeSonuc.innerText = 'Obez'
    }
}