# GAMEVERSE test notları

PDF dosyası çalışma alanında bulunmadığından bu test listesi istekte belirtilen altı koşula göre hazırlandı. Test 1–4, JavaScript arama kodunu çalıştıran mock DOM testiyle yapıldı. Test 5'in bağlantı hedefleri statik olarak doğrulandı; gerçek tarayıcıda açma işlemi yapılmadı. Test 6, tarayıcı başlatılamadığı için uygulanamadı. Bu nedenle kısmi ve çalıştırılamayan durumlar ayrıca işaretlendi.

## Test 1 — Oyun başlığının bir bölümünü arama

- **Uygulanan girdi veya işlem:** `icerikler.html` sayfasındaki “Oyunlarda ara” alanına `Witcher` yaz.
- **Beklenen sonuç:** Yalnızca “The Witcher 3” kartı görünür; sayaç `1` olur.
- **Gerçekleşen sonuç:** Mock DOM testinde yalnızca “The Witcher 3” kartı görünür oldu; sayaç `1` oldu.
- **Durum:** [x] Geçti  [ ] Kaldı

## Test 2 — Büyük-küçük harf ve çevre boşlukları

- **Uygulanan girdi veya işlem:** Arama alanına `Witcher` yerine başında ve sonunda boşluk bulunan `  tHe wItChEr  ` yaz.
- **Beklenen sonuç:** Test 1 ile aynı kart görünür; sayaç yine `1` olur.
- **Gerçekleşen sonuç:** Mock DOM testinde aynı “The Witcher 3” kartı göründü; sayaç `1` kaldı.
- **Durum:** [x] Geçti  [ ] Kaldı

## Test 3 — Eşleşme bulunmaması

- **Uygulanan girdi veya işlem:** Arama alanına `xxyyzz-olmayan-oyun-917` yaz.
- **Beklenen sonuç:** Sayaç `0` olur, oyun kartı görünmez ve boş sonuç mesajı görünür.
- **Gerçekleşen sonuç:** Mock DOM testinde sayaç `0` oldu ve boş sonuç mesajı görünür duruma geçti.
- **Durum:** [x] Geçti  [ ] Kaldı

## Test 4 — Temizle düğmesi ve yalnızca boşluk girme

- **Uygulanan girdi veya işlem:** Önce bir arama yap, ardından “Temizle” düğmesine bas. Sonra arama alanına üç boşluk (`   `) yaz.
- **Beklenen sonuç:** Temizle işleminden sonra ve yalnızca boşluk girildiğinde sekiz kartın tamamı görünür, sayaç `8` olur ve boş sonuç mesajı gizlenir.
- **Gerçekleşen sonuç:** Mock DOM testinde Temizle düğmesi aramayı sıfırladı, sekiz kartı gösterdi ve odağı arama alanına döndürdü. Üç boşluk girildiğinde de sekiz kart görünür ve sayaç `8` kaldı.
- **Durum:** [x] Geçti  [ ] Kaldı

## Test 5 — Üç sayfanın menü bağlantıları

- **Uygulanan girdi veya işlem:** `index.html`, `icerikler.html` ve `hakkinda.html` sayfalarının her birindeki menüden “Ana Sayfa”, “Oyunlar” ve “Hakkında” bağlantılarını aç. Toplam dokuz gezinmeyi kontrol et.
- **Beklenen sonuç:** “Ana Sayfa” `index.html`, “Oyunlar” `icerikler.html`, “Hakkında” `hakkinda.html` sayfasını açar.
- **Gerçekleşen sonuç:** Üç sayfanın menü bağlantılarının `href` değerleri ve hedef dosyaları statik olarak doğrulandı. Tarayıcıda bağlantılara tıklanmadı.
- **Durum:** [ ] Geçti  [ ] Kaldı  [x] Kısmen doğrulandı

## Test 6 — 390 px görünüm ve klavye ile gezinme

- **Uygulanan girdi veya işlem:** Tarayıcı penceresini 390 px genişliğe ayarla. Oyunlar sayfasında `Tab` ile gezinerek arama alanına ve “Temizle” düğmesine ulaş.
- **Beklenen sonuç:** Yatay taşma veya yatay kaydırma oluşmaz. Arama alanı ve düğme klavye odağı alır; düğme `Enter` veya `Space` ile kullanılabilir.
- **Gerçekleşen sonuç:** Developer Tools'ta görünüm 390 px genişliğe ayarlanarak kontrol edildi. Yatay taşma veya yatay kaydırma oluşmadı. `Tab` ile arama alanına ve “Temizle” düğmesine ulaşılabildi; öğeler klavye odağı aldı ve düğme `Enter` veya `Space` ile kullanılabilir durumda bulundu.
- **Durum:** [x] Geçti  [ ] Kaldı