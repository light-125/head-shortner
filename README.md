# Super-Shorthead Loader

A 2-line JSON-driven `<head>` element injection tool optimized with `DocumentFragment`.
`DocumentFragment` を利用して `<head>` 要素を一括挿入する、2行構成の軽量ローダーです。

---

## Installation / インストール

### npm
```bash
npm i short-head
```

### CDN (jsDelivr)
[https://cdn.jsdelivr.net/gh/light-125/head-shortner@main/dist/short-head.min.js](https://cdn.jsdelivr.net/gh/light-125/head-shortner@main/dist/short-head.min.js)

---

## Usage / 使い方

### 1. HTML Configuration / HTML側の設定
Add these 2 lines inside `<head>` or at the beginning of `<body>`.
`<head>` 内、または `<body>` の先頭に以下の2行を配置します。

#### Using local or npm path / ローカルまたはnpmパスを使用する場合:
```html
<script type="shorthead">{"fav":"<link rel=\"icon\" href=\"/favicon.ico\">","og":"<meta property=\"og:title\" content=\"Web Site\">"}</script>
<script src="node_modules/short-head/dist/short-head.min.js" defer></script>
```

#### Using CDN / CDNを使用する場合:
```html
<script type="shorthead">{"fav":"<link rel='icon' href='favicon.ico'>","og":"<meta property='og:title' content='Web Site'>"}</script>
<script src="https://cdn.jsdelivr.net/gh/light-125/head-shortner@main/dist/short-head.min.js" defer></script>
```

### 2. Source Code (`dist/short-head.js`) / ソースコード
```javascript
(function () {
  try {
    const t = document.querySelector('script[type="shorthead"]');
    if (!t || !t.innerHTML) return;
    const h = Object.values(JSON.parse(t.innerHTML)).join('');
    const d = document.createElement("div");
    d.innerHTML = h;
    const f = document.createDocumentFragment();
    while (d.firstChild) f.appendChild(d.firstChild);
    document.head.appendChild(f);
  } catch (e) {
    console.error("[Shorthead Loader] Injection failed:", e);
  }
})();
```

---

## Data Schema / データ構造
```json
{
  "theme": "<meta name='theme-color' content="#000000'>",
  "og_title": "<meta property='og:title' content='Production Site'>"
}
```

---

## License / ライセンス
See [LICENSE](LICENSE) for terms. / 詳細は [LICENSE](LICENSE) を参照。
