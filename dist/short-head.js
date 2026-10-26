!function() {
    try {
        const t = document.querySelector('script[type="shorthead"]');
        if (!t || !t.innerHTML) return;
        const c = JSON.parse(t.innerHTML);
        const h = Object.values(c).join('');
        const d = document.createElement("div");
        d.innerHTML = h;
        const f = document.createDocumentFragment();
        while (d.firstChild) {
            f.appendChild(d.firstChild);
        }
        document.head.appendChild(f);
    } catch (e) {
        console.error("Head loader error:", e);
    }
}();
