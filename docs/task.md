# Görev

Bu projeyi kullanarak yapmanız gereken birden fazla göreviniz var.

**Bu görevleri, tecrübenize göre yapabilir veya bilmediklerinizi pas geçebilirsiniz. Değerlendirmeniz, tamamladığınız görevler üzerinden yapılacaktır. (Sadece görev bazında değil, görev içerisinde zorlandığınız detayları da pas geçebilirsiniz.)**

Görevleri okumadan önce; gözünüzde, 

- herhangi bir İnternet Bankacılığında kullandığınız hesap listenizi, 
- hesap detaylarına girdiğinizde karşınıza çıkan, geçmiş tarihlerde yapmış olduğunuz işlemlerin listesini 

canlandırmanızı rica ediyoruz.

Bu görev için kullanabileceğiniz gerekli kaynaklar, aşağıda mevcuttur.

- [Postman Koleksiyonu](files/FE-Challenge.postman_collection.json)
- [Figma Dosyası](https://www.figma.com/file/IW51VgTWzBtb9zW9I2oXKy/MagicHesap?node-id=1%3A2)

<br />

## Görev - Temel Yazım Kuralları

Görevlerde verilen işleri yapmak kadar; kodun temiz, düzenli ve organize bir şekilde yazılması da önemlidir. Bu noktada dikkat ettiğimiz konular aşağıdaki gibidir.

- CSS kodlarının; okunaklı, hiyerarşisi düzgün, modüler yazılmış olması.
- TypeScript kullanılarak `type-safe` yazılması.
- React Component'lerinin, iyi ve performanslı optimize edilmiş olması.
- Fonksiyonel yaklaşım ile geliştirmek.
- Prettify uygulanmış bir kod ve kullanılmayan kodların da temizlenmiş olması.

## Görev - Arayüz Kodlaması

Sizden; halihazırda var olan Back-end servisimiz için bir arayüz kodlaması yapmanızı ve aşağıda belirtilen koşullara uygun/sorunsuz bir şekilde entegre etmenizi bekliyoruz.

- [Hesap Listesi](task-account-list.md)
- [Yeni Hesap](task-account-new.md)
- [Hesap Detay](task-account-detail.md)
- [Yeni Hesap Hareketi](task-account-new-activity.md)

## Görev - Yeni Fonksiyonalite Eklemesi

Tasarımlarda görülebileceği üzere, "Hesap Hareketi" servisinde bulunmayan bir "kategori" bilgisi mevcut. Bu kategori bilgisi, sizin tarafınızdan hem server hem de web uygulaması üzerine eklenmelidir.

Yapılacak işlemler sırasıyla,

- `schema/prisma.schema` dosyası üzerinden yeni alanların eklenmesi,
- Migration işleminin yapılması,
- `Activity` (hesap hareketleri) modülüne bu bilgilerin eklenmesi,
- Oluşturduğunuz `web` isimli arayüz uygulamasında, bu bilgilerin gösterilmesi ve eklenebilmesi.

Yeni alan eklenmesini, @relation olarak, `ActivityCategory` şeklinde bir [Prisma](https://www.prisma.io/) modeli olarak kullanmalısınız.

## Görev - Test Yazımı (Unit/Integration/E2E)

Arayüz uygulaması üzerinde, geliştirdiğiniz bütün UI React Component'leri ve yaratacağınız yardımcı fonksiyonlar icin Unit test yazmanızı istiyoruz. 

- Integration testleri yazmanız zorunlu değil, velakin değerlendirmenizde etkili bir kriterdir.
- E2E testleri yazmanız zorunlu değil, velakin değerlendirmenizde yine etkili bir kriterdir.

`web` uygulamanız yaratılırken, otomatik olarak `jest` ile bağlı gelecektir. Ayrıca bir yükleme/ayarlama yapmanıza gerek bulunmamaktadır.

Örnek olması adına basit bir UI Component için bir Unit test örneğini aşağıda görebilirsiniz.

```tsx
describe('Example: ', () => {
  it('The component has been rendered successfully.', () => {
    render(<Example />);
    
    const element = screen.getByTestId('example') as HTMLDivElement;
    expect(element).toBeInstanceOf(HTMLDivElement);
    
    const title = screen.getByTestId('example-title') as HTMLHeadingElement;
    expect(title).toBeInstanceOf(HTMLHeadingElement);
    expect(title.innerHTML).toBe('MagiClick');
  });
});

```

---

[Geri Dön](https://github.com/MagiClick/fe-challenge#readme)
