"use strict";

$(function () {
  //曜日リスト
  var weekDayList = ["日", "月", "火", "水", "木", "金", "土"];
  //都道府県リスト(開催地域)
  var regionList = ["未定", "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "東京都", "神奈川県", "埼玉県", "千葉県", "茨城県", "栃木県", "群馬県", "山梨県", "新潟県", "長野県", "富山県", "石川県", "福井県", "愛知県", "岐阜県", "静岡県", "三重県", "大阪府", "兵庫県", "京都府", "滋賀県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県", "海外", "ネット上", "テレビ・ラジオ", "その他"];
  //ポップオーバー用のテキスト
  var categoryPopText = "<div class=\"row\">\n      <div class=\"col-12\">\u4EE5\u4E0B\u3092\u53C2\u8003\u306B\u304A\u9078\u3073\u4E0B\u3055\u3044\u3002</div>\n      <div class=\"col-3 py-1\">\u30AF\u30A4\u30BA\u5927\u4F1A</div>\n      <div class=\"col-9 py-1\">\u5E83\u304F\u53C2\u52A0\u8005\u3092\u52DF\u96C6\u3057\u3001\u4F55\u3089\u304B\u306E\u5F62\u3067\u512A\u52DD\u8005\uFF08\u512A\u52DD\u30C1\u30FC\u30E0\uFF09\u3092\u6C7A\u3081\u308B\u30AF\u30A4\u30BA\u30A4\u30D9\u30F3\u30C8\u3002</div>\n      <div class=\"col-3 py-1\">\u30AF\u30A4\u30BA\u4F8B\u4F1A</div>\n      <div class=\"col-9 py-1\">\u30AF\u30A4\u30BA\u4F8B\u4F1A\u306E\u5EF6\u9577\u3067\u30AA\u30FC\u30D7\u30F3\u4F8B\u4F1A\u3092\u884C\u3046\u5834\u5408\u3084\u3001\u5E83\u304F\u53C2\u52A0\u8005\u3092\u52DF\u308B\u4F8B\u4F1A\u7B49\u306E\u544A\u77E5\u3092\u3057\u305F\u3044\u5834\u5408\u3002\u5FDC\u52DF\u5F8C\u3001\u4E3B\u50AC\u8005\u306B\u3088\u308B\u5BE9\u67FB\u7B49\u304C\u3042\u3063\u3066\u3082\u304B\u307E\u308F\u306A\u3044\u3002\uFF08\u4F8B\uFF1A\u30A4\u30F3\u30AB\u30EC\u30E1\u30F3\u30D0\u30FC\u3092\u5E83\u304F\u52DF\u96C6\u3059\u308B\u5927\u5B66\u30AF\u30A4\u30BA\u30B5\u30FC\u30AF\u30EB\u306B\u3088\u308B\u300C\u65B0\u5165\u751F\u6B53\u8FCE\u4F01\u753B\u300D\u7B49\u306E\u544A\u77E5\uFF09</div>\n      <div class=\"col-3 py-1\">TV\u30FB\u30E9\u30B8\u30AA\u756A\u7D44</div>\n      <div class=\"col-9 py-1\">TV\u30FB\u30E9\u30B8\u30AA\u756A\u7D44\u306E\u53CE\u9332\u3001\u4E88\u9078\u4F1A\u3001\u89B3\u89A7\u52DF\u96C6\u3001\u653E\u9001\uFF08Web\u4E00\u6589\u53C2\u52A0\u306A\u3069\uFF09\u306A\u3069\u3001\u30AF\u30A4\u30BA\u756A\u7D44\u306E\u544A\u77E5\u7528\u3002</div>\n      <div class=\"col-3 py-1\">Web\u30AF\u30A4\u30BA</div>\n      <div class=\"col-9 py-1\">Web\u4E0A\uFF08\u30CB\u30B3\u30CB\u30B3\u52D5\u753B\u306A\u3069\uFF09\u3067\u884C\u3046\u30AF\u30A4\u30BA\u756A\u7D44\u3001\u30AF\u30A4\u30BA\u5927\u4F1A\u3001\u30AF\u30A4\u30BA\u30A4\u30D9\u30F3\u30C8\u306A\u3069\u3002</div>\n      <div class=\"col-3 py-1\">\u6587\u5316\u796D</div>\n      <div class=\"col-9 py-1\">\u9AD8\u6821\u5927\u5B66\u306A\u3069\u306E\u6587\u5316\u796D\u306E\u544A\u77E5\u3002</div>\n      <div class=\"col-3 py-1\">\u305D\u306E\u4ED6\u30A4\u30D9\u30F3\u30C8</div>\n      <div class=\"col-9 py-1\">\u300C\u8B0E\u89E3\u304D\u30A4\u30D9\u30F3\u30C8\u300D\u300C\u30AF\u30A4\u30BA\u95A2\u9023\u306E\u30C8\u30FC\u30AF\u30E9\u30A4\u30D6\u300D\u300C\u51FA\u7248\u8A18\u5FF5\u8B1B\u6F14\u4F1A\u300D\u300C\u5E97\u8217\u5927\u4F1A\u300D\u306A\u3069\u3001\u5206\u985E\u304C\u96E3\u3057\u3044\u3082\u306E</div>\n    </div>";

  var resultPopText = "<p>\u300C\u5927\u4F1A\u7D50\u679C\u5831\u544A\u3092\u884C\u308F\u306A\u3044\u300D\u306E\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u306B\u30AF\u30EA\u30C3\u30AF\u304C\u306A\u3044\u5834\u5408\u3001\u5927\u4F1A\u7D42\u4E86\u5F8C\u300E\u65B0\u30FB\u4E00\u5FC3\u7CBE\u9032\u300F\u306B\u5927\u4F1A\u7D50\u679C\u3092\u5831\u544A\u3057\u3001\u300C\u516C\u306E\u3082\u306E\u3068\u3057\u3066\u8A18\u9332\u306B\u6B8B\u3059\u300D\u3053\u3068\u3092\u539F\u5247\u3068\u3057\u307E\u3059\u3002\u300C\u516C\u306E\u3082\u306E\u3068\u3057\u3066\u8A18\u9332\u306B\u6B8B\u3057\u305F\u304F\u306A\u3044\u300D\u5834\u5408\u306F\u3001\u300C\u5927\u4F1A\u7D50\u679C\u5831\u544A\u3092\u884C\u308F\u306A\u3044\u300D\u306E\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u4E0B\u3055\u3044\u3002</p>\n    <p>\u3010\u8A73\u7D30\u89E3\u8AAC\u3011\u300C\u516C\u306E\u3082\u306E\u3068\u3057\u3066\u8A18\u9332\u306B\u6B8B\u3059\u300D\u3068\u306F\u3001\u5927\u4F1A\u7D50\u679C\u304C\u30E1\u30C7\u30A3\u30A2\u7B49\u306B\u5831\u9053\u3055\u308C\u305F\u308A\u3001\u7D50\u679C\u3092\u3082\u3068\u306B\u4E88\u9078\u901A\u904E\u6570\u30E9\u30F3\u30AD\u30F3\u30B0\u304C\u96C6\u8A08\u3055\u308C\u305F\u308A\u3001\u5927\u4F1A\u7D50\u679C\u3092\u57FA\u6E96\u306B\u5354\u4F1AWeb\u4F1A\u54E1\u304C\u5225\u5927\u4F1A\u306E\u30EC\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u5B9A\u3081\u308B\u3053\u3068\u306A\u3069\u3092\u3001\u5168\u9762\u7684\u306B\u8A8D\u3081\u308B\u3082\u306E\u3068\u3059\u308B\u3002\u300C\u5927\u4F1A\u7D50\u679C\u5831\u544A\u3092\u884C\u308F\u306A\u3044\u300D\u306E\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u5834\u5408\u3082\u3001\u300C\u500B\u4EBA\u60C5\u5831\u3092\u6271\u308F\u306A\u3044\u7D50\u679C\uFF08\u53C2\u52A0\u30FB\u898B\u5B66\u4EBA\u6570\u306E\u5831\u544A\u3001\u500B\u4EBA\u60C5\u5831\u3092\u542B\u307E\u306A\u3044\u7D50\u679C\u3084\u554F\u984C\u306Epdf\u7B49\uFF09\u306F\u3001\u53EF\u80FD\u3067\u3042\u308C\u3070\u63D0\u4F9B\u306B\u3054\u5354\u529B\u3092\u304A\u9858\u3044\u3057\u305F\u3044\u3002</p>";

  var genrePopText = "<p>\u7279\u5B9A\u30B8\u30E3\u30F3\u30EB\u9650\u5B9A\u3068\u3059\u308B\u5927\u4F1A\u306F\u3001\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u306B\u30AF\u30EA\u30C3\u30AF\u3092\u3057\u3066\u4E0B\u3055\u3044\uFF08\u4F8B\u300C\u30A4\u30F3\u30C8\u30ED\u30AF\u30A4\u30BA\u5927\u4F1A\u300D\u300C\u65E5\u672C\u53F2\u9650\u5B9A\u30AA\u30FC\u30D7\u30F3\u300D\u300C\u57FC\u7389\u306B\u95A2\u3059\u308B\u554F\u984C\u306E\u307F\u306E\u5927\u4F1A\uFF09 \u3002\u306A\u304A\u3001\u3042\u308B\u7A0B\u5EA6\u504F\u3063\u305F\u51FA\u984C\u3092\u3057\u3066\u3082\uFF08\u4F8B\uFF1A\u300C5\u5272\u3092\u79D1\u5B66\u3068\u3057\u307E\u3059\u300D\u7B49\uFF09\u3001\u4E3B\u50AC\u306E\u610F\u5FD7\u6B21\u7B2C\u3067\u300C\u30AF\u30A4\u30BA\u5927\u4F1A\u300D\u306B\u5206\u985E\u3057\u3066\u3082\u304B\u307E\u3044\u307E\u305B\u3093\u3002</p>\n    <p>\u3010\u8A73\u7D30\u89E3\u8AAC\u3011\u300C\u300C\u30AF\u30A4\u30BA\u5927\u4F1A\u300D\u306E\u7D50\u679C\u306F\u3001\u516C\u306E\u3082\u306E\u3067\u3042\u308A\u3001\u4ED6\u30AF\u30A4\u30BA\u5927\u4F1A\u306E\u30EC\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u57FA\u6E96\u306B\u3057\u3066\u3082\u826F\u3044\u300D\u3068\u3044\u3046\u898F\u5B9A\u3092\u8A2D\u3051\u3066\u3044\u308B\u3002\u3057\u304B\u3057\u3001\u4F8B\u3048\u3070\u30A4\u30F3\u30C8\u30ED\u30AF\u30A4\u30BA\u306E\u5927\u4F1A\u304C\u3042\u3063\u305F\u3068\u3057\u3066\u3001\u300C\u30A4\u30F3\u30C8\u30ED\u30AF\u30A4\u30BA\u306F\u7AF6\u6280\u3067\u306F\u3042\u308B\u304C\u3001\u30AF\u30A4\u30BA\u5927\u4F1A\u3068\u3057\u3066\u306E\u5B9F\u7E3E\u306B\u30AB\u30A6\u30F3\u30C8\u3055\u308C\u3001\u4ED6\u5927\u4F1A\u3067\u5B9F\u529B\u8005\u3068\u3057\u3066\u6271\u308F\u308C\u51FA\u5834\u8CC7\u683C\u3092\u596A\u3046\u306E\u306F\u4E3B\u50AC\u8005\u3068\u3057\u3066\u4E0D\u672C\u610F\u300D\u3068\u4E3B\u50AC\u8005\u304C\u6349\u3048\u305F\u306E\u3067\u3042\u308C\u3070\u3001\u3053\u306E\u300C\u30B8\u30E3\u30F3\u30EB\u9650\u5B9A\u5927\u4F1A\u300D\u306E\u30C1\u30A7\u30C3\u30AF\u3092\u9078\u3093\u3067\u3044\u305F\u3060\u304F\u3053\u3068\u3067\u300C\u901A\u5E38\u306E\u30AF\u30A4\u30BA\u5927\u4F1A\u3068\u306F\u7570\u306A\u308B\u305F\u3081\u3001\u30EC\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u306F\u542B\u3081\u306A\u3044\u3067\u6B32\u3057\u3044\u300D\u3068\u3044\u3046\u610F\u601D\u8868\u793A\u304C\u3067\u304D\u308B\u3002</p>";

  var entryPopText = "<p>\u4E8B\u524D\u30A8\u30F3\u30C8\u30EA\u30FC\u304C\u5FC5\u8981\u306A\u5927\u4F1A\u306F\u3001\u958B\u59CB\u65E5\u7B49\u3092\u8A18\u5165\u3057\u3066\u4E0B\u3055\u3044\u3002\u306A\u304A\u3001\u30A8\u30F3\u30C8\u30EA\u30FC\u958B\u59CB\u6642\u671F\u306B\u30E6\u30FC\u30B6\u30FC\u306B\u30EA\u30DE\u30A4\u30F3\u30C0\u30FC\u30E1\u30FC\u30EB\u304C\u98DB\u3076\u6A5F\u80FD\u3092\u5B9F\u88C5\u3057\u3066\u304A\u308A\u307E\u3059\u3002\u516C\u5F0F\u30B5\u30A4\u30C8\u7B49\u3067\u958B\u59CB\u6642\u671F\u3092\u5909\u66F4\u3057\u305F\u5834\u5408\u3001\u304D\u3061\u3093\u3068\u3053\u3061\u3089\u306B\u3082\u53CD\u6620\u3055\u305B\u308B\u3088\u3046\u304A\u9858\u3044\u3057\u307E\u3059\uFF08\u8AA4\u3063\u305F\u30EA\u30DE\u30A4\u30F3\u30C0\u30FC\u30E1\u30FC\u30EB\u304C\u9001\u4ED8\u3055\u308C\u3066\u3057\u307E\u3044\u307E\u3059\uFF09\u3002</p>";

  var templatePopText = "<p>\u5404\u6CE8\u610F\u66F8\u304D\u306E\u4F8B\u3068\u3057\u3066\u3001\u4E3B\u50AC\u8005\u306B\u9078\u629E\u9802\u3051\u308B\u300C\u5B9A\u578B\u6587\u300D\u3092\u7528\u610F\u81F4\u3057\u307E\u3057\u305F\u3002\u305F\u3060\u3057\u3001\u5B9A\u578B\u6587\u306F\u3042\u304F\u307E\u3067\u4F8B\u3067\u3059\u3002\u6700\u3082\u8FD1\u3044\u6587\u3092\u9078\u629E\u5F8C\u3001\u5404\u4E3B\u50AC\u8005\u304C\u81EA\u8EAB\u306E\u5927\u4F1A\u306B\u898B\u5408\u3063\u305F\u6587\u7AE0\u306B\u7DE8\u96C6\u3057\u3001\u6700\u7D42\u7684\u306A\u6587\u9762\u306F\u4E3B\u50AC\u8005\u306E\u8CAC\u4EFB\u306E\u3082\u3068\u8A18\u8FF0\u3059\u308B\u3088\u3046\u304A\u9858\u3044\u81F4\u3057\u307E\u3059\u3002\u307E\u305F\u3001\u3053\u308C\u3089\u5B9A\u578B\u6587\u306F\u5B9F\u969B\u306B\u904B\u55B6\u3057\u3001\u5404\u4E3B\u50AC\u8005\u304C\u3069\u306E\u3088\u3046\u306B\u6587\u7AE0\u3092\u5909\u3048\u305F\u304B\u3092\u53C2\u8003\u306B\u3057\u306A\u304C\u3089\u3001\u7BA1\u7406\u5074\u304C\u4E0D\u5B9A\u671F\u306B\u4FEE\u6B63\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\uFF08\u4E3B\u50AC\u8005\u304C\u4E00\u5EA6\u6295\u7A3F\u3057\u305F\u6587\u7AE0\u3092\u7BA1\u7406\u5074\u304C\u5909\u66F4\u3059\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\uFF09</p>";

  var schoolAbcPopText = "\n        <p>\u300Cabc\u57FA\u6E96\u300D\u3068\u306F\u3001\u30AF\u30A4\u30BA\u5927\u4F1A\u300Eabc\u300F\u306A\u3069\u304C\u63A1\u7528\u3057\u305F\u3001\u4E3B\u306B\u5927\u5B664\u5E74\u4EE5\u4E0B\u3092\u5BFE\u8C61\u306B\u3057\u305F\u30EC\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u3059\u3002\u5177\u4F53\u7684\u306B\u306F\u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\uFF08\u4E21\u65B9\u3067\u306F\u3042\u308A\u307E\u305B\u3093\uFF09\u306E\u6761\u4EF6\u3092\u6E80\u305F\u3059\u3053\u3068\u3068\u5B9A\u3081\u3089\u308C\u3066\u3044\u307E\u3059\u3002</p>\n        <ul>\n            <li>2017\u5E743\u67081\u65E5\u6642\u70B9\u3067\u5927\u5B66or\u5C02\u9580\u5B66\u6821\u9023\u7D9A\u5728\u5B664\u5E74\u4EE5\u4E0B\u3067\u3042\u308B\u3053\u3068\u3002\u305F\u3060\u3057\u3001\u4E00\u5EA6\u793E\u4F1A\u4EBA\u306B\u306A\u3063\u305F\u7D4C\u9A13\u3092\u6301\u3064\u5834\u5408\u3001\u3053\u3061\u3089\u306E\u6761\u4EF6\u306F\u6E80\u305F\u3055\u306A\u3044\u3082\u306E\u3068\u3057\u307E\u3059\u3002</li>\n            <li>2017\u5E744\u67081\u65E5\u306E\u6642\u70B9\u306722\u6B73\u4EE5\u4E0B\u3067\u3042\u308B\u3053\u3068\u3002\u4E00\u5EA6\u793E\u4F1A\u4EBA\u306B\u306A\u3063\u305F\u7D4C\u9A13\u304C\u3042\u3063\u3066\u308222\u6B73\u4EE5\u4E0B\u3067\u3042\u308C\u3070\u3053\u3061\u3089\u306E\u6761\u4EF6\u3092\u6E80\u305F\u3057\u307E\u3059\u3002</li>\n        </ul>\n        <p>\u307E\u305F\u300CABC\u57FA\u6E96\u300D\u3068\u306F\u3001\u30AF\u30A4\u30BA\u5927\u4F1A\u300EABC\u300F\u306A\u3069\u304C\u63A1\u7528\u3057\u305F\u3001\u300Cabc\u3068\u3044\u3046\u30AF\u30A4\u30BA\u5927\u4F1A\u306B\u51FA\u3089\u308C\u306A\u3044\u4E16\u4EE3\u300D\u3092\u5BFE\u8C61\u306B\u3057\u305F\u30EC\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u3059\u3002</p>";
  var topmessagePopText = "\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8\u306E\u304A\u77E5\u3089\u305B\u306B\u304A\u3044\u3066\u300C\uFF5E\uFF5E\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002\uFF08\u65E5\u7A0B\u304C\u5909\u66F4\u306B\u306A\u3063\u3066\u3044\u307E\u3059\uFF09\u300D\u306E\u300C\u65E5\u7A0B\u304C\u5909\u66F4\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u300D\u306E\u90E8\u5206\u304C\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3067\u3059\u3002\u7BA1\u7406\u5074\u306E\u5224\u65AD\u3067\u6587\u9762\u3092\u8FFD\u52A0\u30FB\u5909\u66F4\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002\u307E\u305F\u3001\u7279\u5B9A\u5927\u4F1A\u306E\u544A\u77E5\u3070\u304B\u308A\u304A\u77E5\u3089\u305B\u306B\u63B2\u8F09\u3055\u308C\u308B\u306E\u3092\u9632\u3050\u305F\u3081\u3001\u8EFD\u5FAE\u306A\u5185\u5BB9\u5909\u66F4\u7B49\u306B\u304A\u3044\u3066\u306F\u7533\u8ACB\u8005\u304C\u5E0C\u671B\u3057\u305F\u5834\u5408\u3067\u3082\u3001\u7BA1\u7406\u5074\u306E\u5224\u65AD\u3067\u30C8\u30C3\u30D7\u3078\u306E\u53CD\u6620\u3092\u884C\u308F\u306A\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002";

  var mapKeywordPopText = "\u30B7\u30B9\u30C6\u30E0\u5185\u90E8\u3067google\u5730\u56F3\u8868\u793A\u306B\u4F7F\u3046\u691C\u7D22\u6587\u5B57\u5217\u3092\u3054\u8A18\u5165\u304F\u3060\u3055\u3044\u3002\u78BA\u8A8D\u753B\u9762\u3067\u6B63\u3057\u3044\u5730\u56F3\u304C\u8868\u793A\u3055\u308C\u308B\u304B\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002\u57FA\u672C\u7684\u306B\u306F\u4F1A\u5834\u540D\u3067\u6B63\u3057\u3044\u5730\u56F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u304C\u3001\u56FD\u5185\u306B\u540C\u540D\u306E\u4F1A\u5834\u304C\u3042\u308B\u5834\u5408\u306A\u3069\u6B63\u3057\u304F\u306A\u3044\u5730\u56F3\u304C\u8868\u793A\u3055\u308C\u306A\u3044\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u5834\u5408\u5730\u56F3\u3092\u8868\u793A\u3059\u308B\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u3092\u30AA\u30D5\u306B\u3059\u308B\u304B\u3001\u6B63\u3057\u3044\u5730\u56F3\u304C\u8868\u793A\u3055\u308C\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\uFF08\u4F4F\u6240\u3084\u7DEF\u5EA6\u7D4C\u5EA6\u306A\u3069\uFF09\u3092\u3054\u691C\u8A0E\u304F\u3060\u3055\u3044\u3002";

  //チェックボックスに時間を追加する
  var addHour = function addHour(select) {
    for (var i = 0; i < 24; i++) {
      select.append("<option value=\"" + i + "\">" + i + "\u6642</option>");
    }
  };
  //チェックボックスに分を追加する
  var addMinute = function addMinute(select) {
    for (var i = 0; i < 60; i++) {
      select.append("<option value=\"" + i + "\">" + i + "\u5206</option>");
    }
  };

  //チェックボックスに年月日を追加する
  // select: 追加対象のselect box
  // is_undecided: 「未定」を入れるかどうか
  var addDate = function addDate(select, is_undecided) {
    // 現在の年月日を取得
    var current = new Date();
    var this_year = current.getFullYear();
    var this_month = current.getMonth() + 1;
    var this_day = current.getDate();
    select.append('<option value="no_choice">-------</option>');
    // is_undecidedがtrueなら，未定を追加する．
    if (is_undecided) {
      select.append('<option value="未定">未定</option>');
      select.append("<option value=\"" + this_year + "\u5E74\u672A\u5B9A\">" + this_year + "\u5E74\u672A\u5B9A</option>");
      select.append("<option value=\"" + this_year + "\u5E74" + this_month + "\u6708\u672A\u5B9A\">" + this_year + "\u5E74" + this_month + "\u6708\u672A\u5B9A</option>");
    }

    try {
      for (var i = 0; i < 732; i++) {
        //i日後を計算
        var date = new Date(this_year, this_month - 1, this_day + i);
        //年月日を取得
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var wd = weekDayList[date.getDay()];
        //月初ならば先頭に「~~年~月未定」を追加
        if (d == 1 && is_undecided) {
          select.append("<option value=\"" + y + "\u5E74" + m + "\u6708\u672A\u5B9A\">" + y + "\u5E74" + m + "\u6708\u672A\u5B9A</option>");
        }
        select.append("<option value=\"" + y + "\u5E74" + m + "\u6708" + d + "\u65E5(" + wd + ")\">" + y + "\u5E74" + m + "\u6708" + d + "\u65E5(" + wd + ")</option>");
        //大晦日まで表示
        if (y == this_year + 1 && m == 12 && d == 31) {
          throw false;
        };
      }
    } catch (e) {
      if (e) throw e;
    }
  };
  // 日付のプルダウン生成
  $('#BASIC_date').html('<select name="ymd" class="form-control">');
  addDate($('select[name="ymd"]'), true);

  //DatePicker生成関数
  var addDatePicker = function addDatePicker(id, target_select) {
    $("#" + id).datepicker({
      buttonImage: "../dist/img/calendar.png",
      buttonText: "カレンダーから選択",
      buttonImageOnly: true,
      dateFormat: "yy年m月d日(D)",
      minDate: 0,
      showOn: "button"
    });

    $("#" + id).bind('change', function () {
      $("select[name=\"" + target_select + "\"]").val($(this).val());
    });
  };

  addDatePicker("DATE-calendar", "ymd");

  //クイズ大会の場合に表示されるチェックボックス
  $("#BASIC_category-checkbox").hide();

  $("#BASIC_category-select").change(function () {
    var value = $("#BASIC_category-select").val();
    if (value === "contest") {
      $("#BASIC_category-checkbox").show();
    } else {
      $("#BASIC_category-checkbox").hide();
    }
    if (value === "no_choice") {
      $("#BASIC_category").addClass("has-danger");
    }
  });

  //開場・開始・終了の時刻フォーム
  $("#open_checkbox").before('<select name="open_hour" class="form-control col-2">').before('<select name="open_minute" class="form-control col-2">');
  $("#start_checkbox").before('<select name="start_hour" class="form-control col-2">').before('<select name="start_minute" class="form-control col-2">');
  $("#end_checkbox").before('<select name="end_hour" class="form-control col-2">').before('<select name="end_minute" class="form-control col-2">');

  addHour($('select[name="open_hour"]'));
  addHour($('select[name="start_hour"]'));
  addHour($('select[name="end_hour"]'));

  addMinute($('select[name="open_minute"]'));
  addMinute($('select[name="start_minute"]'));
  addMinute($('select[name="end_minute"]'));

  //「未定」のチェックを入れたときの設定
  $('#open_not_decided').change(function () {
    $('select[name=open_hour]').prop("disabled", $(this).is(':checked'));
    $('select[name=open_minute]').prop("disabled", $(this).is(':checked'));
  });

  $('#start_not_decided').change(function () {
    $('select[name=start_hour]').prop("disabled", $(this).is(':checked'));
    $('select[name=start_minute]').prop("disabled", $(this).is(':checked'));
  });

  $('#end_not_decided').change(function () {
    $('select[name=end_hour]').prop("disabled", $(this).is(':checked'));
    $('select[name=end_minute]').prop("disabled", $(this).is(':checked'));
  });

  //時刻入力フォームの追加
  $("#TS_add_item_button").click(function () {
    //divを動的に生成
    var original = $("<div></div>", { "class": "row align-items-center" });

    var item = $("#TS_other_item").val();

    original.attr('id', "TS_other[\"" + item + "\"]");

    //中に入るセレクトボックス(時間・分)
    var select_hour = $("<select>", {
      name: "other_hour[\"" + item + "\"]",
      "class": "form-control col-2"
    });

    var select_minute = $("<select>", {
      name: "other_minute[\"" + item + "\"]",
      "class": "form-control col-2"
    });

    //削除ボタン
    var delete_button = $("<button></button>", {
      type: "button",
      "class": "btn btn-danger col-2 TS_delete"
    }).append("削除");

    //セレクトボックスの選択肢
    addHour(select_hour);
    addMinute(select_minute);

    original.append("<div class=\"col-2\">" + item + "</div>").append(select_hour).append(select_minute).append(delete_button);

    $("#time_schedule").append(original);

    $("#TS_other_item").val('');
  });

  //追加した時刻入力フォームの削除ボタンのアクション
  $(document).on("click", ".TS_delete", function () {
    var removeObj = $(this).parent();
    console.log(removeObj);
    removeObj.fadeOut("fast", function () {
      removeObj.remove();
    });
  });

  //参加費のチェックボックスの設定
  $('#fee_not_decided').change(function () {
    $('#FEE_textarea').prop("disabled", $(this).is(':checked'));
  });

  //開催地域選択
  for (var j = 0; j < regionList.length; j++) {
    $('select[name=region]').append("<option value=\"" + regionList[j] + "\">" + regionList[j] + "</option>");
  }

  //会場でその他が選択されたら下のテキストボックスに入力可能になる．
  $('#place').change(function () {
    if ($('#place').val() == "others") {
      $('#PLACE_text').prop("disabled", false);
    } else {
      $('#PLACE_text').prop("disabled", true);
    }
  });

  $('#ENTRY_select').change(function () {
    var entryText = $('#ENTRY_textarea');
    var value = $('#ENTRY_select').val();
    if ($("#ENTRY_template_shown").is(':checked')) {
      switch (value) {
        case "necessary":
          entryText.val("本大会はWeb上での事前エントリーが必要です。当日エントリーは受け付けません。エントリー枠には定員がありますので、お早めにお申し込みください。 ");
          break;
        case "free_but_limited":
          entryText.val("本大会はWeb上での事前エントリーを受け付けます。エントリー枠には定員がありますので、お早めにお申し込みください。枠に余りがある場合、当日受付も行います。");
          break;
        case "unnecessary":
          entryText.val("本大会は事前エントリーは不要です。参加される方は当日会場に直接お越しください。 ");
          break;
        default:
          entryText.val("");
          break;
      }
    } else {
      entryText.val("");
    }
  });

  //エントリーの定型文入力
  $('#ENTRY_template_shown').change(function () {
    var entryText = $('#ENTRY_textarea');
    var value = $('#ENTRY_select').val();
    if ($(this).is(':checked')) {
      switch (value) {
        case "necessary":
          entryText.val("本大会はWeb上での事前エントリーが必要です。当日エントリーは受け付けません。エントリー枠には定員がありますので、お早めにお申し込みください。");
          break;
        case "free_but_limited":
          entryText.val("本大会はWeb上での事前エントリーを受け付けます。エントリー枠には定員がありますので、お早めにお申し込みください。枠に余りがある場合、当日受付も行います。");
          break;
        case "unnecessary":
          entryText.val("本大会は事前エントリーは不要です。参加される方は当日会場に直接お越しください。 ");
          break;
        default:
          entryText.val("");
          break;
      }
    } else {
      entryText.val("");
    }
  });

  $('#general_title').after('<select name="general_entry_start_day" class="form-control col-3">', '<div class="col-1"> <input type="text" style="display: none;" id="general_start-cal"> </div>', '<select name="general_entry_start_hour" class="form-control col-1">', '<div class="col-1">時</div>', '<select name="general_entry_start_minute" class="form-control col-1">', '<div class="col">分から</div>', '<select name="general_entry_end_day" class="form-control col-3 offset-2">', '<div class="col-1"> <input type="text" style="display: none;" id="general_end-cal"> </div>', '<select name="general_entry_end_hour" class="form-control col-1">', '<div class="col-1">時</div>', '<select name="general_entry_end_minute" class="form-control col-1">', '<div class="col">分まで</div>');

  //DatePicker
  addDatePicker("general_start-cal", "general_entry_start_day");
  addDatePicker("general_end-cal", "general_entry_end_day");

  $("[id^=ENTRY_start_cal_]").each(function (i, element) {
    var id = $(element).attr("id");
    var item = id.replace(/ENTRY_start_cal_/g, '');
    addDatePicker(id, "ENTRY_other_start_day[" + item + "]");
  });

  $("[id^=ENTRY_end_cal_]").each(function (i, element) {
    var id = $(element).attr("id");
    var item = id.replace(/ENTRY_end_cal_/g, '');
    addDatePicker(id, "ENTRY_other_end_day[" + item + "]");
  });

  addDate($('select[name=general_entry_start_day]'), false);
  addDate($('select[name=general_entry_end_day]'), false);
  addHour($('select[name=general_entry_start_hour]'));
  addHour($('select[name=general_entry_end_hour]'));
  addMinute($('select[name=general_entry_start_minute]'));
  addMinute($('select[name=general_entry_end_minute]'));

  $("#ENTRY_add_item_button").click(function () {
    //divを動的に生成
    var original = $("<div></div>", { "class": "row align-items-center" });

    var item = $("#ENTRY_other_item").val();
    console.log(item);

    original.attr('id', "ENTRY_other_" + item);

    //中に入るセレクトボックス(時間・分)
    var select_start_day = $("<select>", {
      name: "ENTRY_start_day_" + item,
      "class": "form-control col-3"
    });
    var start_cal_id = "ENTRY_start_cal_" + item;

    var start_picker = $("<div>", { "class": "col-1" }).append($("<input>", {
      "type": "text",
      "style": "display: none;",
      id: "" + start_cal_id
    }));

    var select_start_hour = $("<select>", {
      name: "ENTRY_start_hour_" + item,
      "class": "form-control col-1"
    });

    var select_start_minute = $("<select>", {
      name: "ENTRY_start_minute_" + item,
      "class": "form-control col-1"
    });

    var select_end_day = $("<select>", {
      name: "ENTRY_end_day_" + item,
      "class": "form-control col-3 offset-2"
    });

    var end_cal_id = "ENTRY_end_cal_" + item;

    var end_picker = $("<div>", { "class": "col-1" }).append($("<input>", {
      "type": "text",
      "style": "display: none;",
      id: "" + end_cal_id
    }));

    var select_end_hour = $("<select>", {
      name: "ENTRY_end_hour_" + item,
      "class": "form-control col-1"
    });

    var select_end_minute = $("<select>", {
      name: "ENTRY_end_minute_" + item,
      "class": "form-control col-1"
    });

    //削除ボタン
    var delete_button = $("<button></button>", {
      type: "button",
      "class": "btn btn-danger col-2 TS_delete"
    }).append("削除");

    //セレクトボックスの選択肢
    addDate(select_start_day, false);
    addHour(select_start_hour);
    addMinute(select_start_minute);
    addDate(select_end_day, false);
    addHour(select_end_hour);
    addMinute(select_end_minute);

    original.append("<div class=\"col-2\">" + item + "</div>").append(select_start_day).append(start_picker).append(select_start_hour).append('<div class="col-1">時</div>').append(select_start_minute).append('<div class="col">分から</div>').append(select_end_day).append(end_picker).append(select_end_hour).append('<div class="col-1">時</div>').append(select_end_minute).append('<div class="col">分まで</div>').append(delete_button);

    $("#entry_time").append(original);

    addDatePicker(start_cal_id, "ENTRY_start_day_" + item);
    addDatePicker(end_cal_id, "ENTRY_end_day_" + item);

    $("#ENTRY_other_item").val('');
  });

  var toggleVisibleInEntry = function toggleVisibleInEntry(selector, toggleComponent, item) {
    toggleComponent.find('input,button,select').prop("disabled", true);

    selector.change(function () {
      var val = selector.val();
      if (val === item) {
        toggleComponent.find('input,button,select').prop("disabled", false);
      } else {
        toggleComponent.find('input,button,select').prop("disabled", true);
      }
    });
  };

  toggleVisibleInEntry($("#AGE_limit_select"), $("#AGE_limit"), "yes");
  toggleVisibleInEntry($("#SCHOOL_limit_select"), $("#SCHOOL_limit"), "yes");
  toggleVisibleInEntry($("#SEX_limit_select"), $("#SEX_limit"), "yes");
  toggleVisibleInEntry($("#CAREER_limit_select"), $("#CAREER_limit"), "yes");
  toggleVisibleInEntry($("#RESULT_limit_select"), $("#RESULT_limit"), "yes");
  toggleVisibleInEntry($("#REGION_limit_select"), $("#REGION_limit"), "yes");
  toggleVisibleInEntry($("#TEAM_limit_select"), $("#TEAM_limit"), "team");
  toggleVisibleInEntry($("#PARTY_select"), $("#PARTY_detail"), "yes");

  var REMARK_eat_template = ["【飲食可】会場内での飲食は可能ですが、飲酒はご遠慮ください。また、クイズ中はビニール袋などの音にもご配慮ください。ごみは必ず各自でお持ち帰りください。喫煙は、喫煙所のみで行うようお願い致します．", "【飲物のみ可】会場内で軽い飲物を飲むことは可能ですが、食事や飲酒はご遠慮ください。ごみは必ず各自でお持ち帰りください。また、クイズ中はビニール袋などの音にもご配慮ください。喫煙は、喫煙所のみで行うようお願い致します．", "【指定場所のみ飲食可】会場での飲食・喫煙は指定された場所でのみ可能となっております。飲酒はご遠慮ください。ごみは必ず各自でお持ち帰りください。", "【飲物不可】会場内での飲食・喫煙はご遠慮ください。喫煙は、喫煙所のみで行うようお願い致します．"];

  var REMARK_sell_template = ["【頒布自由】問題集の頒布は休み時間であれば自由に行っていただいて構いません。 ", "【指定場所のみ頒布自由】問題集頒布は主催者が指定した時間・場所に行ってください。事前の申請は不要です。詳細は公式サイトにて告知します。 ", "【事前申請必要】問題集頒布は事前に部数・価格等を申請されていた場合のみ、可能です。当日は主催者が、指定する時間・場所で頒布を行なってください。詳細は公式サイトにて告知します。 ", "【頒布不可】問題集の頒布はご遠慮ください。 "];

  var REMARK_media_template = ["【取材可】取材を希望するメディア関係者は、大会公式アドレスまでお問い合わせ願います。", "【取材不可】メディア等による取材は受け付けておりません。 "];

  var REMARK_watch_template = ["【見学可能】本大会は無料にてご見学いただけますが、進行の妨げにならないようご配慮下さい。", "【見学有料】本大会の見学は有料となります。また、進行の妨げにならないようご配慮下さい。", "【事前申請必要】本大会の見学は席数が限られているため、事前申請が必要となります。詳細は公式サイトを御覧ください。", "【見学不可】本大会の見学はご遠慮ください。"];

  var REMARK_private_record_template = ["【記録可能】参加者によるビデオ撮影、写真撮影、録音は全面的に認めます。また、写真や動画のインターネットへのアップロード等も認めますが、販売などの商用利用は固くお断りいたします。会場での機材のご使用の際は、他の参加者のみなさんのご迷惑とならないようご留意ください。 ", "【私的用途に限り記録可能】参加者によるビデオ撮影、写真撮影、録音は、私的利用に限り許可します。 これらの記録媒体の後日の一般販売および誰もが広く閲覧できるインターネットへのアップロード等は原則禁止とします（写真は、被写体全員の許可が得られていれば可能とします）。また、会場での機材のご使用の際は、他の参加者のみなさんのご迷惑とならないようご留意ください。 ", "【私的用途に限り録音のみ可能】参加者によるビデオ撮影、写真撮影は禁止とさせていただきます。録音に限り、私的利用に限り許可します。録音データの後日の一般販売および誰もが広く閲覧できるインターネットへのアップロード等は原則禁止とします。 ", "【記録不可】参加者によるビデオ撮影、写真撮影、録音は禁止とさせていただきます。 "];

  var REMARK_public_record_template = ["【撮影後公開可能性あり】主催者および主催者が許可したメディア関係者や参加者による写真・ビデオ撮影および録音を行うことがあります。これらの記録媒体は、後日の「一般発売」「インターネットへのアップロード」「テレビや雑誌などを通じて公開」等が行われる可能性があります。 ", "【撮影後公開可能性あり、拒否者はマスク着用】主催者および主催者が許可したメディア関係者や参加者による写真・ビデオ撮影および録音を行うことがあります。これらの記録媒体は、後日の「一般発売」「インターネットへのアップロード」「テレビや雑誌などを通じて公開」等が行われる可能性があります。撮影後の公開を拒否されるという方は、マスク着用により意思表示をお願い致します。 ", "【撮影実施も、一般公開なし】主催者による写真・ビデオ撮影および録音を行うことがありますが、これらは内部資料とすることが目的であり、記録媒体の後日の一般発売およびインターネットへのアップロード等は行いません。 ", "【撮影なし】主催者による写真・ビデオ撮影および録音は行いません。 "];

  var REMARK_result_template = ["【原則本名にて報告】この大会で予選上位となった方・本戦で上位進出した方などは、日本クイズ協会公式スケジュール管理サイトに原則本名で報告を行います。日本クイズ協会Web会員事業部では、大会結果の掲載、会報への掲載などを行う可能性があります。また、主催者が作成したホームページや問題集も同様のものとして扱います。本名での結果報告を避けたい参加者の方は、主催者にお問い合わせ下さい。 ", "【エントリー名にて報告】この大会で予選上位となった方・本戦で上位進出した方などは、日本クイズ協会公式スケジュール管理サイトにエントリーした名前で報告を行います。日本クイズ協会Web会員事業部では、大会結果の掲載、会報への掲載などを行う可能性があります。また、主催者が作成したホームページや問題集も同様のものとして扱います。 ", "【報告なし】このイベントは日本クイズ協会公式スケジュール管理サイトに結果報告を行いません。また、主催者が作成したホームページや問題集にも個人情報を掲載致しません。 "];

  var addTemplate = function addTemplate(templates, kind) {
    var templateDOM = $("#REMARK_" + kind + "_template");
    var buttonDOM = $("#REMARK_" + kind + "_button");
    var textDOM = $("#REMARK_" + kind + "_text");

    for (var i in templates) {
      templateDOM.append("<div class=\"radio\">\n          <label for=\"eat_" + i + "\" class=\"col\">\n            <input type=\"radio\" id=\"" + kind + "_" + i + "\" name=\"REMARK_" + kind + "_radio\" value=\"" + i + "\">\n            " + templates[i] + "\n          </label>\n        </div>");
    }

    templateDOM.hide();

    buttonDOM.click(function () {
      console.log(kind);
      templateDOM.fadeToggle();
    });

    $("input[name=\"REMARK_" + kind + "_radio\"]").click(function () {
      textDOM.val("");
      var value = $("input[name=\"REMARK_" + kind + "_radio\"]:checked").val();
      console.log(value);
      textDOM.val(templates[parseInt(value)]);
    });
  };

  addTemplate(REMARK_eat_template, "eat");
  addTemplate(REMARK_sell_template, "sell");
  addTemplate(REMARK_media_template, "media");
  addTemplate(REMARK_watch_template, "watch");
  addTemplate(REMARK_private_record_template, "private_record");
  addTemplate(REMARK_public_record_template, "public_record");
  addTemplate(REMARK_result_template, "result");

  $("#REMARK_add_button").click(function () {
    var original = $("<div></div>", { "class": "row align-items-center" });

    var item = $("#REMARK_other_item").val();

    var textarea = $("<div></div>", { "class": "col-8" }).append("<textarea name='REMARK_other[\"" + item + "\"]' id=\"REMARK_other[\"" + item + "\"]\" rows=\"5\" class=\"form-control\"></textarea>");

    var delete_button = $("<button></button>", {
      type: "button",
      "class": "btn btn-danger col-2 TS_delete"
    }).append("削除");

    original.attr('id', "REMARK_other[\"" + item + "\"]");

    original.append("<div class=\"col-2\">" + item + "</div>").append(textarea).append(delete_button);

    $("#REMARK_other").append(original);

    $("#REMARK_other_item").val("");
  });

  $("#OWNER_message").append("<input type=\"checkbox\" name=\"OWNER_message_shown\" value=\"OWNER_message_shown\" checked id=\"OWNER_message_shown\" />").append("<label for=\"OWNER_message_shown\" class=\"checkbox\">\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8\u306E\u300C\u304A\u77E5\u3089\u305B\u300D\u306Bxxxxx\u3092\u8868\u793A\u3059\u308B\uFF0E</label>");

  $("#AGREEMENT_privacy_text").val("\u500B\u4EBA\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001\u4E3B\u50AC\u8005\u304C\u3001\u81EA\u3089\u53D6\u308A\u6C7A\u3081\u305F\u65B9\u6CD5\u306B\u3088\u308A\u3001\u8CAC\u4EFB\u3092\u6301\u3063\u3066\u9069\u6B63\u306A\u7BA1\u7406\u3092\u884C\u3044\u307E\u3059\u3002\n\u307E\u305F\u3001\u4E00\u5FC3\u7CBE\u9032\u306B\u7D50\u679C\u5831\u544A\u3092\u884C\u3046\u30A4\u30D9\u30F3\u30C8\u3067\u306F\u3001\u4E8B\u524D\u3082\u3057\u304F\u306F\u5F53\u65E5\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3067\u500B\u4EBA\u60C5\u5831\u3092\u53CE\u96C6\u3059\u308B\u969B\u306B\n\u300C\u5927\u4F1A\u5F8C\u3001\u6C0F\u540D\u30FB\u6240\u5C5E\u30FB\u6210\u7E3E\u3092\u4E00\u5FC3\u7CBE\u9032\u306B\u5831\u544A\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u300D\u3053\u3068\u3092\u542B\u3080\u300C\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u300D\u3092\u63B2\u793A\u3057\u3001\n\u53C2\u52A0\u8005\u306B\u8A31\u8AFE\u3092\u53D6\u308A\u307E\u3059\u3002");

  //イベント分類のポップオーバー
  $("#BASIC_category-pop").attr('data-content', categoryPopText);

  $("#BASIC_category-result-pop").attr('data-content', resultPopText);

  $("#BASIC_category-genre-pop").attr('data-content', genrePopText);

  $("#ENTRY_pop").attr('data-content', entryPopText);

  $("#REMARK_template-pop").attr('data-content', templatePopText);

  $("#SCHOOL_limit-abc-pop").attr('data-content', schoolAbcPopText);

  $("#AGREEMENT_inspection-pop").attr('data-content', "実際に伺う際には再度こちらから連絡を差し上げます。");

  $("#OWNER_topmessage-pop").attr('data-content', topmessagePopText);

  $("#MAP_keyword-pop").attr('data-content', mapKeywordPopText);

  $("[data-toggle=popover]").popover({
    trigger: 'hover', // click,hover,focus,manualを選択出来る
    html: true });
});