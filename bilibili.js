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
    let tab = body.data.tab
    // Tab好像随便改点什么东西，就会全部都隐藏
    for (let i = 0; i < tab.length; i++) {
        tab[i].uri = 'bilibili://user_center/favourite'
    }
    body.data.tab = tab
    // 删除游戏中心
    body.data.top = body.data.top.filter(function(item) {
        return item.pos !== 1
    })
    // 删除更多分区
    body.data.top_more = body.data.top_more.filter(function(item) {
        return item.pos !== 1
    })
    // 底部只保留我的
    body.data.bottom = body.data.bottom.filter(function(item) {
        return item.uri === 'bilibili://user_center/'
    })
} else if (url.indexOf(hot_path) != -1) {
    console.log('hot...')
    // 删除热搜榜单
    body.data[0].data = {}
    body.data[0].search_ranking_meta.open_search_ranking = false
}

let res = $response.body
if (typeof body !== 'undefined') {
    console.log(body)
    res = JSON.stringify(body)
}
$done({
    body: res
})