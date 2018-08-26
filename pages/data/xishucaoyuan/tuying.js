const data = [
  {
    id: 1,
    name: '秃鹰',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fuc07rblbkj20ku0dvq9o.jpg',
    desc: '随机出现',
    baby: ['初始套索增大4%'],
    skill: { 7: 4 }
  },
  {
    id: 2,
    name: '埃及秃鹰',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fuc07s5my7j20ku0dwgs8.jpg',
    desc: '随机出现',
    baby: ['初始套索增大4%', '会飞行的动物飞行平缓4%'],
    skill: { 7: 4, 9: 4 }
  },
  {
    id: 3,
    name: '偶像秃鹰',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fuc07sqrw1j20ku0dwtdv.jpg',
    desc: '随机出现',
    baby: ['动物伴侣出现的概率增加9%', '初始套索增大4%'],
    skill: { 2: 9, 7: 4 }
  },
  {
    id: 4,
    name: '资本鹰',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fuc07qhe59j20ku0dvafz.jpg',
    desc: '随机出现',
    baby: ['初始套索增大6%', '箱子所获得的金币增加18%', '任务奖励增加6%'],
    skill: { 7: 6, 6: 18, 5: 6 }
  },
  {
    id: 5,
    name: '流行秃鹰',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fuc07qxxtaj20ku0dv7ai.jpg',
    desc: '随机出现',
    baby: ['驯服动物时间缩短12%', '驯服动物伴侣时间缩短12%', '初始套索增大5%'],
    skill: { 3: 12, 4: 12, 7: 5 }
  },
  {
    id: 6,
    name: '机械秃鹰',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fuc07t6fnfj20ku0dsn32.jpg',
    desc: '随机出现 中间高山出现',
    baby: ['初始套索增大8%', '稀有动物出现的概率增加5%', '被动：套索减小幅度降低1%'],
    skill: { 7: 8, 1: 5, 58: 1 }
  },
  {
    id: 7,
    name: '龙鹰',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fuc07tkqzwj20ku0dtn35.jpg',
    desc: '9级栖息地随机出现',
    baby: ['初始套索增大6%', '腾空跳起时获得4%额外速度', '会飞行的动物飞行平缓6%'],
    skill: { 7: 6, 16: 4, 9: 6 }
  },
  {
    id: 8,
    name: '百万福特鹰',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fuc07u0x90j20ku0dwafw.jpg',
    desc: '1.7版本后濒危动物搜救',
    baby: ['初始套索增大7%', '腾空跳起时获得7%额外高度', '动物们在水里的速度增加10%'],
    skill: { 7: 7, 15: 7, 17: 10 }
  },
  {
    id: 9,
    name: '稻草鹰',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fuc07uk73bj20ku0dtn33.jpg',
    desc: '万圣节和周年庆活动获取',
    baby: ['待补充'],
    skill: { 7: 10, 12: 10, 3: 10 }
  }
]

module.exports = data
