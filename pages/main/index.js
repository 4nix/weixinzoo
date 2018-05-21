const area = require("../data/index.js")

Page({
  data: {
    area: area,
    scene: 'http://wx1.sinaimg.cn/mw690/6ff2374dgy1fqwup9gzitj20w00w0wgo.jpg'
  },
  previewImage: function (e) {
    wx.previewImage({
      urls: this.data.scene.split(',')
    })
  }
})
