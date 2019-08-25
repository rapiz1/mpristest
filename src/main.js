const {app, BrowserWindow} = require('electron');
require('./mpris')
function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
        },
    })
    win.loadFile('src/index.html');
}
app.on('ready', createWindow);
