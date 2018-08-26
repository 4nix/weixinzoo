const data = [
  {
    id: 1,
    name: '美利奴绵羊',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue5syvka8j20ku0dvdnj.jpg',
    desc: '随机出现',
    baby: ['驯服动物所需时间缩短12%'],
    skill: { 3: 12 }
  },
  {
    id: 2,
    name: '披着狼皮的羊',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue5t1v2ppj20ku0dwdmk.jpg',
    desc: '随机出现',
    baby: ['驯服动物所需时间缩短15%', '骑乘的动物速度变快6%', '腾空跳起时获得3%额外速度'],
    skill: { 3: 15, 12: 6, 16: 3 }
  },
  {
    id: 3,
    name: '棉花糖小羊羔',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fue5szkqe0j20ku0dwn3y.jpg',
    desc: '随机出现',
    baby: ['稀有动物出现的概率增加7%', '驯服动物所需时间缩短12%', '吞食其他动物可延长9%的效果'],
    skill: { 1: 7, 3: 12, 11: 9 }
  },
  {
    id: 4,
    name: '羊咩咩',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue5szzgsqj20ku0dttf6.jpg',
    desc: '随机出现',
    baby: ['动物伴侣出现的概率增加20%', '驯服动物所需时间缩短20%', '驯服动物伴侣所需时间缩短5%'],
    skill: { 2: 20, 3: 20, 4: 5 }
  },
  {
    id: 5,
    name: '绵羊主妇',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue5t0aouhj20ku0dvagd.jpg',
    desc: '随机出现',
    baby: ['动物发怒的速度变慢8%', '驯服动物伴侣所需时间缩短20%', '被动：驯服动物所需时间缩短2%'],
    skill: { 10: 8, 4: 20, 53: 2 }
  },
  {
    id: 6,
    name: '野蛮绵羊',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue5t0r09uj20ku0dwdkw.jpg',
    desc: 'BOSS任务',
    baby: ['初始套索增大8%', '腾空跳起时获得8%额外高度', '驯服动物所需时间缩短20%'],
    skill: { 7: 8, 15: 8, 3: 20 }
  },
  {
    id: 7,
    name: '汉堡绵羊',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue5t1fymhj20ku0dvafh.jpg',
    desc: '9级栖息地随机出现',
    baby: ['骑乘的动物速度变快10%', '驯服动物所需时间缩短15%', '吞食其他动物可延长10%的效果'],
    skill: { 12: 10, 3: 15, 11: 10 }
  },
  {
    id: 8,
    name: '芝士绵羊',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue5t11pvvj20ku0dwq9w.jpg',
    desc: '1.7版本后濒危动物搜救',
    baby: ['驯服的动物速度变慢5%', '任务奖励增加10%', '驯服动物所需时间缩短25%'],
    skill: { 13: 5, 5: 10, 3: 25 }
  }
]

module.exports = data
