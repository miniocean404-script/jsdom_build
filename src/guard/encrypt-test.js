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
  const sign = require('../../dist/bundle_mt.js')
  const h5guard = await sign('%s', '%s', '%s')
  console.log(h5guard)

  process.exit(0)
})()
