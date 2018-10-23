//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
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
  facedetect: function() {
    console.log("facedetect");
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
            image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2295652494,1445330104&fm=26&gp=0.jpg'
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

  //阿信图片:https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2295652494,1445330104&fm=26&gp=0.jpg
  //白人图片：http://img5.imgtn.bdimg.com/it/u=1877842192,3807993791&fm=200&gp=0.jpg
  facematch: function () {
    console.log("facedetect");
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=rQBaVPuebgERan6GnS543Mp3&client_secret=yU4L7cY3Qp2d0A2Da6zpAUo7yFTiwnWd',
      success: function (res) {
        console.log("输出", res.data.access_token);
        wx.request({
          url: 'https://aip.baidubce.com/rest/2.0/face/v3/match?access_token=' + res.data.access_token,
          header: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          data: [{
            "image": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2295652494,1445330104&fm=26&gp=0.jpg",
            "image_type": "URL"
          },
          {
            "image": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2295652494,1445330104&fm=26&gp=0.jpg",
            "image_type": "URL"
          }
          ],
          success: function (res) {
            console.log(res.data);
          }
        })
      }
    })
  },
})
