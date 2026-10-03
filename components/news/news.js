// Haberleri üretmek için aşağıdaki newsData objesini kullanacağız. Önce inceleyin.
import { newsData } from "./../../resources.js";

const sampleNewsItem = {
  baslik: "örnek başlık",
  tarih: "11 Kasım 2026",
  ilkParagraf: "Örnek paragraf 1",
  ikinciParagraf: "Örnek paragraf 2",
  ucuncuParagraf: "Örnek paragraf 3",
};

function NewsBuilder(object){
  const haberBasligi = document.createElement("h2");
  haberBasligi.textContent = object.baslik;

  const date = document.createElement("p");
  date.classList.add("date");
  date.textContent = object.tarih;

  const yazi1 = document.createElement("p");
  yazi1.classList.add("yazi1");
  yazi1.textContent = object.ilkParagraf;

  const yazi2 = document.createElement("p");
  yazi2.classList.add("yazi2");
  yazi2.textContent = object.ikinciParagraf;

  const yazi3 = document.createElement("p");
  yazi3.classList.add("yazi3");
  yazi3.textContent = object.ucuncuParagraf;

  const button = document.createElement("button");
  button.classList.add("expandButton");
  button.textContent = "+";

  
  const div = document.createElement("div");

  
  div.classList.add("article");
  div.appendChild(haberBasligi);
  div.appendChild(date);
  div.appendChild(yazi1);
  div.appendChild(yazi2);
  div.appendChild(yazi3);
  div.appendChild(button);

  return div;
}
const articles = document.querySelector(".articleList");
newsData.forEach(news => {
  articles.appendChild(NewsBuilder(news));
})

/*
Adım 1: NewsBuilder component fonksiyonu yazmak
Yazacağınız NewsBuilder fonksiyonu, yukarıdaki sampleNewsItem yapısındaki bir objeyi parametre olarak almalı ve alttaki yapıya sahip bir içerik oluşturup return etmeli:

<div class="article">
  <h2>{haber başlığı}</h2>
  <p class="date">{haber tarihi}</p>

  {üç ayrı paragraf elementi}

  <button class="expandButton">+</button>
</div>


Adım 2:
Oluşturulan expandButton classına sahip elemana tıklandığında, içinde bulunduğu article classına sahip elemanda isOpen classı yoksa eklemeli, varsa çıkarmalı.


Adım 3:
newsData, sampleNewsItem yapısına benzeyen objelerden oluşan bir array ve sayfada göstermek istediğimiz haberleri içeriyor.
newsData'nın her bir elemanını NewsBuilder ile kullanmak için bir döngü yazın. Döngü her çalıştığında:
- o anki eleman ve NewsBuilder kullanılarak içerik hazırlanmalı,
- hazırlanan içerik, index.html'de bulunan articleList classına sahip elemanın içine yerleştirilmeli.


Not 1: İlk 2 adım NewsBuilder içinde yapılmalı.
Not 2: NewsBuilder fonksiyonunda oluşturduklarınızı return etmeyi unutmayın.
*/
