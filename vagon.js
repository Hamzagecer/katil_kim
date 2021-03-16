// Dun bir köy istasyonunda hazin bir yaralama olay gerceklesti. Supheli ise gelen 10 vagonlu bir trene saklanak olay yerinden kacti.
// 10 Tane vagonlu trende vagonun birinde supheli saklanmaktadır. Suphelinin hangi vagonda saklandıgını bulmak icin bir tahmin programina ihtiyac vardr.

// Program akisi:
// 1. 1-10 arası rastgele vagon numarası uretılır ve supheli bu vagonda saklanir.
// 2. Kullanici maximum 4 denemede suphelinin oldugu vagonu bulmasi gerekecektir.
// 3. Kullanıcıya ön vagon veya arka vagonda ifadeleri ile yonlendirme yapılarak hangi vagonda oldugunu daha kolay bulması icin yardım edilecektir.
// 4. Kullanıcının kac defada bildiği ve puani (100 üzerinden) alert ile yazdırılacaktir.


let hak, can;
let tahmin, sayac = 0
let vagon = Math.floor((Math.random() * 10) + 1);
can = 4
hak = can

console.log(vagon);
while (hak > 0) {
    hak--;
    sayac++;
    tahmin = Number(prompt('supheli hangi vagondadir ?'));

    if (vagon == tahmin) {
        alert(`Tebrikler ${sayac}defada bildiniz.`);
        alert(`puan : ${100 - (100/can)*(sayac-1)}`);
        hak = 0;

    } else if (sayac == 4) {
        alert('hakkınız bitti. vagon :' + vagon);
    } else if (vagon > tahmin) {
        alert(`arka vagon`);
    } else {
        alert(`on vagon`);
    }


}