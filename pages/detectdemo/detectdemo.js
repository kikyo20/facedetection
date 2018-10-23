// pages/detectdemo/detectdemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgsrc: '55',
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

  facedetect: function() {
    var that = this;
    console.log(that.data.imgsrc);
    //获取人脸图片
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths[0];
        console.log(tempFilePaths);
        that.setData({imgsrc: tempFilePaths});
        console.log(that.data.imgsrc);

        getfaceinfo(that.data.imgsrc);
        
      }
    })
  },
  getfaceinfo: function (imgsrc) {
    var that = this;
    console.log("getfaceinfo");
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=rQBaVPuebgERan6GnS543Mp3&client_secret=yU4L7cY3Qp2d0A2Da6zpAUo7yFTiwnWd',
      success: function (res) {
        console.log("输出", res.data.access_token);

        wx.request({
          url: 'https://aip.baidubce.com/rest/2.0/face/v3/detect?access_token=' + res.data.access_token,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            image_type: 'URL',
            face_field: 'age,beauty,expression,face_shape,gender,glasses,landmark,race,quality,face_type',
            image: imgsrc
          },
          success: function (res) {
            // console.log(res.data.result[0].landmark)
            console.log(res.data);
            // var x = res.data.result[0].landmark
          }
        })
      }
    })
  },
})