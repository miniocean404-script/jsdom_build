const { initBrowserEnv } = require('../dom/jsdom')
const getEncrypt = require('./encrypt')

async function sign(fullUrl, data, cookie, ua) {
  const url = 'https://market.waimai.meituan.com'
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

  return await window.H5guard.sign({
    url: fullUrl,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      cookie,
    },
    data,
  })
}

const init = async () => {
  const WECHAT_UA =
    'Mozilla/5.0 (Linux; Android 12; Redmi K30 Pro Build/SKQ1.220303.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230604 MMWEBID/2173 MicroMessenger/8.0.38.2400(0x28002656) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64'

  const data = {
    cType: 'mti',
    fpPlatform: 3,
    wxOpenId: '',
    appVersion: '',
    mtFingerprint: '', // 加密完成后赋值
  }
  console.log(
    await sign(
      'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/info',
      data,
      'oops=AgH_ID_94D3rMdfDPQXDep3Aq-uO2wV8lX_bjyNySsmKynhLXbt6eMr_FCeM3OzCZCt8ofJfoOCbUwAAAABhGgAAACYj9NoQFWZ6Q_jlufQBiwAuZHMKDKthTx1071Zpln0RlPbuLLwEkT1CoSa8s2qq;',
      WECHAT_UA,
    ),
  )
}

init()
