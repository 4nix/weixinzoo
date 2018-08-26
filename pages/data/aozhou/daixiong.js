const data = [
  {
    id: 1,
    name: '袋熊',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fue6ltfhkvj20ku0dt7bd.jpg',
    desc: '随机出现',
    baby: ['腾空跳起时获得6%额外速度'],
    skill: { 16: 6 }
  },
  {
    id: 2,
    name: '袋熊战士',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fue6lu0ajwj20ku0dvn3t.jpg',
    desc: '随机出现',
    baby: ['腾空跳起时获得12%额外速度', '箱子所获得的金币增加20%'],
    skill: { 16: 12, 6: 20}
  },
  {
    id: 3,
    name: '喵袋熊',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue6ltrcd3j20ku0dsq9l.jpg',
    desc: '随机出现',
    baby: ['动物发怒的速度变慢5%', '腾空跳起时获得7%额外速度', '腾空跳起时获得7%额外高度'],
    skill: { 10: 5, 16: 7, 15: 7 }
  },
  {
    id: 4,
    name: '袋熊北鼻',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue6lun0v5j20ku0dvtea.jpg',
    desc: '随机出现',
    baby: ['初始套索增大8%', '腾空跳起时获得6%额外速度', '动物伴侣出现的概率增加14%'],
    skill: { 7: 8, 16: 6, 2: 14 }
  },
  {
    id: 5,
    name: '魔方袋熊',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue6lv5l3xj20ku0dwagn.jpg',
    desc: '随机出现',
    baby: ['腾空跳起时获得8%额外速度', '任务奖励增加20%', '驯服动物伴侣所需时间缩短10%'],
    skill: { 16: 8, 5: 20, 4: 10 }
  },
  {
    id: 6,
    name: '炸弹袋熊',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue6lvix74j20ku0dwag2.jpg',
    desc: '任意袋熊一次同时撞4只动物',
    baby: ['腾空跳起时获得7%额外速度', '驯服动物所需时间缩短14%', '烧伤时间减慢25%'],
    skill: { 16: 7, 3: 14, 18: 25 }
  },
  {
    id: 7,
    name: '西瓜袋熊',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fue6lvvcstj20ku0dt0zd.jpg',
    desc: '9级栖息地随机出现',
    baby: ['骑乘的动物速度变快12%', '腾空跳起时获得8%额外速度', '被动：烧伤时间减慢4%'],
    skill: { 12: 12, 16: 8, 68: 4 }
  },
  {
    id: 8,
    name: '袋熊侠',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue6lwduw0j20ku0dtage.jpg',
    desc: '1.3版本后随机出现',
    baby: ['套索减小幅度降低8%', '腾空跳起时获得10%额外速度', '腾空跳起时获得4%额外高度'],
    skill: { 8: 8, 16: 10, 15: 4 }
  }
]

module.exports = data
