/*  
let tarih = new Date();  =>> Günün saat ve tarih bilgisini verir bize.
getDate() =>> anlık saat tarih bilgisini alır kullanıcının cihazının.
gethours() =>> saat bilgisini almak için
getMinutes() =>> Dakika bilgisini almak için
getSeconds() =>> Saniye bilgisi için 
toString() =>> metin yada rakam farketmez stringe çevirir . Mesela biz dk da 10 danm küöçük değerleri çift yazdırsın diye.
padStart() =>> bir stringin başına belirli kararkter eklemek için kullanılıyor veya belirli bir uzunluğa getirmek için.
                   ÖRNEKKKK: 
let hours = tarih.getHours().toString().padStart(2, "0"); 
şartı iki basamaklı değerlerde başına  0 ekliyor . 
Yani ikili sayısal değer yazarken sayı 10 dan küçükse önüne 0 ekler 2'li değer yapmak için.

textContent ile innerHTMML ay şey ama textContent daha güvenli.
*/

let giris = prompt("Adınız Nedir?");
let info = document.getElementById("myName");
info.textContent = giris;

let myClock = document.querySelector("#myClock");

//fonksiyonun içine aldık nedeni sürenin işlemeye devamö etmesi için
function updateClock(){
    let tarih = new Date(); 
    let gun = tarih.getDate();
    let hours = tarih.getHours().toString().padStart(2, "0"); 
    let minute = tarih.getMinutes().toString().padStart(2, "0");
    let seconds = tarih.getSeconds().toString().padStart(2, "0");
    let day = tarih.getDay();
    
    let gunler = [ "Pazar" , "Pazartesi" , "Salı" , "Çarşamba" ,"Perşembe" , "Cuma" , "Cumartesi"] ; 
    let zaman = `${hours} : ${minute} : ${seconds} ${gunler[day]}`;
    myClock.innerHTML = zaman;
}

setInterval(updateClock, 1000);


