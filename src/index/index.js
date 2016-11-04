//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    title: 'header-',
    motto: 'Hello World',
    userInfo: {
      name: '213213213'
    },
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn',
      'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download',
      'info_circle', 'cancel', 'search', 'clear'
    ],
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
      desc: '我现在的位置'
    }],
    covers: [{
      latitude: 23.099794,
      longitude: 113.324520,
      iconPath: '../img/star.png',
      rotate: 10
    }, {
      latitude: 23.099298,
      longitude: 113.324520,
      iconPath: '../img/star.png',
      rotate: 90
    }]
  },
  onLoad: function () {
    console.log('onLoad');
    console.log(app);
    var that = this
    const _this = this
      //调用应用实例的方法获取全局数据
      // app.getUserInfo(function(userInfo){
      //   //更新数据
      //   that.setData({
      //     userInfo:userInfo
      //   })
      // })
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          list: res.data.subjects
        });
        console.log(res);
      }
    })
    this.loadMore();
  },
  // 页面准备完成
  onReady() {
    wx.setNavigationBarTitle({ title: this.data.title + 'onReady' })
    console.log('onReady');
  },
  loadMore() {
    wx.setNavigationBarTitle({ title: this.data.title + 'loadMore' })
  },
})
