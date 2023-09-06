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

const cookie =
  '_lxsdk_cuid=18a69574007c8-088d1d27569988-9151804-53c31-18a69574007c8; _lxsdk=18a69574007c8-088d1d27569988-9151804-53c31-18a69574007c8; uuid=357c7be706e344b784be.1693984440.1.0.0; iuuid=196CC0EF39D4BD9FBD9EC5E08F89D8EAB3BDDA16FC6924668599658097E68672; WEBDFPID=01133w922vz05y69y56wzux320xz9v9w81z304258z297958z38455zx-2009344440772-1693984440127GAUQMOO88cc23138699812024ed4da85734c06f4258; token=AgHMJbGmmMQp_zp7wh1sDR7p_s8F3asB5oSNw3SPvPq140EPd3ax0PV3qZaUag7igbfkAgjt-FT-4wAAAACPGgAA5oiHehIwB-9t4BrWhCqNC7DSsOgin7abBgvL7X0E8_odWQCNx2f2zs3YanpHa51u; mt_c_token=AgHMJbGmmMQp_zp7wh1sDR7p_s8F3asB5oSNw3SPvPq140EPd3ax0PV3qZaUag7igbfkAgjt-FT-4wAAAACPGgAA5oiHehIwB-9t4BrWhCqNC7DSsOgin7abBgvL7X0E8_odWQCNx2f2zs3YanpHa51u; oops=AgHMJbGmmMQp_zp7wh1sDR7p_s8F3asB5oSNw3SPvPq140EPd3ax0PV3qZaUag7igbfkAgjt-FT-4wAAAACPGgAA5oiHehIwB-9t4BrWhCqNC7DSsOgin7abBgvL7X0E8_odWQCNx2f2zs3YanpHa51u; userId=4207197360; _lxsdk_s=18a69574009-97f-05a-3a7%7C%7C5; u=4207197360; isid=AgHMJbGmmMQp_zp7wh1sDR7p_s8F3asB5oSNw3SPvPq140EPd3ax0PV3qZaUag7igbfkAgjt-FT-4wAAAACPGgAA5oiHehIwB-9t4BrWhCqNC7DSsOgin7abBgvL7X0E8_odWQCNx2f2zs3YanpHa51u'

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
  const data = {
    cType: 'wx_wallet',
    fpPlatform: 13,
    wxOpenId: '',
    appVersion: '',
    mtFingerprint: '', // 加密完成后赋值
  }

  const h5guard = new H5(cookie, ua)
  const request = await h5guard.sign(url, data)

  //   const request = await sign(url,cookie,ua)

  return request
}

init()
