# Mülakat React Chats
Bu proje NextJS ve Tailwind kullanılarak yazılmıştır. Proje komponent yapısı ile oluşturulmuştur. Örnek kullanım example.gif dosyasında yer almaktadır.

## Komponentler ve Değişkenler

- **LayoutContext.tsx** : Genel sohbet alanı tasarımı yapılmıştır
    - ***CurrentUser*** `Object[]` : Bu bir context değişkenidir ve içinde tüm mesajlaşmalar tutulmaktadır. 
    - ***SampleResponse*** `String[]` : Bu bir context değişkenidir ve içinde sadece hazır cevap mesajları tutulmaktadır.
- **MessageBubble.tsx** : Bu komponentte mesaj balonları yer almaktadır. CurrentUser değişkeni içinde yer alan mesajların ön yüz çalışması yapılmıştır.
- **InputArea.tsx**: Bu komponentde yeni mesaj yazma, gönderme ve hazır cevaplama işlemi gerçekleşmektedir. Kullanıcı gönder butonuna tıkladığında mevcut mesajı ve yazıyor.. mesajı CurrentUser değişkenine tanımlanır. 1 saniye sonrasında hazır cevaplardan rastgele bir tanesi yazıyor... mesajı ile değiştirilir. Bu işlemler yapılırken buton ve input alanı pasif duruma getirilir. İşlem bittikten sonra tekrar aktif hale getirilir. 

## Yapı
Context değişkeninde ve mesaj gönderme işleminde küçük bir değişiklik yaparak sistem hızlı bir şekilde canlı bir sisteme entegre edilebilir ya da farklı senaryolarda veritabanı değişikliği yapılabilir. Sistem oluşturulurken *SOLID* prensipleri ve spagetti kod olmaması gözetilmiştir.