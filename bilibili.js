// ^https:\/\/(app|data)\.(bilibili|biliapi)\.(com|net)\/x

// 推荐视频
const feed_path = "/x/v2/feed/index"
// Tab资源按钮
const resource_path = "/x/resource/show/tab/v2"
// 热搜
const hot_path = "/x/v2/search/square"
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
} else if (url.indexOf(hot_path) != -1) {
    console.log('hot...')
    // body.data[0].title = '热搜已被屏蔽'
    // body.data[0].data = {}
    // body.data[0].search_ranking_meta = {}
    body.data[0].search_ranking_meta.open_search_ranking = false
}

let res = $response.body
if (typeof body !== 'undefined') {
    res = JSON.stringify(body)
}
$done({
    body: res
})