import React, { useState } from 'react';
import './App.css';
import Semantic from './Semantic';


const UrunListesi = () => {
  const [pruductList] = useState([
    {
      "id": "1665700",
      "variantGroupId": "1665700",
      "images": [{ "id": "97d3c7ea-5534-41e4-b5de-b9e6a69ae9b0" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "GOFRET-9D5RP"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Gofret"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Çikolatalı Gofret 34 g",
          "value": "Eti Çikolatalı Gofret 34 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Kullanım Önerileri\nDikkat! Buzdolabına koymayıp, 18-22 C'de muhafaza ediniz. Isıdan, kokudan, nemden uzak tutunuz.\n\nNet Miktar (g/ml)\n34\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nFındıklı Krema %46,9 [Şeker, Bitkisel Yağ (Palm), Maltodekstrin, Fındık Püresi %10,5, Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Yağı Azaltılmış Kakao Tozu, Buğday Unu (Gluten içerir), Emülgatör (Ayçiçek Lesitini), Tuz, Aroma verici], Sütlü Çikolata %33 [Şeker, Kakao Kitlesi, Kakao Yağı, Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Bitkisel Yağ (Palm), Tereyağı (Süt Ürünü), Emülgatör (Ayçiçek Lesitini, Poligliserol Polirisinolat), Aroma verici (Vanilin)], Gofret Yaprağı %20,1 [Buğday Unu (Gluten içerir), Patates Nişastası, Kabartıcılar (Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat, Amonyum Hidrojen Karbonat), Tuz, Emülgatör (Ayçiçek Lesitini), Hindistan Cevizi Yağı, Yağı Azaltılmış Kakao Tozu, Maya Ekstraktı]. Sütlü çikolatadaki süt kuru maddesi en az %27, kakao kuru maddesi en az %29' dur.\n\nAlerjen Uyarısı\nFındık Püresi, Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Buğday Unu (Gluten içerir), Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Tereyağı (Süt Ürünü). Eser miktarda Soya Ürünü, Susam ve Yer Fıstığı ve Yumurta içerebilir\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.",
          "value": "Kullanım Önerileri\nDikkat! Buzdolabına koymayıp, 18-22 C'de muhafaza ediniz. Isıdan, kokudan, nemden uzak tutunuz.\n\nNet Miktar (g/ml)\n34\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nFındıklı Krema %46,9 [Şeker, Bitkisel Yağ (Palm), Maltodekstrin, Fındık Püresi %10,5, Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Yağı Azaltılmış Kakao Tozu, Buğday Unu (Gluten içerir), Emülgatör (Ayçiçek Lesitini), Tuz, Aroma verici], Sütlü Çikolata %33 [Şeker, Kakao Kitlesi, Kakao Yağı, Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Bitkisel Yağ (Palm), Tereyağı (Süt Ürünü), Emülgatör (Ayçiçek Lesitini, Poligliserol Polirisinolat), Aroma verici (Vanilin)], Gofret Yaprağı %20,1 [Buğday Unu (Gluten içerir), Patates Nişastası, Kabartıcılar (Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat, Amonyum Hidrojen Karbonat), Tuz, Emülgatör (Ayçiçek Lesitini), Hindistan Cevizi Yağı, Yağı Azaltılmış Kakao Tozu, Maya Ekstraktı]. Sütlü çikolatadaki süt kuru maddesi en az %27, kakao kuru maddesi en az %29' dur.\n\nAlerjen Uyarısı\nFındık Püresi, Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Buğday Unu (Gluten içerir), Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Tereyağı (Süt Ürünü). Eser miktarda Soya Ürünü, Susam ve Yer Fıstığı ve Yumurta içerebilir\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Çikolatalı Gofret 34 g",
          "value": "Eti Çikolatalı Gofret 34 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 150,
        "priceLabel": "1.50 TL",
        "discountedPrice": 138,
        "discountedPriceLabel": "1.38 TL",
        "discountRate": 8,
        "discountRateLabel": "8"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "1812300",
      "variantGroupId": "1812300",
      "images": [{ "id": "5e80e4fa-fe3f-4dde-adbe-f9f66dd157f0" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Form Limon Lifli 50 g",
          "value": "Eti Form Limon Lifli 50 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "\nEti Form Limon Lifli Kepekli Bisküvi 50 g x 24 Adet\n\nEti Form Limon Lifli Kepekli Bisküvi\nNefis limon tadı ile kendinizi formda hissettirecek, yağı %65 azaltılmış Eti Form Limon Lifli Kepekli Bisküvi ile ara öğünlerinize keyif katabilirsiniz.\n\nİçindekiler: Buğday Unu, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Oligofruktoz, Kepek %5, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Polidekstroz, İnvert Şeker Şurubu, Limon Lifi %0,6, Doğal Portakal Aroma vericisi.\n\nALLERJEN UYARISI: Glüten içerir. Eser miktarda Süt ürünü içerebilir.\n",
          "value": "\nEti Form Limon Lifli Kepekli Bisküvi 50 g x 24 Adet\n\nEti Form Limon Lifli Kepekli Bisküvi\nNefis limon tadı ile kendinizi formda hissettirecek, yağı %65 azaltılmış Eti Form Limon Lifli Kepekli Bisküvi ile ara öğünlerinize keyif katabilirsiniz.\n\nİçindekiler: Buğday Unu, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Oligofruktoz, Kepek %5, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Polidekstroz, İnvert Şeker Şurubu, Limon Lifi %0,6, Doğal Portakal Aroma vericisi.\n\nALLERJEN UYARISI: Glüten içerir. Eser miktarda Süt ürünü içerebilir.\n"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Form Limon Lifli 50 g",
          "value": "Eti Form Limon Lifli 50 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 175,
        "priceLabel": "1.75 TL",
        "discountedPrice": 149,
        "discountedPriceLabel": "1.49 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "63000081",
      "variantGroupId": "63000081",
      "images": [{ "id": "d3302c30-0687-4eb7-b6d3-3c79354eaaa6" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BAR-KL7G6"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Tadım Yer Fıstıklı Kuruyemiş Bar 30 g",
          "value": "Tadım Yer Fıstıklı Kuruyemiş Bar 30 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "TADIM",
          "value": "TADIM"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Tadım'ın kuruyemiş sektöründeki sağlık ve kalite anlayışıyla çıkardığı bu ürününün içerisinde 65% oranında yer fıstığı ve kuru meyve, yulaf, pirinç patlakları ve bal bulunuyor. Tadım'ın tüm ürünleri gibi doğal olan Kuruyemiş Bar, doyurucu özelliği ile açlığınızı yatıştırmak için de bire bir. Düşük kalorisiyle kahvaltıda, çocukların beslenme çantalarında, iş yerinizde, toplantılarda, okulda, öğün aralarında, arabada, spordan önce ve sonra, kısacası acıktığınızı hissettiğiniz her anda ve her yerde yanınızda olan Kuruyemiş Bar, sadece Tadım'da.",
          "value": "Tadım'ın kuruyemiş sektöründeki sağlık ve kalite anlayışıyla çıkardığı bu ürününün içerisinde 65% oranında yer fıstığı ve kuru meyve, yulaf, pirinç patlakları ve bal bulunuyor. Tadım'ın tüm ürünleri gibi doğal olan Kuruyemiş Bar, doyurucu özelliği ile açlığınızı yatıştırmak için de bire bir. Düşük kalorisiyle kahvaltıda, çocukların beslenme çantalarında, iş yerinizde, toplantılarda, okulda, öğün aralarında, arabada, spordan önce ve sonra, kısacası acıktığınızı hissettiğiniz her anda ve her yerde yanınızda olan Kuruyemiş Bar, sadece Tadım'da."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Tadım Yer Fıstıklı Kuruyemiş Bar 30 g",
          "value": "Tadım Yer Fıstıklı Kuruyemiş Bar 30 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 200,
        "priceLabel": "2.00 TL",
        "discountedPrice": 170,
        "discountedPriceLabel": "1.70 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "7830660X",
      "variantGroupId": "7830660X",
      "images": [{ "id": "f9cbf8d9-0494-4a96-b584-bb7b9e91f03c", "tags": [] }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Algida Frigola Fındık Çikolata 55 ml",
          "value": "Algida Frigola Fındık Çikolata 55 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "FRIGOLA",
          "value": "FRIGOLA"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Algida Frigola içeriğindeki yoğun çikolata lezzeti sayesinde çikolata krizlerinizi en hızlı, hafif ve mutluluk veren bir şekilde atlatabilirsiniz. Eşsiz çikolata kaplaması ile çıtır çıtır bir serinliğe, fındıklı çeşidi ile damağınızda iz bırakacak bir lezzete ulaşabilirsiniz.",
          "value": "Algida Frigola içeriğindeki yoğun çikolata lezzeti sayesinde çikolata krizlerinizi en hızlı, hafif ve mutluluk veren bir şekilde atlatabilirsiniz. Eşsiz çikolata kaplaması ile çıtır çıtır bir serinliğe, fındıklı çeşidi ile damağınızda iz bırakacak bir lezzete ulaşabilirsiniz."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Algida Frigola Fındık Çikolata 55 ml",
          "value": "Algida Frigola Fındık Çikolata 55 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 250,
        "priceLabel": "2.50 TL",
        "discountedPrice": 175,
        "discountedPriceLabel": "1.75 TL",
        "discountRate": 30,
        "discountRateLabel": "30"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "21042012",
      "variantGroupId": "21042012",
      "images": [{ "id": "b97ae139-4a9e-40c7-a940-79dfb546dac7" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Ezogelin Çabuk Çorba 22 g ",
          "value": "Knorr Ezogelin Çabuk Çorba 22 g "
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Acıktığında Sıcacık Bir Mola! Knorr Ezogelin Çabuk Çorba Her Zaman Yanında. Tek Yapman Gereken En Sevdiğin Kupana Ezogelin Çabuk Çorba ve Bardağın 3/4'ü kadar Kaynar Su Ekleyip Karıştırmak. Sıcacık Ezogelin Çorban 1 DK'da Hazır!",
          "value": "Acıktığında Sıcacık Bir Mola! Knorr Ezogelin Çabuk Çorba Her Zaman Yanında. Tek Yapman Gereken En Sevdiğin Kupana Ezogelin Çabuk Çorba ve Bardağın 3/4'ü kadar Kaynar Su Ekleyip Karıştırmak. Sıcacık Ezogelin Çorban 1 DK'da Hazır!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Ezogelin Çabuk Çorba 22 g ",
          "value": "Knorr Ezogelin Çabuk Çorba 22 g "
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 225,
        "priceLabel": "2.25 TL",
        "discountedPrice": 200,
        "discountedPriceLabel": "2.00 TL",
        "discountRate": 11,
        "discountRateLabel": "11"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "21042007",
      "variantGroupId": "21042007",
      "images": [{ "id": "7b5aecd5-0d61-43a7-8fe7-d1f4b2ebf4a2" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Acılı Domates Çabuk Çorba 22 g",
          "value": "Knorr Acılı Domates Çabuk Çorba 22 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Acıktığında Sıcacık Bir Mola! Knorr Acılı Domatesli Çabuk Çorba Her Zaman Yanında. Tek Yapman Gereken En Sevdiğin Kupana Acılı Domatesli Çabuk Çorba ve Bardağın 3/4'ü kadar Kaynar Su Ekleyip Karıştırmak. Sıcacık Acılı Domatesli Çorban 1 DK'da Hazır!",
          "value": "Acıktığında Sıcacık Bir Mola! Knorr Acılı Domatesli Çabuk Çorba Her Zaman Yanında. Tek Yapman Gereken En Sevdiğin Kupana Acılı Domatesli Çabuk Çorba ve Bardağın 3/4'ü kadar Kaynar Su Ekleyip Karıştırmak. Sıcacık Acılı Domatesli Çorban 1 DK'da Hazır!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Acılı Domates Çabuk Çorba 22 g",
          "value": "Knorr Acılı Domates Çabuk Çorba 22 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 225,
        "priceLabel": "2.25 TL",
        "discountedPrice": 200,
        "discountedPriceLabel": "2.00 TL",
        "discountRate": 11,
        "discountRateLabel": "11"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68611762",
      "variantGroupId": "68611762",
      "images": [
        { "id": "f0da88cf-ad5a-45bb-9472-0170091abe41" },
        { "id": "a0bf64bf-df36-4dc2-8199-b7206ad7b5e0" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "BAHARAT-4Y3ED"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Baharatlar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Kuru Nane 25 g",
          "value": "Knorr Kuru Nane 25 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "<p>Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!<br></p>",
          "value": "<p>Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!<br></p>"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Kuru Nane 25 g",
          "value": "Knorr Kuru Nane 25 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 315,
        "priceLabel": "3.15 TL",
        "discountedPrice": 200,
        "discountedPriceLabel": "2.00 TL",
        "discountRate": 37,
        "discountRateLabel": "37"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "21041980",
      "variantGroupId": "21041980",
      "images": [{ "id": "8f2c79d2-1ab1-4dfc-81ac-26ecdd418285" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Mercimek Çabuk Çorba 22 g",
          "value": "Knorr Mercimek Çabuk Çorba 22 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Çabuk Çorbalardan Mercimek Çorbası \r\r\r\nMasa lambanı yakmış, kitaplarını açmış çalışıyor musun? Peki, yanında 1’dk da hazır olacak sıcacık bir mercimek çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\r\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba",
          "value": "Çabuk Çorbalardan Mercimek Çorbası \r\r\r\nMasa lambanı yakmış, kitaplarını açmış çalışıyor musun? Peki, yanında 1’dk da hazır olacak sıcacık bir mercimek çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\r\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Mercimek Çabuk Çorba 22 g",
          "value": "Knorr Mercimek Çabuk Çorba 22 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 225,
        "priceLabel": "2.25 TL",
        "discountedPrice": 200,
        "discountedPriceLabel": "2.00 TL",
        "discountRate": 11,
        "discountRateLabel": "11"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68611766",
      "variantGroupId": "68611766",
      "images": [
        { "id": "6d595c3b-c8d7-4ee6-b1c0-a0057d3afd89" },
        { "id": "fcef6fde-263e-451e-b26a-0eab92a206ef" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "BAHARAT-4Y3ED"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Baharatlar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Kekik 20 g",
          "value": "Knorr Kekik 20 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "<p>Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!<br></p>",
          "value": "<p>Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!<br></p>"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Kekik 20 g",
          "value": "Knorr Kekik 20 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 350,
        "priceLabel": "3.50 TL",
        "discountedPrice": 200,
        "discountedPriceLabel": "2.00 TL",
        "discountRate": 43,
        "discountRateLabel": "43"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "21042017",
      "variantGroupId": "21042017",
      "images": [{ "id": "de0efd29-470e-4c53-8459-8e38c1e87cc2" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Kıtırlı Domates Çabuk Çorba 22 g",
          "value": "Knorr Kıtırlı Domates Çabuk Çorba 22 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Çabuk Çorbalardan Kıtırlı Domates Çorbası \r\nTelevizyonun karşısına kurulmuş, en sevdiğin progamı mı izliyorsun? Peki, yanında 1’dk da hazır olacak sıcacık bir kıtırlı domates çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba",
          "value": "Çabuk Çorbalardan Kıtırlı Domates Çorbası \r\nTelevizyonun karşısına kurulmuş, en sevdiğin progamı mı izliyorsun? Peki, yanında 1’dk da hazır olacak sıcacık bir kıtırlı domates çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Kıtırlı Domates Çabuk Çorba 22 g",
          "value": "Knorr Kıtırlı Domates Çabuk Çorba 22 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 225,
        "priceLabel": "2.25 TL",
        "discountedPrice": 200,
        "discountedPriceLabel": "2.00 TL",
        "discountRate": 11,
        "discountRateLabel": "11"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "21041975",
      "variantGroupId": "21041975",
      "images": [{ "id": "42dc93f6-32af-4b49-8165-c6561c021073" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Kremalı Tavuk Çabuk Çorba 18 g",
          "value": "Knorr Kremalı Tavuk Çabuk Çorba 18 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Çabuk Çorbalardan Kremalı Tavuk Çorbası\r\nSırt çantanı takmış, haritan elinde diyar diyar geziyor musun? Peki, yanında 1’dk da hazır olacak sıcacık bir kremalı tavuk çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba",
          "value": "Çabuk Çorbalardan Kremalı Tavuk Çorbası\r\nSırt çantanı takmış, haritan elinde diyar diyar geziyor musun? Peki, yanında 1’dk da hazır olacak sıcacık bir kremalı tavuk çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Kremalı Tavuk Çabuk Çorba 18 g",
          "value": "Knorr Kremalı Tavuk Çabuk Çorba 18 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 225,
        "priceLabel": "2.25 TL",
        "discountedPrice": 200,
        "discountedPriceLabel": "2.00 TL",
        "discountRate": 11,
        "discountRateLabel": "11"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "21041965",
      "variantGroupId": "21041965",
      "images": [{ "id": "04afee69-243c-489b-9b09-422af288c7c8" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Kremalı Mantar Çabuk Çorba 19 g",
          "value": "Knorr Kremalı Mantar Çabuk Çorba 19 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Çabuk Çorbalardan Kremalı Mantar Çorbası\r\nSırt çantanı takmış, haritan elinde diyar diyar geziyor musun? Peki, yanında 1’dk da hazır olacak sıcacık bir kremalı mantar çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba",
          "value": "Çabuk Çorbalardan Kremalı Mantar Çorbası\r\nSırt çantanı takmış, haritan elinde diyar diyar geziyor musun? Peki, yanında 1’dk da hazır olacak sıcacık bir kremalı mantar çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Kremalı Mantar Çabuk Çorba 19 g",
          "value": "Knorr Kremalı Mantar Çabuk Çorba 19 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 225,
        "priceLabel": "2.25 TL",
        "discountedPrice": 200,
        "discountedPriceLabel": "2.00 TL",
        "discountRate": 11,
        "discountRateLabel": "11"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "1629500",
      "variantGroupId": "1629500",
      "images": [{ "id": "e13cdf0e-0bb2-4876-a513-aaa1a93a892e" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Burçak Çörekotlu Bisküvi 91 g",
          "value": "Eti Burçak Çörekotlu Bisküvi 91 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Eti Burçak Çörekotlu Bisküvi 91 g",
          "value": "Eti Burçak Çörekotlu Bisküvi 91 g"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Burçak Çörekotlu Bisküvi 91 g",
          "value": "Eti Burçak Çörekotlu Bisküvi 91 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 250,
        "priceLabel": "2.50 TL",
        "discountedPrice": 213,
        "discountedPriceLabel": "2.13 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "NONE",
      "itemType": "SINGLE"
    },
    {
      "id": "1617100",
      "variantGroupId": "1617100",
      "images": [{ "id": "e1882127-c032-47b8-94b8-1033aac50965" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Burçak Zeytinli Bisküvi 91 g",
          "value": "Eti Burçak Zeytinli Bisküvi 91 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Eti Burçak Zeytinli Bisküvi 91 g",
          "value": "Eti Burçak Zeytinli Bisküvi 91 g"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Burçak Zeytinli Bisküvi 91 g",
          "value": "Eti Burçak Zeytinli Bisküvi 91 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 250,
        "priceLabel": "2.50 TL",
        "discountedPrice": 213,
        "discountedPriceLabel": "2.13 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "NONE",
      "itemType": "SINGLE"
    },
    {
      "id": "2233500",
      "variantGroupId": "2233500",
      "images": [{ "id": "711c994f-4ce3-496d-ae6d-7b145b51c8cd" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Tutku 100 g",
          "value": "Eti Tutku 100 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Eti Tutku Kakao Kremalı Mozaik Bisküvi Torba, kıtır mozaik bisküvisi içindeki  akışkan çikolata kreması ile çay kahvenin yanına çok yakışıyor. \n\nHem kendiniz deneyimleyin hem de misafirlerinize ikram edin diye büyük paket içerisinde sunulan Eti Tutku bisküvi, öğün aralarında canı tatlı isteyenler için de harika bir çözüm sunuyor. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n210\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Mısır Nişastası, Yağı Azaltılmış Kakao Tozu %1, Tuz, Kabartıcılar (Sodyum Asit Pirofosfat, Sodyum Hidrojen Karbonat), Aroma vericiler, Krema %30 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Susam Ezmesi, Yağı Azaltılmış Kakao Tozu %6, Fındık Püresi, Laktoz (Süt Ürünü), Keçiboynuzu Unu, Emülgatör (Ayçiçek Lesitini), Aroma vericiler, Tuz].\n\nAlerjen Uyarısı\nFındık, Gluten, Susam ve Süt ürünü içerir. Eser miktarda Soya ürünü ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.",
          "value": "Eti Tutku Kakao Kremalı Mozaik Bisküvi Torba, kıtır mozaik bisküvisi içindeki  akışkan çikolata kreması ile çay kahvenin yanına çok yakışıyor. \n\nHem kendiniz deneyimleyin hem de misafirlerinize ikram edin diye büyük paket içerisinde sunulan Eti Tutku bisküvi, öğün aralarında canı tatlı isteyenler için de harika bir çözüm sunuyor. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n210\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Mısır Nişastası, Yağı Azaltılmış Kakao Tozu %1, Tuz, Kabartıcılar (Sodyum Asit Pirofosfat, Sodyum Hidrojen Karbonat), Aroma vericiler, Krema %30 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Susam Ezmesi, Yağı Azaltılmış Kakao Tozu %6, Fındık Püresi, Laktoz (Süt Ürünü), Keçiboynuzu Unu, Emülgatör (Ayçiçek Lesitini), Aroma vericiler, Tuz].\n\nAlerjen Uyarısı\nFındık, Gluten, Susam ve Süt ürünü içerir. Eser miktarda Soya ürünü ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Tutku 100 g",
          "value": "Eti Tutku 100 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 250,
        "priceLabel": "2.50 TL",
        "discountedPrice": 213,
        "discountedPriceLabel": "2.13 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "5846700",
      "variantGroupId": "5846700",
      "images": [{ "id": "f4250744-83ec-4151-aa4c-0f6cd6cbcf5f" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "CIPS-P1OZG"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Cips & Kraker"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Gong 64 g",
          "value": "Eti Gong 64 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Tuzlu bisküviler bölümünde yer alan Eti Gong 64 g istediğiniz an patlamış mısır yeme keyfi yaşatıyor. 64 gamlık, dayanıklı ambalaj içerisinde sizlere sunulan ürünü rahatlık ile yanınızda taşıyabilirsiniz. Kolay açılan ambalajı içerisinde 8 adet disk şeklinde mısır ve pirinç patlağı bulunuyor. Besleyici içeriği buğday ve yulaf ile artırılan Eti Gong’u evde televizyon izlerken veya canınız atıştırmalık çektiğinde tüketebilirsiniz. Sağlıklı yapısı ile cipse alternatif olan ürünü doğada yürüyüş yaparken veya iş yerinde, okulda açlığınızı bastırmak için yiyebilirsiniz.\nSıvılar eşliğinde yendiğinde midede şişen ürün uzun süreli tokluk hissi yaratıyor. Ayrıca içeriğindeki diyet lifleri sayesinde kan şekerinin dengelenmesine yardımcı oluyor. Üretiminde bitkisel yağlar kullanılan ürün şekersiz yapısı ile dikkat çekiyor ve 1 porsiyonunda 138 kcal enerji bulunuyor. Tahıl bazlı olduğu için yapısında gluten barındıran ürün trans yağ içermiyor. Doğrudan güneş ışığına maruz bırakılmaması gereken ürün, ambalajı açılmadığı sürece 4 ay boyunca tazeliğini koruyor. Ürünün kuru ve serin bir ortamda muhafaza edilmesi öneriliyor.\nMısır ve pirinç patlağından oluşan lezzetli atıştırmalığı satın almak için hemen alışverişe başlayın.\nÜrün Kodu: 455113",
          "value": "Tuzlu bisküviler bölümünde yer alan Eti Gong 64 g istediğiniz an patlamış mısır yeme keyfi yaşatıyor. 64 gamlık, dayanıklı ambalaj içerisinde sizlere sunulan ürünü rahatlık ile yanınızda taşıyabilirsiniz. Kolay açılan ambalajı içerisinde 8 adet disk şeklinde mısır ve pirinç patlağı bulunuyor. Besleyici içeriği buğday ve yulaf ile artırılan Eti Gong’u evde televizyon izlerken veya canınız atıştırmalık çektiğinde tüketebilirsiniz. Sağlıklı yapısı ile cipse alternatif olan ürünü doğada yürüyüş yaparken veya iş yerinde, okulda açlığınızı bastırmak için yiyebilirsiniz.\nSıvılar eşliğinde yendiğinde midede şişen ürün uzun süreli tokluk hissi yaratıyor. Ayrıca içeriğindeki diyet lifleri sayesinde kan şekerinin dengelenmesine yardımcı oluyor. Üretiminde bitkisel yağlar kullanılan ürün şekersiz yapısı ile dikkat çekiyor ve 1 porsiyonunda 138 kcal enerji bulunuyor. Tahıl bazlı olduğu için yapısında gluten barındıran ürün trans yağ içermiyor. Doğrudan güneş ışığına maruz bırakılmaması gereken ürün, ambalajı açılmadığı sürece 4 ay boyunca tazeliğini koruyor. Ürünün kuru ve serin bir ortamda muhafaza edilmesi öneriliyor.\nMısır ve pirinç patlağından oluşan lezzetli atıştırmalığı satın almak için hemen alışverişe başlayın.\nÜrün Kodu: 455113"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Gong 64 g",
          "value": "Eti Gong 64 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 250,
        "priceLabel": "2.50 TL",
        "discountedPrice": 213,
        "discountedPriceLabel": "2.13 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "3031700",
      "variantGroupId": "3031700",
      "images": [{ "id": "22af9610-daef-470b-a7cc-3dae778a27fa" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Cin Lokmalık 114 g",
          "value": "Eti Cin Lokmalık 114 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Eti Cin Lokmalık, çocukluğun sevilen lezzetini, tek lokmalık atıştırmalıklar olarak sunar. \n\n\n\nÇay kahve yanında tüketebileceğiniz, bu tatlı mı tatlı atıştırmalık bir lokması ile bile tatlı ihtiyacınızı karşılayacak ve molalarınıza keyif katacak. \n\n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n114\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBisküvi %60 [Buğday Unu (Gluten içerir), Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Glukoz-Fruktoz Şurubu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Tuz, Aroma verici], Portakallı Sos %30 [Glukoz-Fruktoz Şurubu, Şeker, Portakal Pulpu %2,6, Kıvam Arttırıcı (Pektin), Asitliği Düzenleyici (Sitrik Asit), Doğal Portakal Aroma vericisi, Stabilizör (Trisodyum Sitrat), Renklendiriciler (Beta Karoten, Antosiyanin)], ganül %10 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Glukoz Şurubu, Kakao %3, Yenilebilir Sığır Jelatini, Asitliği Düzenleyici (Sodyum Asit Pirofosfat), Topaklanmayı Önleyici (Talk), Parlatıcı (Gam Arabik)].\n\nAlerjen Uyarısı\nGluten içerir. Eser miktarda Fındık, Susam, Süt ürünü ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.\n",
          "value": "Eti Cin Lokmalık, çocukluğun sevilen lezzetini, tek lokmalık atıştırmalıklar olarak sunar. \n\n\n\nÇay kahve yanında tüketebileceğiniz, bu tatlı mı tatlı atıştırmalık bir lokması ile bile tatlı ihtiyacınızı karşılayacak ve molalarınıza keyif katacak. \n\n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n114\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBisküvi %60 [Buğday Unu (Gluten içerir), Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Glukoz-Fruktoz Şurubu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Tuz, Aroma verici], Portakallı Sos %30 [Glukoz-Fruktoz Şurubu, Şeker, Portakal Pulpu %2,6, Kıvam Arttırıcı (Pektin), Asitliği Düzenleyici (Sitrik Asit), Doğal Portakal Aroma vericisi, Stabilizör (Trisodyum Sitrat), Renklendiriciler (Beta Karoten, Antosiyanin)], ganül %10 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Glukoz Şurubu, Kakao %3, Yenilebilir Sığır Jelatini, Asitliği Düzenleyici (Sodyum Asit Pirofosfat), Topaklanmayı Önleyici (Talk), Parlatıcı (Gam Arabik)].\n\nAlerjen Uyarısı\nGluten içerir. Eser miktarda Fındık, Susam, Süt ürünü ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.\n"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Cin Lokmalık 114 g",
          "value": "Eti Cin Lokmalık 114 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 250,
        "priceLabel": "2.50 TL",
        "discountedPrice": 213,
        "discountedPriceLabel": "2.13 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "LOW",
      "itemType": "SINGLE"
    },
    {
      "id": "1672500",
      "variantGroupId": "1672500",
      "images": [{ "id": "d1a3f888-b883-4e54-a777-0a2aa1837ecd" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "CIKOLATA-XY76W"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Çikolata"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Canga 45 g",
          "value": "Eti Canga 45 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "\nEti Canga\nCanga üzerine serpiştirilen yarım yer fıstıkları ile eşsiz bir yeme deneyimi sunar.\n\nİçindekiler: Yer Fıstığı, Şeker, Tam Yağlı Süt Tozu, Invert Şeker Şurubu, Kakao Yağı, Maltodekstrin, Bitkisel Yağ (Tam Hidrojenize Palm, Palm), Kakao Kitlesi, Peynir Altı Suyu Tozu (Süt Ürünü), Nem verici (Sorbitol), Yağı Azaltılmış Kakao Tozu, Emülgatörler (Ayçiçek Lesitini, Poligliserol Polirisinolat), Yumurta Akı Tozu, Inülin, Buğday Unu (Gluten içerir), Tuz, Tereyağı (Süt Ürünü), Aroma vericiler, Asitliği Düzenleyici (Sodyum Hidrojen Karbonat). Sütlü çikolatadaki süt kuru maddesi en az %30, kakao kuru maddesi en az %28' dir.\n\nALERJEN UYARISI: Glüten, süt ürünü, yer fıstığı ve yumurta içerir. Eser miktarda fındık ve soya ürünü içerebilir.\n",
          "value": "\nEti Canga\nCanga üzerine serpiştirilen yarım yer fıstıkları ile eşsiz bir yeme deneyimi sunar.\n\nİçindekiler: Yer Fıstığı, Şeker, Tam Yağlı Süt Tozu, Invert Şeker Şurubu, Kakao Yağı, Maltodekstrin, Bitkisel Yağ (Tam Hidrojenize Palm, Palm), Kakao Kitlesi, Peynir Altı Suyu Tozu (Süt Ürünü), Nem verici (Sorbitol), Yağı Azaltılmış Kakao Tozu, Emülgatörler (Ayçiçek Lesitini, Poligliserol Polirisinolat), Yumurta Akı Tozu, Inülin, Buğday Unu (Gluten içerir), Tuz, Tereyağı (Süt Ürünü), Aroma vericiler, Asitliği Düzenleyici (Sodyum Hidrojen Karbonat). Sütlü çikolatadaki süt kuru maddesi en az %30, kakao kuru maddesi en az %28' dir.\n\nALERJEN UYARISI: Glüten, süt ürünü, yer fıstığı ve yumurta içerir. Eser miktarda fındık ve soya ürünü içerebilir.\n"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Canga 45 g",
          "value": "Eti Canga 45 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 250,
        "priceLabel": "2.50 TL",
        "discountedPrice": 213,
        "discountedPriceLabel": "2.13 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "4933600",
      "variantGroupId": "4933600",
      "images": [{ "id": "9eaa7d76-94b2-40f4-b067-46aa8680c6a9" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Burçak Kremalı 100 g",
          "value": "Burçak Kremalı 100 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Eti Burçak Sütlü Kremalı Yulaflı 100 g., hem çok hafif hem de çok lezzetli bir atıştırmalıktır. Çayın ve kahvenin yanına çok yakışır. \n\nSade tüketebilir, bisküvilerle tatlı tarifler deneyebilirsiniz. \n\nİşletme Kayıt No\nTR-26-K-000045\n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n100\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nYulaf Ezmesi %25, Buğday Unu, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Tam Buğday Unu %12, İnvert Şeker Şurubu, Kabartıcılar (Sodyum Hidrojen Karbonat, Amonyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Melas Şurubu, Tuz, Aroma vericiler, Sütlü Krema %23 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Tam Yağlı Süt Tozu %23, Mısır Nişastası, Laktoz (Süt Ürünü), Dekstroz, Doğal Krema Aroma vericisi, Aroma vericiler, Tuz, Emülgatör (Ayçiçek Lesitini)].\n\nAlerjen Uyarısı\nGluten ve Süt ürünü içerir. Eser miktarda Fındık, susam, yumurta ve Soya ürünü içerebilir.",
          "value": "Eti Burçak Sütlü Kremalı Yulaflı 100 g., hem çok hafif hem de çok lezzetli bir atıştırmalıktır. Çayın ve kahvenin yanına çok yakışır. \n\nSade tüketebilir, bisküvilerle tatlı tarifler deneyebilirsiniz. \n\nİşletme Kayıt No\nTR-26-K-000045\n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n100\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nYulaf Ezmesi %25, Buğday Unu, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Tam Buğday Unu %12, İnvert Şeker Şurubu, Kabartıcılar (Sodyum Hidrojen Karbonat, Amonyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Melas Şurubu, Tuz, Aroma vericiler, Sütlü Krema %23 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Tam Yağlı Süt Tozu %23, Mısır Nişastası, Laktoz (Süt Ürünü), Dekstroz, Doğal Krema Aroma vericisi, Aroma vericiler, Tuz, Emülgatör (Ayçiçek Lesitini)].\n\nAlerjen Uyarısı\nGluten ve Süt ürünü içerir. Eser miktarda Fındık, susam, yumurta ve Soya ürünü içerebilir."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Burçak Kremalı 100 g",
          "value": "Burçak Kremalı 100 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 250,
        "priceLabel": "2.50 TL",
        "discountedPrice": 213,
        "discountedPriceLabel": "2.13 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "3532900",
      "variantGroupId": "3532900",
      "images": [{ "id": "c46526dc-25d2-4e8b-b5e3-aaff126c589f" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Benimo Çikolatalı 80 g",
          "value": "Eti Benimo Çikolatalı 80 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Kullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n80\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), İnvert Şeker Şurubu, Pastörize Yumurta, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Tuz, Aroma vericiler, Emülgatör (Mono ve Digliseritlerin Diasetil Tartarik Asit Esterleri), Un İşlem Maddesi (Sodyum Metabisülfit), Kuvertür Çikolata %32,3 [Şeker, Kakao Yağı, Kakao Kitlesi, Peynir Altı Suyu Tozu (Süt Ürünü), Yağı Azaltılmış Kakao Tozu, Yağsız Süt Tozu, Emülgatörler (Ayçiçek Lesitini, Poligliserol Polirisinolat), Aroma verici (Vanilin), Tuz. Kakao Kuru Maddesi En Az %35'tir.], Marshmallow %22,8 [Şeker, İnvert Şeker Şurubu, Mısır Nişastası, Nem verici (Sorbitol), Yenilebilir Sığır Jelatini, Laktoz (Süt Ürünü), Koruyucu (Potasyum Sorbat), Aroma verici], Hindistan Cevizi %5,2.\n\nAlerjen Uyarısı\nGluten, Sülfit, Süt ürünü ve Yumurta içerir. Eser miktarda Fındık, Soya ürünü ve Susam içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.",
          "value": "Kullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n80\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), İnvert Şeker Şurubu, Pastörize Yumurta, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Tuz, Aroma vericiler, Emülgatör (Mono ve Digliseritlerin Diasetil Tartarik Asit Esterleri), Un İşlem Maddesi (Sodyum Metabisülfit), Kuvertür Çikolata %32,3 [Şeker, Kakao Yağı, Kakao Kitlesi, Peynir Altı Suyu Tozu (Süt Ürünü), Yağı Azaltılmış Kakao Tozu, Yağsız Süt Tozu, Emülgatörler (Ayçiçek Lesitini, Poligliserol Polirisinolat), Aroma verici (Vanilin), Tuz. Kakao Kuru Maddesi En Az %35'tir.], Marshmallow %22,8 [Şeker, İnvert Şeker Şurubu, Mısır Nişastası, Nem verici (Sorbitol), Yenilebilir Sığır Jelatini, Laktoz (Süt Ürünü), Koruyucu (Potasyum Sorbat), Aroma verici], Hindistan Cevizi %5,2.\n\nAlerjen Uyarısı\nGluten, Sülfit, Süt ürünü ve Yumurta içerir. Eser miktarda Fındık, Soya ürünü ve Susam içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Benimo Çikolatalı 80 g",
          "value": "Eti Benimo Çikolatalı 80 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 275,
        "priceLabel": "2.75 TL",
        "discountedPrice": 234,
        "discountedPriceLabel": "2.34 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "7145658X",
      "variantGroupId": "7145658X",
      "images": [{ "id": "48070ba2-809e-4fc5-83ab-a1b91c1d0d46" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Algida Maraş Usulü Sade Kap Dondurma 105 ml",
          "value": "Algida Maraş Usulü Sade Kap Dondurma 105 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ALGİDA",
          "value": "ALGİDA"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Eşsiz bir kıvam ve aromaya sahip meşhur Maraş dövme dondurması yaz vakitlerinin serinleticisi olarak beğeninize sunuluyor. Keçi sütü ve sahlepin kendine özgü tadıyla taçlanan Algida Maraş Cup, sizlere yaz kış demeden keyifle tüketebileceğiniz serinletici Maraş usulü dondurma keyfi sunuyor. Geleneksel bir lezzet olduğu kadar dünyaca da ünlü olan Maraş dondurma, bölgede yetişen yabani orkidelerden elde edilen sahlep ve Ahir dağında beslenen keçilerin sütlerinden elde ediliyor.",
          "value": "Eşsiz bir kıvam ve aromaya sahip meşhur Maraş dövme dondurması yaz vakitlerinin serinleticisi olarak beğeninize sunuluyor. Keçi sütü ve sahlepin kendine özgü tadıyla taçlanan Algida Maraş Cup, sizlere yaz kış demeden keyifle tüketebileceğiniz serinletici Maraş usulü dondurma keyfi sunuyor. Geleneksel bir lezzet olduğu kadar dünyaca da ünlü olan Maraş dondurma, bölgede yetişen yabani orkidelerden elde edilen sahlep ve Ahir dağında beslenen keçilerin sütlerinden elde ediliyor."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Algida Maraş Usulü Sade Kap Dondurma 105 ml",
          "value": "Algida Maraş Usulü Sade Kap Dondurma 105 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 350,
        "priceLabel": "3.50 TL",
        "discountedPrice": 245,
        "discountedPriceLabel": "2.45 TL",
        "discountRate": 30,
        "discountRateLabel": "30"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "7161247X",
      "variantGroupId": "7161247X",
      "images": [{ "id": "25de0920-2214-4f12-93cb-625160371367" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Cornetto Classico Kaymaklı 125 ml",
          "value": "Cornetto Classico Kaymaklı 125 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "CORNETTO",
          "value": "CORNETTO"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Dondurmanın klasiği, dondurma gibi dondurma Cornetto Classico Kaymak! Kaymağa doyamam diyenler için Cornetto Classico Kaymak nefis çıtır külahı ve şımartan fındık parçalarıyla ilk ısırıkta başlayan lezzet serüvenini, kakaolu tatlı son ile noktalıyor.",
          "value": "Dondurmanın klasiği, dondurma gibi dondurma Cornetto Classico Kaymak! Kaymağa doyamam diyenler için Cornetto Classico Kaymak nefis çıtır külahı ve şımartan fındık parçalarıyla ilk ısırıkta başlayan lezzet serüvenini, kakaolu tatlı son ile noktalıyor."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Cornetto Classico Kaymaklı 125 ml",
          "value": "Cornetto Classico Kaymaklı 125 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 350,
        "priceLabel": "3.50 TL",
        "discountedPrice": 245,
        "discountedPriceLabel": "2.45 TL",
        "discountRate": 30,
        "discountRateLabel": "30"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68225200",
      "variantGroupId": "68225200",
      "images": [
        { "id": "b47d52fa-6811-4c4c-89dd-49be1c0a3857" },
        { "id": "4aaa45fe-78d4-4cc4-9f41-db8f43fcb86d" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "MAKARNA-71KRH"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Makarna"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Çabuk Noodle Acılı Domatesli 67 g",
          "value": "Knorr Çabuk Noodle Acılı Domatesli 67 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Acılı Domatesli Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini 4 Farklı Baharatın Uyumu ve Sebzelerden Alan Yeni Knorr Acılı Domatesli Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)",
          "value": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Acılı Domatesli Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini 4 Farklı Baharatın Uyumu ve Sebzelerden Alan Yeni Knorr Acılı Domatesli Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Çabuk Noodle Acılı Domatesli 67 g",
          "value": "Knorr Çabuk Noodle Acılı Domatesli 67 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 345,
        "priceLabel": "3.45 TL",
        "discountedPrice": 250,
        "discountedPriceLabel": "2.50 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68167038",
      "variantGroupId": "68167038",
      "images": [
        { "id": "bedf5572-e593-48a8-9169-ba7466b89858" },
        { "id": "e6026e9c-25ca-4430-8242-a2198e2f0ae3" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "MAKARNA-71KRH"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Makarna"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Çabuk Noodle Sebzeli Et Çeşnili 66 g",
          "value": "Knorr Çabuk Noodle Sebzeli Et Çeşnili 66 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Et Çeşnili Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini Gerçek Sebzelerden ve baharatlardan Alan Yeni Knorr Sebzeli Et Çeşnili Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)",
          "value": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Et Çeşnili Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini Gerçek Sebzelerden ve baharatlardan Alan Yeni Knorr Sebzeli Et Çeşnili Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Çabuk Noodle Sebzeli Et Çeşnili 66 g",
          "value": "Knorr Çabuk Noodle Sebzeli Et Çeşnili 66 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 345,
        "priceLabel": "3.45 TL",
        "discountedPrice": 250,
        "discountedPriceLabel": "2.50 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68167030",
      "variantGroupId": "68167030",
      "images": [
        { "id": "6e4988f0-cc0c-4a1c-97e1-e396688c19cb" },
        { "id": "ba99407d-826b-42ab-979f-c6489b247865" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "MAKARNA-71KRH"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Makarna"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Çabuk Noodle Tavuk Çeşnili 66 g",
          "value": "Knorr Çabuk Noodle Tavuk Çeşnili 66 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Tavuk Çeşnili Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini Gerçek Sebzelerden ve baharatlardan Alan Yeni Knorr Tavuk Çeşnili Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)",
          "value": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Tavuk Çeşnili Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini Gerçek Sebzelerden ve baharatlardan Alan Yeni Knorr Tavuk Çeşnili Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Çabuk Noodle Tavuk Çeşnili 66 g",
          "value": "Knorr Çabuk Noodle Tavuk Çeşnili 66 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 345,
        "priceLabel": "3.45 TL",
        "discountedPrice": 250,
        "discountedPriceLabel": "2.50 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68167032",
      "variantGroupId": "68167032",
      "images": [
        { "id": "3ad9e3b9-9df3-4daa-af87-0f27f53159fa" },
        { "id": "68b8fb38-c560-4b07-b919-d5188bce2d00" }
      ],
      "attributes": [
        {
          "attType": "NUMBER",
          "fieldName": "rating",
          "fieldNameLabel": "rating",
          "valueLabel": "5",
          "value": 5
        },
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "MAKARNA-71KRH"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Makarna"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Çabuk Noodle Körili 66 g",
          "value": "Knorr Çabuk Noodle Körili 66 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Körili Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini 7 Farklı Baharatın Uyumundan Alan Yeni Knorr Körili Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)",
          "value": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Körili Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini 7 Farklı Baharatın Uyumundan Alan Yeni Knorr Körili Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Çabuk Noodle Körili 66 g",
          "value": "Knorr Çabuk Noodle Körili 66 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 345,
        "priceLabel": "3.45 TL",
        "discountedPrice": 250,
        "discountedPriceLabel": "2.50 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "4031800",
      "variantGroupId": "4031800",
      "images": [{ "id": "9020d74e-6e1b-4d87-8882-6931150f3079" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Nego 110 g",
          "value": "Eti Nego 110 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Eti Nego Kakaolu Kremalı Bisküvi 110 g, kakaonun yoğun tadını sevenler için lezzetli bir alternatif. Eti Nego, kakaolu kıtır bisküvi ve nefis kremanın uyumunu bir arada sunuyor. \n\nTatlı bir şeyler atıştırmak istediğiniz zamanlara veya beş çayı vakitlerinize keyif katan Nego'yu, birbirinden lezzetli tatlı tariflerinde kullanarak da tüketebilirsiniz. \n\nEti Nego ile Cheesecake Tarifi\n\n﻿Eti Nego ile kolayca hazırlanabilen cheesecake tarifi için malzemeler:\n\nTabanı için:\n- 60 g tereyağı\n- 3 paket Eti Nego bisküvi\n\nKreması için:\n- 2 paket labne peyniri\n- 1 paket çiğ krema (200 ml)\n- 5 yemek kaşığı toz şeker\n- 3 adet yumurta\n- 1 paket vanilya\n\nYapılışı:\n1. İlk önce tereyağını yakmadan eritin. Eti Nego'ları rondodan geçirin ve tereyağı ile karıştırın. \n2. Kelepçeli kabınızın alt tabanına hazırladığını karışı iyice yayın. \n3. Daha sonra labne ve şekeri güzelce çırpın. İyice karışınca üstüne çiğ kremayı ve vanilyayı ilave edin. Karışım homojen hale gelince yumurtaları teker teker ekleyerek çırpmaya devam edin. \n4. Kremayı, önceden hazırladığınız tabanın üzerine dökün ve önceden ısıtılmış 170 derece fırında 45 dakika kadar pişirin. Buzdolabında en az 5 saat kadar bekletip servis edin. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n110\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, İnvert Şeker Şurubu, Kakao %8, Süt Tozu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Tuz, Aroma verici, Krema %20 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Nişasta, Süt Tozu, Aroma verici].\n\nAlerjen Uyarısı\nGluten ve Süt ürünü içerir. Eser miktarda Fındık, Soya ürünü ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.",
          "value": "Eti Nego Kakaolu Kremalı Bisküvi 110 g, kakaonun yoğun tadını sevenler için lezzetli bir alternatif. Eti Nego, kakaolu kıtır bisküvi ve nefis kremanın uyumunu bir arada sunuyor. \n\nTatlı bir şeyler atıştırmak istediğiniz zamanlara veya beş çayı vakitlerinize keyif katan Nego'yu, birbirinden lezzetli tatlı tariflerinde kullanarak da tüketebilirsiniz. \n\nEti Nego ile Cheesecake Tarifi\n\n﻿Eti Nego ile kolayca hazırlanabilen cheesecake tarifi için malzemeler:\n\nTabanı için:\n- 60 g tereyağı\n- 3 paket Eti Nego bisküvi\n\nKreması için:\n- 2 paket labne peyniri\n- 1 paket çiğ krema (200 ml)\n- 5 yemek kaşığı toz şeker\n- 3 adet yumurta\n- 1 paket vanilya\n\nYapılışı:\n1. İlk önce tereyağını yakmadan eritin. Eti Nego'ları rondodan geçirin ve tereyağı ile karıştırın. \n2. Kelepçeli kabınızın alt tabanına hazırladığını karışı iyice yayın. \n3. Daha sonra labne ve şekeri güzelce çırpın. İyice karışınca üstüne çiğ kremayı ve vanilyayı ilave edin. Karışım homojen hale gelince yumurtaları teker teker ekleyerek çırpmaya devam edin. \n4. Kremayı, önceden hazırladığınız tabanın üzerine dökün ve önceden ısıtılmış 170 derece fırında 45 dakika kadar pişirin. Buzdolabında en az 5 saat kadar bekletip servis edin. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n110\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, İnvert Şeker Şurubu, Kakao %8, Süt Tozu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Tuz, Aroma verici, Krema %20 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Nişasta, Süt Tozu, Aroma verici].\n\nAlerjen Uyarısı\nGluten ve Süt ürünü içerir. Eser miktarda Fındık, Soya ürünü ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Nego 110 g",
          "value": "Eti Nego 110 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 275,
        "priceLabel": "2.75 TL",
        "discountedPrice": 253,
        "discountedPriceLabel": "2.53 TL",
        "discountRate": 8,
        "discountRateLabel": "8"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "63000080",
      "variantGroupId": "63000080",
      "images": [{ "id": "fcfe42d8-2b81-4ce2-a0c4-8a552e24fba9" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BAR-KL7G6"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Tadım Fındıklı Kuruyemiş Bar 30 g",
          "value": "Tadım Fındıklı Kuruyemiş Bar 30 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "TADIM",
          "value": "TADIM"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Tadım'ın kuruyemiş sektöründeki sağlık ve kalite anlayışıyla çıkardığı bu ürününün içerisinde 63 % oranında fındık ve kuru meyve, yulaf, pirinç patlakları ve bal bulunuyor. Tadım'ın tüm ürünleri gibi doğal olan Kuruyemiş Bar, doyurucu özelliği ile açlığınızı yatıştırmak için de bire bir. Düşük kalorisiyle kahvaltıda, çocukların beslenme çantalarında, iş yerinizde, toplantılarda, okulda, öğün aralarında, arabada, spordan önce ve sonra, kısacası acıktığınızı hissettiğiniz her anda ve her yerde yanınızda olan Kuruyemiş Bar, sadece Tadım'da.",
          "value": "Tadım'ın kuruyemiş sektöründeki sağlık ve kalite anlayışıyla çıkardığı bu ürününün içerisinde 63 % oranında fındık ve kuru meyve, yulaf, pirinç patlakları ve bal bulunuyor. Tadım'ın tüm ürünleri gibi doğal olan Kuruyemiş Bar, doyurucu özelliği ile açlığınızı yatıştırmak için de bire bir. Düşük kalorisiyle kahvaltıda, çocukların beslenme çantalarında, iş yerinizde, toplantılarda, okulda, öğün aralarında, arabada, spordan önce ve sonra, kısacası acıktığınızı hissettiğiniz her anda ve her yerde yanınızda olan Kuruyemiş Bar, sadece Tadım'da."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Tadım Fındıklı Kuruyemiş Bar 30 g",
          "value": "Tadım Fındıklı Kuruyemiş Bar 30 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 300,
        "priceLabel": "3.00 TL",
        "discountedPrice": 255,
        "discountedPriceLabel": "2.55 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "2",
      "itemType": "SINGLE"
    },
    {
      "id": "63000357",
      "variantGroupId": "63000357",
      "images": [{ "id": "183ea5d8-87d9-4488-8383-347dd4f87a31" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BAR-KL7G6"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Tadım Sportif Bar 30 g",
          "value": "Tadım Sportif Bar 30 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "TADIM",
          "value": "TADIM"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Tadım'ın kuruyemiş sektöründeki sağlık ve kalite anlayışıyla çıkardığı bu ürününün içerisinde 65% oranında kuruyemiş ve kuru meyve, yulaf, pirinç patlakları ve bal bulunuyor. Tadım'ın tüm ürünleri gibi doğal olan Kuruyemiş Bar, doyurucu özelliği ile açlığınızı yatıştırmak için de bire bir. Protein kaynağı olarak spordan önce ve sonra, kahvaltıda, iş yerinizde, toplantılarda, okulda, öğün aralarında, arabada, kısacası acıktığınızı hissettiğiniz her anda ve her yerde yanınızda olan Kuruyemiş Bar, sadece Tadım'da.",
          "value": "Tadım'ın kuruyemiş sektöründeki sağlık ve kalite anlayışıyla çıkardığı bu ürününün içerisinde 65% oranında kuruyemiş ve kuru meyve, yulaf, pirinç patlakları ve bal bulunuyor. Tadım'ın tüm ürünleri gibi doğal olan Kuruyemiş Bar, doyurucu özelliği ile açlığınızı yatıştırmak için de bire bir. Protein kaynağı olarak spordan önce ve sonra, kahvaltıda, iş yerinizde, toplantılarda, okulda, öğün aralarında, arabada, kısacası acıktığınızı hissettiğiniz her anda ve her yerde yanınızda olan Kuruyemiş Bar, sadece Tadım'da."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Tadım Sportif Bar 30 g",
          "value": "Tadım Sportif Bar 30 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 300,
        "priceLabel": "3.00 TL",
        "discountedPrice": 255,
        "discountedPriceLabel": "2.55 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "3710100",
      "variantGroupId": "3710100",
      "images": [{ "id": "6da000a9-6a9a-4fa7-aabd-cb94700f705c" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Petit Beurre mini 175 g",
          "value": "Eti Petit Beurre mini 175 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Net Miktar (g/ml)\n175\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Yağsız Pastörize Süt %6, İnvert Şeker Şurubu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Tuz, Aroma verici, Un İşlem Maddesi (Sodyum Metabisülfit).\n\nAlerjen Uyarısı\nGluten, Sülfit ve Süt ürünü içerir.Eser miktarda Soya ürünü içerebilir.",
          "value": "Net Miktar (g/ml)\n175\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Yağsız Pastörize Süt %6, İnvert Şeker Şurubu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Tuz, Aroma verici, Un İşlem Maddesi (Sodyum Metabisülfit).\n\nAlerjen Uyarısı\nGluten, Sülfit ve Süt ürünü içerir.Eser miktarda Soya ürünü içerebilir."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Petit Beurre mini 175 g",
          "value": "Eti Petit Beurre mini 175 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 325,
        "priceLabel": "3.25 TL",
        "discountedPrice": 276,
        "discountedPriceLabel": "2.76 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67270301",
      "variantGroupId": "67270301",
      "images": [{ "id": "69e98a6b-3b72-4983-9563-dc81694ec398" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
          "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Lux Sabun Soft Touch 85 g",
          "value": "Lux Sabun Soft Touch 85 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "LUX",
          "value": "LUX"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Lux Soft Touch Sabun parfüm katkılı içeriği ile uzun süre kalıcı hoş koku bırakır ve gün boyu ferahlık hissi verir.",
          "value": "Lux Soft Touch Sabun parfüm katkılı içeriği ile uzun süre kalıcı hoş koku bırakır ve gün boyu ferahlık hissi verir."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Lux Sabun Soft Touch 85 g",
          "value": "Lux Sabun Soft Touch 85 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 375,
        "priceLabel": "3.75 TL",
        "discountedPrice": 290,
        "discountedPriceLabel": "2.90 TL",
        "discountRate": 23,
        "discountRateLabel": "23"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67270306",
      "variantGroupId": "67270306",
      "images": [{ "id": "3908f987-7cd0-446c-9724-355f0dc0837f" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
          "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Lux Sabun Creamy Perfection 85 g",
          "value": "Lux Sabun Creamy Perfection 85 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "LUX",
          "value": "LUX"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Belirgin Derecede Yumuşak Ciltler İçin Yağlı ve Hassa Beyaz Çiçekler",
          "value": "Belirgin Derecede Yumuşak Ciltler İçin Yağlı ve Hassa Beyaz Çiçekler"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Lux Sabun Creamy Perfection 85 g",
          "value": "Lux Sabun Creamy Perfection 85 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 375,
        "priceLabel": "3.75 TL",
        "discountedPrice": 290,
        "discountedPriceLabel": "2.90 TL",
        "discountRate": 23,
        "discountRateLabel": "23"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67270287",
      "variantGroupId": "67270287",
      "images": [{ "id": "763361e3-91a2-4ee5-9443-f1a4f33214ea" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
          "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Lux Sabun Velvet Touch 85 g",
          "value": "Lux Sabun Velvet Touch 85 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "LUX",
          "value": "LUX"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Lux velvet Touch Sabun kalıcı kokusu ile gün boyu ferah ve temiz hissetmenizi sağlar.",
          "value": "Lux velvet Touch Sabun kalıcı kokusu ile gün boyu ferah ve temiz hissetmenizi sağlar."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Lux Sabun Velvet Touch 85 g",
          "value": "Lux Sabun Velvet Touch 85 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 375,
        "priceLabel": "3.75 TL",
        "discountedPrice": 290,
        "discountedPriceLabel": "2.90 TL",
        "discountRate": 23,
        "discountRateLabel": "23"
      },
      "stockStatus": "LOW",
      "itemType": "SINGLE"
    },
    {
      "id": "67270299",
      "variantGroupId": "67270299",
      "images": [{ "id": "3b009696-91e8-4f0c-a578-4d8c7507c111" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
          "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Lux Sabun Dream Delight 85 g",
          "value": "Lux Sabun Dream Delight 85 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "LUX",
          "value": "LUX"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Lux Dream Delight Sabun ülkemizde bu kadar çok tercih edilme sebeplerinden biri de doğal ve her bütçeye uygun olmasıdır. Sabun markalarının başında gelmesi ve hemen hemen her evde kullanılması lux sabunun kendine has ve özel bir kokuya sahip olmasından kaynaklanır. Ayrıca ciltteki tüm kirleri ve mikropları etkili bir şekilde yok etme özelliğine sahip bir sabundur. Gerekli hijyeni sağlayabilmemiz için sabun seçimi çok önemlidir. Evde yaşayan kişilerin veya en önemlisi çocukların hastalanmamaları ev ve vücut temizliğine büyük oranda bağlıdır",
          "value": "Lux Dream Delight Sabun ülkemizde bu kadar çok tercih edilme sebeplerinden biri de doğal ve her bütçeye uygun olmasıdır. Sabun markalarının başında gelmesi ve hemen hemen her evde kullanılması lux sabunun kendine has ve özel bir kokuya sahip olmasından kaynaklanır. Ayrıca ciltteki tüm kirleri ve mikropları etkili bir şekilde yok etme özelliğine sahip bir sabundur. Gerekli hijyeni sağlayabilmemiz için sabun seçimi çok önemlidir. Evde yaşayan kişilerin veya en önemlisi çocukların hastalanmamaları ev ve vücut temizliğine büyük oranda bağlıdır"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Lux Sabun Dream Delight 85 g",
          "value": "Lux Sabun Dream Delight 85 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 375,
        "priceLabel": "3.75 TL",
        "discountedPrice": 290,
        "discountedPriceLabel": "2.90 TL",
        "discountRate": 23,
        "discountRateLabel": "23"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "1635000",
      "variantGroupId": "1635000",
      "images": [{ "id": "2b4d805d-9501-4eee-9006-89682e9505f3" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Burçak Çikolatalı 114 g",
          "value": "Eti Burçak Çikolatalı 114 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Eti Burçak Sütlü Çikolatalı Bisküvi, besin özellikleri açısından oldukça zengin olan Eti'nin bu geleneksel lezzeti, kepekli doğal buğday unuyla yapılması sayesinde çok hafif bir tat sunar.\n\n\n\nŞimdi ise lezzetli, ağızda dağılan, geleneksel Eti Burçak bisküvisini, nefis sütlü çikolata ile buluşturarak bisküvi keyfini ikiye katlıyor! \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz ortamda muhafaza ediniz.\n\nNet Miktar (g/ml)\n114\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBisküvi %71 [Buğday Unu, Tam Buğday Unu %24, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, İnvert Şeker Şurubu, Yağsız Süt Tozu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Pastörize Yumurta, Malt Ekstrakt (Arpa Ürünü), Kepek, Tuz, Aroma vericiler, Emülgatör (Mono ve Digliseritlerin Diasetil Tartarik Asit Esterleri), Renklendirici (Karamel)], Sütlü Çikolata %29 [Şeker, Tam Yağlı Süt Tozu, Kakao Yağı, Kakao Kitlesi, Tereyağı (Süt Ürünü), Bitkisel Yağ (Palm), Yağsız Süt Tozu, Emülgatörler (Ayçiçek Lesitini, Poligliserol Polirisinolat), Aroma verici (Vanilin), Kakao Kuru Maddesi En Az %27'dir].\n\nAlerjen Uyarısı\nGluten içerir. Eser miktarda Fındık ve Soya ürünü ve Susam içerebilir\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.",
          "value": "Eti Burçak Sütlü Çikolatalı Bisküvi, besin özellikleri açısından oldukça zengin olan Eti'nin bu geleneksel lezzeti, kepekli doğal buğday unuyla yapılması sayesinde çok hafif bir tat sunar.\n\n\n\nŞimdi ise lezzetli, ağızda dağılan, geleneksel Eti Burçak bisküvisini, nefis sütlü çikolata ile buluşturarak bisküvi keyfini ikiye katlıyor! \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz ortamda muhafaza ediniz.\n\nNet Miktar (g/ml)\n114\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBisküvi %71 [Buğday Unu, Tam Buğday Unu %24, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, İnvert Şeker Şurubu, Yağsız Süt Tozu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Pastörize Yumurta, Malt Ekstrakt (Arpa Ürünü), Kepek, Tuz, Aroma vericiler, Emülgatör (Mono ve Digliseritlerin Diasetil Tartarik Asit Esterleri), Renklendirici (Karamel)], Sütlü Çikolata %29 [Şeker, Tam Yağlı Süt Tozu, Kakao Yağı, Kakao Kitlesi, Tereyağı (Süt Ürünü), Bitkisel Yağ (Palm), Yağsız Süt Tozu, Emülgatörler (Ayçiçek Lesitini, Poligliserol Polirisinolat), Aroma verici (Vanilin), Kakao Kuru Maddesi En Az %27'dir].\n\nAlerjen Uyarısı\nGluten içerir. Eser miktarda Fındık ve Soya ürünü ve Susam içerebilir\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Burçak Çikolatalı 114 g",
          "value": "Eti Burçak Çikolatalı 114 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 350,
        "priceLabel": "3.50 TL",
        "discountedPrice": 298,
        "discountedPriceLabel": "2.98 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "1645900",
      "variantGroupId": "1645900",
      "images": [{ "id": "2480dd43-3044-48af-8c99-412a61a8c375" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BAR-KL7G6"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Lifalif Bitter Çikolatalı Yulaf Bar 35 g",
          "value": "Eti Lifalif Bitter Çikolatalı Yulaf Bar 35 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Eti Lifalif Bitter Çikolatalı Müsli Bar, yulaflı içeriği ile uzun süre tokluk sağladığı gibi, tatlı bir lezzet sunarak, çay kahve yanına da çok yakışıyor. \n\n\n\nTatlı isteğinizi hafif seçimlerle atlatmak isterseniz deneyebileceğiniz Eti Lifalif çikolatalı müsli barı, okulda, işte, yolculuklarda yanınızda taşıyarak açlığınızı bastırabilirsiniz. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve kuru ortamda saklayınız.\n\nNet Miktar (g/ml)\n35\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nYulaf Ezmesi %51, Bitter Çikolata %14,3 [Kakao Kitlesi, Şeker, Kakao, Kakao Yağı, Dekstroz, Emülgatör (Ayçiçek Lesitini), Aroma verici (Vanilin). Kakao Kuru Maddesi En Az %70'tir.], Zeytinyağı, Tam Buğday Gevreği, Hurma Özü, Elma Suyu Konsantresi, Tereyağı (Süt Ürünü), Tuz.\n\nAlerjen Uyarısı\nGluten ve Süt ürünü içerir.Eser miktarda Badem, Fındık, Yer Fıstığı ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.",
          "value": "Eti Lifalif Bitter Çikolatalı Müsli Bar, yulaflı içeriği ile uzun süre tokluk sağladığı gibi, tatlı bir lezzet sunarak, çay kahve yanına da çok yakışıyor. \n\n\n\nTatlı isteğinizi hafif seçimlerle atlatmak isterseniz deneyebileceğiniz Eti Lifalif çikolatalı müsli barı, okulda, işte, yolculuklarda yanınızda taşıyarak açlığınızı bastırabilirsiniz. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve kuru ortamda saklayınız.\n\nNet Miktar (g/ml)\n35\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nYulaf Ezmesi %51, Bitter Çikolata %14,3 [Kakao Kitlesi, Şeker, Kakao, Kakao Yağı, Dekstroz, Emülgatör (Ayçiçek Lesitini), Aroma verici (Vanilin). Kakao Kuru Maddesi En Az %70'tir.], Zeytinyağı, Tam Buğday Gevreği, Hurma Özü, Elma Suyu Konsantresi, Tereyağı (Süt Ürünü), Tuz.\n\nAlerjen Uyarısı\nGluten ve Süt ürünü içerir.Eser miktarda Badem, Fındık, Yer Fıstığı ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Lifalif Bitter Çikolatalı Yulaf Bar 35 g",
          "value": "Eti Lifalif Bitter Çikolatalı Yulaf Bar 35 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 350,
        "priceLabel": "3.50 TL",
        "discountedPrice": 298,
        "discountedPriceLabel": "2.98 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "8116790X",
      "variantGroupId": "8116790X",
      "images": [{ "id": "e7814bd9-f391-4535-9fab-c7e8daf726cc" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Algida Frootie Super Energy 105 ml",
          "value": "Algida Frootie Super Energy 105 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "FROOTIE",
          "value": "FROOTIE"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Algida Frootie Super Energy 105 ml",
          "value": "Algida Frootie Super Energy 105 ml"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Algida Frootie Super Energy 105 ml",
          "value": "Algida Frootie Super Energy 105 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 400,
        "priceLabel": "4.00 TL",
        "discountedPrice": 300,
        "discountedPriceLabel": "3.00 TL",
        "discountRate": 25,
        "discountRateLabel": "25"
      },
      "stockStatus": "LOW",
      "itemType": "SINGLE"
    },
    {
      "id": "8116795X",
      "variantGroupId": "8116795X",
      "images": [{ "id": "b7a8944c-0d45-4a51-8f1f-092a26ab668b" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Frootie Super Defence 105 ml",
          "value": "Frootie Super Defence 105 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "FROOTIE",
          "value": "FROOTIE"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Algida Frootie’den muhteşem lezzet! Portakal, limon, zencefil ve zerdeçalın birleşiminden oluşan lezzetli bir ferahlık. Hem de sadece 60 kalori, vegan ve şeker ilavesiz. ",
          "value": "Algida Frootie’den muhteşem lezzet! Portakal, limon, zencefil ve zerdeçalın birleşiminden oluşan lezzetli bir ferahlık. Hem de sadece 60 kalori, vegan ve şeker ilavesiz. "
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Frootie Super Defence 105 ml",
          "value": "Frootie Super Defence 105 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 400,
        "priceLabel": "4.00 TL",
        "discountedPrice": 300,
        "discountedPriceLabel": "3.00 TL",
        "discountRate": 25,
        "discountRateLabel": "25"
      },
      "stockStatus": "LOW",
      "itemType": "SINGLE"
    },
    {
      "id": "7830649X",
      "variantGroupId": "7830649X",
      "images": [{ "id": "4989c8b6-b170-4f84-a85c-1b1824b45c16" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Algida Boom Boom 90 ml",
          "value": "Algida Boom Boom 90 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ALGİDA",
          "value": "ALGİDA"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "İçindeki nefis yoğun çikolata lezzetine dayanamayacağın Algida Boom Boom! İçindekini görsen inanamazsin!",
          "value": "İçindeki nefis yoğun çikolata lezzetine dayanamayacağın Algida Boom Boom! İçindekini görsen inanamazsin!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Algida Boom Boom 90 ml",
          "value": "Algida Boom Boom 90 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 400,
        "priceLabel": "4.00 TL",
        "discountedPrice": 300,
        "discountedPriceLabel": "3.00 TL",
        "discountRate": 25,
        "discountRateLabel": "25"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "7400253X",
      "variantGroupId": "7400253X",
      "images": [{ "id": "6cc91d74-4c3a-4f3d-83ce-77576f1f2b80" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Nogger Sandwich 145 ml",
          "value": "Nogger Sandwich 145 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "NOGGER",
          "value": "NOGGER"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Kakao mu? Karamel mi? İkisinin arasında durma… Hem kakaolu hem karamelli Algida iki nefis bisküvi arasında… Enfes serinleten atıştırmalık Nogger Sandwich'le durma, hemen Nogger'la!",
          "value": "Kakao mu? Karamel mi? İkisinin arasında durma… Hem kakaolu hem karamelli Algida iki nefis bisküvi arasında… Enfes serinleten atıştırmalık Nogger Sandwich'le durma, hemen Nogger'la!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Nogger Sandwich 145 ml",
          "value": "Nogger Sandwich 145 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 400,
        "priceLabel": "4.00 TL",
        "discountedPrice": 300,
        "discountedPriceLabel": "3.00 TL",
        "discountRate": 25,
        "discountRateLabel": "25"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "7867059X",
      "variantGroupId": "7867059X",
      "images": [{ "id": "b4e35281-3a19-405f-a5f9-584a0c717049" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Cornetto Classico Çikolatalı 125 ml",
          "value": "Cornetto Classico Çikolatalı 125 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "CORNETTO",
          "value": "CORNETTO"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Lezzetiyle akıllardan çıkmayacak Cornetto Classico Çikolata dondurma yalnızca tatlı bir son sunmuyor. Kakao kaplı çıtır külahının tamamını kaplayan eşsiz lezzeti ile seni tatlı bir rüyaya çağırıyor.",
          "value": "Lezzetiyle akıllardan çıkmayacak Cornetto Classico Çikolata dondurma yalnızca tatlı bir son sunmuyor. Kakao kaplı çıtır külahının tamamını kaplayan eşsiz lezzeti ile seni tatlı bir rüyaya çağırıyor."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Cornetto Classico Çikolatalı 125 ml",
          "value": "Cornetto Classico Çikolatalı 125 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 450,
        "priceLabel": "4.50 TL",
        "discountedPrice": 315,
        "discountedPriceLabel": "3.15 TL",
        "discountRate": 30,
        "discountRateLabel": "30"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "31001422",
      "variantGroupId": "31001422",
      "images": [{ "id": "09dbc3a5-91d2-4a37-991a-d1f2cae01191" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BAR-KL7G6"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Züber Kidz Muzlu Kakaolu 30 g",
          "value": "Züber Kidz Muzlu Kakaolu 30 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ZUBER",
          "value": "ZUBER"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "<p>Ba-na-naaa! Çocuklarla birlikte Minionlar da ona aşık!</p><p>Züber Kidz Muzlu'da miniklere özel bir formül var. İşte o formülü açıklıyoruz: Koruyucu ve tatlandırıcı yok; hurma, muz, badem çok.</p><p>Potasyum zengini muzun, mucizevi hurma, taptaze kuruyemişler ve doğal kakaoyla muhteşem birlikteliği, ambalajlarında eğlenceli ve çılgın Minion karakterleriyle buluşuyor.</p><p>İçindekiler: Hurma, muz (%25), kakao kitlesi (%7) (kakao tozu, kakao yağı), hindiba kökü lifi, fındık, muz konsantresi</p><p>Alerjen Uyarısı: Fındık içerir. Antep fıstığı, yer fıstığı, kaju ve badem içerebilir</p>",
          "value": "<p>Ba-na-naaa! Çocuklarla birlikte Minionlar da ona aşık!</p><p>Züber Kidz Muzlu'da miniklere özel bir formül var. İşte o formülü açıklıyoruz: Koruyucu ve tatlandırıcı yok; hurma, muz, badem çok.</p><p>Potasyum zengini muzun, mucizevi hurma, taptaze kuruyemişler ve doğal kakaoyla muhteşem birlikteliği, ambalajlarında eğlenceli ve çılgın Minion karakterleriyle buluşuyor.</p><p>İçindekiler: Hurma, muz (%25), kakao kitlesi (%7) (kakao tozu, kakao yağı), hindiba kökü lifi, fındık, muz konsantresi</p><p>Alerjen Uyarısı: Fındık içerir. Antep fıstığı, yer fıstığı, kaju ve badem içerebilir</p>"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Züber Kidz Muzlu Kakaolu 30 g",
          "value": "Züber Kidz Muzlu Kakaolu 30 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 495,
        "priceLabel": "4.95 TL",
        "discountedPrice": 350,
        "discountedPriceLabel": "3.50 TL",
        "discountRate": 29,
        "discountRateLabel": "29"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "31001421",
      "variantGroupId": "31001421",
      "images": [{ "id": "3d4d83c8-8bf6-4e4a-a0fb-c6dc8fa9a628" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BAR-KL7G6"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Züber Kidz Çilekli Kakaolu 30 g",
          "value": "Züber Kidz Çilekli Kakaolu 30 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ZUBER",
          "value": "ZUBER"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "<p>Çileğe bayılan çocuklar Züber Kidz çilekliye de bayılıyor. İçinde ne koruyucu var ne tatlandırıcı. En tazesinden bol bol çilek, enerjisi vermesi için de hurma var. Minionların da bu enfes lezzette parmağı var.</p><p>Tadına doyulmaz çilekle, mucizevi hurmanın, taptaze kuruyemişler ve kakaoyla muhteşem birlikteliği, ambalajlarında eğlenceli ve çılgın Minion karakterleriyle buluşuyor.</p><p>İçindekiler: Hurma, çilek (%25), fındık, hindiba kökü lifi, kakao kitlesi (%7) (kakao tozu, kakao yağı), çilek konsantresi</p><p>Alerjen Uyarısı: Fındık içerir. Antep fıstığı, yer fıstığı, kaju ve badem içerebilir.</p>",
          "value": "<p>Çileğe bayılan çocuklar Züber Kidz çilekliye de bayılıyor. İçinde ne koruyucu var ne tatlandırıcı. En tazesinden bol bol çilek, enerjisi vermesi için de hurma var. Minionların da bu enfes lezzette parmağı var.</p><p>Tadına doyulmaz çilekle, mucizevi hurmanın, taptaze kuruyemişler ve kakaoyla muhteşem birlikteliği, ambalajlarında eğlenceli ve çılgın Minion karakterleriyle buluşuyor.</p><p>İçindekiler: Hurma, çilek (%25), fındık, hindiba kökü lifi, kakao kitlesi (%7) (kakao tozu, kakao yağı), çilek konsantresi</p><p>Alerjen Uyarısı: Fındık içerir. Antep fıstığı, yer fıstığı, kaju ve badem içerebilir.</p>"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Züber Kidz Çilekli Kakaolu 30 g",
          "value": "Züber Kidz Çilekli Kakaolu 30 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 495,
        "priceLabel": "4.95 TL",
        "discountedPrice": 350,
        "discountedPriceLabel": "3.50 TL",
        "discountRate": 29,
        "discountRateLabel": "29"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67476103",
      "variantGroupId": "67476103",
      "images": [
        { "id": "eee34e74-e859-4f34-9177-5c5c960f2268" },
        { "id": "6aaa2304-e919-46c7-8a5a-7c783149d1d6" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Ezogelin Çorbası 74 g",
          "value": "Knorr Ezogelin Çorbası 74 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Güneşte olgunlaşan ve mevsiminde toplanan sebze ve baharatlardan geleneksel olarak kurutulmuş ezogelin çorbası lezzetli bir başlangıç için ideal bir üründür. Her seferinde mükemmel kıvamı ve uyumu yakaladığımız çorbalarımızda sizin için özenle seçtiğimiz malzeme ve tarifleri harmanlıyoruz. Çorbalarımızı beslenme uzmanları ve Knorr şefleriyle hazırlıyoruz. Böylece lezzeti ve pratikliği aynı pakette sofralarınıza getiriyoruz. Hava, ışık ve neme karşı koruma sağlayan 3 kata kadar dayanaklı ambalajlarımız ile de çorbalarımızın tazeliğini uzun süre koruyoruz. Knorr Ezogelin Çorbası lezzeti ve pratikliği ile ihtiyacınız olan her an size eşlik etmek için hazır. Kısıtlı zamanlarda, zor ve zaman alan yemek tarifleri ile uğraşmadan en lezzetli çorba çeşitlerinin keyfini afiyetle çıkarabilirsiniz. Menülerinizi kolay yemekler ve hızlı tariflerle süsleyebilirsiniz.\r\r\n\r\r\nKnorr Ezogelin Çorbası sofraların vazgeçilmez lezzetini en pratik hali ile sizlere sunuyor. Knorr çorbalar iftar menülerini zenginleştirir. Salata tarifleri ile hafif bir öğün yani pratik ev yemeği haline gelir. Özellikle öğrenciler ve çalışanlar için ideal bir tercih olan ezogelin çorbası, mercimeğin tadını seven ve daha kısa sürede hazır olmasını isteyen herkes için ideal bir üründür. Knorr çorba çeşitlerinin yapımı oldukça pratiktir. Bir paket ile 4 porsiyon çorba yapabilirsiniz. ",
          "value": "Güneşte olgunlaşan ve mevsiminde toplanan sebze ve baharatlardan geleneksel olarak kurutulmuş ezogelin çorbası lezzetli bir başlangıç için ideal bir üründür. Her seferinde mükemmel kıvamı ve uyumu yakaladığımız çorbalarımızda sizin için özenle seçtiğimiz malzeme ve tarifleri harmanlıyoruz. Çorbalarımızı beslenme uzmanları ve Knorr şefleriyle hazırlıyoruz. Böylece lezzeti ve pratikliği aynı pakette sofralarınıza getiriyoruz. Hava, ışık ve neme karşı koruma sağlayan 3 kata kadar dayanaklı ambalajlarımız ile de çorbalarımızın tazeliğini uzun süre koruyoruz. Knorr Ezogelin Çorbası lezzeti ve pratikliği ile ihtiyacınız olan her an size eşlik etmek için hazır. Kısıtlı zamanlarda, zor ve zaman alan yemek tarifleri ile uğraşmadan en lezzetli çorba çeşitlerinin keyfini afiyetle çıkarabilirsiniz. Menülerinizi kolay yemekler ve hızlı tariflerle süsleyebilirsiniz.\r\r\n\r\r\nKnorr Ezogelin Çorbası sofraların vazgeçilmez lezzetini en pratik hali ile sizlere sunuyor. Knorr çorbalar iftar menülerini zenginleştirir. Salata tarifleri ile hafif bir öğün yani pratik ev yemeği haline gelir. Özellikle öğrenciler ve çalışanlar için ideal bir tercih olan ezogelin çorbası, mercimeğin tadını seven ve daha kısa sürede hazır olmasını isteyen herkes için ideal bir üründür. Knorr çorba çeşitlerinin yapımı oldukça pratiktir. Bir paket ile 4 porsiyon çorba yapabilirsiniz. "
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Ezogelin Çorbası 74 g",
          "value": "Knorr Ezogelin Çorbası 74 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 425,
        "priceLabel": "4.25 TL",
        "discountedPrice": 350,
        "discountedPriceLabel": "3.50 TL",
        "discountRate": 18,
        "discountRateLabel": "18"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "20292365",
      "variantGroupId": "20292365",
      "images": [
        { "id": "b031e42c-176e-4424-a58b-621f131f4acd" },
        { "id": "4b1d9f26-b86a-46be-a210-bf35746866fc" },
        { "id": "8c5540c8-a0c9-46ee-86dd-ef7a6f2f80ea" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Mercimek Çorbası 76 g",
          "value": "Knorr Mercimek Çorbası 76 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Knorr şeflerinin ustalıkla hazırladığı lezzetli çorba çeşitlerini, sofralarınızda tüm sevdiklerinizle afiyetle paylaşın. Süzme mercimeğin ve dengeli baharatların doyumsuz lezzeti",
          "value": "Knorr şeflerinin ustalıkla hazırladığı lezzetli çorba çeşitlerini, sofralarınızda tüm sevdiklerinizle afiyetle paylaşın. Süzme mercimeğin ve dengeli baharatların doyumsuz lezzeti"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Mercimek Çorbası 76 g",
          "value": "Knorr Mercimek Çorbası 76 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 425,
        "priceLabel": "4.25 TL",
        "discountedPrice": 350,
        "discountedPriceLabel": "3.50 TL",
        "discountRate": 18,
        "discountRateLabel": "18"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67474578",
      "variantGroupId": "67474578",
      "images": [
        { "id": "c0e9d443-c3c2-4c94-8362-3af007c48998" },
        { "id": "5d174af6-4b26-4f90-91ca-7c778007ab27" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Yayla Çorbası 72 g",
          "value": "Knorr Yayla Çorbası 72 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Güneşte olgunlaşan ve mevsiminde toplanan sebze ve baharatlardan geleneksel olarak kurutulmuş Yayla Çorbası… Her seferinde mükemmel kıvamı ve uyumu yakalamak için çorbalarımız için sizin için özenle seçtiğimiz malzeme ve tarifleri harmanlıyoruz. Çorbalarımızı beslenme uzmanları ve  Knorr şefleriyle hazırlıyoruz. Hava, ışık ve neme karşı koruma sağlayan 3 katlı paketlerimiz ile çorbalarımızın tazeliğini uzun süre koruyoruz. Bir paket ile 4 porsiyon çorba yapabilirsiniz.",
          "value": "Güneşte olgunlaşan ve mevsiminde toplanan sebze ve baharatlardan geleneksel olarak kurutulmuş Yayla Çorbası… Her seferinde mükemmel kıvamı ve uyumu yakalamak için çorbalarımız için sizin için özenle seçtiğimiz malzeme ve tarifleri harmanlıyoruz. Çorbalarımızı beslenme uzmanları ve  Knorr şefleriyle hazırlıyoruz. Hava, ışık ve neme karşı koruma sağlayan 3 katlı paketlerimiz ile çorbalarımızın tazeliğini uzun süre koruyoruz. Bir paket ile 4 porsiyon çorba yapabilirsiniz."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Yayla Çorbası 72 g",
          "value": "Knorr Yayla Çorbası 72 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 425,
        "priceLabel": "4.25 TL",
        "discountedPrice": 350,
        "discountedPriceLabel": "3.50 TL",
        "discountRate": 18,
        "discountRateLabel": "18"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "21004809",
      "variantGroupId": "21004809",
      "images": [
        { "id": "826786b7-b0a2-4364-a710-6db47edcc0fa" },
        { "id": "b42fbccd-85ce-46f1-a9a7-aed2765db124" },
        { "id": "9b684ece-8072-4930-b4d8-e5600e39cec1" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Kremalı Tavuk Çorbası 65 g",
          "value": "Knorr Kremalı Tavuk Çorbası 65 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Knorr'dan sofralarınızı şenlendirecek Kremalı Tavuk Çorbası  ürünü bir tık uzağınızda incelemenizi bekliyor. Knorr'un lezzetli çorbalarına daha yakından bakın.",
          "value": "Knorr'dan sofralarınızı şenlendirecek Kremalı Tavuk Çorbası  ürünü bir tık uzağınızda incelemenizi bekliyor. Knorr'un lezzetli çorbalarına daha yakından bakın."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Kremalı Tavuk Çorbası 65 g",
          "value": "Knorr Kremalı Tavuk Çorbası 65 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 425,
        "priceLabel": "4.25 TL",
        "discountedPrice": 350,
        "discountedPriceLabel": "3.50 TL",
        "discountRate": 18,
        "discountRateLabel": "18"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67129112",
      "variantGroupId": "67129112",
      "images": [
        { "id": "87f183e7-a681-443f-a49c-dae8bcd7538a" },
        { "id": "cbc8665a-ae39-4c4b-ac05-02c8289c3506" },
        { "id": "745c5b77-61ec-4cc8-9e82-64b98203c34f" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Kremalı Domates Çorbası 69 g",
          "value": "Knorr Kremalı Domates Çorbası 69 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Knorr Domates Çorbası, artık 100% sürdürülebilir tarım ile üretilmiş domatesler ile hazırlanıyor. Çocuklarımız da bizler gibi domatesin mis gibi kokusunu içlerine çekip, yıllar boyunca çorbalarımızda aynı lezzeti bulabilsinler diye...",
          "value": "Knorr Domates Çorbası, artık 100% sürdürülebilir tarım ile üretilmiş domatesler ile hazırlanıyor. Çocuklarımız da bizler gibi domatesin mis gibi kokusunu içlerine çekip, yıllar boyunca çorbalarımızda aynı lezzeti bulabilsinler diye..."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Kremalı Domates Çorbası 69 g",
          "value": "Knorr Kremalı Domates Çorbası 69 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 425,
        "priceLabel": "4.25 TL",
        "discountedPrice": 350,
        "discountedPriceLabel": "3.50 TL",
        "discountRate": 18,
        "discountRateLabel": "18"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68611760",
      "variantGroupId": "68611760",
      "images": [
        { "id": "231cf497-ca8d-4dfd-be79-860f7425a738" },
        { "id": "b8d3540f-8703-49ae-89bf-c41aeb381f7d" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "BAHARAT-4Y3ED"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Baharatlar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Pul Biber 65 g",
          "value": "Knorr Pul Biber 65 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!",
          "value": "Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Pul Biber 65 g",
          "value": "Knorr Pul Biber 65 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 620,
        "priceLabel": "6.20 TL",
        "discountedPrice": 350,
        "discountedPriceLabel": "3.50 TL",
        "discountRate": 44,
        "discountRateLabel": "44"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "31001420",
      "variantGroupId": "31001420",
      "images": [{ "id": "21cd41dd-505a-4580-86d0-5c91dc87ac94" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BAR-KL7G6"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Bar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Züber Kidz Kakaolu 30 g",
          "value": "Züber Kidz Kakaolu 30 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ZUBER",
          "value": "ZUBER"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "<p>Çikolatanın peşinden koşan çocuklar Züber Kakaolu Kidz'le abur cuburu unutuyor. Kakaonun mutluluk veren tadı çocuklar için bu kez hurma, badem ve fındıkla bir araya geliyor. Koruyucusuz, tatlandırıcız, glutensiz ve şeker ilavesiz bu bara Minionların aşık olduğu söyleniyor.</p><p>Mutluluk veren kakaoyla, mucizevi hurmanın, taptaze kuruyemişler ile muhteşem birlikteliği, ambalajlarında eğlenceli ve çılgın Minion karakterleriyle buluşuyor</p><p>İçindekiler: Hurma, fındık (%20), kakao kitlesi (%7) (kakao tozu, kakao yağı), hindiba kökü lif</p>",
          "value": "<p>Çikolatanın peşinden koşan çocuklar Züber Kakaolu Kidz'le abur cuburu unutuyor. Kakaonun mutluluk veren tadı çocuklar için bu kez hurma, badem ve fındıkla bir araya geliyor. Koruyucusuz, tatlandırıcız, glutensiz ve şeker ilavesiz bu bara Minionların aşık olduğu söyleniyor.</p><p>Mutluluk veren kakaoyla, mucizevi hurmanın, taptaze kuruyemişler ile muhteşem birlikteliği, ambalajlarında eğlenceli ve çılgın Minion karakterleriyle buluşuyor</p><p>İçindekiler: Hurma, fındık (%20), kakao kitlesi (%7) (kakao tozu, kakao yağı), hindiba kökü lif</p>"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Züber Kidz Kakaolu 30 g",
          "value": "Züber Kidz Kakaolu 30 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 495,
        "priceLabel": "4.95 TL",
        "discountedPrice": 350,
        "discountedPriceLabel": "3.50 TL",
        "discountRate": 29,
        "discountRateLabel": "29"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68611746",
      "variantGroupId": "68611746",
      "images": [
        { "id": "ee8f1e17-fb7a-43cf-bfe1-f1ad8c8cfe60" },
        { "id": "d0fb0032-db04-4656-9f39-fc44ba3798da" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "BAHARAT-4Y3ED"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Baharatlar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Zencefil 50 G",
          "value": "Knorr Zencefil 50 G"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "<p>Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!<br></p>",
          "value": "<p>Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!<br></p>"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Zencefil 50 G",
          "value": "Knorr Zencefil 50 G"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 850,
        "priceLabel": "8.50 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 41,
        "discountRateLabel": "41"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "70003293",
      "variantGroupId": "70003293",
      "images": [
        { "id": "fdc8f83f-edb9-4686-abee-cd4a8c1bf1a0" },
        { "id": "b1642e68-17cb-46f7-a1e0-678dea37c391" },
        { "id": "0e8196b3-1271-4be2-89b1-459359c57b30" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "SOSLAR-U48MD"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Soslar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Bolonez Makarna Sosu 45 g",
          "value": "Knorr Bolonez Makarna Sosu 45 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Knorr'dan İtalyan Usulü tam tadında tam kıvamında Bolonez makarna sosu. Geleneksel yönteme göre daha az kıyma kullanımı sağlar. Kıymalı yemeklerde lezzet ve miktar artırıcı olarak kullanılabilir. Knorr Bolonez sosu'nu kıyma ilave etmeden 'Domates Sos' olarak da kullanabilirsiniz. Farklı bir lezzet için şeflerimiz Knorr Bolonez makarna sosuyla hazırlanan lazanya öneriyor. Yaklaşık 3 kişiliktir.",
          "value": "Knorr'dan İtalyan Usulü tam tadında tam kıvamında Bolonez makarna sosu. Geleneksel yönteme göre daha az kıyma kullanımı sağlar. Kıymalı yemeklerde lezzet ve miktar artırıcı olarak kullanılabilir. Knorr Bolonez sosu'nu kıyma ilave etmeden 'Domates Sos' olarak da kullanabilirsiniz. Farklı bir lezzet için şeflerimiz Knorr Bolonez makarna sosuyla hazırlanan lazanya öneriyor. Yaklaşık 3 kişiliktir."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Bolonez Makarna Sosu 45 g",
          "value": "Knorr Bolonez Makarna Sosu 45 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 695,
        "priceLabel": "6.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68225181",
      "variantGroupId": "68225181",
      "images": [
        { "id": "66f0603e-856b-4c53-ab2e-2a138dc14453" },
        { "id": "dbe405f5-5f98-44ab-85e8-8590dd33d05d" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Anadolu Tahıllı Refika Tarhana Çorbası 85 g",
          "value": "Knorr Anadolu Tahıllı Refika Tarhana Çorbası 85 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Tarifi Refika'dan Lezzeti Knorr'dan! Besleyici Anadolu Tahılları Refika Birgül'ün özel tarifiyle, Knorr'la sofranızda! Geleneksel Tarhana Çorbası Anadolu'nun Leziz Erişteleri ve Zamanında Toplanıp, Sizler İçin Kurutulmuş Sebze ve Baharatlarla Bir Araya Geliyor. Bambaşka bir kurutulmuş çorba deneyimi için yeni Knorr Refika'dan Erişteli Tarhana Çorbasını Mutlaka Deneyin! ",
          "value": "Tarifi Refika'dan Lezzeti Knorr'dan! Besleyici Anadolu Tahılları Refika Birgül'ün özel tarifiyle, Knorr'la sofranızda! Geleneksel Tarhana Çorbası Anadolu'nun Leziz Erişteleri ve Zamanında Toplanıp, Sizler İçin Kurutulmuş Sebze ve Baharatlarla Bir Araya Geliyor. Bambaşka bir kurutulmuş çorba deneyimi için yeni Knorr Refika'dan Erişteli Tarhana Çorbasını Mutlaka Deneyin! "
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Anadolu Tahıllı Refika Tarhana Çorbası 85 g",
          "value": "Knorr Anadolu Tahıllı Refika Tarhana Çorbası 85 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 695,
        "priceLabel": "6.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "LOW",
      "itemType": "SINGLE"
    },
    {
      "id": "67707904",
      "variantGroupId": "67707904",
      "images": [{ "id": "dbe78c9b-c53e-4082-a58a-fd9c5a731d0d" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "MAKARNA-71KRH"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Makarna"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Napoliten Çabuk Makarna 67 g",
          "value": "Knorr Napoliten Çabuk Makarna 67 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Karnınız Aç Zamanınız Azsa, Knorr Çabuk Makarna 5 Dakikada Hazır! Enfes Napoliten Soslu Makarna İçin İhtiyacın Olan Tek Şey Sıcak Su. Su Isıtıcısında Kaynattığın Suyu, Paket İçinde Gösterilen Alana Kadar Doldur, İyice Karıştır, Kapağını Kapat, 5 Dakika Bekle ve Makarnan Hazır! Afiyet Olsun ?",
          "value": "Karnınız Aç Zamanınız Azsa, Knorr Çabuk Makarna 5 Dakikada Hazır! Enfes Napoliten Soslu Makarna İçin İhtiyacın Olan Tek Şey Sıcak Su. Su Isıtıcısında Kaynattığın Suyu, Paket İçinde Gösterilen Alana Kadar Doldur, İyice Karıştır, Kapağını Kapat, 5 Dakika Bekle ve Makarnan Hazır! Afiyet Olsun ?"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Napoliten Çabuk Makarna 67 g",
          "value": "Knorr Napoliten Çabuk Makarna 67 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 695,
        "priceLabel": "6.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67903861",
      "variantGroupId": "67903861",
      "images": [
        { "id": "6e82a0bc-2df3-4eb9-ad5a-a13c1e2e852b" },
        { "id": "da5fa587-0171-4985-a7d2-2915acc5286f" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "CIPS-P1OZG"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Cips & Kraker"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Veggies Yeşil Kabak Kıtırı 20 g",
          "value": "Knorr Veggies Yeşil Kabak Kıtırı 20 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Potasyum, Protein ve Lif Kaynağı Yeşil Kabak Kıtırlarını Hemen Denemelisin!",
          "value": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Potasyum, Protein ve Lif Kaynağı Yeşil Kabak Kıtırlarını Hemen Denemelisin!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Veggies Yeşil Kabak Kıtırı 20 g",
          "value": "Knorr Veggies Yeşil Kabak Kıtırı 20 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 895,
        "priceLabel": "8.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 44,
        "discountRateLabel": "44"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68225179",
      "variantGroupId": "68225179",
      "images": [{ "id": "5f52e09e-eebd-4b70-9202-58098ceb7358" }],
      "attributes": [
        {
          "attType": "NUMBER",
          "fieldName": "rating",
          "fieldNameLabel": "rating",
          "valueLabel": "5",
          "value": 5
        },
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Anadolu Tahıllı Refika Tavuk Çorbası 75 g",
          "value": "Knorr Anadolu Tahıllı Refika Tavuk Çorbası 75 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Tarifi Refika'dan Lezzeti Knorr'dan! Besleyici Anadolu Tahılları Refika Birgül'ün özel tarifiyle, Knorr'la sofranızda! Banvit'in Leziz Tavukları, Besleyici Kuskus, Mantar ve zamanında toplanıp, Sizler İçin Kurutulan Sebze ve Baharatların Harmanıyla Hazırlandı.  Bambaşka bir kurutulmuş çorba deneyimi için yeni Knorr Refika'dan Kuskuslu, Mantarlı Tavuk Çorbasını Mutlaka Deneyin! ",
          "value": "Tarifi Refika'dan Lezzeti Knorr'dan! Besleyici Anadolu Tahılları Refika Birgül'ün özel tarifiyle, Knorr'la sofranızda! Banvit'in Leziz Tavukları, Besleyici Kuskus, Mantar ve zamanında toplanıp, Sizler İçin Kurutulan Sebze ve Baharatların Harmanıyla Hazırlandı.  Bambaşka bir kurutulmuş çorba deneyimi için yeni Knorr Refika'dan Kuskuslu, Mantarlı Tavuk Çorbasını Mutlaka Deneyin! "
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Anadolu Tahıllı Refika Tavuk Çorbası 75 g",
          "value": "Knorr Anadolu Tahıllı Refika Tavuk Çorbası 75 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 695,
        "priceLabel": "6.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67793860",
      "variantGroupId": "67793860",
      "images": [
        { "id": "134a6903-0a98-43a0-8271-8738f2cfbd47" },
        { "id": "0a0530cd-63f6-4334-946a-ca75c573e8ac" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Firikli Ezogelin Çorbası 98 g",
          "value": "Knorr Firikli Ezogelin Çorbası 98 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Kalabalık sofra sevenlere; Knorr’dan Firik Bulgurlu Ezogelin Çorbası\n\nSevdiğiniz ezogelin çorbası lezzetini Anadolu’nun besleyici tahıllarından firik bulguru ve kuru baklagillerinden mercimek ile bir araya getirdik.\n\nİyi bir haberimiz var!\nSürdürülebilir domatesler kullanılarak hazırlanan Knorr Firik Bulgurlu Ezogelin Çorbası, yüksek protein ve lif kaynağı içeriğiyle Anadolu’nun eşsiz lezzetlerini sofranıza getiriyor. Güneşte olgunlaşan ve mevsiminde toplanan sebze, tahıl ve baharatları geleneksel yöntemlerle kurutarak hazırladığımız Knorr Firik Bulgurlu Ezogelin Çorbası vazgeçemediğiniz ezogelin lezzetini daha da vazgeçilmez kılıyor.\n\nKnorr şeflerinin ustalıkla hazırladıkları lezzetli çorba çeşitlerini sofralarınızda tüm sevdiklerinizle afiyetle paylaşın.\n•\tMükemmel lezzetli ve besleyici çorbalarımızı yaratırken Knorr şefleri ve beslenme uzmanları ile çalışıyoruz.\n•\tTarhana gibi kuruttuğumuz çorbalarımızın tazeliğini, hava, ışık ve neme karşı koruma sağlayan 3 katlı paketlerimiz ile uzun süre koruyoruz.\n•\tBir pakette 4 kişilik çorba bulunuyor.",
          "value": "Kalabalık sofra sevenlere; Knorr’dan Firik Bulgurlu Ezogelin Çorbası\n\nSevdiğiniz ezogelin çorbası lezzetini Anadolu’nun besleyici tahıllarından firik bulguru ve kuru baklagillerinden mercimek ile bir araya getirdik.\n\nİyi bir haberimiz var!\nSürdürülebilir domatesler kullanılarak hazırlanan Knorr Firik Bulgurlu Ezogelin Çorbası, yüksek protein ve lif kaynağı içeriğiyle Anadolu’nun eşsiz lezzetlerini sofranıza getiriyor. Güneşte olgunlaşan ve mevsiminde toplanan sebze, tahıl ve baharatları geleneksel yöntemlerle kurutarak hazırladığımız Knorr Firik Bulgurlu Ezogelin Çorbası vazgeçemediğiniz ezogelin lezzetini daha da vazgeçilmez kılıyor.\n\nKnorr şeflerinin ustalıkla hazırladıkları lezzetli çorba çeşitlerini sofralarınızda tüm sevdiklerinizle afiyetle paylaşın.\n•\tMükemmel lezzetli ve besleyici çorbalarımızı yaratırken Knorr şefleri ve beslenme uzmanları ile çalışıyoruz.\n•\tTarhana gibi kuruttuğumuz çorbalarımızın tazeliğini, hava, ışık ve neme karşı koruma sağlayan 3 katlı paketlerimiz ile uzun süre koruyoruz.\n•\tBir pakette 4 kişilik çorba bulunuyor."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Firikli Ezogelin Çorbası 98 g",
          "value": "Knorr Firikli Ezogelin Çorbası 98 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 695,
        "priceLabel": "6.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68422103",
      "variantGroupId": "68422103",
      "images": [
        { "id": "23a508e9-9f18-4fd2-aa68-84a7e7861247" },
        { "id": "19fe3d47-d2c5-4bee-a2d1-9a869a38c75d" },
        { "id": "8c2e23bd-c187-427d-aa35-508f947a23ad" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "HARCLARCESNILER-VA1Z3"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Harçlar & Çeşniler"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Mangal Harcı 40 g",
          "value": "Knorr Mangal Harcı 40 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Knorr Mangal harcı ile et ve tavuklarınız saatlerce marine edilmiş gibi lezzetli ve yumuşacık olur. Sadece 1 kg tavuk pirzola (derisiz, kemiksiz), 3 yemek kaşığı ayçiçek yağı, 3 yemek kaşığı su ekleyin. Tuz ve baharat ilave etmenize gerek yoktur. Knorr Mangal harcı'nı tavuk göğüs eti, kuzu eti, dana eti, hindi veya fileto balıklar için de kullanabilirsiniz.",
          "value": "Knorr Mangal harcı ile et ve tavuklarınız saatlerce marine edilmiş gibi lezzetli ve yumuşacık olur. Sadece 1 kg tavuk pirzola (derisiz, kemiksiz), 3 yemek kaşığı ayçiçek yağı, 3 yemek kaşığı su ekleyin. Tuz ve baharat ilave etmenize gerek yoktur. Knorr Mangal harcı'nı tavuk göğüs eti, kuzu eti, dana eti, hindi veya fileto balıklar için de kullanabilirsiniz."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Mangal Harcı 40 g",
          "value": "Knorr Mangal Harcı 40 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 645,
        "priceLabel": "6.45 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 22,
        "discountRateLabel": "22"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "20085798",
      "variantGroupId": "20085798",
      "images": [
        { "id": "8b79ebdc-2aef-4b32-9e25-dde5a8cc270c" },
        { "id": "48a615c9-0af8-4f96-88f0-f4d7385287d4" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "HARCLARCESNILER-VA1Z3"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Harçlar & Çeşniler"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Tavuk Çeşnili Mangal Lezzeti 32 g",
          "value": "Knorr Tavuk Çeşnili Mangal Lezzeti 32 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Knorr Şefleri tarafından harmanlanan Tavuk çeşnisi Knorr baharat çeşnilerinin dengeli baharat karışımızı mufağınıza lezzet, size zaman kazandıracak.  Üstelik içinde sadece doğal malzemeler var.  Bir paket ile  yaklaşık 46 porsiyona lezzet katabilirsiniz.  Kullanışlı paketiyle tazeliğini uzun süre korur bu sayede  ihtiyacınız olan her an elinizin altında.  Knorr Ürünlerini Keşfetmek İçin: https://www.herkessofraya.com/",
          "value": "Knorr Şefleri tarafından harmanlanan Tavuk çeşnisi Knorr baharat çeşnilerinin dengeli baharat karışımızı mufağınıza lezzet, size zaman kazandıracak.  Üstelik içinde sadece doğal malzemeler var.  Bir paket ile  yaklaşık 46 porsiyona lezzet katabilirsiniz.  Kullanışlı paketiyle tazeliğini uzun süre korur bu sayede  ihtiyacınız olan her an elinizin altında.  Knorr Ürünlerini Keşfetmek İçin: https://www.herkessofraya.com/"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Tavuk Çeşnili Mangal Lezzeti 32 g",
          "value": "Knorr Tavuk Çeşnili Mangal Lezzeti 32 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 645,
        "priceLabel": "6.45 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 22,
        "discountRateLabel": "22"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67889742",
      "variantGroupId": "67889742",
      "images": [
        { "id": "e8e16a3b-6ac9-434f-969a-a1e0926d11cb" },
        { "id": "0c771c2e-2833-4233-b018-ab7e9abbf96c" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "CIPS-P1OZG"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Cips & Kraker"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Veggies Havuç Kıtırı 25 g",
          "value": "Knorr Veggies Havuç Kıtırı 25 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Yağsız, Yüksek Lif ve A Vitamini Kaynağı Havuç Kıtırlarını Hemen Denemelisin!",
          "value": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Yağsız, Yüksek Lif ve A Vitamini Kaynağı Havuç Kıtırlarını Hemen Denemelisin!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Veggies Havuç Kıtırı 25 g",
          "value": "Knorr Veggies Havuç Kıtırı 25 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 895,
        "priceLabel": "8.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 44,
        "discountRateLabel": "44"
      },
      "stockStatus": "LOW",
      "itemType": "SINGLE"
    },
    {
      "id": "20270364",
      "variantGroupId": "20270364",
      "images": [
        { "id": "6cab1682-fa47-480f-91a0-0e95bd0ce934" },
        { "id": "d36e84a6-c1a7-4077-a2ac-4d8af88fb009" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GUZELLIK-Z5BVT", "AGIZ-HDMYR", "DISFIRCASI-30ZU7"],
          "listValueLabel": [
            "GÜZELLİK & KİŞİSEL BAKIM",
            "Ağız Bakım",
            "Diş Fırçası"
          ],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Signal Beyaz Güç Diş Fırçası Orta",
          "value": "Signal Beyaz Güç Diş Fırçası Orta"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "SIGNAL",
          "value": "SIGNAL"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Signal Beyaz Güç Diş Fırçası, diş ve diş eti sağlığını korur. Dişinizde oluşan bakteri ve mikropları kolayca temizler. Böylece dişlerin çürümesine engel olur. Ayrıca çürümeye bağlı ağızda oluşabilecek kötü kokuları da yok eder. Özel olarak geliştirilmiş Tynex kılları ile diş üzerinde oluşan lekeleri diş minesine zarar vermeden kolayca temizler. Diş taşı ve tartar oluşumunu engeller. Orta kıllı yapısı sayesinde diş etine zarar vermez. Dişinizin üzerinde oluşan sarı lekeleri gözle görülür şekilde yok eder.<pre>\r\n<pre>Ağız ve diş yapısına uygun olarak tasarlanan uzun ve dar yapısıyla Signal Beyaz Güç Diş Fırçası, kolay kullanımı ile sıradan fırçaların aksine ulaşılması zor yerlere rahatlıkla ulaşarak plak ve bakterileri temizler. Tynex kılları sayesinde dar diş aralarında derinlemesine bir temizlik sağlar. Kolay fırça kullanımına sahip olan tasarımıyla Signal Beyaz Güç Diş Fırçası, günlük ve düzenli bir kullanımda dişlerin ilk günkü gibi doğal beyazlığına kavuşmasını sağlar. Signal Beyaz Güç Diş Fırçası ile bembeyaz dişlere ve ışıl ışıl bir gülümsemeye sahip olabilirsiniz.",
          "value": "Signal Beyaz Güç Diş Fırçası, diş ve diş eti sağlığını korur. Dişinizde oluşan bakteri ve mikropları kolayca temizler. Böylece dişlerin çürümesine engel olur. Ayrıca çürümeye bağlı ağızda oluşabilecek kötü kokuları da yok eder. Özel olarak geliştirilmiş Tynex kılları ile diş üzerinde oluşan lekeleri diş minesine zarar vermeden kolayca temizler. Diş taşı ve tartar oluşumunu engeller. Orta kıllı yapısı sayesinde diş etine zarar vermez. Dişinizin üzerinde oluşan sarı lekeleri gözle görülür şekilde yok eder.<pre>\r\n<pre>Ağız ve diş yapısına uygun olarak tasarlanan uzun ve dar yapısıyla Signal Beyaz Güç Diş Fırçası, kolay kullanımı ile sıradan fırçaların aksine ulaşılması zor yerlere rahatlıkla ulaşarak plak ve bakterileri temizler. Tynex kılları sayesinde dar diş aralarında derinlemesine bir temizlik sağlar. Kolay fırça kullanımına sahip olan tasarımıyla Signal Beyaz Güç Diş Fırçası, günlük ve düzenli bir kullanımda dişlerin ilk günkü gibi doğal beyazlığına kavuşmasını sağlar. Signal Beyaz Güç Diş Fırçası ile bembeyaz dişlere ve ışıl ışıl bir gülümsemeye sahip olabilirsiniz."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Signal Beyaz Güç Diş Fırçası Orta",
          "value": "Signal Beyaz Güç Diş Fırçası Orta"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 795,
        "priceLabel": "7.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 37,
        "discountRateLabel": "37"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "70003552",
      "variantGroupId": "70003552",
      "images": [{ "id": "9f02ce70-a56a-4a9d-ac9c-42d144452eb3" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "BULYON-8FBTW"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Bulyon"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Tavuk Bulyon 6 lt 12 Adet",
          "value": "Knorr Tavuk Bulyon 6 lt 12 Adet"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Knorr'un en özel yemeklerinize ve çorbalarınıza lezzet katacak Tavuk Suyu Bulyon (6lt) ürününü yakından incelemek için tıklayın!",
          "value": "Knorr'un en özel yemeklerinize ve çorbalarınıza lezzet katacak Tavuk Suyu Bulyon (6lt) ürününü yakından incelemek için tıklayın!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Tavuk Bulyon 6 lt 12 Adet",
          "value": "Knorr Tavuk Bulyon 6 lt 12 Adet"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 635,
        "priceLabel": "6.35 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 21,
        "discountRateLabel": "21"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68580015",
      "variantGroupId": "68580015",
      "images": [
        { "id": "49996a06-6450-41f2-b3ea-467b3b6bc043" },
        { "id": "b5d2df69-e5fb-457a-846c-d8f7dd1e8a23" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Zerdeçallı Mercimekli Yoğurt Çorbası 98 g",
          "value": "Knorr Zerdeçallı Mercimekli Yoğurt Çorbası 98 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Dönemin vazgeçilmez lezzeti zerdeçalla zenginleştirilmiş, besleyici protein kaynağı Knorr Zerdeçallı Mercimekli Yoğurt Çorbası, şimdi sizin dokunuşunuzla daha lezzetli! Mutfağınızda kolayca bulacağınız yumurte ve yoğurt ile lezzetini kendiniz yaratın!",
          "value": "Dönemin vazgeçilmez lezzeti zerdeçalla zenginleştirilmiş, besleyici protein kaynağı Knorr Zerdeçallı Mercimekli Yoğurt Çorbası, şimdi sizin dokunuşunuzla daha lezzetli! Mutfağınızda kolayca bulacağınız yumurte ve yoğurt ile lezzetini kendiniz yaratın!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Zerdeçallı Mercimekli Yoğurt Çorbası 98 g",
          "value": "Knorr Zerdeçallı Mercimekli Yoğurt Çorbası 98 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 695,
        "priceLabel": "6.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67889740",
      "variantGroupId": "67889740",
      "images": [
        { "id": "393d17d5-4ce9-4733-8996-9a887da84148" },
        { "id": "60cf31a6-8491-4be1-ab3a-9173e0784d10" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "CIPS-P1OZG"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Cips & Kraker"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Veggies Kimyonlu Nohut Kıtırı 25 g",
          "value": "Knorr Veggies Kimyonlu Nohut Kıtırı 25 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Yüksek Protein ve Lif Kaynağı Kimyonlu Nohut Kıtırlarını Hemen Denemelisin!",
          "value": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Yüksek Protein ve Lif Kaynağı Kimyonlu Nohut Kıtırlarını Hemen Denemelisin!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Veggies Kimyonlu Nohut Kıtırı 25 g",
          "value": "Knorr Veggies Kimyonlu Nohut Kıtırı 25 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 895,
        "priceLabel": "8.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 44,
        "discountRateLabel": "44"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "20030944",
      "variantGroupId": "20030944",
      "images": [
        { "id": "80b30acd-c8aa-4ca0-90dc-bf28be38bf57" },
        { "id": "3f9b5185-8edb-40ac-9bae-37dd7cf87991" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "SOSLAR-U48MD"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Soslar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Peynirli Makarna Sosu 50 g",
          "value": "Knorr Peynirli Makarna Sosu 50 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Knorr'dan İtalyan Usulü tam tadında tam kıvamında 4 Peynirli makarna sosu. Sadece makarna sosu olarak değil, farklı birçok yemekte lezzet arttırıcı olarak kullanılabilir. Tuz ve baharat eklemenize gerek yoktur. Hazırlanmış sos, yarım paket (250 g) kuru makarna (500 g haşlanmış) için yeterlidir. Farklı bir lezzet için şeflerimiz Knorr 4 Peynirli makarna sosu ile fırında baharatlı makarna pay öneriyor. ",
          "value": "Knorr'dan İtalyan Usulü tam tadında tam kıvamında 4 Peynirli makarna sosu. Sadece makarna sosu olarak değil, farklı birçok yemekte lezzet arttırıcı olarak kullanılabilir. Tuz ve baharat eklemenize gerek yoktur. Hazırlanmış sos, yarım paket (250 g) kuru makarna (500 g haşlanmış) için yeterlidir. Farklı bir lezzet için şeflerimiz Knorr 4 Peynirli makarna sosu ile fırında baharatlı makarna pay öneriyor. "
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Peynirli Makarna Sosu 50 g",
          "value": "Knorr Peynirli Makarna Sosu 50 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 695,
        "priceLabel": "6.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68422101",
      "variantGroupId": "68422101",
      "images": [
        { "id": "78176766-66c3-481b-9646-5178bab48ff9" },
        { "id": "c2572a5a-f062-4e0e-a94b-0034456851b5" },
        { "id": "617fd6c0-f538-4c03-8351-0bb9926c6ba4" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "HARCLARCESNILER-VA1Z3"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Harçlar & Çeşniler"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Mangal Lezzeti Fırında Tavuk Çeşnisi 32 g ",
          "value": "Knorr Mangal Lezzeti Fırında Tavuk Çeşnisi 32 g "
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Knorr'dan lezzetli fırında tavuk çeşnisi mangal lezzeti ve damak tadınıza uygun nefis tarifler, pratik ürünler.",
          "value": "Knorr'dan lezzetli fırında tavuk çeşnisi mangal lezzeti ve damak tadınıza uygun nefis tarifler, pratik ürünler."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Mangal Lezzeti Fırında Tavuk Çeşnisi 32 g ",
          "value": "Knorr Mangal Lezzeti Fırında Tavuk Çeşnisi 32 g "
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 645,
        "priceLabel": "6.45 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 22,
        "discountRateLabel": "22"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "70003292",
      "variantGroupId": "70003292",
      "images": [
        { "id": "efd029de-b505-42db-8f3e-8b1786f2461d" },
        { "id": "9378d425-bc6f-49a9-98ff-65f0071906dc" },
        { "id": "90ead607-8d11-490a-8d7a-513e2afcb30e" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "SOSLAR-U48MD"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Soslar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Kremalı Mantar Makarna Sosu 52 g",
          "value": "Knorr Kremalı Mantar Makarna Sosu 52 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Knorr'un en özel tariflerinize lezzet katacak enfes Kremalı Mantarlı Makarna Sosu ürününü incelemek ve daha yakından tanımak için tıklayın! En lezzetli ve pratik soslar Knorr'da!",
          "value": "Knorr'un en özel tariflerinize lezzet katacak enfes Kremalı Mantarlı Makarna Sosu ürününü incelemek ve daha yakından tanımak için tıklayın! En lezzetli ve pratik soslar Knorr'da!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Kremalı Mantar Makarna Sosu 52 g",
          "value": "Knorr Kremalı Mantar Makarna Sosu 52 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 695,
        "priceLabel": "6.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68422097",
      "variantGroupId": "68422097",
      "images": [
        { "id": "c29442b9-772f-4574-a7fb-9168001f2fea" },
        { "id": "6a8706e2-fe90-41dc-9a34-182fb0158d4c" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "HARCLARCESNILER-VA1Z3"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Harçlar & Çeşniler"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Acılı Baharatlı Fırında Tavuk Çeşnisi 31 g ",
          "value": "Knorr Acılı Baharatlı Fırında Tavuk Çeşnisi 31 g "
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Knorr'dan hazırlaması pratik yumuşacık tavuklar için Acılı Baharatlı Fırında Tavuk Çeşnisi! Tavuklarınızı Knorr'un en özel baharatların dengeli karışımıyla hazırlanmış çeşnileri ile süsleyin. Üstelik fırın torbası da içinde!",
          "value": "Knorr'dan hazırlaması pratik yumuşacık tavuklar için Acılı Baharatlı Fırında Tavuk Çeşnisi! Tavuklarınızı Knorr'un en özel baharatların dengeli karışımıyla hazırlanmış çeşnileri ile süsleyin. Üstelik fırın torbası da içinde!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Acılı Baharatlı Fırında Tavuk Çeşnisi 31 g ",
          "value": "Knorr Acılı Baharatlı Fırında Tavuk Çeşnisi 31 g "
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 645,
        "priceLabel": "6.45 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 22,
        "discountRateLabel": "22"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67794498",
      "variantGroupId": "67794498",
      "images": [
        { "id": "1464c2ff-230e-4f17-b3e7-f618e3de1cc2" },
        { "id": "629b877f-8f5c-49fa-b026-342dfb59abf6" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Bulgurlu Analı Kızlı Çorbası 92 g",
          "value": "Knorr Bulgurlu Analı Kızlı Çorbası 92 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Geleneksel lezzetleri sofrasından eksik etmeyenlere; Knorr’dan Bulgurlu Analı Kızlı Çorbası\r\r\n\r\r\nAnadolu’nun geleneksel Analı Kızlı tarifini bulgur taneleri ile zenginleştirdik, hem lezzetini hem besleyiciliğini katladık.\r\r\n\r\r\nİyi bir haberimiz var!\r\r\nSürdürülebilir domateslerle üretilen Knorr Bulgurlu Analı Kızlı Çorbası, protein ve lif kaynağı olan içeriğiyle Anadolu’nun eşsiz lezzetlerini sofranıza getirmeye devam ediyor. Güneşte olgunlaşan ve mevsiminde toplanan sebze, tahıl ve baharatları geleneksel yöntemlerle kurutarak hazırladığımız Knorr Bulgurlu Analı Kızlı Çorbası tam tadında, tam kıvamında…\r\r\n\r\r\nKnorr şeflerinin ustalıkla hazırladıkları lezzetli çorba çeşitlerini sofralarınızda tüm sevdiklerinizle afiyetle paylaşın.\r\r\n•\tMükemmel lezzetli ve besleyici çorbalarımızı yaratırken Knorr şefleri ve beslenme uzmanları ile çalışıyoruz.\r\r\n•\tTarhana gibi kuruttuğumuz çorbalarımızın tazeliğini, hava, ışık ve neme karşı koruma sağlayan 3 katlı paketlerimiz ile uzun süre koruyoruz.\r\r\n•\tBir pakette 4 kişilik çorba bulunuyor.",
          "value": "Geleneksel lezzetleri sofrasından eksik etmeyenlere; Knorr’dan Bulgurlu Analı Kızlı Çorbası\r\r\n\r\r\nAnadolu’nun geleneksel Analı Kızlı tarifini bulgur taneleri ile zenginleştirdik, hem lezzetini hem besleyiciliğini katladık.\r\r\n\r\r\nİyi bir haberimiz var!\r\r\nSürdürülebilir domateslerle üretilen Knorr Bulgurlu Analı Kızlı Çorbası, protein ve lif kaynağı olan içeriğiyle Anadolu’nun eşsiz lezzetlerini sofranıza getirmeye devam ediyor. Güneşte olgunlaşan ve mevsiminde toplanan sebze, tahıl ve baharatları geleneksel yöntemlerle kurutarak hazırladığımız Knorr Bulgurlu Analı Kızlı Çorbası tam tadında, tam kıvamında…\r\r\n\r\r\nKnorr şeflerinin ustalıkla hazırladıkları lezzetli çorba çeşitlerini sofralarınızda tüm sevdiklerinizle afiyetle paylaşın.\r\r\n•\tMükemmel lezzetli ve besleyici çorbalarımızı yaratırken Knorr şefleri ve beslenme uzmanları ile çalışıyoruz.\r\r\n•\tTarhana gibi kuruttuğumuz çorbalarımızın tazeliğini, hava, ışık ve neme karşı koruma sağlayan 3 katlı paketlerimiz ile uzun süre koruyoruz.\r\r\n•\tBir pakette 4 kişilik çorba bulunuyor."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Bulgurlu Analı Kızlı Çorbası 92 g",
          "value": "Knorr Bulgurlu Analı Kızlı Çorbası 92 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 695,
        "priceLabel": "6.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67707906",
      "variantGroupId": "67707906",
      "images": [{ "id": "99c319ca-fc33-462d-a2d3-acbac5da4b8c" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "MAKARNA-71KRH"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Makarna"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr 3 Peynirli Çabuk Makarna 67 Gr",
          "value": "Knorr 3 Peynirli Çabuk Makarna 67 Gr"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Karnınız Aç Zamanınız Azsa, Knorr Çabuk Makarna 5 Dakikada Hazır! Birbirinden Lezziz Peynirlerle Hazırlanmış 3 Peynirli Makarna İçin İhtiyacın Olan Tek Şey Sıcak Su. Su Isıtıcısında Kaynattığın Suyu, Paket İçinde Gösterilen Alana Kadar Doldur, İyice Karıştır, Kapağını Kapat, 5 Dakika Bekle ve Makarnan Hazır! Afiyet Olsun ?",
          "value": "Karnınız Aç Zamanınız Azsa, Knorr Çabuk Makarna 5 Dakikada Hazır! Birbirinden Lezziz Peynirlerle Hazırlanmış 3 Peynirli Makarna İçin İhtiyacın Olan Tek Şey Sıcak Su. Su Isıtıcısında Kaynattığın Suyu, Paket İçinde Gösterilen Alana Kadar Doldur, İyice Karıştır, Kapağını Kapat, 5 Dakika Bekle ve Makarnan Hazır! Afiyet Olsun ?"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr 3 Peynirli Çabuk Makarna 67 Gr",
          "value": "Knorr 3 Peynirli Çabuk Makarna 67 Gr"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 695,
        "priceLabel": "6.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "70004590",
      "variantGroupId": "70004590",
      "images": [
        { "id": "248e96af-6e28-4451-817a-d46542248b14" },
        { "id": "3b5401c9-bf38-4508-b02a-2c64855f76f3" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "HARCLARCESNILER-VA1Z3"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Harçlar & Çeşniler"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Çıtır Pane Harcı 90 g",
          "value": "Knorr Çıtır Pane Harcı 90 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Dışı çıtır çıtır içi yumuşacık tavuklar pişirmek ister misiniz?\n\nO halde Knorr şefleri tarafından harmanlanan Knorr Çıtır Pane Harcı tam size göre. İçerisinde katkı maddesi bulundurmayan pane harcı mufağınıza lezzet, size zaman kazandıracak. Yalnızca tavuklara değil çeşitli yemeklere de lezzet katacak çıtır pane harcını tavuk baget haricinde et, balık ve sebzelerinize de çok yakışacak. Dengeli baharat karışımız ile elde ettiğimiz pane harcı, tavuklarınıza çıtırtı verir ve Türk Gıda Kodeksi'ne uygundur. Knorr Çıtır Pane Harcı kısıtlı zamanlarda, zor ve zaman alan yemek tariflerindense pratik yemekler ile menünüzü zenginleştirmenizi sağlar. Aniden gelen bir misafire lezzetli bir sofra hazırlamak isterseniz; Sadece 4 adet (500 gam) tavuk baget, 2 adet yumurta ve Knorr Çıtır Pane Harcı ile dışı çıtır çıtır içi yumuşacık tavuklar pişirebilirsiniz. Pane harcını Knorr şefleri özenle harmanlamıştır. Tuz ve baharat ilave etmenize gerek yoktur. Böylelikle pratik ev yemeklerinin olmazsa olmazı tavuğu farklı ve hızlı bir şekilde misafirlerinize sunabilir, menülerinizi kolay yemekler ve hızlı tariflerle süsleyebilirsiniz.\n\nKnorr Çıtır Pane Harcını, tavuk, dana, kuzu, dana, hindi, balık, deniz ürünleri, patates köftesi, sebzeler, krep, börek ve hamur işlerinde kullanabilirsiniz. Pane harcı, et üzerine de çıtır bir lezzet katar. Sıkıldığınız tarifleri eğlenceli hale getirir ve Knorr şefleri tarafından seçilen doğal lezzetlerle yemeklerinizi buluşturur.",
          "value": "Dışı çıtır çıtır içi yumuşacık tavuklar pişirmek ister misiniz?\n\nO halde Knorr şefleri tarafından harmanlanan Knorr Çıtır Pane Harcı tam size göre. İçerisinde katkı maddesi bulundurmayan pane harcı mufağınıza lezzet, size zaman kazandıracak. Yalnızca tavuklara değil çeşitli yemeklere de lezzet katacak çıtır pane harcını tavuk baget haricinde et, balık ve sebzelerinize de çok yakışacak. Dengeli baharat karışımız ile elde ettiğimiz pane harcı, tavuklarınıza çıtırtı verir ve Türk Gıda Kodeksi'ne uygundur. Knorr Çıtır Pane Harcı kısıtlı zamanlarda, zor ve zaman alan yemek tariflerindense pratik yemekler ile menünüzü zenginleştirmenizi sağlar. Aniden gelen bir misafire lezzetli bir sofra hazırlamak isterseniz; Sadece 4 adet (500 gam) tavuk baget, 2 adet yumurta ve Knorr Çıtır Pane Harcı ile dışı çıtır çıtır içi yumuşacık tavuklar pişirebilirsiniz. Pane harcını Knorr şefleri özenle harmanlamıştır. Tuz ve baharat ilave etmenize gerek yoktur. Böylelikle pratik ev yemeklerinin olmazsa olmazı tavuğu farklı ve hızlı bir şekilde misafirlerinize sunabilir, menülerinizi kolay yemekler ve hızlı tariflerle süsleyebilirsiniz.\n\nKnorr Çıtır Pane Harcını, tavuk, dana, kuzu, dana, hindi, balık, deniz ürünleri, patates köftesi, sebzeler, krep, börek ve hamur işlerinde kullanabilirsiniz. Pane harcı, et üzerine de çıtır bir lezzet katar. Sıkıldığınız tarifleri eğlenceli hale getirir ve Knorr şefleri tarafından seçilen doğal lezzetlerle yemeklerinizi buluşturur."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Çıtır Pane Harcı 90 g",
          "value": "Knorr Çıtır Pane Harcı 90 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 645,
        "priceLabel": "6.45 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 22,
        "discountRateLabel": "22"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67889738",
      "variantGroupId": "67889738",
      "images": [
        { "id": "bd610e5c-1305-4f04-b011-9150412e9f65" },
        { "id": "e09a50ae-5eea-4a49-93ef-73eb0042caae" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "CIPS-P1OZG"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Cips & Kraker"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Veggies Pancar Kıtırı 25 g",
          "value": "Knorr Veggies Pancar Kıtırı 25 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Yağsız, Protein ve Potasyum Kaynağı Pancar Kıtırlarını Hemen Denemelisin!",
          "value": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Yağsız, Protein ve Potasyum Kaynağı Pancar Kıtırlarını Hemen Denemelisin!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Veggies Pancar Kıtırı 25 g",
          "value": "Knorr Veggies Pancar Kıtırı 25 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 895,
        "priceLabel": "8.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 44,
        "discountRateLabel": "44"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "20030941",
      "variantGroupId": "20030941",
      "images": [
        { "id": "069c41b0-26e3-485a-97bb-bbb2dd9aefed" },
        { "id": "19fc99ad-3da8-4d8b-9866-a71b3c63a51e" },
        { "id": "a04b9650-6252-4a6a-b89f-ca58553b8ccc" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "SOSLAR-U48MD"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Soslar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Fesleğenli Makarna Sosu 50 g",
          "value": "Knorr Fesleğenli Makarna Sosu 50 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Knorr'dan İtalyan usulü tam tadında tam kıvamında Fesleğenli makarna sosu. Knorr Fesleğenli makarna sosu, fesleğenin müthiş lezzeti ve kokusuyla makarnalarınızın lezzetine lezzet katsın. Tuz ve baharat eklemenize gerek yoktur. Hazırlanmış sos, yarım paket (250 g) kuru makarna (500 g haşlanmış) için yeterlidir. Farklı bir lezzet için şeflerimiz Knorr Fesleğenli makarna sosuyla hazırlanan acılı sebzeli makarna öneriyor. Yaklaşık 4 kişiliktir.",
          "value": "Knorr'dan İtalyan usulü tam tadında tam kıvamında Fesleğenli makarna sosu. Knorr Fesleğenli makarna sosu, fesleğenin müthiş lezzeti ve kokusuyla makarnalarınızın lezzetine lezzet katsın. Tuz ve baharat eklemenize gerek yoktur. Hazırlanmış sos, yarım paket (250 g) kuru makarna (500 g haşlanmış) için yeterlidir. Farklı bir lezzet için şeflerimiz Knorr Fesleğenli makarna sosuyla hazırlanan acılı sebzeli makarna öneriyor. Yaklaşık 4 kişiliktir."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Fesleğenli Makarna Sosu 50 g",
          "value": "Knorr Fesleğenli Makarna Sosu 50 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 695,
        "priceLabel": "6.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "LOW",
      "itemType": "SINGLE"
    },
    {
      "id": "67277839",
      "variantGroupId": "67277839",
      "images": [
        { "id": "9880e77b-d07e-4571-8898-63c8db12e07b" },
        { "id": "609b3194-4e9b-479e-9b02-4977f5c8632a" },
        { "id": "b78d46a2-34e1-45d7-b869-0bcac876a87d" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "SOSLAR-U48MD"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Soslar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Beşamel Sos 70 g",
          "value": "Knorr Beşamel Sos 70 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Knorr şefleri tarafından özenle geliştirilen Knorr Beşamel Sos, ister fırında makarnada ister lazanyada tam tadında tam kıvamında.",
          "value": "Knorr şefleri tarafından özenle geliştirilen Knorr Beşamel Sos, ister fırında makarnada ister lazanyada tam tadında tam kıvamında."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Beşamel Sos 70 g",
          "value": "Knorr Beşamel Sos 70 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 695,
        "priceLabel": "6.95 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "20023323",
      "variantGroupId": "20023323",
      "images": [
        { "id": "83b53e40-d21e-4653-ba11-0a36a4fc8454" },
        { "id": "72dc1d08-0e9c-4de3-9f1f-31718be10507" },
        { "id": "eb2cb576-dea1-4a2d-bd0e-222e3e3e2fb1" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
          "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Dove Cream Bar Original 100 g Sabun",
          "value": "Dove Cream Bar Original 100 g Sabun"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "DOVE",
          "value": "DOVE"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "<p>Cildinize nemden gelen gerçek güzellik!</p><p>Ellerinizi ıslatın ve Dove Original Beauty Cream Bar'ı ellerinizin arasında nazikçe köpürtün. Bu köpükle vücudunuza masaj yapın ve ılık suyla yıkayın.</p><p>Cildinizin ipeksi bir yumuşaklığa ve pürüzsüzlüğe sahip olduğunu hissetmek gibisi yoktur.</p><p>Üstelik iyi bir el kremi veya vücut kremlerinin yanı sıra, doğru güzellik sabunuyla yapacağınız temizlik rutiniyle her gün bu hissi yaşayabilirsiniz.</p><p>Dove Original Beauty Cream Bar içeriğindeki nazik temizleyiciler ve klasik 1/4 nemlendirici krem ile kuru cilt bakımı yaparken, size daha yumuşak, daha pürüzsüz ve daha sağlıklı görünen bir cilt vadeder.</p>",
          "value": "<p>Cildinize nemden gelen gerçek güzellik!</p><p>Ellerinizi ıslatın ve Dove Original Beauty Cream Bar'ı ellerinizin arasında nazikçe köpürtün. Bu köpükle vücudunuza masaj yapın ve ılık suyla yıkayın.</p><p>Cildinizin ipeksi bir yumuşaklığa ve pürüzsüzlüğe sahip olduğunu hissetmek gibisi yoktur.</p><p>Üstelik iyi bir el kremi veya vücut kremlerinin yanı sıra, doğru güzellik sabunuyla yapacağınız temizlik rutiniyle her gün bu hissi yaşayabilirsiniz.</p><p>Dove Original Beauty Cream Bar içeriğindeki nazik temizleyiciler ve klasik 1/4 nemlendirici krem ile kuru cilt bakımı yaparken, size daha yumuşak, daha pürüzsüz ve daha sağlıklı görünen bir cilt vadeder.</p>"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Dove Cream Bar Original 100 g Sabun",
          "value": "Dove Cream Bar Original 100 g Sabun"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 690,
        "priceLabel": "6.90 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67307641",
      "variantGroupId": "67307641",
      "images": [
        { "id": "88b962ee-3aee-4028-8551-201e6651b940" },
        { "id": "85c61283-0dc5-441a-9368-dfab1ee30064" },
        { "id": "037c1010-6bd7-41d9-a863-27c4b7235ddb" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "HARCLARCESNILER-VA1Z3"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Harçlar & Çeşniler"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Köfte Harcı 82 g",
          "value": "Knorr Köfte Harcı 82 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Annenin köftelerini mi özledin?\r\n\r\nO halde Knorr şefleri tarafından harmanlanan Knorr Köfte Harcı tam sana göre. Knorr şefleri tarafından doğal maddelerin harmanlanmasıyla oluşturulan köfte harcı mufağınıza lezzet, size zaman kazandıracak. Üstelik annelerden ilham alınarak hazırlanan köfte harcı herkesi köftelerinize hayran bırakacak.\r\nBirçok bölgemizin köftesi kendine özgü ve meşhurdur. Ancak annelerin köfteleri her zaman unutulmazdır ve en iyisidir. Sizde Knorr Köfte Harcı ile zaman ve efordan tasarruf ederek pratik ve annenizin köftesi tadında köfteler hazırlayabilirsiniz. \r\n\r\nDengeli baharat karışımız ile elde ettiğimiz köfte harcı, hızlıca hayran bırakan köfteler hazırlamanızı sağlar ve doğal maddelerden elde edilmiştir.  Knorr Köfte Harcı kısıtlı zamanlarda, zor ve zaman alan yemek tariflerindense pratik ev yemeklerin en çok tercih edileni köfteler ile menünüzü zenginleştirmenizi sağlar. Aniden gelen bir misafire lezzetli bir sofra hazırlamak isterseniz; Sadece 500 gam köftelik kıyma, 1/2 su bardağı su, 1 yumurta ve köfte harcını kullanarak harika köfteler hazırlayabilirsiniz. Harcımız Knorr şefleri özenle harmanlamıştır. Ekmeği, soğanı içindedir ve tuz ve baharat ilave etmenize de gerek yoktur. Böylelikle pratik yemeklerin olmazsa olmazı köfteleri hızlı bir şekilde misafirlerinize sunabilir, menülerinizi kolay yemekler ve hızlı tariflerle süsleyebilirsiniz.",
          "value": "Annenin köftelerini mi özledin?\r\n\r\nO halde Knorr şefleri tarafından harmanlanan Knorr Köfte Harcı tam sana göre. Knorr şefleri tarafından doğal maddelerin harmanlanmasıyla oluşturulan köfte harcı mufağınıza lezzet, size zaman kazandıracak. Üstelik annelerden ilham alınarak hazırlanan köfte harcı herkesi köftelerinize hayran bırakacak.\r\nBirçok bölgemizin köftesi kendine özgü ve meşhurdur. Ancak annelerin köfteleri her zaman unutulmazdır ve en iyisidir. Sizde Knorr Köfte Harcı ile zaman ve efordan tasarruf ederek pratik ve annenizin köftesi tadında köfteler hazırlayabilirsiniz. \r\n\r\nDengeli baharat karışımız ile elde ettiğimiz köfte harcı, hızlıca hayran bırakan köfteler hazırlamanızı sağlar ve doğal maddelerden elde edilmiştir.  Knorr Köfte Harcı kısıtlı zamanlarda, zor ve zaman alan yemek tariflerindense pratik ev yemeklerin en çok tercih edileni köfteler ile menünüzü zenginleştirmenizi sağlar. Aniden gelen bir misafire lezzetli bir sofra hazırlamak isterseniz; Sadece 500 gam köftelik kıyma, 1/2 su bardağı su, 1 yumurta ve köfte harcını kullanarak harika köfteler hazırlayabilirsiniz. Harcımız Knorr şefleri özenle harmanlamıştır. Ekmeği, soğanı içindedir ve tuz ve baharat ilave etmenize de gerek yoktur. Böylelikle pratik yemeklerin olmazsa olmazı köfteleri hızlı bir şekilde misafirlerinize sunabilir, menülerinizi kolay yemekler ve hızlı tariflerle süsleyebilirsiniz."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Köfte Harcı 82 g",
          "value": "Knorr Köfte Harcı 82 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 645,
        "priceLabel": "6.45 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 22,
        "discountRateLabel": "22"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "70003551",
      "variantGroupId": "70003551",
      "images": [
        { "id": "df840ce6-a2c0-4039-be18-6b211d3c8151" },
        { "id": "b54107b3-b600-44c5-a82f-9790c26929ac" },
        { "id": "fd691808-e844-4b75-bfd9-721fa6abd0b5" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "BULYON-8FBTW"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Bulyon"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Et Bulyon 6 lt 12 Adet",
          "value": "Knorr Et Bulyon 6 lt 12 Adet"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Knorr'un en özel yemeklerinize ve çorbalarınıza lezzet katacak Et Suyu Bulyon (6lt) ürününü yakından incelemek için tıklayın!",
          "value": "Knorr'un en özel yemeklerinize ve çorbalarınıza lezzet katacak Et Suyu Bulyon (6lt) ürününü yakından incelemek için tıklayın!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Et Bulyon 6 lt 12 Adet",
          "value": "Knorr Et Bulyon 6 lt 12 Adet"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 635,
        "priceLabel": "6.35 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 21,
        "discountRateLabel": "21"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "20023322",
      "variantGroupId": "20023322",
      "images": [
        { "id": "1e0e9a51-592e-4021-9600-2b5c5a856fa8" },
        { "id": "0d1f985e-b483-442b-aaa4-14f96dd1c8f5" },
        { "id": "7867b1c3-3ada-4ed0-a6b7-3a13c5bfb797" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
          "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Dove Cream Bar Fresh Touch Sabun 100 g ",
          "value": "Dove Cream Bar Fresh Touch Sabun 100 g "
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "DOVE",
          "value": "DOVE"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "<p>Salatalık ve yeşil çay ferahlığını yaşamaya hazır olun!</p><p>Dove Go Fresh Cream Bar içeriğindeki ¼ nemlendirici krem sayesinde bir yandan cildinizi nemlendirirken bir yandan size salatalık ve yeşil çay ferahlığını yaşatır.</p>",
          "value": "<p>Salatalık ve yeşil çay ferahlığını yaşamaya hazır olun!</p><p>Dove Go Fresh Cream Bar içeriğindeki ¼ nemlendirici krem sayesinde bir yandan cildinizi nemlendirirken bir yandan size salatalık ve yeşil çay ferahlığını yaşatır.</p>"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Dove Cream Bar Fresh Touch Sabun 100 g ",
          "value": "Dove Cream Bar Fresh Touch Sabun 100 g "
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 690,
        "priceLabel": "6.90 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "67922085",
      "variantGroupId": "67922085",
      "images": [
        { "id": "358c0d97-c410-4e64-b45f-68827c0cf3a0" },
        { "id": "b6c759c9-71f6-4728-8991-38a2a16d637f" },
        { "id": "6835daa0-0ab0-4d62-804b-d2b3f60e906a" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
          "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Dove Cream Bar Beauty Pink Sabun 100 g",
          "value": "Dove Cream Bar Beauty Pink Sabun 100 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "DOVE",
          "value": "DOVE"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "<p>Cildinizde yumuşaklık hissinin keyfini çıkarmak için, Dove Pink Beauty Cream Bar'ı tercih edin.</p><p>¼ nemlendirici krem içeriğiyle, cildinizi sadece temizlemekle kalmaz, günün izlerini silerken bir yandan da cildinizi besler.</p>",
          "value": "<p>Cildinizde yumuşaklık hissinin keyfini çıkarmak için, Dove Pink Beauty Cream Bar'ı tercih edin.</p><p>¼ nemlendirici krem içeriğiyle, cildinizi sadece temizlemekle kalmaz, günün izlerini silerken bir yandan da cildinizi besler.</p>"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Dove Cream Bar Beauty Pink Sabun 100 g",
          "value": "Dove Cream Bar Beauty Pink Sabun 100 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 690,
        "priceLabel": "6.90 TL",
        "discountedPrice": 500,
        "discountedPriceLabel": "5.00 TL",
        "discountRate": 28,
        "discountRateLabel": "28"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "2940900",
      "variantGroupId": "2940900",
      "images": [{ "id": "e81b7b1f-40a2-4244-8f4c-b64c8ab10076" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "CIPS-P1OZG"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Cips & Kraker"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Form Kepekli 5'li 225 g",
          "value": "Eti Form Kepekli 5'li 225 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Açlığını sağlıklı ve keyifli biçimde gidermek isteyenlerin tercihi Eti Form Light kepekli bisküvi. Yağ oranı yüzde 36 azaltılmış olan Eti Form kepekli bisküvi hem ara öğünlerde hem kahvaltıda hem de anlık gelen acıkma hissiyatını giderme anlamında günün herhangi bir saatinde keyifle tüketilebiliyor.\n\nTek başına tüketmesi de son derece keyifli olan bu lezzet, peynir ve yeşilliklerle hazırlanarak da servis ediliyor. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n225\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu, Kepek %10,5, Tam Buğday Unu, Buğday Kırması, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Buğday Gluteni, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Tuz, Aroma verici, Un İşlem Maddesi (Sodyum Metabisülfit).\n\nAlerjen Uyarısı\nGluten ve Sülfit içerir. Eser miktarda Kereviz, Susam, Süt ürünü, Yer Fıstığı ve Yumurta içerebilir.",
          "value": "Açlığını sağlıklı ve keyifli biçimde gidermek isteyenlerin tercihi Eti Form Light kepekli bisküvi. Yağ oranı yüzde 36 azaltılmış olan Eti Form kepekli bisküvi hem ara öğünlerde hem kahvaltıda hem de anlık gelen acıkma hissiyatını giderme anlamında günün herhangi bir saatinde keyifle tüketilebiliyor.\n\nTek başına tüketmesi de son derece keyifli olan bu lezzet, peynir ve yeşilliklerle hazırlanarak da servis ediliyor. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n225\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu, Kepek %10,5, Tam Buğday Unu, Buğday Kırması, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Buğday Gluteni, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Tuz, Aroma verici, Un İşlem Maddesi (Sodyum Metabisülfit).\n\nAlerjen Uyarısı\nGluten ve Sülfit içerir. Eser miktarda Kereviz, Susam, Süt ürünü, Yer Fıstığı ve Yumurta içerebilir."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Form Kepekli 5'li 225 g",
          "value": "Eti Form Kepekli 5'li 225 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 600,
        "priceLabel": "6.00 TL",
        "discountedPrice": 510,
        "discountedPriceLabel": "5.10 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "1909367",
      "variantGroupId": "1909367",
      "images": [{ "id": "fe62a7b5-88cf-4726-9a86-5eaee9462aaa" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["EVBAKIM-JT4GV", "MUTFAK-E5TKV"],
          "listValueLabel": ["EV BAKIM", "Mutfak Ürünleri"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Parex Güçlü Çöp Torbası Orta Boy 55x60 15'li",
          "value": "Parex Güçlü Çöp Torbası Orta Boy 55x60 15'li"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "PAREX",
          "value": "PAREX"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Tüm serisi %100 doğada çözünür Parex Çöp Torbaları ile daha temiz bir dünya sizin elinizde.\r\nParex Çöp Torbaları ekolojik dengeyi bozmaz.\r\nÇevrenin temiz tutulmasına yardımcı olur, kalitelidir.\r\nÇöplerin ağzı bağlı şekilde çöp torbasında biriktirildiğinden mikrop, sinek ve haşarat üremesini önler, çöpleri sızdırmaz ve sağlamdır.\r\nÇöp kutularını temizleme işlemine gerek kalmaz.\r\nOrta boy çöp torbası; evlerde orta boy çöp kovaları için idealdir.\r\nPaket içi 15 adet; ölçüleri: 55×60 cm",
          "value": "Tüm serisi %100 doğada çözünür Parex Çöp Torbaları ile daha temiz bir dünya sizin elinizde.\r\nParex Çöp Torbaları ekolojik dengeyi bozmaz.\r\nÇevrenin temiz tutulmasına yardımcı olur, kalitelidir.\r\nÇöplerin ağzı bağlı şekilde çöp torbasında biriktirildiğinden mikrop, sinek ve haşarat üremesini önler, çöpleri sızdırmaz ve sağlamdır.\r\nÇöp kutularını temizleme işlemine gerek kalmaz.\r\nOrta boy çöp torbası; evlerde orta boy çöp kovaları için idealdir.\r\nPaket içi 15 adet; ölçüleri: 55×60 cm"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Parex Güçlü Çöp Torbası Orta Boy 55x60 15'li",
          "value": "Parex Güçlü Çöp Torbası Orta Boy 55x60 15'li"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 895,
        "priceLabel": "8.95 TL",
        "discountedPrice": 512,
        "discountedPriceLabel": "5.12 TL",
        "discountRate": 43,
        "discountRateLabel": "43"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "7317873X",
      "variantGroupId": "7317873X",
      "images": [{ "id": "56577473-7c7e-488f-90ab-02a2f8f6d6d6" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Cornetto Disc Antep Fıstık ve Çikolatalı 140 ml",
          "value": "Cornetto Disc Antep Fıstık ve Çikolatalı 140 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "CORNETTO",
          "value": "CORNETTO"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Antep fıstık ve kakaolu Cornetto Disc ile aşka lezzet katın! Kendi aşktan hikayeni yaratmaya var mısın? Benzersiz tadının sırrı; fıstık parçaları ile bezenmiş kakaolu disc ve nefis Antep fıstık lezzetinde gizli. Efsanevi \"tatlı son\" ile aşk son ısırıkta! Aşkta her şeyin mümkün olduğunu unutmayın.",
          "value": "Antep fıstık ve kakaolu Cornetto Disc ile aşka lezzet katın! Kendi aşktan hikayeni yaratmaya var mısın? Benzersiz tadının sırrı; fıstık parçaları ile bezenmiş kakaolu disc ve nefis Antep fıstık lezzetinde gizli. Efsanevi \"tatlı son\" ile aşk son ısırıkta! Aşkta her şeyin mümkün olduğunu unutmayın."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Cornetto Disc Antep Fıstık ve Çikolatalı 140 ml",
          "value": "Cornetto Disc Antep Fıstık ve Çikolatalı 140 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 700,
        "priceLabel": "7.00 TL",
        "discountedPrice": 525,
        "discountedPriceLabel": "5.25 TL",
        "discountRate": 25,
        "discountRateLabel": "25"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "7036744X",
      "variantGroupId": "7036744X",
      "images": [{ "id": "ae9f1a0b-272c-489c-b269-43ceeb6e7c25" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Magnum Double Çikolata 95 ml",
          "value": "Magnum Double Çikolata 95 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "MAGNUM",
          "value": "MAGNUM"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Kıtır Magnum çikolatası ve iki kat kakao kaplamasının arasında yoğun çikolata sosu ve içinde enfes çikolatalı dondurma. Magnum Double Çikolata ile hazzı ikiye katla.",
          "value": "Kıtır Magnum çikolatası ve iki kat kakao kaplamasının arasında yoğun çikolata sosu ve içinde enfes çikolatalı dondurma. Magnum Double Çikolata ile hazzı ikiye katla."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Magnum Double Çikolata 95 ml",
          "value": "Magnum Double Çikolata 95 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 750,
        "priceLabel": "7.50 TL",
        "discountedPrice": 525,
        "discountedPriceLabel": "5.25 TL",
        "discountRate": 30,
        "discountRateLabel": "30"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "8186030X",
      "variantGroupId": "8186030X",
      "images": [{ "id": "68fe2c1e-22b7-40ac-998b-da78937d40a9" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Magnum Cookie 95 ml",
          "value": "Magnum Cookie 95 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "MAGNUM",
          "value": "MAGNUM"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Magnum hazzının en eğlenceli hali Magnum Cookie'de! Kıtır kurabiye parçaları, %100 Magnum beyaz çikolatası, kakaolu kurabiye sosu ve enfes vanilya lezzetinin mükemmel uyumu.",
          "value": "Magnum hazzının en eğlenceli hali Magnum Cookie'de! Kıtır kurabiye parçaları, %100 Magnum beyaz çikolatası, kakaolu kurabiye sosu ve enfes vanilya lezzetinin mükemmel uyumu."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Magnum Cookie 95 ml",
          "value": "Magnum Cookie 95 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 750,
        "priceLabel": "7.50 TL",
        "discountedPrice": 525,
        "discountedPriceLabel": "5.25 TL",
        "discountRate": 30,
        "discountRateLabel": "30"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "8509898X",
      "variantGroupId": "8509898X",
      "images": [{ "id": "800d0053-b91e-4211-83e1-c797919f5f22" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Magnum Double Karamel Gold 90 ml ",
          "value": "Magnum Double Karamel Gold 90 ml "
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "MAGNUM",
          "value": "MAGNUM"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Magnum hazzının en zengin hali yeni Magnum Double Caramel Gold ile tanışın. Altın Magnum çikolatası, kıtır bisküviler ve dulce de leche sosuyla kaplı kadifemsi Magnum dondurmasının mükemmel uyumuyla her katta ve her ısırıkta zengin haz tecrübesi. ",
          "value": "Magnum hazzının en zengin hali yeni Magnum Double Caramel Gold ile tanışın. Altın Magnum çikolatası, kıtır bisküviler ve dulce de leche sosuyla kaplı kadifemsi Magnum dondurmasının mükemmel uyumuyla her katta ve her ısırıkta zengin haz tecrübesi. "
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Magnum Double Karamel Gold 90 ml ",
          "value": "Magnum Double Karamel Gold 90 ml "
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 750,
        "priceLabel": "7.50 TL",
        "discountedPrice": 525,
        "discountedPriceLabel": "5.25 TL",
        "discountRate": 30,
        "discountRateLabel": "30"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "7451492X",
      "variantGroupId": "7451492X",
      "images": [{ "id": "6988581e-854e-4205-b2a9-cdefcc02b0c2" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Magnum Beyaz 100 ml",
          "value": "Magnum Beyaz 100 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "MAGNUM",
          "value": "MAGNUM"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Çıtır beyaz çikolata ve badem parçacıklarıyla enfes vanilya lezzeti. Magnum Classic Beyaz Çikolatalı. Haz peşindeysen.",
          "value": "Çıtır beyaz çikolata ve badem parçacıklarıyla enfes vanilya lezzeti. Magnum Classic Beyaz Çikolatalı. Haz peşindeysen."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Magnum Beyaz 100 ml",
          "value": "Magnum Beyaz 100 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 750,
        "priceLabel": "7.50 TL",
        "discountedPrice": 525,
        "discountedPriceLabel": "5.25 TL",
        "discountRate": 30,
        "discountRateLabel": "30"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "8201435X",
      "variantGroupId": "8201435X",
      "images": [{ "id": "59c39d07-83da-4103-ad51-060d1a249659" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Cornetto Disc Milka 135 ml",
          "value": "Cornetto Disc Milka 135 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "CORNETTO",
          "value": "CORNETTO"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Milka’nın enfes çikolatasıyla Cornetto’nun efsane tadı bir araya geldi! \nMilka parçacıklı disc, Milka çikolatalı sos, çilekli ve beyaz çikolatalı Cornetto dondurması şimdi tek külahta!",
          "value": "Milka’nın enfes çikolatasıyla Cornetto’nun efsane tadı bir araya geldi! \nMilka parçacıklı disc, Milka çikolatalı sos, çilekli ve beyaz çikolatalı Cornetto dondurması şimdi tek külahta!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Cornetto Disc Milka 135 ml",
          "value": "Cornetto Disc Milka 135 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 700,
        "priceLabel": "7.00 TL",
        "discountedPrice": 525,
        "discountedPriceLabel": "5.25 TL",
        "discountRate": 25,
        "discountRateLabel": "25"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "7451496X",
      "variantGroupId": "7451496X",
      "images": [{ "id": "3f4c4ff5-98e0-49f7-99dd-c102f9dc3345" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Magnum Klasik 100 ml",
          "value": "Magnum Klasik 100 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "MAGNUM",
          "value": "MAGNUM"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Magnum Classic, kıtır çikolatası ve enfes vanilyası ile size lezzetin kapılarını aralıyor. Kadifemsi vanilya lezzeti sunan çikolata kaplı vanilyalı ürün, gerçek Magnum hazzıyla tanışmanızı sağlıyor. ",
          "value": "Magnum Classic, kıtır çikolatası ve enfes vanilyası ile size lezzetin kapılarını aralıyor. Kadifemsi vanilya lezzeti sunan çikolata kaplı vanilyalı ürün, gerçek Magnum hazzıyla tanışmanızı sağlıyor. "
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Magnum Klasik 100 ml",
          "value": "Magnum Klasik 100 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 750,
        "priceLabel": "7.50 TL",
        "discountedPrice": 525,
        "discountedPriceLabel": "5.25 TL",
        "discountRate": 30,
        "discountRateLabel": "30"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "7317875X",
      "variantGroupId": "7317875X",
      "images": [{ "id": "3f1ef6a2-a304-41df-9db5-0d1cb5f01f9e" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Cornetto Disc Vanilya Karamel 140 ml",
          "value": "Cornetto Disc Vanilya Karamel 140 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "CORNETTO",
          "value": "CORNETTO"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Vanilya ve karamelin muhteşem birleşimi, Fındık parçaları, kakaolu disc, enfes vanilya lezzetli ve ortasındaki yoğun karamel sosuyla rüya gibi bir lezzet. Bu efsane aşkın tadını kaçırma!",
          "value": "Vanilya ve karamelin muhteşem birleşimi, Fındık parçaları, kakaolu disc, enfes vanilya lezzetli ve ortasındaki yoğun karamel sosuyla rüya gibi bir lezzet. Bu efsane aşkın tadını kaçırma!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Cornetto Disc Vanilya Karamel 140 ml",
          "value": "Cornetto Disc Vanilya Karamel 140 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 700,
        "priceLabel": "7.00 TL",
        "discountedPrice": 525,
        "discountedPriceLabel": "5.25 TL",
        "discountRate": 25,
        "discountRateLabel": "25"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "7451494X",
      "variantGroupId": "7451494X",
      "images": [{ "id": "f7fa933f-a9a0-4afe-aebe-448d114e4f4e" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Magnum Badem 100 ml",
          "value": "Magnum Badem 100 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "MAGNUM",
          "value": "MAGNUM"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Sütlü kıtır Magnum çikolatası ve badem parçaları ile kaplı, kadifemsi vanilya lezzeti. Magnum Classic Bademli. Haz peşindeysen.",
          "value": "Sütlü kıtır Magnum çikolatası ve badem parçaları ile kaplı, kadifemsi vanilya lezzeti. Magnum Classic Bademli. Haz peşindeysen."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Magnum Badem 100 ml",
          "value": "Magnum Badem 100 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 750,
        "priceLabel": "7.50 TL",
        "discountedPrice": 525,
        "discountedPriceLabel": "5.25 TL",
        "discountRate": 30,
        "discountRateLabel": "30"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "7451498X",
      "variantGroupId": "7451498X",
      "images": [{ "id": "492aa7d0-c1e3-4164-9674-8df44558b96d" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Magnum Antep Fıstıklı 100 ml",
          "value": "Magnum Antep Fıstıklı 100 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "MAGNUM",
          "value": "MAGNUM"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Çifte kavrulmuş Antep Fıstığı parçacıkları ve Magnum çikolatası kaplı leziz Antep fıstıklı lezzet Magnum Classic Antep Fıstıklı. Haz Peşindeysen.",
          "value": "Çifte kavrulmuş Antep Fıstığı parçacıkları ve Magnum çikolatası kaplı leziz Antep fıstıklı lezzet Magnum Classic Antep Fıstıklı. Haz Peşindeysen."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Magnum Antep Fıstıklı 100 ml",
          "value": "Magnum Antep Fıstıklı 100 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 750,
        "priceLabel": "7.50 TL",
        "discountedPrice": 525,
        "discountedPriceLabel": "5.25 TL",
        "discountRate": 30,
        "discountRateLabel": "30"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "7036742X",
      "variantGroupId": "7036742X",
      "images": [{ "id": "aa5b49d9-be5e-4ba2-9b6b-778b648f2938" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Magnum Double Karadut & Böğürtlen 95 ml",
          "value": "Magnum Double Karadut & Böğürtlen 95 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "MAGNUM",
          "value": "MAGNUM"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Kıtır Magnum çikolatası ve iki kat kakao kaplamasının arasında enfes karadut ile böğürtlen sosu ve içinde kadifemsi vanilya lezzeti… Magnum Double Karadut & Böğürtlenli. Meyve dolu bir hazza hazır mısın?",
          "value": "Kıtır Magnum çikolatası ve iki kat kakao kaplamasının arasında enfes karadut ile böğürtlen sosu ve içinde kadifemsi vanilya lezzeti… Magnum Double Karadut & Böğürtlenli. Meyve dolu bir hazza hazır mısın?"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Magnum Double Karadut & Böğürtlen 95 ml",
          "value": "Magnum Double Karadut & Böğürtlen 95 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 750,
        "priceLabel": "7.50 TL",
        "discountedPrice": 525,
        "discountedPriceLabel": "5.25 TL",
        "discountRate": 30,
        "discountRateLabel": "30"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "7866941X",
      "variantGroupId": "7866941X",
      "images": [{ "id": "bff582c4-a99b-4c89-9557-8c2236371e90" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Cornetto Disc Oreo 140 ml",
          "value": "Cornetto Disc Oreo 140 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "CORNETTO",
          "value": "CORNETTO"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Karşı konulmaz ikili Cornetto ve OREO! İçindeki enfes Oreo parçacıkları ve çıtır çıtır kakaolu külah ile Cornetto Disc Oreo, damağında eşsiz bir şölene dönüşecek! Karşı konulmaz bu rüya ikili, efsanevi \"tatlı son\"la büyük bir aşka dönüşecek ve vazgeçilmezin olacak!",
          "value": "Karşı konulmaz ikili Cornetto ve OREO! İçindeki enfes Oreo parçacıkları ve çıtır çıtır kakaolu külah ile Cornetto Disc Oreo, damağında eşsiz bir şölene dönüşecek! Karşı konulmaz bu rüya ikili, efsanevi \"tatlı son\"la büyük bir aşka dönüşecek ve vazgeçilmezin olacak!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Cornetto Disc Oreo 140 ml",
          "value": "Cornetto Disc Oreo 140 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 700,
        "priceLabel": "7.00 TL",
        "discountedPrice": 525,
        "discountedPriceLabel": "5.25 TL",
        "discountRate": 25,
        "discountRateLabel": "25"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68716705X",
      "variantGroupId": "68716705X",
      "images": [
        { "id": "90537d47-a5d7-4554-a770-2e1930d72a0a" },
        { "id": "5cc1fab1-5a05-4db5-b2dc-760a9e4fe48a", "tags": [] }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
          "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Magnum Double Karamel Gold La Casa De Papel 95 ml",
          "value": "Magnum Double Karamel Gold La Casa De Papel 95 ml"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "MAGNUM",
          "value": "MAGNUM"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "<p>Magnum hazzının en zengin hali yeni Magnum Double Caramel Gold şimdi La Casa De Papel limitli seri ile satışta! Altın magnum çikolatası, kıtır bisküviler ve dulce de leche sosuyla kaplı kadifemsi Magnum dondurmasının mükemmel uyumuyla her katta ve her ısırıkta zengin haz tecrübesi!&nbsp;</p>",
          "value": "<p>Magnum hazzının en zengin hali yeni Magnum Double Caramel Gold şimdi La Casa De Papel limitli seri ile satışta! Altın magnum çikolatası, kıtır bisküviler ve dulce de leche sosuyla kaplı kadifemsi Magnum dondurmasının mükemmel uyumuyla her katta ve her ısırıkta zengin haz tecrübesi!&nbsp;</p>"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Magnum Double Karamel Gold La Casa De Papel 95 ml",
          "value": "Magnum Double Karamel Gold La Casa De Papel 95 ml"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 750,
        "priceLabel": "7.50 TL",
        "discountedPrice": 525,
        "discountedPriceLabel": "5.25 TL",
        "discountRate": 30,
        "discountRateLabel": "30"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "1909378",
      "variantGroupId": "1909378",
      "images": [{ "id": "56a39395-8a23-4e5f-839e-11f12aaf2134" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["EVBAKIM-JT4GV", "MUTFAK-E5TKV"],
          "listValueLabel": ["EV BAKIM", "Mutfak Ürünleri"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Parex Buzdolabı Poşeti Büyük Boy 30x45 15'li",
          "value": "Parex Buzdolabı Poşeti Büyük Boy 30x45 15'li"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "PAREX",
          "value": "PAREX"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Parex Buzdolabı Poşeti meyve, sebze, kuru gıda gibi yiyeceklerinizi dış etkenlerden korur, gıdaların bozulmasını ve kurumasını önleyerek ilk günkü tazeliğinde korur.\r\r\r\nDondurulacak gıdaların derin dondurucuda saklanması için idealdir.\r\r\r\nHer türlü gıda maddesini ağzını kapatarak buzdolabında saklayabilirsiniz.\r\r\r\n Gıdalarınızı buzdolabı poşeti ile birlikte fırına veya mikrodalga fırına koymayınız.\r\r\r\nPaket içi 15 adet; ölçüleri: 30×45 cm",
          "value": "Parex Buzdolabı Poşeti meyve, sebze, kuru gıda gibi yiyeceklerinizi dış etkenlerden korur, gıdaların bozulmasını ve kurumasını önleyerek ilk günkü tazeliğinde korur.\r\r\r\nDondurulacak gıdaların derin dondurucuda saklanması için idealdir.\r\r\r\nHer türlü gıda maddesini ağzını kapatarak buzdolabında saklayabilirsiniz.\r\r\r\n Gıdalarınızı buzdolabı poşeti ile birlikte fırına veya mikrodalga fırına koymayınız.\r\r\r\nPaket içi 15 adet; ölçüleri: 30×45 cm"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Parex Buzdolabı Poşeti Büyük Boy 30x45 15'li",
          "value": "Parex Buzdolabı Poşeti Büyük Boy 30x45 15'li"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 1150,
        "priceLabel": "11.50 TL",
        "discountedPrice": 543,
        "discountedPriceLabel": "5.43 TL",
        "discountRate": 53,
        "discountRateLabel": "53"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "1909370",
      "variantGroupId": "1909370",
      "images": [{ "id": "88b77e53-1d4a-4e37-90ca-c9a7ad1738ff" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["EVBAKIM-JT4GV", "MUTFAK-E5TKV"],
          "listValueLabel": ["EV BAKIM", "Mutfak Ürünleri"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Parex Buzdolabı Poşeti Orta Boy 24x38 20'li",
          "value": "Parex Buzdolabı Poşeti Orta Boy 24x38 20'li"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "PAREX",
          "value": "PAREX"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Parex Buzdolabı Poşeti meyve, sebze, kuru gıda gibi yiyeceklerinizi dış etkenlerden korur, gıdaların bozulmasını ve kurumasını önleyerek ilk günkü tazeliğinde korur.\r\r\r\nDondurulacak gıdaların derin dondurucuda saklanması için idealdir.\r\r\r\nHer türlü gıda maddesini ağzını kapatarak buzdolabında saklayabilirsiniz.\r\r\r\nGıdalarınızı buzdolabı poşeti ile birlikte fırına veya mikrodalga fırına koymayınız.\r\r\r\nPaket içi 20 adet; ölçüleri: 24×38 cm",
          "value": "Parex Buzdolabı Poşeti meyve, sebze, kuru gıda gibi yiyeceklerinizi dış etkenlerden korur, gıdaların bozulmasını ve kurumasını önleyerek ilk günkü tazeliğinde korur.\r\r\r\nDondurulacak gıdaların derin dondurucuda saklanması için idealdir.\r\r\r\nHer türlü gıda maddesini ağzını kapatarak buzdolabında saklayabilirsiniz.\r\r\r\nGıdalarınızı buzdolabı poşeti ile birlikte fırına veya mikrodalga fırına koymayınız.\r\r\r\nPaket içi 20 adet; ölçüleri: 24×38 cm"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Parex Buzdolabı Poşeti Orta Boy 24x38 20'li",
          "value": "Parex Buzdolabı Poşeti Orta Boy 24x38 20'li"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 1150,
        "priceLabel": "11.50 TL",
        "discountedPrice": 543,
        "discountedPriceLabel": "5.43 TL",
        "discountRate": 53,
        "discountRateLabel": "53"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "1909369",
      "variantGroupId": "1909369",
      "images": [{ "id": "1d0f35ff-4ad5-4d62-a6fa-ca126474f5be" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["EVBAKIM-JT4GV", "MUTFAK-E5TKV"],
          "listValueLabel": ["EV BAKIM", "Mutfak Ürünleri"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Parex Buzdolabı Poşeti Küçük Boy 20x30 40'lı",
          "value": "Parex Buzdolabı Poşeti Küçük Boy 20x30 40'lı"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "PAREX",
          "value": "PAREX"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Parex Buzdolabı Poşeti meyve, sebze, kuru gıda gibi yiyeceklerinizi dış etkenlerden korur, gıdaların bozulmasını ve kurumasını önleyerek ilk günkü tazeliğinde korur.\r\nDondurulacak gıdaların derin dondurucuda saklanması için idealdir.\r\nHer türlü gıda maddesini ağzını kapatarak buzdolabında saklayabilirsiniz.\r\nGıdalarınızı buzdolabı poşeti ile birlikte fırına veya mikrodalga fırına koymayınız.\r\nPaket içi 40 adet; ölçüleri: 20×30 cm",
          "value": "Parex Buzdolabı Poşeti meyve, sebze, kuru gıda gibi yiyeceklerinizi dış etkenlerden korur, gıdaların bozulmasını ve kurumasını önleyerek ilk günkü tazeliğinde korur.\r\nDondurulacak gıdaların derin dondurucuda saklanması için idealdir.\r\nHer türlü gıda maddesini ağzını kapatarak buzdolabında saklayabilirsiniz.\r\nGıdalarınızı buzdolabı poşeti ile birlikte fırına veya mikrodalga fırına koymayınız.\r\nPaket içi 40 adet; ölçüleri: 20×30 cm"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Parex Buzdolabı Poşeti Küçük Boy 20x30 40'lı",
          "value": "Parex Buzdolabı Poşeti Küçük Boy 20x30 40'lı"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 1150,
        "priceLabel": "11.50 TL",
        "discountedPrice": 543,
        "discountedPriceLabel": "5.43 TL",
        "discountRate": 53,
        "discountRateLabel": "53"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "9470259",
      "variantGroupId": "9470259",
      "images": [{ "id": "c90e8d0c-e43d-490b-9676-55c4890f871c" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
          "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Uni Care Kulak Çubuğu 100'lü     ",
          "value": "Uni Care Kulak Çubuğu 100'lü     "
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "UNI CARE",
          "value": "UNI CARE"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "%100 Pamuk\r\r\nSentetik lif içermez\r\r\nEtkin temizlik sağlar.\r\r\nMakyaj uygulama ve çıkarma için idealdir",
          "value": "%100 Pamuk\r\r\nSentetik lif içermez\r\r\nEtkin temizlik sağlar.\r\r\nMakyaj uygulama ve çıkarma için idealdir"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Uni Care Kulak Çubuğu 100'lü     ",
          "value": "Uni Care Kulak Çubuğu 100'lü     "
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 675,
        "priceLabel": "6.75 TL",
        "discountedPrice": 545,
        "discountedPriceLabel": "5.45 TL",
        "discountRate": 19,
        "discountRateLabel": "19"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "68611768",
      "variantGroupId": "68611768",
      "images": [
        { "id": "ba6983be-f80e-4a77-957c-bdf1b30a8b00" },
        { "id": "d435288e-3569-402b-ad18-dfdd728c3e40" }
      ],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "BAHARAT-4Y3ED"],
          "listValueLabel": ["GIDA", "Temel Gıda", "Baharatlar"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Knorr Karabiber 60 g",
          "value": "Knorr Karabiber 60 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "KNORR",
          "value": "KNORR"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!",
          "value": "Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!"
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Knorr Karabiber 60 g",
          "value": "Knorr Karabiber 60 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 895,
        "priceLabel": "8.95 TL",
        "discountedPrice": 550,
        "discountedPriceLabel": "5.50 TL",
        "discountRate": 39,
        "discountRateLabel": "39"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    },
    {
      "id": "3964600",
      "variantGroupId": "3964600",
      "images": [{ "id": "24dfbee7-efd4-4c24-ba00-c975178e8219" }],
      "attributes": [
        {
          "attType": "LIST",
          "fieldName": "categories",
          "fieldNameLabel": "Kategoriler",
          "valueLabel": "",
          "value": "",
          "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "KEK-R0TJV"],
          "listValueLabel": ["GIDA", "Atıştırmalık", "Kek"],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "shortName",
          "fieldNameLabel": "shortName",
          "valueLabel": "Eti Popkek Mini Kakaolu 180 g",
          "value": "Eti Popkek Mini Kakaolu 180 g"
        },
        {
          "attType": "KEYWORD",
          "fieldName": "brand",
          "fieldNameLabel": "Markalar",
          "valueLabel": "ETI",
          "value": "ETI"
        },
        {
          "attType": "LONG_TEXT",
          "fieldName": "productDescription",
          "fieldNameLabel": "productDescription",
          "valueLabel": "Eti Popkek Mini Çikolata Soslu Kakao Kaplamalı Kek, klasikleşmiş Popkek lezzetini mini bir şekilde sunar. Isırdığınızda ortaya çıkan akışkan çikolata sosu, yumuşacık keki ve dışındaki enfes çikolata kaplamasıyla lezzetine hayır diyemeyeceğiniz Eti Popkek, leziz ve doyurucu bir atıştırmalık olarak vazgeçilmeziniz olur.\n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n180\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nKek %69,4 [Buğday Unu (Gluten içerir), Şeker, Yumurta, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Glukoz-Fruktoz Şurubu, Nem vericiler (Gliserol, Sorbitol), Emülgatörler (Yağ Asitlerinin Mono ve Digliseritleri, Yağ Asitlerinin Poligliserol Esterleri), Tuz, Kabartıcılar (Sodyum Asit Pirofosfat, Sodyum Hidrojen Karbonat), Koruyucu (Sorbik Asit), Aroma vericiler, Asitlik Düzenleyici (Sitrik Asit), Kıvam Arttırıcı (Ksantan Gam)], Kakaolu Kaplama %19,4 [Şeker, Hidrojenize Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Peynir Altı Suyu Tozu (Süt Ürünü), Süt Tozu, Kakao %5,2, Emülgatör (Ayçiçek Lesitini, Aroma verici], Çikolata Sosu %11,2 [Şeker, Glukoz-Fruktoz Şurubu, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Peynir Altı Suyu Tozu (Süt Ürünü), Bitter Çikolata %4,2, Modifiye Nişasta, Kakoa, Fındık Püresi, Tuz, Emülgatör Yağ Asitlerinin Mono ve Digliseritleri, Yağ Asitlerinin Poligliserol Esterleri), Asitliği Düzenleyiciler (Sitrik Asit, Sodyum Hidrojen Karbonat), Koruyucu (Sorbik Asit).\n\nAlerjen Uyarısı\nBuğday Unu (Gluten içerir), Yumurta, Peynir Altı Suyu Tozu (Süt ürünü), Süt Tozu, Fındık Püresi içerir. Eser miktarda Soya Ürünü, Susam ve Yer Fıstığı içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.",
          "value": "Eti Popkek Mini Çikolata Soslu Kakao Kaplamalı Kek, klasikleşmiş Popkek lezzetini mini bir şekilde sunar. Isırdığınızda ortaya çıkan akışkan çikolata sosu, yumuşacık keki ve dışındaki enfes çikolata kaplamasıyla lezzetine hayır diyemeyeceğiniz Eti Popkek, leziz ve doyurucu bir atıştırmalık olarak vazgeçilmeziniz olur.\n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n180\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nKek %69,4 [Buğday Unu (Gluten içerir), Şeker, Yumurta, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Glukoz-Fruktoz Şurubu, Nem vericiler (Gliserol, Sorbitol), Emülgatörler (Yağ Asitlerinin Mono ve Digliseritleri, Yağ Asitlerinin Poligliserol Esterleri), Tuz, Kabartıcılar (Sodyum Asit Pirofosfat, Sodyum Hidrojen Karbonat), Koruyucu (Sorbik Asit), Aroma vericiler, Asitlik Düzenleyici (Sitrik Asit), Kıvam Arttırıcı (Ksantan Gam)], Kakaolu Kaplama %19,4 [Şeker, Hidrojenize Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Peynir Altı Suyu Tozu (Süt Ürünü), Süt Tozu, Kakao %5,2, Emülgatör (Ayçiçek Lesitini, Aroma verici], Çikolata Sosu %11,2 [Şeker, Glukoz-Fruktoz Şurubu, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Peynir Altı Suyu Tozu (Süt Ürünü), Bitter Çikolata %4,2, Modifiye Nişasta, Kakoa, Fındık Püresi, Tuz, Emülgatör Yağ Asitlerinin Mono ve Digliseritleri, Yağ Asitlerinin Poligliserol Esterleri), Asitliği Düzenleyiciler (Sitrik Asit, Sodyum Hidrojen Karbonat), Koruyucu (Sorbik Asit).\n\nAlerjen Uyarısı\nBuğday Unu (Gluten içerir), Yumurta, Peynir Altı Suyu Tozu (Süt ürünü), Süt Tozu, Fındık Püresi içerir. Eser miktarda Soya Ürünü, Susam ve Yer Fıstığı içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş."
        },
        {
          "attType": "LIST",
          "fieldName": "productFeature",
          "fieldNameLabel": "Ürün Özelliği",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "LIST",
          "fieldName": "tags",
          "fieldNameLabel": "tags",
          "valueLabel": "",
          "value": "",
          "listValue": [],
          "listValueLabel": [],
          "badges": []
        },
        {
          "attType": "TEXT",
          "fieldName": "longName",
          "fieldNameLabel": "longName",
          "valueLabel": "Eti Popkek Mini Kakaolu 180 g",
          "value": "Eti Popkek Mini Kakaolu 180 g"
        }
      ],
      "priceTag": {
        "currency": "TRY",
        "merchantId": "default",
        "values": [],
        "price": 650,
        "priceLabel": "6.50 TL",
        "discountedPrice": 553,
        "discountedPriceLabel": "5.53 TL",
        "discountRate": 15,
        "discountRateLabel": "15"
      },
      "stockStatus": "HIGH",
      "itemType": "SINGLE"
    }
  ]
  )
  const [searchResult, setSearchResult] = useState(pruductList)
  const [showNonStockProduct, setShowNonStockProduct] = useState(true)
  

  const onClickStockButton = () => {
    console.log('Stokta Olmayanlar Gösterilmiyor')
    setSearchResult(pruductList.filter(p => p.stockStatus !== "NONE"))
  }
const  favoriyeEkle = (id) => {
console.log(id)
const favoriler = (JSON.parse(localStorage.getItem("favoriler")))
console.log(favoriler)
favoriler.push(id)
localStorage.setItem("favoriler",JSON.stringify(favoriler))

}

  const onClickUcuzButton = () => {
    console.log('Ucuzdan Pahalıya Sıralandı')
    const result = pruductList.sort((a, b) => a.priceTag.discountedPrice - b.priceTag.discountedPrice)
    console.log(result)
    setSearchResult(result)
    onClickStockButton()
  }
  const onClickPahalıButton = () => {
    console.log('Pahalıdan Ucuza Sıralandı')
    const result = pruductList.sort((b, a) => a.priceTag.discountedPrice - b.priceTag.discountedPrice)
    console.log(result)
    setSearchResult(result)
    onClickStockButton()
  }
  const searchUrun = (event) => {
    const keyword = event.target.value
    const result = [];
    pruductList.forEach((item) => {
      const productName = item.attributes.find(p => p.fieldName === "shortName").value
      const brand = item.attributes.find(p => p.fieldName === "brand").value
      const description = item.attributes.find(p => p.fieldName === "productDescription").value

      if(
        productName.toLowerCase().includes(keyword.toLowerCase())
        ||
        brand.toLowerCase().includes(keyword.toLowerCase())
         ||
         description.toLowerCase().includes(keyword.toLowerCase())
        ) {
        console.log(productName)
        result.push(item)
      }  
    })
    setSearchResult(result)
   

  }


  return (

    <div className="Apps">

      <div className="ui action input">
        <input className="aramas" type="text" placeholder="Ara.." onChange={searchUrun} />
      </div>
      <br />
      <br />
      {/* <button onClick={() => onClickUcuzButton()}>Ürünleri Ucuzdan Pahalıya Sırala</button>
      <button onClick={() => onClickPahalıButton()}>Ürünleri  Pahalıdan Ucuza Sırala</button> */}
   <div className="ui compact menu">
  <div className="ui simple dropdown item">
    Sırala
    <i className="dropdown icon"></i>
    <div className="menu">
      <div onClick={() => onClickUcuzButton()} className="item">Ucuzdan Pahalıya </div>
      <div onClick={() => onClickPahalıButton()} className="item">Pahalıdan Ucuza</div>
      
    </div>
  </div>
</div>
<br/>
      {/* <button onClick={() => onClickStockButton()}>Stokta Olmayan Ürünleri Gösterme</button> */}
      <div className="ui checkbox">
  <input type="checkbox" onClick={() => onClickStockButton()} name="example"/>
  <label>Stokta Olmayan Ürünleri Gösterme</label>
</div>

      <h4>Ürün sayısı {searchResult.length} </h4>
      {
        searchResult.map((fvr) => {
          return (
            <div className="App" key={fvr.id}>

              <Semantic
                ad={fvr.attributes.find(x => x.fieldName === "shortName").value}
                fiyat={fvr.priceTag.priceLabel}
                yeniFiyat={fvr.priceTag.discountedPriceLabel}
                indirim={fvr.priceTag.discountRateLabel}
                favoriyeEkle={(id) => favoriyeEkle(id)}
                id={fvr.id}
              />
              <br />
            </div>
          )
        })
      }

    </div>
  )
}
export default UrunListesi;


//ucuzdan pahalıya sırala 
// favoriden çıkarma yapılıcak 


//ürünlerin adına  göre sırlama
