const fs = require('fs')

// 写法一：适合没有打包的
// fs.readFile('./dist/bundle_mt.js', 'UTF-8', async (err, data) => {
//   if (err) console.log(err)
//   const sign = eval(data)
//   const h5guard = await sign.mtEncrypt('%s', '%s', '%s')
//   console.log(JSON.stringify(h5guard))
//   process.exit(0)
// })

// 写法二：适合 webpack 打包引入
;(async () => {
  // const sign = require('../../dist/bundle_mt.js')
  // const sign = require('./index')
  // const h5guard = await sign('%s', '%s', '%s', {
  //   appVersion: '',
  //   cType: 'wx_wallet',
  //   fpPlatform: 13,
  //   mtFingerprint: '', // 加密完成后赋值
  //   wxOpenId: '',
  // })

  const H5 = require('../../dist/bundle_mt.js')
  const guard = new H5('cookie', 'ua')
  const res = await guard.sign('url', {
    appVersion: '',
    cType: 'wx_wallet',
    fpPlatform: 13,
    mtFingerprint: '', // 加密完成后赋值
    wxOpenId: '',
  })

  console.log(res)

  process.exit(0)
})()
