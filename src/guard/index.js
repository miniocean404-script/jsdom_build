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

// const init = async () => {
//   const res = await sign(
//     'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?actualLat=22.316555&actualLng=114.174328&componentId=16819754696590.74922283078048070&couponReferId=BEA9D26AEBD64F9A9680FE390A05654B&gdPageId=483094&instanceId=16819754696590.74922283078048070&pageId=484474',
//     'token=AgFaIbJm_CMvqafs9ENy-HExefOMNTuzJElBKbR3HAbjiFKm2RFjKk5hbyQL_gYkOFS-n928gU0t1gAAAABhGgAADBrsIjuUIBtR7My1Q_JbjvqLFJERtyYP8ciwjEnw2d3BQPcNp2kN_TaJJ9tcKv__',
//     'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36',
//   )

//   console.log(res)
// }

// init()

module.exports = sign
