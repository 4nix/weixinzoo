Page({
  onLoad: function () {
    const ctx = wx.createCanvasContext('myCanvas')

    ctx.drawImage('../../../assets/images/a0001.jpg', 0, 0, 150, 100)
    ctx.draw()
  }

  

})