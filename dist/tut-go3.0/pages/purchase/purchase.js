// // pages/purchase/purchase.js
import Toast from "../../dist/toast/toast";
Page({
  data: {
    homeActive:false,
    collect: "none",
    cancelCollect: "block",
    cardCur: 0,
    show:false,
    storeInfo:{},
    current:'请选择',
    columns: ['崭新出厂', '略有磨损','久经沙场','破损不堪','战痕累累'],
    detailData:{},
    // swiperList: [{
    //   id: 0,
    //   type: 'image',
    //   url: '/images/detail/1.png'
    // }, {
    //   id: 1,
    //   type: 'image',
    //   url: '/images/detail/2.png',
    // }, {
    //   id: 2,
    //   type: 'image',
    //   url: '/images/detail/3.png'
    // }, {
    //   id: 3,
    //   type: 'image',
    //   url: '/images/detail/4.png'
    // }, {
    //   id: 4,
    //   type: 'image',
    //   url: '/images/detail/5.png'
    // }, {
    //   id: 5,
    //   type: 'image',
    //   url: '/images/detail/6.jpg'
    // }, {
    //   id: 6,
    //   type: 'image',
    //   url: '/images/detail/9.png'
    // }],
  },
  jump: function(){
    wx.navigateTo({
      url: '../cart/cart',
    })
  },
  onChange(event) {
    const {picker, value, index} = event.detail;
    let fudong = index+1;
    let changePrice = this.data.detailData.price/fudong
    this.setData({
      current:value,
      storeInfo:{
        store_name:this.data.detailData.title,
        price:changePrice.toFixed(2),
        stock:Math.round(999/fudong),
        ot_price:this.data.detailData.price,
        fsales:5*fudong,
        unit_name:'件'
      }
    })
    // Toast(`当前值：${value}, 当前索引：${index}`);
  },
  confirm(){
    this.setData({
      show:false
    })
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
  onLoad() {
    this.getProduct();
  },
  initData(){
    var price=this.data.detailData.price;
    var title=this.data.detailData.title;
    this.setData({
      storeInfo:{
        price:price,
        store_name:title,
        stock:999,
        ot_price:99999,
        fsales:20,
        unit_name:'件'
      }
    })
  },
  sumbit: function(){
    wx.requestPayment(
      {
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success':function(res){},
      'fail':function(res){},
      'complete':function(res){}
      })
  },

  //这里
  getProduct: function(){
    let product =  wx.getStorageSync('product')
    this.setData({
      detailData: product
    })
    this.initData()
    // console.log(this.data.detailData)
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
    isCollect: function(){
    this.setData({
      collect: "block",
    cancelCollect: "none"
    })
  },
  hasCollect: function(){
    this.setData({
      collect: "none",
    cancelCollect: "block"
    })
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
})