Page({
  data: {
    message: 'Hello 小程序',
    list: []
  },
  onLoad () {
    // 加载数据并呈现到页面上
    // this.data.message = xxx 不可以，因为小程序平台捕获不到
    // this.setData({
    //   message: Date.now()
    // })
    // 获取一个API中的数据，不要使用AJAX api 因为AJAX的API是BOM
    // 使用微信官方API
    const _this = this
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          list: res.data.subjects
        })
      }
    })
  }
})
