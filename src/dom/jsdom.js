// https://juejin.cn/post/7151065517569081380#heading-2

const jsdom = require('jsdom')
const { setWindowsVar, setScreen } = require('./window.var')
const { setCookieJar } = require('./cookie')

const { JSDOM, ResourceLoader, VirtualConsole } = jsdom

const defaultUa =
  'Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5075 MMWEBSDK/20230504 MMWEBID/5707 MicroMessenger/8.0.37.2380(0x28002598) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64'

const initBrowserEnv = ({ url, referrer, cookie, ua }) => {
  const vConsole = new VirtualConsole()
  vConsole.sendTo(console, { omitJSDOMErrors: false })

  const dom = new JSDOM('', {
    // 创建 Window 和 Document 对象之后，但在解析任何 HTML 并使用节点填充文档之前
    beforeParse(window) {
      setWindowsVar(window)
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
    cookieJar: setCookieJar(cookie, url),

    // 默认情况下，jsdom 不会加载任何子资源，例如脚本、样式表、图像或 iframe。
    // 如果您希望 jsdom 加载此类资源，您可以传递该resources: "usable"选项，这将加载所有可用的资源
    resources: new ResourceLoader({
      userAgent: ua || defaultUa,
    }),

    // 虚拟控制台传输到 node 中
    virtualConsole: vConsole,
  })

  return dom.window
}

module.exports = {
  initBrowserEnv,
}
