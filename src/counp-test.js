const sign = require('./guard/index')
const H5 = require('./guard/bbbs/bbbs_2.1.0')

const { default: axios } = require('axios')

const activity = {
  couponReferId: 'D74AC7E0775B4CE38A88F741CA429815',
  gdPageId: '511898',
  pageId: '514537',
  instanceId: '16885283734190.4712485538349984',
  desc: '30 - 15',
  url: 'https://promotion.waimai.meituan.com/lottery/couponcomponent/fetchcomponentcoupon/v2',
}

const cookie = ['']

const WECHAT_UA =
  'Mozilla/5.0 (Linux; Android 12; Redmi K30 Pro Build/SKQ1.220303.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230604 MMWEBID/2173 MicroMessenger/8.0.38.2400(0x28002656) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64'

const init = async () => {
  const { couponReferId, gdPageId, pageId, instanceId, url } = activity

  // 提前计算签名
  const fullUrl = new URL(url)

  const fiexd = {
    couponReferId: couponReferId,
    gdPageId: gdPageId,
    pageId: pageId,
    instanceId: instanceId,
    componentId: instanceId,
    geoType: 2,
    version: 1,
    yodaReady: 'h5',
    csecplatform: 4,
    csecversion: '2.1.2',
    actualLng: '116.289881',
    actualLat: '39.857923',
    sceneId: 1, // 必填
    isInDpEnv: 0,
    needFetchedByUUID: 1,
    utmSource: '60413&utmCampaign=other',
  }

  for (const [key, value] of Object.entries(fiexd)) {
    fullUrl.searchParams.set(key, value)
  }

  cookie.forEach(async (ck) => {
    const request = await getEncrypt(fullUrl.href, ck, WECHAT_UA)

    const res = await axios.post(request.url, request.data, {
      headers: {
        ...request.headers,
        Referer: 'https://market.waimai.meituan.com/',
        'Content-Type': 'application/json',
        'User-Agent': WECHAT_UA,
      },
    })

    console.log(res.data)
  })
}

const getEncrypt = async (url, cookie, ua) => {
  // const data = {
  //   cType: 'wx_wallet',
  //   fpPlatform: 13,
  //   wxOpenId: '',
  //   appVersion: '',
  //   mtFingerprint: '', // 加密完成后赋值
  // }

  // const h5guard = new H5(cookie, ua)
  // const request = await h5guard.sign(url, data)

  const result = await sign(url, cookie, ua)

  return result
}

init()
