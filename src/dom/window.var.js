const { ScreenConfig } = require('jsdom-browser.screen')
const XMLHttpRequest = require('xhr2')
const { randomInt } = require('crypto')

const setCommonWindowsVar = (window) => {
  window.XMLHttpRequest = XMLHttpRequest
  window.randomInt = randomInt

  Object.defineProperty(window, 'setTimeout', {
    value: function () {
      arguments[0]()
    },
  })
  Object.defineProperty(window, 'setInterval', {
    value: function () {
      arguments[0]()
    },
  })
  Object.defineProperty(window, 'setCookie', { value: this.setCookie })
  Object.defineProperty(window, 'cookieJar', { value: this.dom.cookieJar })
  Object.defineProperty(window, 'baseUrl', { value: this.baseUrl })
  Object.defineProperty(window.HTMLHtmlElement.prototype, 'clientWidth', { value: 720 })
  Object.defineProperty(window.HTMLHtmlElement.prototype, 'clientHeight', { value: 1056 })
  Object.defineProperty(window, 'innerWidth', { value: 720 })
  Object.defineProperty(window, 'innerHeight', { value: 1056 })
  Object.defineProperty(window, 'devicePixelRatio', { value: 3 })
  Object.defineProperty(window, 'length', { value: 1 })
  Object.defineProperty(navigator, 'languages', { value: ['zh-CN', 'zh'] })
  Object.defineProperty(navigator, 'language', { value: 'zh-CN' })
  Object.defineProperty(navigator, 'deviceMemory', { value: 4 })
  Object.defineProperty(navigator, 'hardwareConcurrency', { value: 8 })
  Object.defineProperty(navigator, 'platform', { value: 'Linux aarch64' })
  Object.defineProperty(navigator, 'maxTouchPoints', { value: 5 })
  Object.defineProperty(navigator, 'vendor', { value: 'Google Inc.' })

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
  setCommonWindowsVar,
  setScreen,
}
