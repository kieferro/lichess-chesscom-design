let childs = document.getElementsByTagName("head")[0].childNodes;

for (let i = 0; i < childs.length; i++) {
    if (childs[i].tagName === "LINK") {
        let href = childs[i].href;

        if (href.includes("piece-css")) {
            let new_child = childs[i].cloneNode(true);
            new_child.href = browser.runtime.getURL("chesscom-style.css");

            childs[i].remove();

            document.getElementsByTagName("head")[0].appendChild(new_child);
            break;
        }
    }
}