const sign = require('./guard/index')
const H5 = require('./guard/bbbs/bbbs_2.1.0')

const { default: axios } = require('axios')

// const activity = {
//   couponReferId: 'D74AC7E0775B4CE38A88F741CA429815',
//   gdPageId: '511898',
//   pageId: '514537',
//   instanceId: '16885283734190.4712485538349984',
//   desc: '30 - 15',
//   url: 'https://promotion.waimai.meituan.com/lottery/couponcomponent/fetchcomponentcoupon/v2',
// }

// 30 - 15
const activity = {
  couponReferId: '29ED8B02123A46B0B5D08F287720695D',
  gdPageId: '413508',
  url: 'https://promotion.waimai.meituan.com/lottery/couponcomponent/fetchcomponentcoupon',
}

const cookie =
  'uuid=860fa98c955f4dbb997c.1694144491.1.0.0; _lxsdk_cuid=18a72e171065c-01f8e83548aa19-1a4d5819-53c31-18a72e17107c8; iuuid=300632629841903BDB0E9F116E62DBBC65E06619C64ABD554550C69432D6A2CF; WEBDFPID=6xu7zu206xu656551zvzu2xy25w3691v81z27v8253y9795801v60326-2009504492041-1694144491295WGIEOKAe67dcc3e61b3db1bf3f9e3b1c7aaaa882928; token=AgHkIpzzGK16f1y1l7hRWgXNIwKSpUW0ua-rJdX5U1MNOpw349hIBNWhX5VsFs9ov7uE18YFAk3e3wAAAACPGgAAtPmbbipSTB7C8ouEZXjnBPxpNBlOuwmJD-IsewEY2IyFJfLeKF23wnMs4-m1iJLk; mt_c_token=AgHkIpzzGK16f1y1l7hRWgXNIwKSpUW0ua-rJdX5U1MNOpw349hIBNWhX5VsFs9ov7uE18YFAk3e3wAAAACPGgAAtPmbbipSTB7C8ouEZXjnBPxpNBlOuwmJD-IsewEY2IyFJfLeKF23wnMs4-m1iJLk; oops=AgHkIpzzGK16f1y1l7hRWgXNIwKSpUW0ua-rJdX5U1MNOpw349hIBNWhX5VsFs9ov7uE18YFAk3e3wAAAACPGgAAtPmbbipSTB7C8ouEZXjnBPxpNBlOuwmJD-IsewEY2IyFJfLeKF23wnMs4-m1iJLk; userId=4207197360; u=4207197360; isid=AgHkIpzzGK16f1y1l7hRWgXNIwKSpUW0ua-rJdX5U1MNOpw349hIBNWhX5VsFs9ov7uE18YFAk3e3wAAAACPGgAAtPmbbipSTB7C8ouEZXjnBPxpNBlOuwmJD-IsewEY2IyFJfLeKF23wnMs4-m1iJLk; logan_session_token=zthjj8qq5gd5shev5bfo; _lxsdk_s=18a72e17109-666-397-0ea%7C%7C28'

const WECHAT_UA =
  'Mozilla/5.0 (Linux; Android 12; Redmi K30 Pro Build/SKQ1.220303.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230604 MMWEBID/2173 MicroMessenger/8.0.38.2400(0x28002656) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64'

const init = async () => {
  const { couponReferId, gdPageId, pageId, instanceId, url } = activity

  // 提前计算签名
  const fullUrl = new URL(url)

  // const fiexd = {
  //   couponReferId: couponReferId,
  //   gdPageId: gdPageId,
  //   pageId: pageId,
  //   instanceId: instanceId,
  //   componentId: instanceId,
  //   geoType: 2,
  //   version: 1,
  //   yodaReady: 'h5',
  //   csecplatform: 4,
  //   csecversion: '2.1.2',
  //   actualLng: '116.289881',
  //   actualLat: '39.857923',
  //   sceneId: 1, // 必填
  //   isInDpEnv: 0,
  //   needFetchedByUUID: 1,
  //   utmSource: '60413&utmCampaign=other',
  // }

  // 30 - 15
  const fiexd = {
    couponReferId: couponReferId,
    gdPageId: gdPageId,
    geoType: 2,
    actualLng: '116.289881',
    actualLat: '39.857923',
    isInDpEnv: 0,
  }

  for (const [key, value] of Object.entries(fiexd)) {
    fullUrl.searchParams.set(key, value)
  }

  const request = await getEncrypt(fullUrl.href, cookie, WECHAT_UA)

  const res = await axios.post(request.url, request.data, {
    headers: {
      ...request.headers,
      Referer: 'https://market.waimai.meituan.com/',
      'Content-Type': 'application/json',
      'User-Agent': WECHAT_UA,
    },
  })

  console.log(res.data)
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

  const request = await sign(url, cookie, ua)

  console.log(request)

  return request
}

init()
