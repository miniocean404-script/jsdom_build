const { initBrowserEnv } = require('../dom/jsdom')
const getEncrypt = require('./encrypt/encrypt_2.1.0')

async function sign(fullUrl, cookie, ua, data) {
  const url = 'https://market.waimai.meituan.com/gd2/wm/4Hbymy?el_biz=waimai&'
  const referrer = 'https://passport.meituan.com/'

  const window = initBrowserEnv({
    url,
    referrer,
    cookie,
    ua,
  })

  getEncrypt(window)

  // 执行 加密 文件的加密函数
  data.mtFingerprint = window.H5guard.getfp()

  const encrypy = await window.H5guard.sign({
    url: fullUrl,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Content-Type': 'application/json',
      'content-encoding': '',
    },
    data,
  })

  return {
    mtFingerprint: data.mtFingerprint,
    mtgsig: encrypy.headers.mtgsig,
  }
}

module.exports = sign
