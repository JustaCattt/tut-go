Page({
    data: {
        inputShowed: false,
        inputVal: "",
        banners: [
            {url: 'https://g.fp.ps.netease.com/market/file/5e841bfda7f252523786c1c8QbFuFioF02'},
            {url: 'https://g.fp.ps.netease.com/market/file/5cbfc569a7f25262e5e1dbd0p2AlOda702'},
            {url: 'https://static.igxe.cn/media/pic/upload/7e9d7f0358a242e2bd372a41ffc29a27.jpg'},
            {url: 'https://static.igxe.cn/media/pic/upload/0f14d9f680db484f878fe1d17dbf431a.jpg'}
        ],
        products: [
            {
                title: "AWP | 王子",
                detail: "略有磨损",
                img_url: "/images/goods/awp王子.png",
                tag:"Hot",
                price: "7798.5",
                id: 0
            },
            {
                title: "AWP | 永恒之枪",
                detail: "崭新出厂",
                img_url: "/images/goods/awp永恒.png",
                price: "25200",
                id: 1
            },
            {
                title: "M4A1 消音型 | 二号玩家",
                detail: "崭新出厂",
                img_url: "/images/goods/m4.png",
                price: "930",
                id: 2
            },
            {
                title: "运动手套（★） | 潘多拉之盒",
                detail: "久经沙场",
                img_url: "/images/goods/手套.png",
                price: "7900",
                id: 3
            },
        ],
        Headlines:[
            {title:'AWP|王子 已上架'},
            {title:'M4A1消音型|二号玩家 已上架'},
            {title:'AWP|永恒之枪 已上架'},
        ],
        homeActive:false
    },
    onLoad() {
        this.setData({
            search: this.search.bind(this)
        })
    },
    onPullDownRefresh: function () {
        this.setData = function () {
            products: []
        }
    },
    search: function (value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
            }, 200)
        })
    },
    selectResult: function (e) {
        console.log('select result', e.detail)
    },

    toEvaluate: function () {
        wx.navigateTo({
            url: '../evaluate/evaluate',
        })
    },
    toExchange: function () {
        wx.navigateTo({
            url: '../exchange/exchange',
        })
    },
    toGift: function () {
        wx.navigateTo({
            url: '../gift/gift',
        })
    },

    toWantToBuy: function () {
        wx.navigateTo({
            url: '../wantToBuy/wantToBuy',
        })
    },
    toSell: function () {
        wx.navigateTo({
            url: '../sell/sell',
        })
    },
    toRecovery: function () {
        wx.navigateTo({
            url: '../recovery/recovery',
        })
    },
    toPurchase: function (e) {
        wx.navigateTo({
            url: '../purchase/purchase',
        })
        
        let query = e.currentTarget.dataset;
        console.log(query.item)
        wx.setStorageSync('product', query.item)
    },
    setTouchMove: function (e) {
        var that = this;
        if (e.touches[0].clientY < 400 && e.touches[0].clientY > 66) {
            that.setData({
                top: e.touches[0].clientY
            })
        }
    },
    open:function(){
        this.setData({
            homeActive: !this.data.homeActive
        })
    },
});