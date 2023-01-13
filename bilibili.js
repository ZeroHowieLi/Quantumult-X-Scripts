// ^https:\/\/(app|data)\.(bilibili|biliapi)\.(com|net)\/x

// 推荐视频
const feed_path = "/x/v2/feed/index"
// Tab资源按钮
const resource_path = "/x/resource/show/tab/v2"
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
    console.log('feed...')
    body.data.items = []
} else if (url.indexOf(resource_path) != -1) {
    console.log('resource...')
    body.data.tab = []
    body.data.top = []
}

let res = $response.body
if (typeof body !== 'undefined') {
    res = JSON.stringify(body)
}
$done({
    body: res
})