//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userSex: "",
    // steamId: "76561198418695815",
    // mail: "479999519@qq.com",
    mail: "",
    steamId: "",
    index: 0,
    picker: ['男', '女'],
  },
  getInfo: function(){
    var getSexIndex = wx.getStorageSync('sexIndex')
    console.log('sexIndex='+getSexIndex)
    if(getSexIndex==""){
      getSexIndex=0
    }
    let getMail = wx.getStorageSync('mail')
    let getSteamId = wx.getStorageSync('steamId')
    console.log('steamID='+getSteamId);
    console.log('mail='+getMail)
    this.setData({
      index: getSexIndex,
      mail: getMail,
      steamId: getSteamId
    })
  },
  save: function(){
    wx.setStorageSync('sexIndex', this.data.index)
    wx.setStorageSync('mail', this.data.mail)
    wx.setStorageSync('steamId', this.data.steamId)
    wx.showToast({
      title: '已保存',
      duration: 2000
    })
  },
  setMail: function(e){
    console.log(e.detail.value)
    this.data.mail=e.detail.value
  },
  setSteamId: function(e){
    console.log(e.detail.value)
    this.data.steamId=e.detail.value
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
    console.log('index='+e.detail.value)
    this.data.index=e.detail.value
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../personal/personal'
    })
  },
  onLoad: function () {
    this.getInfo()

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
  }
})
