const sign = require('./guard/index')
const { WECHAT_UA_256 } = require('./ua')
const { randomInt } = require('crypto')
const { default: axios } = require('axios')

const activity = {
  couponReferId: '19C78038548E493A85851B16A5C17D8B',
  gdPageId: '379378',
  pageId: '378912',
  instanceId: '16618587892630.83610444655074820',
  desc: '膨胀神券 社群专享30-6',
  url: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon',
}

// const activity = {
//   couponReferId: 'BEA9D26AEBD64F9A9680FE390A05654B',
//   gdPageId: '483094',
//   pageId: '484474',
//   instanceId: '16819754696590.74922283078048070',
//   desc: '限时抢红包 2-1',
//   url: 'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon',
// }

const cookie = [
  // 失落
  // 'token=AgFmJWaaSXvHa1fkc11AsUqmmvzJnpo8OCW1owD4yNHu6SXauYX08WZq2sUsROjy0cb1NvxpdN02oQAAAACvGgAA6ikd2eMGFjSfUhJEAhqUTAXyO59Xm9z9kBKy6dGcPveNda6_ZTRQa94W59ah34w1',
  // 吊毛
  // 'token=AgHSIWcdU_uMqSTJNHHI6kpqc_Quf949bjnR3xiFAVLDYk5fPvQDQ9gt9bbGW8Qge5GBM12qd7Mv9gAAAACvGgAAW6KMfm_96559bxgi8WPyQjS7B9COrM9tJPBhjkC0THl0XiJJtn46tGZAGbPpWAFC',
  // AS
  'token=AgFeIrYHkp7fMTRPE9-GVDMKi3r9SBZb4es_RGs4kUlAU0xIqZgkXR7NY8a9Hk8Mzr7YlJq-4LUDkQAAAACPGgAA0ewEOU2e-E3PpZzLIBRwTYRfwm1mIYOIp4hemBf4jzTMrj4BNShqrMdu8eznI0pN',
  // 炮王
  // 'token=AgGiITbBdrYDo_cKT9C3DYjoLBMzSLj48hgI1LF08FdlDtgAsgEkcWMTGMyG5qUlJeTVpK_JTZ5S2gAAAACPGgAAyho3KMx-ClpU1DWbKLIURuRR7LeWCkszRNLKx1_gKpcDTXqICmKrctI0VXPg1NvQ',
  // insist
  // 'token=AgGFHa1qYjrGino1OqjlxZidL2KioRnWkuyXJHETlDB1RPeN9kmA2IdLeyAPaDfyDPSiBe4K32MpUgAAAACvGgAAnu5jDmmALx-HRUf3O2lt3LwvdJctRxF0F3SAu1T6WJKTHBGZEWTb3As3WlN0eSFg',
]

const init = async () => {
  const { couponReferId, gdPageId, pageId, instanceId, url } = activity
  const WECHAT_UA = WECHAT_UA_256[randomInt(WECHAT_UA_256.length - 1)]

  // 提前计算签名
  const fullUrl = new URL(url)

  const fiexd = {
    couponReferId: couponReferId,
    actualLng: '116.29122',
    actualLat: '39.857674',
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
    loginUrl.searchParams.set('couponReferIds', couponReferId)
    loginUrl.searchParams.set('actualLng', 116.29122)
    loginUrl.searchParams.set('actualLat', 39.857674)
    loginUrl.searchParams.set('geoType', 2)

    try {
      // 解决时间戳验证失败的问题
      const res = await axios.get(loginUrl.href, { headers: { Cookie: ck, 'User-Agent': WECHAT_UA } })
      console.log(res.data)
    } catch (e) {
      console.log(e)
    }

    const data = {
      appVersion: '',
      cType: 'wx_wallet',
      fpPlatform: 13,
      mtFingerprint: '', // 加密完成后赋值
      wxOpenId: '',
    }

    const mtEncrypt = await sign(fullUrl.href, ck, WECHAT_UA, data)
    data.mtFingerprint = mtEncrypt.mtFingerprint

    const res = await axios.post(fullUrl.href, data, {
      headers: {
        Host: 'promotion.waimai.meituan.com',
        Connection: 'keep-alive',
        // 'Content-Length': 2643,
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
