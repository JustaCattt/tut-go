//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    index: 0,
    picker: ['匕首', '手枪','步枪','冲锋枪','霰弹枪','机枪','手套'],
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
    console.log('index='+e.detail.value)
    wx.setStorageSync('cateIndex', e.detail.value);
  },
  setName: function(e){
    console.log(e.detail.value)
    wx.setStorageSync('name', e.detail.value)
  },
  setPrice: function(e){
    console.log(e.detail.value)
    wx.setStorageSync('price', e.detail.value)
  },
  textareaAInput: function(e){
    console.log(e.detail.value)
    wx.setStorageSync('describe', e.detail.value)
  },
  save: function(){
    //获取全部输入项
    let name = wx.getStorageSync('name')
    let price = wx.getStorageSync('price')
    let cateIndex = wx.getStorageSync('cateIndex')
    let describe = wx.getStorageSync('describe')

    let category = this.data.picker[cateIndex]
    //给ornament对象赋值
    let ornament = [{
        name: name,
        price: price,
        category: category,
        describe: describe
    }]

    //存到storage中
    console.log(ornament)
    wx.setStorageSync('ornament', ornament)

    //把原来的各属性都移除
    wx.removeStorageSync('name')
    wx.removeStorageSync('price')
    wx.removeStorageSync('cateIndex')
    wx.removeStorageSync('describe')

    wx.showToast({
      title: '已发布',
      duration: 2000
    })
  }
})
