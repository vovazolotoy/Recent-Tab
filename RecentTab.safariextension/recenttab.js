
window.addEventListener("keydown", keydownHandler, false);
window.addEventListener("keyup", keyupHandler, false);

var tabsHistoryCount = 0;

function keydownHandler(event) {
    if (event.altKey && event.keyCode === 9) {
        event.stopPropagation();
        event.preventDefault();
        tabsHistoryCount++;
    }
}

function keyupHandler(event) {
    if (!event.altKey && tabsHistoryCount) {
        event.stopPropagation();
        event.preventDefault();
        safari.self.tab.dispatchMessage("keydownHandler", tabsHistoryCount);
        tabsHistoryCount = 0;
    }
}
