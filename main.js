let childs = document.getElementsByTagName("head")[0].childNodes;

for (let i = 0; i < childs.length; i++) {
    if (childs[i].tagName === "LINK") {
        let href = childs[i].href;

        if (href.includes("piece-css")) {
            childs[i].href = browser.runtime.getURL("chesscom-style.css");
        }
    }
}