# Kurulum

Proje kurulumu için aşağıdaki adımlar, size yardımcı olacaktır.

## Bir Uygulama Yaratmak

Yeni bir React uygulaması yaratmak için, aşağıdaki komut satırını kullanın.

### Bağımlılıkları Yüklemek

[Yarn](https://yarnpkg.com/getting-started/install) kullanmanızı tavsiye ederiz.

```sh
# yarn
yarn

# npm
npm i
```

### [NX](https://nx.dev/l/r/getting-started/nx-setup) Kurulumu

NX, sisteminizde zaten yüklüyse bir sonraki adıma geçebilirsiniz.

```sh
# yarn
yarn global add nx

# npm
npm i -g nx
```

### Proje Kurulumu

Aşağıdaki komut, size uygulamada kullanmak istediğiniz stil kütüphanesi gibi soruları da soracaktır. Kendinizi en rahat hissettiğiniz stil kütüphanesini kullanabilirsiniz. TypeScript veya JavaScript seçiminiz için aşağıdaki komutları kullanabilirsiniz. TypeScript kullanmanızı tercih ederiz.

```sh
# TypeScript kullanmak
nx g @nrwl/react:application web

# JavaScript kullanmak
nx g @nrwl/react:application web --js
```

İşlem tamamlandığında, `web` adında bir uygulama yaratılacak ve `apps/web` yolu altına ihtiyacınız olan dosyaları üretecektir. NX'in ayrica ekledigi `web-e2e` projesini görmezden gelebilirsiniz.

## Uygulamayı Çalıştırmak

### API Uygulamasını Çalıştırmak

```sh
nx serve server
```

### Oluşturulan `web` Uygulamasını Çalıştırmak

```sh
nx serve web
```

## Uygulamayı Test Etmek

### Oluşturulan `web` Uygulamasını Test Etmek

```sh
nx test web
```

---

[Geri Dön](https://github.com/MagiClick/fe-challenge#readme)
