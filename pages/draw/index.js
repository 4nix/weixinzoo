Page({
  data: {
    defaultVal: '我要记仇...',
    textVal: '',
    img: '../../../assets/images/a0001.jpg'
  },
  onLoad: function () {
    
    // this.draw()
  },

  draw: function (e) {
    const ratio = wx.getSystemInfoSync().screenWidth / 750
    const ctx = wx.createCanvasContext('myCanvas')
    const date = new Date

    // 日期
    var today = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()

    ctx.setFillStyle('#fff')
    ctx.fillRect(0, 0, 710*ratio, 800*ratio)

    var _w = 510/275
    ctx.drawImage('../../../assets/images/a0001.jpg', 0, 0, 275*ratio*_w, 182*ratio*_w)
    
    var _text
    var _drawText = ''
    var _lineWidth = 0  // 行文字宽
    var _i = 0  // 计数器, 连续10个字符若没有换行符, 则换行
    var _h = 20 // 新行偏移
    ctx.setFillStyle('#000')
    ctx.setFontSize(18)
    _text = today + ", " + (this.data.textVal ? this.data.textVal : "阴，今天我一个宝宝都没抓到，还骗我写日记") + "。这个仇，我先记下了。"
    for (var i in _text) {

      if (i < _text.length - 1 && _text[i] + _text[i+1] == '\n') {
        _h += 20
        ctx.fillText(_drawText, 20, 182 * ratio * _w + _h)
        _drawText = ''
        _lineWidth = 0
      } else {
        _drawText += _text[i]
        _lineWidth += ctx.measureText(_text[i]).width
      }

      if (_lineWidth >= 200 * ratio * _w
        || i == _text.length - 1) {
        _h += 20
        ctx.fillText(_drawText, 20, 182 * ratio * _w + _h)
        _drawText = ''
        _lineWidth = 0
      }


    }

    ctx.draw()
   
  },

  randomText: function () {
    return "阴，今天我一个宝宝都没抓到，还让我写日记"
  },

  handleText: function (e) {
    this.setData({
      textVal: e.detail.value
    })
  },

  submit: function () {
    this.draw()
    console.log(this.data.textVal)
  }

})