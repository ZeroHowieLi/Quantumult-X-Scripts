// ^https:\/\/(app|data)\.(bilibili|biliapi)\.(com|net)\/x

// 推荐视频
const feed_path = "/x/v2/feed/index"
// 热搜
const hot_path = "/x/v2/search/square"
const resource_path = "/x/resource/show/tab/v2"
const resource_top_path = "/x/resource/top/activity"

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
} else if (url.indexOf(hot_path) != -1) {
    console.log('hot...')
    // 删除热搜榜单
    body.data[0].data = {}
    body.data[0].search_ranking_meta.open_search_ranking = false
} else if (url.indexOf(resource_path) != -1) {
    console.log('resource...')
    let tab = body.data.tab
    // Tab好像随便改点什么东西，就会全部都隐藏
    for (let i = 0; i < tab.length; i++) {
        tab[i].uri = 'bilibili://user_center/favourite'
    }
    body.data.tab = tab
    // 只保留消息
    body.data.top = body.data.top.filter(function(item) {
        return item.uri === 'bilibili://link/im_home'
    })
    // 只保留搜索
    body.data.top_more = body.data.top_more.filter(function(item) {
        return item.pos === 'bilibili://search'
    })
    // 底部只保留我的
    body.data.bottom = body.data.bottom.filter(function(item) {
        return item.uri === 'bilibili://user_center/' || item.uri === 'bilibili://main/home/'
    })
} else if (url.indexOf(resource_top_path) != -1) {
    console.log("resource top...")
    body.data.items = {}
}

let res = $response.body
if (typeof body !== 'undefined') {
    res = JSON.stringify(body)
    console.log(body)
}
$done({
    body: res
})