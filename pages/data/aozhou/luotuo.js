const data = [
  {
    id: 1,
    name: '骆驼',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fue73ercq4j20ku0drgrx.jpg',
    desc: '随机出现',
    baby: ['烧伤时间减慢15%'],
    skill: { 18: 15 }
  },
  {
    id: 2,
    name: '迷彩骆驼',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fue73hjj8ij20ku0dtn38.jpg',
    desc: '随机出现',
    baby: ['套索减小幅度降低10%', '烧伤时间减慢20%'],
    skill: { 8: 10, 18: 20 }
  },
  {
    id: 3,
    name: '骆驼辛巴达',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue73f2pwkj20ku0dsn5b.jpg',
    desc: '随机出现',
    baby: ['动物发怒的速度变慢8%', '烧伤时间减慢15%', '被动：箱子所获得的金币增加3%'],
    skill: { 10: 8, 18: 15, 56: 3 }
  },
  {
    id: 4,
    name: '火山骆驼',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue73fd83lj20ku0dtgra.jpg',
    desc: '随机出现',
    baby: ['骑乘的动物速度变快5%', '烧伤的时间减慢50%'],
    skill: { 12: 5, 18: 50 }
  },
  {
    id: 5,
    name: '城堡骆驼',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fue73fpvh6j20ku0dtjwv.jpg',
    desc: '随机出现, 务必带上加几率的宝宝, 不然你可能永远都遇不到',
    baby: ['待补充'],
    skill: { 13: 10, 18: 24 }
  },
  {
    id: 6,
    name: '变色骆驼',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fue73h3yszj20ku0dv0zn.jpg',
    desc: '连续换乘8种动物出(7热带+1外来)',
    baby: ['初始套索增大9%', '腾空跳起时获得9%额外高度', '吞食其他动物可延长9%的效果'],
    skill: { 7: 9, 15: 9, 11: 9 }
  },
  {
    id: 7,
    name: '鲸鱼骆驼',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue73gjqhdj20ku0dwahr.jpg',
    desc: '9级栖息地随机出现',
    baby: ['腾空跳起时获得5%额外速度', '动物们在水里的速度增加20%', '烧伤时间减慢20%'],
    skill: { 16: 5, 17: 20, 18: 20 }
  },
  {
    id: 8,
    name: '神秘骆驼',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fue73g8dx8j20ku0dv44f.jpg',
    desc: '1.7版本后濒危动物搜救',
    baby: ['腾空跳起时获得10%额外高度', '驯服动物所需时间缩短20%', '烧伤时间减慢30%'],
    skill: { 15: 10, 3: 20, 18: 30 }
  }
]

module.exports = data
