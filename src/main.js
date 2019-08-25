const {app, BrowserWindow} = require('electron');
require('./mpris')
function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
        },
        frame: false,
        transparent: true
    })
    win.loadFile('src/index.html');
//    win.webContents.openDevTools();
}
const onAppReady = createWindow;
app.on('ready', () => setTimeout(onAppReady, 500));
