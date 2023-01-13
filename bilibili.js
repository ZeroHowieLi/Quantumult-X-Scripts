// ^https:\/\/(app|data)\.(bilibili|biliapi)\.(com|net)\/x

// 推荐视频
const feed_path = "/x/v2/feed/index?access_key"
// Tab资源按钮
const tab_path = "/x/resource/show/tab/v2?access_key"
// 开屏广告
const splash_path = "/x/v2/splash/show"

let url = $request.url
let body
try {
    body = JSON.parse($response.body)
} catch(err) {
    console.log(url, err)
}
if (url.indexOf(feed_path) != -1) {
    body.data.items = []
} else if (url.indexOf(tab_path) != -1) {
    // Tab 只保留搜索+我的+消息
    body.data.tab = []
}

let res = $response.body
if (typeof body !== 'undefined') {
    res = JSON.stringify(body)
}
$done({
    body: res
})