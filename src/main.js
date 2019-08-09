const {app, BrowserWindow} = require('electron');
require('./mpris')
function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
        },
        frame: false
    })
    win.loadFile('src/index.html');
    win.webContents.openDevTools();
}
app.on('ready', createWindow);
