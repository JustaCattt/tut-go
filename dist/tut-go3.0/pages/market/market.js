const app = getApp()
Page({
    data: {
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        Custom: app.globalData.Custom,
        TabCur: 0,
        MainCur: 0,
        VerticalNavTop: 0,
        list: [],
        load: true
    },
    onLoad() {
        wx.showLoading({
            title: '加载中...',
            mask: true
        });
        let list = [{}];
        for (let i = 0; i < 7; i++) {
            list[i] = {};
            list[i].id = i;
        }
        list[0].name = '匕首'
        list[1].name = '手枪'
        list[2].name = '步枪'
        list[3].name = '冲锋枪'
        list[4].name = '霰弹枪'
        list[5].name = '机枪'
        list[6].name = '手套'
        this.setData({
            list: list,
            listCur: list[0]
        })
    },
    onReady() {
        wx.hideLoading()
    },
    tabSelect(e) {
        this.setData({
            TabCur: e.currentTarget.dataset.id,
            MainCur: e.currentTarget.dataset.id,
            VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
        })
    },
    VerticalMain(e) {
        let that = this;
        let list = this.data.list;
        let tabHeight = 0;
        if (this.data.load) {
            for (let i = 0; i < list.length; i++) {
                let view = wx.createSelectorQuery().select("#main-" + list[i].id);
                view.fields({
                    size: true
                }, data => {
                    list[i].top = tabHeight;
                    tabHeight = tabHeight + data.height;
                    list[i].bottom = tabHeight;
                }).exec();
            }
            that.setData({
                load: false,
                list: list
            })
        }
        let scrollTop = e.detail.scrollTop + 20;
        for (let i = 0; i < list.length; i++) {
            if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
                that.setData({
                    VerticalNavTop: (list[i].id - 1) * 50,
                    TabCur: list[i].id
                })
                return false
            }
        }
    },
    toPurchase: function (e) {
        wx.navigateTo({
            url: '../purchase/purchase',
        })
        let query = e.currentTarget.dataset;
        console.log(query.item)
        wx.setStorageSync('product', query.item)
    }
})