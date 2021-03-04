Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1200
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = {
      "datas": [{
          "id": 1,
          "imgurl": "../../images/swiper/11.jpg"
        },
        {
          "id": 2,
          "imgurl": "../../images/swiper/22.jpg"
        },
        {
          "id": 3,
          "imgurl": "../../images/swiper/11.jpg"
        },{
          "id": 4,
          "imgurl": "../../images/swiper/22.jpg"
        }
      ]
    }
    this.setData({
      lunboData: data.datas
    })
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