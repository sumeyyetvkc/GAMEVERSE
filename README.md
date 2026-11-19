# GAMEVERSE

GAMEVERSE, farklı türlerden video oyunlarını tanıtan, tarayıcıda çalışan statik bir oyun galerisi projesidir.

## Projenin amacı

Oyun dünyalarını, türlerini ve temel özelliklerini tek bir yerde tanıtarak ziyaretçilerin ilgilerini çeken oyunları keşfetmelerine yardımcı olmak.

## Hedef kitle

Oyunlara ilgi duyan gençler ve yetişkinler. Site, oyunlar hakkında kısa ve anlaşılır bilgi arayan ziyaretçilere yöneliktir.

## Kullanılan teknolojiler

- **HTML5:** Sayfa yapısı ve içerik.
- **CSS3:** Görsel tasarım, kartlar, animasyonlar ve responsive düzen.
- **JavaScript (Vanilla):** Oyun kataloğunda anlık başlık araması, sonuç sayacı ve boş sonuç durumu.

Sunucu, veritabanı veya paket kurulumu gerekmez.

## Sayfalar

- **Ana Sayfa (`index.html`):** GAMEVERSE tanıtımı, öne çıkan oyun kartları ve oyun türlerine yönlendirmeler.
- **Oyun Kataloğu (`icerikler.html`):** Sekiz oyun kartı, oyun başlığı araması ve oyun bilgileri.
- **Hakkında (`hakkinda.html`):** Projenin amacı, seçki yaklaşımı ve kullanılan web teknolojileri.

Üç sayfanın her birinde ortak ana gezinme menüsü bulunur.

## Oyun koleksiyonu

1. Minecraft
2. God of War
3. The Last of Us
4. Grand Theft Auto V
5. Red Dead Redemption 2
6. Forza Horizon 5
7. The Witcher 3
8. Counter-Strike: Global Offensive (CS:GO)

Kartlardaki görseller, oyunlardan alınmış resmî kapaklar değil; oyunların atmosferlerinden esinlenen özgün SVG illüstrasyonlarıdır.

## Dosya ve klasör yapısı

```text
GAMEVERSE/
├── index.html
├── icerikler.html
├── hakkinda.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── games/
│       ├── minecraft.svg
│       ├── god-of-war.svg
│       ├── the-last-of-us.svg
│       ├── gta-v.svg
│       ├── red-dead-redemption-2.svg
│       ├── forza-horizon-5.svg
│       ├── the-witcher-3.svg
│       └── counter-strike-global-offensive.svg
├── AI_NOTLARI.md
├── TEST_NOTLARI.md
└── README.md
```

## Projeyi çalıştırma

1. Depoyu klonla:

   ```bash
   git clone https://github.com/sumeyyetvkc/GAMEVERSE.git
   cd GAMEVERSE
   ```

2. `index.html` dosyasını bir tarayıcıda aç. Alternatif olarak proje klasöründe yerel bir statik sunucu çalıştır:

   ```bash
   python3 -m http.server 8000
   ```

3. Tarayıcıda `http://localhost:8000` adresine git.

## Arama sistemi

Arama, `icerikler.html` sayfasındaki oyun kartlarının yalnızca başlıklarını kontrol eder; açıklama veya diğer oyun bilgilerini aramaz. Yazılan ifade ve oyun başlıkları küçük harfe çevrilir, arama ifadesinin başındaki ve sonundaki boşluklar temizlenir. Başlıkta aranan ifade varsa kart görünür ve sayaç güncellenir; eşleşme yoksa boş sonuç mesajı gösterilir. Arama alanı boş olduğunda bütün kartlar görünür. **Temizle** düğmesi aramayı sıfırlar ve odağı arama alanına geri getirir.

## GitHub deposu

[https://github.com/sumeyyetvkc/GAMEVERSE](https://github.com/sumeyyetvkc/GAMEVERSE)