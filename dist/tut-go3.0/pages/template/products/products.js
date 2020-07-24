Page({  
  data: {  
      list: [  
          {  
              imgUrl:"/images/goods/m4.png",  
              name:"M4A1 消音型 | 二号玩家",  
              price:"930"  
          },  
          {  
            imgUrl:"/images/goods/手套.png",  
            name:"运动手套（★） | 潘多拉之盒",  
            price:"7900"  
        },  
    
      ]  
  },  
 // 删除
 deletes:function(e){
  var that=this;
  // 获取索引
  const index = e.currentTarget.dataset.index;
  // 获取商品列表数据
  let list = this.data.list;
  wx.showModal({
    title: '提示',
    content: '确认删除吗',
    success: function (res) {
      if (res.confirm) {
        // 删除索引从1
        list.splice(index, 1);
        // 页面渲染数据
        that.setData({
          list: list
        });
        // 如果数据为空
        if (!list.length) {
          that.setData({
            hasList: false
          });
        } else {
          // 调用金额渲染数据
          that.count_price();
        }
      } else {
        console.log(res);
      }
    },
    fail: function (res) {
      console.log(res);
    }
  })
},
}) 