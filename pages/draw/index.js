Page({
  data: {
    placeholder: '我要记仇...',
    defaultVal: '',
    emptyVal: '今天没有仇要记。这个仇，我先记下了。',
    textVal: '',
    currentDay: '',
    // img: '../../../assets/images/a0001.jpg',
    img: './a0001.jpg',
    showSaveBtn: false,
    saveStatus: false
  },
  onLoad: function () {
    const date = new Date
    const today = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()

    this.setData({
      currentDay: today,
      textVal: this.randomText() + "。这个仇，我先记下了。"
    })
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
    ctx.drawImage(this.data.img, 0, 0, 275*ratio*_w, 182*ratio*_w)
    
    var _text
    var _drawText = ''
    var _lineWidth = 0  // 行文字宽
    var _i = 0  // 计数器, 连续10个字符若没有换行符, 则换行
    var _h = 20 // 新行偏移
    ctx.setFillStyle('#000')
    ctx.setFontSize(18)
    _text = today + ", " + (this.data.textVal ? this.data.textVal : this.data.emptyVal)
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
    this.setData({
      showSaveBtn: true,
      saveStatus: false
    })
  },

  savePic: function () {
    const that = this
    const ratio = wx.getSystemInfoSync().screenWidth / 750

    if (this.data.saveStatus) {
      wx.chooseImage()
      return
    }

    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 510 * ratio,
      height: 640 * ratio,
      destWidth: 510 * ratio,
      destHeight: 640 * ratio,
      canvasId: "myCanvas",
      success: function (res) {
        wx.getSetting({
          success(_res) {
            if (!_res.authSetting['scope.writePhotosAlbum']) {
              wx.authorize({
                scope: 'scope.writePhotosAlbum',
                success() {
                  wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: function () {
                      that.setData({
                        saveStatus: true
                      })
                    }
                  })
                }
              })
              // wx.openSetting({
                // success: (res) => {
                  // res.authSetting = {
                  //   "scope.userInfo": true,
                  //   "scope.userLocation": true
                  // }
                  
              //   }
              // })
            } else {
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: function () {
                  that.setData({
                    saveStatus: true
                  })
                }
              })
              
            }
          }
        })
      }
    })
  },

  saveAuth: function () {
    wx.openSetting({
      success: (res) => {
        res.authSetting = {
          "scope.writePhotosAlbum": true
        }
      }
    })
  },

  randomText: function () {
    let text = [
      '阴，今天一个新宝宝都没出现',
      '晴, 今天我抓了一个稀有动物, 但是大家都不给我点赞',
      '今天我好不容易遇到个稀有宝宝,突然女神给我打电话,害我没抓到',
      '大风,今天同事抓到了我一直想抓的动物',
      '大雨,今天女票抓到了潜行山羊'
    ]
    let key = Math.floor(Math.random()*text.length)
    return text[key]
  },

  handleText: function (e) {
    this.setData({
      textVal: e.detail.value
    })
  },

  submit: function () {
    this.draw()
    // console.log(this.data.textVal)
  }

})