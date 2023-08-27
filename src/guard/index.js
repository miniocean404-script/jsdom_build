const { initBrowserEnv } = require('../dom/jsdom')
const getEncrypt = require('./encrypt/encrypt')

async function sign(fullUrl, cookie, ua) {
  const url = 'https://market.waimai.meituan.com'
  const referrer = 'https://passport.meituan.com/'

  const window = initBrowserEnv({
    url,
    referrer,
    cookie,
    ua,
  })

  getEncrypt(window)

  const data = {
    cType: 'mti',
    fpPlatform: 3,
    wxOpenId: '',
    appVersion: '',
    mtFingerprint: '', // 加密完成后赋值
  }

  // 执行 加密 文件的加密函数
  data.mtFingerprint = window.H5guard.getfp()

  return await window.H5guard.sign({
    url: fullUrl,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      cookie,
      data,
    },
  })
}

module.exports = sign
