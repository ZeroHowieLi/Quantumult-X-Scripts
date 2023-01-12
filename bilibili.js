// ^https:\/\/(app|data)\.(bilibili|biliapi)\.(com|net)\/x

// 推荐视频
const feed_path = "/x/v2/feed/index?access_key"
// Tab资源按钮
const tab_path = "/x/resource/show/tab/v2?access_key"

let url = $request.url
let body = $response.body;
let data
if (url.indexOf(feed_path) != -1) {
    data = {
        "code": 0,
        "message": "0",
        "ttl": 1,
        "data": {
          "items": []
        }
    }
} else if (url.indexOf(tab_path) != -1) {
    // Tab 只保留搜索+我的
    data = {
        "code" : 0,
        "config" : {
          "no_login_avatar_type" : 0,
          "popup_style" : 1,
          "tab_simplify" : false,
          "no_login_avatar" : "https://i0.hdslb.com/bfs/archive/689ed56f5b8b9bd26a90b20c52d464ebc0156185.png",
          "search_entrance" : 5
        },
        "data" : {
          "tab" : [],
          "top_more" : [
            {
              "id" : 621,
              "icon" : "http://i0.hdslb.com/bfs/feed-admin/f95dfa31c793c857af6e7b65b5387a05f30d31ba.png",
              "name" : "更多分区",
              "uri" : "bilibili://main/top_category",
              "pos" : 1
            },
            {
              "id" : 922,
              "icon" : "http://i0.hdslb.com/bfs/feed-admin/38beac42189ad4d838d20259a5b2cdfd302fef40.png",
              "name" : "搜索",
              "uri" : "bilibili://search",
              "pos" : 2
            }
          ],
          "bottom" : [
            {
              "uri" : "bilibili://user_center/",
              "tab_id" : "我的Bottom",
              "pos" : 5,
              "id" : 181,
              "icon_selected" : "http://i0.hdslb.com/bfs/archive/a54a8009116cb896e64ef14dcf50e5cade401e00.png",
              "icon" : "http://i0.hdslb.com/bfs/archive/4b0b2c49ffeb4f0c2e6a4cceebeef0aab1c53fe1.png",
              "name" : "我的"
            }
          ]
        },
        "message" : "0"
      }
}

if (typeof data !== 'undefined') {
    body = JSON.stringify(data)
}
$done({
    body: body
})