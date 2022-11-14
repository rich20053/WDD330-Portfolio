function showBrowser() {
    const output = document.getElementById("output");
    output.textContent = window.navigator.userAgent;
}

function showAddress() {
    const output = document.getElementById("output");
    output.textContent = window.location.href;
}

function showSize() {
    const output = document.getElementById("output");
    output.textContent = `Width: ${window.screen.width}  Height: ${window.screen.height}`;
}


