//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    balance: "0.00"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../personal/personal'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toMyshop: function(){
    wx.navigateTo({
      url: '../myshop/myshop',
    })
},
// toDynamic: function(){
//   wx.navigateTo({
//     url: '../dynamic/dynamic',
//   })
// },
toFavor: function(){
  wx.navigateTo({
    url: '../favor/favor',
  })
},
toRecharge: function(){
    wx.navigateTo({
      url: '../recharge/recharge',
    })
},
toSetting: function(){
    wx.navigateTo({
      url: '../setting/setting',
    })
},
toWantBuy: function(){
  wx.navigateTo({
    url: '../wantInfo/wantInfo',
  })
}
})
