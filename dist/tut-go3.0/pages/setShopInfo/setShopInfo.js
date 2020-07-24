// pages/setShopInfo/setShopInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name: "",
      phone: "",
      steamId: "",
      describe: ""
  },

  setShopName: function(e){
    console.log(e.detail.value)
    this.data.name=e.detail.value
  },
  setPhone: function(e){
    console.log(e.detail.value)
    this.data.phone=e.detail.value
  },
  setSteamId: function(e){
    console.log(e.detail.value)
    this.data.steamId=e.detail.value
  },
  textareaAInput: function(e){
    console.log(e.detail.value)
    this.data.describe=e.detail.value
  },
  send: function(){
    wx.showToast({
      title: '暂未开发',
      duration: 2000
    })
  },
  sumbit: function(){
    let shopInfo = [{
      name: this.data.name,
      phone: this.data.phone,
      steamId: this.data.steamId,
      describe: this.data.describe
    }]
    console.log(shopInfo)
    wx.setStorageSync('shopInfo', shopInfo)

    wx.showToast({
      title: '已保存',
      duration: 2000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})