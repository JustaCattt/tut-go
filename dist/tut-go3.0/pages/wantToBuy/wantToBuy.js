//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    index: 0,
    picker: ['匕首', '手枪','步枪','冲锋枪','霰弹枪','机枪','手套'],
    index1: 0,
    picker1: ['崭新出厂', '略有磨损','久经沙场','破损不堪','战痕累累'],
    index2: 0,
    picker2: ['0-100', '100-500','500-1000','1000-1500','1500-3000','3000-5000','>5000'],
  },
  onLoad: function(){
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
    console.log('index='+e.detail.value)
    wx.setStorageSync('index', e.detail.value);
  },
  PickerChange1(e) {
    console.log(e);
    this.setData({
      index1: e.detail.value
    })
    console.log('index1='+e.detail.value)
    wx.setStorageSync('index1', e.detail.value);
  },
  PickerChange2(e) {
    console.log(e);
    this.setData({
      index2: e.detail.value
    })
    console.log('index2='+e.detail.value)
    wx.setStorageSync('index2', e.detail.value);
  },
  setName: function(e){
    console.log(e.detail.value)
    wx.setStorageSync('name', e.detail.value)
  },
  textareaAInput: function(e){
    console.log(e.detail.value)
    wx.setStorageSync('describe', e.detail.value)
  },
  save: function(){
    let name = wx.getStorageSync('name')
    let index = wx.getStorageSync('index')
    let index1 = wx.getStorageSync('index1')
    let index2 = wx.getStorageSync('index2')
    let describe = wx.getStorageSync('describe')

    let category = this.data.picker[index]
    let abrasion = this.data.picker1[index1]
    let price = this.data.picker2[index2]
    // console.log(category)
    // console.log(abrasion)
    // console.log(describe)

    let ornament = [{
      name: name,
      category: category,
      abrasion: abrasion,
      price: price,
      describe: describe
    }]

    console.log(ornament)
    wx.setStorageSync('wantOrnamet', ornament)

    wx.removeStorageSync('name')
    wx.removeStorageSync('index')
    wx.removeStorageSync('index1')
    wx.removeStorageSync('index2')
    wx.removeStorageSync('describe')

    wx.showToast({
      title: '已发布',
      duration: 2000
    })
  }
})