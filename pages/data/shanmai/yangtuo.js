const data = [
  {
    id: 1,
    name: '神兽羊驼',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue44v6j9uj20ku0dv0z5.jpg',
    desc: '随机出现',
    baby: ['腾空跳起时获得6%额外速度'],
    skill: { 16: 6 }
  },
  {
    id: 2,
    name: '小丑羊驼',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fue44vo5ngj20ku0ds44l.jpg',
    desc: '随机出现',
    baby: ['腾空跳起时获得7%额外速度', '驯服的动物速度变慢4%'],
    skill: { 16: 7, 13: 4 }
  },
  {
    id: 3,
    name: '彩罐羊驼',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fue44vz3irj20ku0dwtft.jpg',
    desc: '随机出现',
    baby: ['腾空跳起时获得7%额外速度', '箱子所获得的金币增加25%', '任务奖励增加8%'],
    skill: { 16: 7, 6: 25, 5: 8 }
  },
  {
    id: 4,
    name: '蝴蝶羊驼',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue44wyvofj20ku0dw7ay.jpg',
    desc: '随机出现',
    baby: ['腾空跳起时获得6%额外速度', '动物伴侣出现的概率增加20%', '被动：驯服动物所需时间缩短1%'],
    skill: { 15: 6, 2: 20, 53: 1 }
  },
  {
    id: 5,
    name: '伊丽莎白羊驼二世',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fue44wgjstj20ku0dvjwz.jpg',
    desc: '随机出现',
    baby: ['初始套索增大6%', '腾空跳起时获得9%额外速度', '驯服动物所需时间缩短15%'],
    skill: { 7: 6, 16: 9, 3: 15 }
  },
  {
    id: 6,
    name: '终极闪光羊驼',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue44uwbm3j20ku0dwwkq.jpg',
    desc: 'BOSS任务出',
    baby: ['骑乘的动物速度变快10%', '腾空跳起时获得8%额外速度', '稀有动物出现的概率增加7%'],
    skill: { 12: 10, 16: 8, 1: 7 }
  },
  {
    id: 7,
    name: '奥巴驼',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue44xggqnj20ku0dtwjm.jpg',
    desc: '9级栖息地随机出现',
    baby: ['腾空跳起时获得6%额外速度', '任务奖励增加15%', '驯服动物所需时间缩短5%'],
    skill: { 16: 6, 5: 15, 3: 5 }
  },
  {
    id: 8,
    name: '火爆驼',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue44xtg3rj20ku0dvq8d.jpg',
    desc: '1.7版本后濒危动物搜救',
    baby: [''],
    skill: { 16: 8, 15: 8 }
  }
]

module.exports = data
