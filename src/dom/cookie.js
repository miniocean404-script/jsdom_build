const Cookie = require('cookie')
// const tough = require('tough-cookie')

const getCookie = (dom) => dom.window.document.cookie

const setCookieJar = (cookieJar,cookie, url) => {
  cookieJar.removeAllCookiesSync()

  const cks = Cookie.parse(cookie,{loose:true})

  for (const [key,value] of Object.entries(cks)) {
    cookieJar.setCookie(`${key}=${value}`, url)
  }
}

module.exports = {
  setCookieJar,
  getCookie,
}
