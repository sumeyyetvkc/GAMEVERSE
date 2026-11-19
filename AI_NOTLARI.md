# GAMEVERSE projesinde yapay zekâ kullanımı

## Projede yapay zekâ kullanım amacı

Copilot'u GAMEVERSE'in ön yüz geliştirmesinde yardımcı olarak kullandım. Görsel düzeni, mobil uyumluluğu, erişilebilirliği ve JavaScript arama davranışını inceletip iyileştirmeler için destek aldım. Kodun son hâlini kontrol etmek için HTML yapısı, dosya yolları ve arama davranışı üzerinde doğrulamalar yaptım.

## Kullanılan promptlar ve amaçları

Aşağıdakiler Copilot'a verdiğim gerçek isteklerden kısa alıntılardır:

1. **“GAMEVERSE'in görsel kalitesini yükseltmek için sekiz oyuna uygun görseller kullan.”**  
   Amaç: Her oyuna uygun görsel eklemek; görsel eşleşmelerini, alt metinleri, görsel oranını ve yükleme davranışını düzenlemek.

2. **“Bütün sayfaları responsive hale getir.”**  
   Amaç: Üç sayfanın masaüstü, tablet ve telefon genişliklerinde dengeli görünmesini; menü, kartlar, arama alanı ve footer'ın mobilde kullanılabilir olmasını sağlamak.

3. **“Üç HTML sayfasını erişilebilirlik ve HTML kalitesi açısından denetle ve düzelt.”**  
   Amaç: Semantik HTML'i, başlık sırasını, görsel alt metinlerini, arama etiketini, klavye gezinmesini ve focus göstergelerini incelemek.

4. **“Şimdi projeyi profesyonel bir code review sürecinden geçir.”**  
   Amaç: Üç sayfayı, arama işlevini, sayaç ve boş sonuç durumunu, dosya yollarını ve erişilebilirlik davranışlarını kontrol etmek.

## Copilot'un verdiği önerilerden en az bir tanesi

Oyunların resmî kapakları yerine, her oyun için özgün ve açıkça illüstrasyon olarak etiketlenmiş yerel SVG görseller kullanılması önerildi. Böylece gerçek oyun kapağı olmayan bir görsel, resmî kapakmış gibi sunulmadı.

## Bu önerinin kabul edilme veya değiştirilme nedeni

Bu öneriyi kabul ettim. İlk görsel isteğimde resmî kapak veya ekran görüntüsü kullanılırsa kaynak ve kullanım haklarına dikkat edilmesini, bulunamayan görselin sahte kapak gibi sunulmamasını istemiştim. Özgün ve etiketli illüstrasyonlar bu koşullara uygundu.

## Bir event listener'ın ne yaptığı

`js/script.js` içindeki şu satır, arama alanını dinler:

```js
searchInput.addEventListener("input", filterGames);
```

Event listener'ı (olay dinleyicisi), bir şey olduğunda çalışacak kodu tarayıcıya kaydeder. Buradaki `"input"` olayı, arama kutusundaki yazı değiştiğinde oluşur. Yazı yazınca, yapıştırınca veya silince `filterGames` çalışır ve oyun kartlarını yeniden süzer. Yani bu satır, arama kutusunu her değişiklikte kontrol eden bir görevli gibi düşünülebilir.

## Bir filtreleme koşulunun ne yaptığı

Kartın görünür olup olmadığını belirleyen koşul şudur:

```js
const isMatch = game.title.includes(query);
```

`game.title`, kartın oyun başlığıdır; `query` ise arama kutusuna yazılan metindir. Kod, başlığın aranan metni içerip içermediğine bakar. İçeriyorsa kart görünür, içermiyorsa gizlenir. Aramadan önce `trim()` baştaki ve sondaki boşlukları kaldırır; `toLowerCase()` büyük-küçük harf farkını yok sayar. Arama boş kalırsa boş metin her başlığın içinde bulunduğundan bütün kartlar görünür.

## Yapay zekâ tarafından üretilen kodların nasıl kontrol edildiği

- `node --check js/script.js` ile JavaScript sözdizimi kontrol edildi.
- HTML sayfalarında doctype, dil, başlıklar, yinelenen kimlikler, bağlantılar, görsel alt metinleri ve görsel dosya yolları denetlendi.
- Arama kodu mock DOM (tarayıcı öğelerini taklit eden küçük bir test ortamı) ile çalıştırıldı. Sekiz kart, yalnızca başlıklarda arama, harf farkı ve çevre boşluklarının yok sayılması, boş aramada tüm kartların görünmesi, sayaç, boş sonuç mesajı ve Temizle düğmesinin odağı aramaya geri vermesi kontrol edildi.
- SVG görsellerin biçimi ve HTML'deki oyun-görsel eşleşmeleri doğrulandı.
- Gerçek tarayıcıda görünüm ve konsol, tarayıcının Developer Tools araçları kullanılarak kontrol edildi.

**Belge notu:** Çalışma alanında başvuru PDF'si bulunmadığından bu belge, istekte paylaşılan başlık ve koşullara göre düzenlendi.