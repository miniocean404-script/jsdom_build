# 消息 1

宝哥在 github 上开源的时候已经讲得很清楚啦

readme 也有
在此更加的详细讲一下 我也是个后端小白！

首先安装 nodejs 环境
这个百度有 自行搜索

然后直接 clone 宝哥的项目到本地
直接到 github 下载 复制都行

到本地后
打开看一眼需要安装的库
const XMLHttpRequest = require(“xhr2“);
const { ScreenConfig } = require(‘jsdom-browser.screen‘);
const jsdom = require(“jsdom“);
const { randomInt } = require(“crypto“);
const Cookie = require(‘cookie‘);
const got = require(‘got‘);

因为这里好像没用到 got
那我们可以删掉那行

然后终端运行
npm install xhr2
npm install jsdom-browser.screen
npm install jsdom
npm install crypto
npm install cookie

安装完成之后直接 node index.js 看一下还有没有报错 没有报错证明前置操作已经 ok 拉

然后看宝哥 github 上的 readMe
const H5guard = require(‘./index.js‘);
const data = {
“cType“: “mti“, “fpPlatform“: 3, “wxOpenId“: ““, “appVersion“: ““
};
const cookieStr=`full cookieStr`;
const userAgent = ‘‘;
const h5guard = new H5guard(cookieStr, userAgent);
const { mtgsig } = await h5guard.sign(fullUrl, data);
//data 调用 sign 会自动设置 mtFingerprint

# 消息 2

都这样了 就挺简单了吧
新建一个 js 文件
直接把上面这段复制下来
然后看需要设置什么参数
首先就是 ck 抓微信的 cookie 填到 cookieStr 里边
ua 也是 一起抓了填进去
（不过我看了下代码 如果你不填 ua 的话里边有默认 ua）
然后忽然发现这个 fullUrl 不知道是什么东西
我们就看下代码

async sign(fullUrl, data) {
data.mtFingerprint = this.getfp();
let req = {
“url“: fullUrl,
“method“: “POST“,
“headers“: {
“Content-Type“: “application/json“, “content-type“: “application/json“, “content-encoding“: ““,
},
“data“: data
};
看到是这里用到了 fullUrl
我目测是为了构造 req 直接 return 回来 然后方便发请求
但是他 return 的只是 mtFingerprint 跟 mtgsig
可能是想法有出入
但是我个人还是认为生成指纹跟 URL 没有太大关系
所以可以乱填

填完东西之后运行一下 看一下返回的是什么
不出所料 一个包含 mtFingerprint 跟 mtgsig 的对象
那既然有了 这个东西 就可以自己构造请求了
构造的请求之前有发过了 可以看看

毕竟生成的算法都开源了 所以没什么难度
值得说一点就是 如果你需要给多个 ck 生成指纹的话
请用 for 循环+async/await
因为返回的 promise resolve 是会覆盖的
就是你会得到 n 个一样的指纹

构造完请求后可以用 schedule 创建定时任务
这种非常简单 百度一下就知道了

现在都有算法了 那就可以直接写一个网站 用来提交 ck
然后自动开启定时任务 就不用每天盯着看了
或者直接拖上青龙就完事了
