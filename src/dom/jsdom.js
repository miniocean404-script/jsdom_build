// https://juejin.cn/post/7151065517569081380#heading-2

const jsdom = require('jsdom')
const { setCommonWindowsVar, setScreen } = require('./window.var')
const { setCookieJar } = require('./cookie')
const { toughCookie } = require('jsdom')

const { JSDOM, ResourceLoader, VirtualConsole } = jsdom

const initBrowserEnv = ({ url, referrer, cookie, ua }) => {
  const origin = new URL(url).origin

  const vConsole = new VirtualConsole()
  vConsole.sendTo(console, { omitJSDOMErrors: false })

  const cookieJar = new toughCookie.CookieJar(null, { allowSpecialUseDomain: true })
  setCookieJar(cookieJar, cookie, origin)
  const resourceLoader = new ResourceLoader({ userAgent: ua })

  const dom = new JSDOM('', {
    // 创建 Window 和 Document 对象之后，但在解析任何 HTML 并使用节点填充文档之前
    beforeParse(window) {
      setCommonWindowsVar(window)
      // 设置屏幕信息
      setScreen(window)
    },
    // 将假装正在渲染和显示内容。
    pretendToBeVisual: true,
    // 设置 window.location, document.URL, document.documentURI 返回值,
    // 并影响文档中相对 URL 的解析以及获取子资源时使用的同源限制和引用站点等内容。它默认为"about:blank"
    url,
    // 仅影响从 读取的值 document.referrer
    referrer,
    contentType: 'text/html',
    // 启用在页面内执行 script 中的 js 脚本
    runScripts: 'dangerously',
    // 存储 HTTP cookie。具有与文档相同域的 URL 且未标记为仅 HTTP 的 Cookie 可以通过 API 访问document.cookie。此外，cookie jar 中的所有 cookie 都会影响子资源的获取。
    cookieJar: cookieJar,

    // 默认情况下，jsdom 不会加载任何子资源，例如脚本、样式表、图像或 iframe。
    // 如果您希望 jsdom 加载此类资源，您可以传递该resources: "usable"选项，这将加载所有可用的资源
    resources: resourceLoader,

    // 虚拟控制台传输到 node 中
    virtualConsole: vConsole,
  })

  return dom.window
}

module.exports = {
  initBrowserEnv,
}
