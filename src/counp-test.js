const sign = require('./guard/index')
const H5 = require('./guard/bbbs/bbbs_2.0.0')
const { WECHAT_UA_256 } = require('./constant/ua')
const { randomInt } = require('crypto')
const { default: axios } = require('axios')

// const activity = {
//   couponReferId: 'BEA9D26AEBD64F9A9680FE390A05654B',
//   gdPageId: '483094',
//   pageId: '484474',
//   instanceId: '16819754696590.74922283078048070',
//   desc: '限时抢红包 2-1',
//   url: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon',
// }

const activity = {
  couponReferId: '19C78038548E493A85851B16A5C17D8B',
  gdPageId: '379378',
  pageId: '378912',
  instanceId: '16618587892630.83610444655074820',
  desc: '膨胀神券 社群专享30-6',
  url: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon',
}

const init = async () => {
  const cookie = [
    'token=AgFmJWaaSXvHa1fkc11AsUqmmvzJnpo8OCW1owD4yNHu6SXauYX08WZq2sUsROjy0cb1NvxpdN02oQAAAACvGgAA6ikd2eMGFjSfUhJEAhqUTAXyO59Xm9z9kBKy6dGcPveNda6_ZTRQa94W59ah34w1',
  ]
  const WECHAT_UA =
    'Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5235 MMWEBSDK/20230805 MMWEBID/9366 MicroMessenger/8.0.41.2441(0x2800293E) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64'

  const { couponReferId, gdPageId, pageId, instanceId, url } = activity

  // 提前计算签名
  const fullUrl = new URL(url)

  const fiexd = {
    couponReferId: couponReferId,
    actualLng: 0,
    actualLat: 0,
    geoType: 2,
    gdPageId: gdPageId,
    pageId: pageId,
    version: 1,
    utmSource: '',
    utmCampaign: '',
    instanceId: instanceId,
    componentId: instanceId,
    yodaReady: 'h5',
    csecplatform: 4,
    csecversion: '2.1.2',

    // 未知参数
    // sceneId: 1, // 必填
    // isInDpEnv: 0,
    // needFetchedByUUID: 1,
  }

  for (const [key, value] of Object.entries(fiexd)) {
    fullUrl.searchParams.set(key, value)
  }

  cookie.forEach(async (ck) => {
    const loginUrl = new URL('https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/info')
    loginUrl.searchParams.set('couponReferIds', fiexd.couponReferId)
    loginUrl.searchParams.set('actualLng', fiexd.actualLng)
    loginUrl.searchParams.set('actualLat', fiexd.actualLat)
    loginUrl.searchParams.set('geoType', fiexd.geoType)

    // 解决时间戳验证失败的问题
    const infoRes = await axios.get(loginUrl.href, { headers: { Cookie: ck, 'User-Agent': WECHAT_UA } })
    console.log(infoRes.data.data)

    // prettier-ignore
    const data = {
      appVersion: '',
      cType: 'wx_wallet',
      fpPlatform: "13",
      mtFingerprint: '', // 加密完成后赋值
      wxOpenId: '',
    }
    const h5guard = new H5(ck, WECHAT_UA)
    const mtEncrypt = await h5guard.sign(fullUrl.href, data)
    // const mtEncrypt = await sign(fullUrl.href, ck, WECHAT_UA, data)
    data.mtFingerprint = mtEncrypt.mtFingerprint

    const res = await axios.post(fullUrl.href, data, {
      headers: {
        Host: 'promotion.waimai.meituan.com',
        Connection: 'keep-alive',
        Accept: 'application/json, text/plain, */*',
        mtgsig: mtEncrypt.mtgsig,
        'User-Agent': WECHAT_UA,
        'Content-Type': 'application/json',
        Origin: 'https://market.waimai.meituan.com',
        'X-Requested-With': 'com.tencent.mm',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        Referer: 'https://market.waimai.meituan.com/',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        Cookie: ck,
      },
    })
    console.log(res.data)
  })
}

init()
