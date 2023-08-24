const setConsoleListener = (virtualConsole) => {
  virtualConsole.on('error', (message) => {})
  virtualConsole.on('warn', (message) => {})
  virtualConsole.on('info', (message) => {})
  virtualConsole.on('dir', (message) => {})
}

module.exports = {
  setConsoleListener,
}
