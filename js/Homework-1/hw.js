const name = prompt("İsminizi giriniz: ")
var nameEtiket = document.getElementById("myName")

nameEtiket.innerHTML=` ${name} `
nameEtiket.style.color="Blue";


function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    // Haftanın günlerini liste olarak yapıldı.
    const weekday= ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    
    let day = weekday[date.getDay()-1];
    // var date = new Date(); ile date değişkenindeki veriyi date.getDay() methodu ile çağırdık.
    // getDay() sonucu (0,6) arasında değer veriyor weekday listesinden index ile anlık hangi gün olduğunu bulduk.
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;    
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + day ;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
showTime();

 

