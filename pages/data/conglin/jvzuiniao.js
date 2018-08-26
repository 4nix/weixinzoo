const data = [
  {
    id: 1,
    name: '巨嘴鸟',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fue35w80bhj20ku0dvgrf.jpg',
    desc: '随机出现',
    baby: ['套索减小幅度降低4%'],
    skill: { 8: 4 }
  },
  {
    id: 2,
    name: '喇叭嘴',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fue35wszr4j20ku0dwtff.jpg',
    desc: '随机出现',
    baby: ['套索减小幅度降低5%', '狂暴跳跃距离缩短5%'],
    skill: { 8: 5, 14: 5 }
  },
  {
    id: 3,
    name: '蓝鸟',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue35vup7sj20ku0dv79c.jpg',
    desc: '随机出现',
    baby: ['套索减小幅度降低5%', '稀有动物出现的概率增加4%'],
    skill: { 8: 5, 1: 4 }
  },
  {
    id: 4,
    name: '哞哞鸟',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue35u4qjbj20ku0ds0yw.jpg',
    desc: '随机出现',
    baby: ['套索减小幅度降低6%', '骑乘的动物速度变快10%', '被动：稀有动物出现的概率增加1%'],
    skill: { 8: 6, 12: 10, 51: 1 }
  },
  {
    id: 5,
    name: '啤酒鸟',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fue35uhd0fj20ku0dwdld.jpg',
    desc: '随机出现',
    baby: ['驯服动物所需时间缩短15%', '套索减小幅度降低9%'],
    skill: { 3: 15, 8: 9 }
  },
  {
    id: 6,
    name: '三嘴鸟',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue35vismjj20ku0dvtd3.jpg',
    desc: '巨嘴鸟跳100米',
    baby: ['套索减小幅度降低6%', '动物伴侣出现的概率增加8%', '驯服动物伴侣所需时间缩短5%'],
    skill: { 8: 6, 2: 8, 4: 5 }
  },
  {
    id: 7,
    name: '卡祖笛鸟',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fue35uqnq1j20ku0dwjxl.jpg',
    desc: '9级栖息地随机出现',
    baby: ['套索减小幅度降低8%', '箱子所获得的金币增加25%'],
    skill: { 8: 8, 6: 25 }
  },
  {
    id: 8,
    name: '火箭鸟',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fue35v0ffij20ku0dvjwv.jpg',
    desc: '1.7版本后濒危动物搜救',
    baby: ['套索减小幅度降低8%', '腾空跳起时获得8%额外速度', '被动：动物伴侣出现的概率增加1%'],
    skill: { 8: 8, 16: 8, 52: 1 }
  }
]

module.exports = data
