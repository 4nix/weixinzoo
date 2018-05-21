const area = require("../data/index.js")

Page({
  data: {
    detail: []
  },

  onLoad: function (option) {

    this.setData({
      detail: area[option.race]['races'][option.type]
    })
    // this.list = area[option.race]['races'][option.type]
    // console.log(this.list)
  }
})
