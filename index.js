const { app, BrowserWindow } = require("electron");

function createWindow() {
	let win = new BrowserWindow({
		show: false,
		icon: 'build/icon.ico',
		webPreferences: {
			webSecurity: false,
			nodeIntegration: true
		}
	});
	win.maximize();
	win.removeMenu();
	win.loadFile("index.html");
}
app.on("ready", createWindow);