let pieces = [["p", "pawn"], ["q", "queen"], ["r", "rook"], ["k", "king"], ["b", "bishop"], ["n", "knight"]];

let sheet = document.createElement('style')

for (let i = 0; i < pieces.length; i++) {
    sheet.innerHTML += ".is2d ." + pieces[i][1] + ".white {background-image:url('" + browser.runtime.getURL("ressources/pieces/w" + pieces[i][0] + ".png") + "')}\n";
    sheet.innerHTML += ".is2d ." + pieces[i][1] + ".black {background-image:url('" + browser.runtime.getURL("ressources/pieces/b" + pieces[i][0] + ".png") + "')}\n";
}
sheet.innerHTML += ".is2d cg-board {background-image:url('" + browser.runtime.getURL("ressources/boards/150.png") + "') !important}\n";
document.body.appendChild(sheet);
