let sheet = document.createElement('style')
sheet.innerHTML = ".is2d .pawn.white {background-image:url('" + browser.runtime.getURL("ressources/pieces/wp.png") + "')}";
document.body.appendChild(sheet);