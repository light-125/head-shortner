# Super-Shorthead Loader

A 2-line JSON-driven `<head>` element injection tool optimized with `DocumentFragment`.
`DocumentFragment` を利用して `<head>` 要素を一括挿入する、2行構成の軽量ローダーです。

---

## Usage / 使い方

### 1. HTML Configuration / HTML側の設定
Add these 2 lines inside `<head>` or at the beginning of `<body>`.
`<head>` 内、または `<body>` の先頭に以下の2行を配置します。

```html
<script type="shorthead">{"fav":"<link rel=\"icon\" href=\"/favicon.ico\">","og":"<meta property=\"og:title\" content=\"Web Site\">"}</script>
<script src="head-loader.js" defer></script>
```

### 2. Loader Script (`head-loader.js`) / ローダー本体
Save this code as `head-loader.js`. It safely parses JSON and batch-injects nodes at $\mathcal{O}(N)$ complexity to minimize browser reflow.
以下を `head-loader.js` として保存します。`DocumentFragment` による一括挿入で描画負荷を最小化します。

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
The JSON input maps unique keys to valid HTML string fragments.
JSONは一意のキーと有効なHTML文字列のペアで構成します。

```json
{
  "theme": "<meta name=\"theme-color\" content=\"#000000\">",
  "og_title": "<meta property=\"og:title\" content=\"Production Site\">"
}
```

---

## License / ライセンス
This project is open-source. See [LICENSE](LICENSE) for terms.
詳細は [LICENSE](LICENSE) を参照してください。
