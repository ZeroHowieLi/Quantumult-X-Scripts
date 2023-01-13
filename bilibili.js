// ^https:\/\/(app|data)\.(bilibili|biliapi)\.(com|net)\/x

// 推荐视频
const feed_path = "/x/v2/feed/index"
// 热搜
const hot_path = "/x/v2/search/square"
// 资源: Tab、bottom等
const resource_path = "/x/resource/show/tab/v2"
// 搜索框右边的活动
const resource_top_path = "/x/resource/top/activity"
// 开屏广告
const splash_path = "/x/v2/splash/list"

let url = $request.url
let body
try {
    body = JSON.parse($response.body)
} catch(err) {
    console.log(url, err)
}
if (url.indexOf(feed_path) !== -1) {
    console.log('feed...')
    body.data.items = []
} else if (url.indexOf(hot_path) !== -1) {
    console.log('hot...')
    // 删除热搜榜单
    body.data[0].data = {}
    body.data[0].search_ranking_meta.open_search_ranking = false
} else if (url.indexOf(resource_path) !== -1) {
    console.log('resource...')
    let tab = body.data.tab
    // Tab好像随便改点什么东西，就会全部都隐藏
    for (let i = 0; i < tab.length; i++) {
        tab[i].uri = 'bilibili://user_center/favourite'
    }
    body.data.tab = tab
    // 保留消息
    body.data.top = body.data.top.filter(function(item) {
        return item.uri === 'bilibili://link/im_home'
    })
    // 保留搜索
    body.data.top_more = body.data.top_more.filter(function(item) {
        return item.pos === 'bilibili://search'
    })
    // 底部只保留首页+我的
    body.data.bottom = body.data.bottom.filter(function(item) {
        return item.uri === 'bilibili://user_center/' || item.uri === 'bilibili://main/home/'
    })
    for (let i = 0; i < body.data.bottom.length; i++) {
        body.data.bottom[i].name = "Bili"
    }
} else if (url.indexOf(resource_top_path) !== -1) {
    console.log("resource top...")
    body.data.items = {}
} else if (url.indexOf(splash_path) !== -1) {
    // https://github.com/blackmatrix7/ios_rule_script/blob/master/script/bilibili/bilibili_plus.js
    console.log("splash list...")
    body.data.max_time = 0
    body.data.min_interval = 31536000
    body.data.pull_interval = 31536000
    for (let i = 0; i < body.data.list.length; i++) {
        body.data.list[i].duration = 0
        body.data.list[i].begin_time = 1915027200
        body.data.list[i].end_time = 1924272000
    }
}

let res = $response.body
if (typeof body !== 'undefined') {
    res = JSON.stringify(body)
    console.log(res)
}
$done({
    body: res
})