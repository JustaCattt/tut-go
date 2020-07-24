Page({
    data: {
        news: [
            {img_url: "/images/explore/e1.jpg"},
            {img_url: "/images/explore/e2.jpg"},
            {img_url: "/images/explore/e3.png"},
            {img_url: "/images/explore/e4.jpg"},
        ],
        article: [
            {
                id:1,
                img_url: "https://g.fp.ps.netease.com/market/file/5edef16296dee48e1635f324tsiu2lJR02",
                title: "最后通牒，v社勒令7支队伍处理好利益冲突",
                detail: "Valve给了包括MIBR、FaZe和Evil Geniuses在内的7个团队5个月的时间，解决像里约之路中利益冲突的问题。",
                tag1: "CS:GO",
                tag2: "HLTV"
            },
            {
                id:2,
                img_url: "https://g.fp.ps.netease.com/market/file/5db93d57143cfa9ea442f1adrX7Q3B3v02",
                title: "Vitality让一追二横扫Heroic",
                detail: "北京时间六月八日的晚间，DH春季大师赛正式进入了淘汰赛阶段的战斗。淘汰赛的第一个比赛日，三场比赛全都是败者组的生死战。",
                tag1: "CS:GO",
                tag2: "BUFF"
            },
            {
                id:3,
                img_url: "https://g.fp.ps.netease.com/market/file/5e02d495a7f252cbaa917debGGIHzzDS02",
                title: "干货教学：这些职业哥小技巧你们都会了吗",
                detail: "本期以职业哥为主视角，给大家分享一波干货技巧教学。通过学习职业哥都在用的小技巧，让你分分钟在你的段位打出精彩的next-level play。",
                tag1: "CS:GO",
                tag2: "BUFF"
            },
            {
                id:4,
                img_url: "https://g.fp.ps.netease.com/market/file/5eddccee143cfa17b4f789221gEccio102",
                title: "TYLOO官宣：韩国老将xeta正式离队",
                detail: "就在刚刚，TYLOO官博宣布了xeta离队并转战Valorant的消息。这名韩国的老将结束了自己的CSGO职业生涯，开启了新的旅程。",
                tag1: "CS:GO",
                tag2: "BUFF"
            },
        ]

    },
    navToArticle:function(event){
        var id=event.currentTarget.dataset.id;
        wx.navigateTo({
            url:'/pages/articals/articals?id='+id,
        })
    },
    onLoad: function (options) {

    }
});