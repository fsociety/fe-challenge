# Yeni Hesap

![Wireframe](files/wf-hesap-ekle.png)

Yeni bir hesap eklemek icin kullandığımız ekran. İki adet Input'u olmakla birlikte, `@magiclick/utils/validators` altındaki validasyonları kullanabilirsiniz.

```ts
type AccountCreateInput = {
  name: string;
  currency: string;
};
```

Bu bilgiler dışındaki alanlar, otomatik olarak servis tarafından yaratılmaktadır.

Ekleme işleminde, sunucudan başarılı yanıt alındığında diyalog ekranının kapatılması ve hesap listesinin güncellenmesi gerekmektedir.
