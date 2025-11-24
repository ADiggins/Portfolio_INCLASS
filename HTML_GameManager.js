console.log("Game Manager is working :)");

var loadedGame = document.createElement('script');
if (sessionStorage.getItem("gameName") == null)
    loadedGame.src = `Games/Pong.js`
else
    loadedGame.src = `Games/${sessionStorage.getItem("gameName")}.js`
document.head.appendChild(loadedGame);

function loadNewGame( fileName ) {
    sessionStorage.setItem("gameName", fileName);
    location.reload();
}