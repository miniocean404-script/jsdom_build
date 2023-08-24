const Cookie = require('cookie')
const { toughCookie } = require('jsdom')
// const tough = require('tough-cookie')

const getCookie = (dom) => dom.window.document.cookie

const setCookieJar = (cookie, url) => {
  const cookieJar = new toughCookie.CookieJar(null, {
    allowSpecialUseDomain: true,
  })

  cookieJar.removeAllCookiesSync()

  const cks = Cookie.parse(cookie)

  for (const k in cks) {
    cookieJar.setCookie(`${k}=${cks[k]}`, url)
  }

  return cookieJar
}

module.exports = {
  setCookieJar,
  getCookie,
}
