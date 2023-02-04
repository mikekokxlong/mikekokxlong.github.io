var gameData = {
    wsp: 0,
    wspPerClick: 1,
    wspPerClickCost: 10,
    lastTick: Date.now()
}

function playWord() {
    gameData.wsp += gameData.wspPerClick
    document.getElementById("wspGained").innerHTML = gameData.wsp + " WSP"
}

function buyWspPerClick() {
    if (gameData.wsp >=gameData.wspPerClickCost) {
        gameData.wsp -= gameData.wspPerClickCost
        gameData.wspPerClick += 1
        gameData.wspPerClickCost *= 2
        document.getElementById("wspGained").innerHTML = gameData.wsp + " WSP"
        document.getElementById("perClickUpgrade").innerHTML = "+1 WSP play (currently " + gameData.wspPerClick + ") cost: " + gameData.wspPerClickCost + " WSP"
    }
}

var mainGameLoop = window.setInterval(function() {
    diff = date.now() - gameData.lastTick;
    gameData.lastTick = Date.now() // Update lastTick
    gameData.wsp += gameData.wspPerClick * (diff / 1000)
    document.getElementById("wspGained").innerHTML = gameData.wsp + " WSP gained"
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("wordSoupSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("wordSoupSave"))
if (savegame !== null) {
  gameData = savegame
}