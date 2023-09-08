const { default: axios } = require('axios')

// 30 - 15
const activity = {
  couponReferId: '29ED8B02123A46B0B5D08F287720695D',
  gdPageId: '413508',
  url: 'https://promotion.waimai.meituan.com/lottery/couponcomponent/fetchcomponentcoupon',
}

const cookie = [
  // 失落
  'token=AgFmJWaaSXvHa1fkc11AsUqmmvzJnpo8OCW1owD4yNHu6SXauYX08WZq2sUsROjy0cb1NvxpdN02oQAAAACvGgAA6ikd2eMGFjSfUhJEAhqUTAXyO59Xm9z9kBKy6dGcPveNda6_ZTRQa94W59ah34w1',
  // 吊毛
  // 'token=AgHSIWcdU_uMqSTJNHHI6kpqc_Quf949bjnR3xiFAVLDYk5fPvQDQ9gt9bbGW8Qge5GBM12qd7Mv9gAAAACvGgAAW6KMfm_96559bxgi8WPyQjS7B9COrM9tJPBhjkC0THl0XiJJtn46tGZAGbPpWAFC',
  // AS
  // 'token=AgFeIrYHkp7fMTRPE9-GVDMKi3r9SBZb4es_RGs4kUlAU0xIqZgkXR7NY8a9Hk8Mzr7YlJq-4LUDkQAAAACPGgAA0ewEOU2e-E3PpZzLIBRwTYRfwm1mIYOIp4hemBf4jzTMrj4BNShqrMdu8eznI0pN',
  // 炮王
  // 'token=AgGiITbBdrYDo_cKT9C3DYjoLBMzSLj48hgI1LF08FdlDtgAsgEkcWMTGMyG5qUlJeTVpK_JTZ5S2gAAAACPGgAAyho3KMx-ClpU1DWbKLIURuRR7LeWCkszRNLKx1_gKpcDTXqICmKrctI0VXPg1NvQ',
  // insist
  // 'token=AgGFHa1qYjrGino1OqjlxZidL2KioRnWkuyXJHETlDB1RPeN9kmA2IdLeyAPaDfyDPSiBe4K32MpUgAAAACvGgAAnu5jDmmALx-HRUf3O2lt3LwvdJctRxF0F3SAu1T6WJKTHBGZEWTb3As3WlN0eSFg'
  // self
  // 'uuid=860fa98c955f4dbb997c.1694144491.1.0.0; _lxsdk_cuid=18a72e171065c-01f8e83548aa19-1a4d5819-53c31-18a72e17107c8; iuuid=300632629841903BDB0E9F116E62DBBC65E06619C64ABD554550C69432D6A2CF; WEBDFPID=6xu7zu206xu656551zvzu2xy25w3691v81z27v8253y9795801v60326-2009504492041-1694144491295WGIEOKAe67dcc3e61b3db1bf3f9e3b1c7aaaa882928; token=AgHkIpzzGK16f1y1l7hRWgXNIwKSpUW0ua-rJdX5U1MNOpw349hIBNWhX5VsFs9ov7uE18YFAk3e3wAAAACPGgAAtPmbbipSTB7C8ouEZXjnBPxpNBlOuwmJD-IsewEY2IyFJfLeKF23wnMs4-m1iJLk; mt_c_token=AgHkIpzzGK16f1y1l7hRWgXNIwKSpUW0ua-rJdX5U1MNOpw349hIBNWhX5VsFs9ov7uE18YFAk3e3wAAAACPGgAAtPmbbipSTB7C8ouEZXjnBPxpNBlOuwmJD-IsewEY2IyFJfLeKF23wnMs4-m1iJLk; oops=AgHkIpzzGK16f1y1l7hRWgXNIwKSpUW0ua-rJdX5U1MNOpw349hIBNWhX5VsFs9ov7uE18YFAk3e3wAAAACPGgAAtPmbbipSTB7C8ouEZXjnBPxpNBlOuwmJD-IsewEY2IyFJfLeKF23wnMs4-m1iJLk; userId=4207197360; u=4207197360; isid=AgHkIpzzGK16f1y1l7hRWgXNIwKSpUW0ua-rJdX5U1MNOpw349hIBNWhX5VsFs9ov7uE18YFAk3e3wAAAACPGgAAtPmbbipSTB7C8ouEZXjnBPxpNBlOuwmJD-IsewEY2IyFJfLeKF23wnMs4-m1iJLk; logan_session_token=zthjj8qq5gd5shev5bfo; _lxsdk_s=18a72e17109-666-397-0ea%7C%7C28'
]

const WECHAT_UA =
  'Mozilla/5.0 (Linux; Android 12; Redmi K30 Pro Build/SKQ1.220303.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230604 MMWEBID/2173 MicroMessenger/8.0.38.2400(0x28002656) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64'

const init = async () => {
  const { couponReferId, gdPageId, pageId, instanceId, url } = activity

  const fullUrl = new URL(url)

  // 30 - 15
  const fiexd = {
    couponReferId,
    gdPageId,
    geoType: 2,
    actualLng: '116.289881',
    actualLat: '39.857923',
    isInDpEnv: 0,
  }

  for (const [key, value] of Object.entries(fiexd)) {
    fullUrl.searchParams.set(key, value)
  }

  cookie.forEach(async (ck) => {
    const data = {
      cType: 'wx_wallet',
      fpPlatform: 13,
      wxOpenId: '',
      appVersion: '',
      mtFingerprint: '', // 加密完成后赋值
    }

    const res = await axios.post(fullUrl.href, data, {
      headers: {
        Referer: 'https://market.waimai.meituan.com/',
        'Content-Type': 'application/json',
        'User-Agent': WECHAT_UA,
        cookie: ck,
      },
    })

    console.log(res.data.msg)
  })
}

init()
