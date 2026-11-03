const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('node:path');
const fs = require('node:fs');

app.setName('Naklejki OC');
const userData = path.join(app.getPath('appData'), 'Naklejki OC');
fs.mkdirSync(userData, { recursive: true });
app.setPath('userData', userData);

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    title: 'Generator etykiet Opal Compact',
    width: 960,
    height: 900,
    minWidth: 360,
    minHeight: 580,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  mainWindow.removeMenu();
  mainWindow.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  mainWindow.webContents.on('will-navigate', event => event.preventDefault());
  mainWindow.webContents.session.setPermissionRequestHandler((_contents, _permission, callback) => callback(false));
  mainWindow.loadFile(path.join(__dirname, '..', 'index.html'));
}

if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.show();
      mainWindow.focus();
    }
  });
  app.whenReady().then(() => {
    ipcMain.handle('labels:print', async event => {
      if (!mainWindow || event.sender !== mainWindow.webContents || event.senderFrame !== mainWindow.webContents.mainFrame) {
        throw new Error('Invalid print request');
      }
      return new Promise(resolve => {
        mainWindow.webContents.print({
          silent: false,
          printBackground: true,
          margins: { marginType: 'none' },
          scaleFactor: 100,
          pageSize: { width: 96200, height: 70800 }
        }, (success, failureReason) => {
          if (!success && !/cancel/i.test(failureReason) && !mainWindow.isDestroyed()) {
            dialog.showMessageBox(mainWindow, {
              type: 'warning',
              title: 'Drukowanie etykiet',
              message: 'Nie udało się wydrukować etykiet.',
              detail: 'Sprawdź dostępność drukarki i ustawienie papieru 96,2 × 70,8 mm.'
            });
          }
          resolve(success);
        });
      });
    });
    createWindow();
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
}
