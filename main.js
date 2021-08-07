const { app, BrowserWindow } = require('electron')
const electronReload = require('electron-reload')
const path = require('path')

require('electron-reload')(__dirname, {
	electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

// modify your existing createWindow() function
function createWindow () {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true,
		}
	})

	win.loadFile('index.html')
}

app.on('window-all-closed', function () {
	//if (process.platform !== 'darwin') app.quit()
	app.quit();
})

app.whenReady().then(() => {
	createWindow()

	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})


