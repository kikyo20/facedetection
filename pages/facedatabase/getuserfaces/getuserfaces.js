// pages/facedatabase/getuserfaces/getuserfaces.js
var app = getApp();
var access_token = app.globalData.access_token
Page({

  /**
   * 页面的初始数据
   */
  data: {
    access_token: access_token,
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
  
  },
  getuserfaces: function () {
    console.log("getuserfaces");
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=rQBaVPuebgERan6GnS543Mp3&client_secret=yU4L7cY3Qp2d0A2Da6zpAUo7yFTiwnWd',
      success: function (res) {
        console.log("输出", res.data.access_token);

        wx.request({
          url: 'https://aip.baidubce.com/rest/2.0/face/v3/faceset/face/getlist?access_token=' + res.data.access_token,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            group_id: 'ross_01',
            user_id: 'ashin1206',
          },
          success: function (res) {
            // console.log(res.data.result[0].landmark)
            console.log(res.data);
            // var x = res.data.result[0].landmark
          }
        })

      }
    })
  }
})