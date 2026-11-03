const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('desktopLabels', {
  print: () => ipcRenderer.invoke('labels:print')
});
