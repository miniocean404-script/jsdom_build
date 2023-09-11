const sign = require('./guard/index')
const H5 = require('./guard/bbbs/bbbs_2.1.0')
const { WECHAT_UA_256 } = require('./constant/ua')
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
  '_lxsdk_s=18a787f3795-e2f-bd-131%7C%7C19; WEBDFPID=u19wu11u1yvx59x6y11uww8v799y661381z22zv64219795832u1xw25-2009585020152-1694225020152EMOWIQS868c0ee73ab28e1d0b03bc83148500069079; logan_session_token=b9wyuebyi9hd2y8q6jk0; isid=AgGRJE4C8XaGbnLixHJO5NFH47MNNQ4GOZww6tu252RWfvyxFqUqI3NBs3tivz5i7hrJ0tZDVsSGFAAAAACPGgAAsRJ4LNzS0V1zq6Vc4heQtSPIxMOrGSWL5OA5Yrgk6lvwkTh-eCLSTfKLw6XhO-Gv; iuuid=18a77ae1a99c8-0e8a043f014d1a-2a6d4c36-60c28-18a77ae1a99c8; mt_c_token=AgGRJE4C8XaGbnLixHJO5NFH47MNNQ4GOZww6tu252RWfvyxFqUqI3NBs3tivz5i7hrJ0tZDVsSGFAAAAACPGgAAsRJ4LNzS0V1zq6Vc4heQtSPIxMOrGSWL5OA5Yrgk6lvwkTh-eCLSTfKLw6XhO-Gv; oops=AgGRJE4C8XaGbnLixHJO5NFH47MNNQ4GOZww6tu252RWfvyxFqUqI3NBs3tivz5i7hrJ0tZDVsSGFAAAAACPGgAAsRJ4LNzS0V1zq6Vc4heQtSPIxMOrGSWL5OA5Yrgk6lvwkTh-eCLSTfKLw6XhO-Gv; token=AgGRJE4C8XaGbnLixHJO5NFH47MNNQ4GOZww6tu252RWfvyxFqUqI3NBs3tivz5i7hrJ0tZDVsSGFAAAAACPGgAAsRJ4LNzS0V1zq6Vc4heQtSPIxMOrGSWL5OA5Yrgk6lvwkTh-eCLSTfKLw6XhO-Gv; u=3057000549; userId=3057000549; isUuidUnion=true; _lx_utm=utm_source%3Dwxshare%26utm_term%3D512946; ta.uuid=1700329079716765702; _lxsdk=18a77ae1a99c8-0e8a043f014d1a-2a6d4c36-60c28-18a77ae1a99c8; _lxsdk_cuid=18a77ae1a99c8-0e8a043f014d1a-2a6d4c36-60c28-18a77ae1a99c8',
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
      console.log(res.data.data)
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

    // const h5guard = new H5(ck, WECHAT_UA)
    // const mtEncrypt = await h5guard.sign(fullUrl, data)
    const mtEncrypt = await sign(fullUrl.href, ck, WECHAT_UA, data)
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
