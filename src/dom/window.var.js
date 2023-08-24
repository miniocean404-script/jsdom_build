const { ScreenConfig } = require('jsdom-browser.screen')
const XMLHttpRequest = require('xhr2')
const { randomInt } = require('crypto')

const setWindowsVar = (window) => {
  window.XMLHttpRequest = XMLHttpRequest
  window.randomInt = randomInt

  window.setTimeout = (...arg) => arg[0]()
  window.setInterval = (...arg) => arg[0]()

  window.innerWidth = 720
  window.innerHeight = 1056
  window.devicePixelRatio = 3
  window.length = 1
  window.languages = ['zh-CN', 'zh']
  window.language = 'zh-CN'
  window.deviceMemory = 4
  window.hardwareConcurrency = 8
  window.platform = 'Linux aarch64'
  window.maxTouchPoints = 5
  window.vendor = 'Google Inc.'

  Object.defineProperty(window.HTMLHtmlElement.prototype, 'clientWidth', {
    value: 720,
  })
  Object.defineProperty(window.HTMLHtmlElement.prototype, 'clientHeight', {
    value: 1056,
  })

  // Object.defineProperty(window, 'xx', { value: 'xx' })
}

const setScreen = (window) => {
  // 设置屏幕信息
  new ScreenConfig({
    availHeight: 640,
    availLeft: 0,
    availTop: 0,
    availWidth: 360,
    colorDepth: 24,
    height: 640,
    isExtended: false,
    onchange: null,
    pixelDepth: 24,
    width: 360,
    orientation: {
      angle: 0,
      onchange: null,
      type: 'portrait-primary',
    },
  }).configure(window.screen)
}

module.exports = {
  setWindowsVar,
  setScreen,
}
