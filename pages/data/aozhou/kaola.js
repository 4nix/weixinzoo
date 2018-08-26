const data = [
  {
    id: 1,
    name: '考拉',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue7oy3qnnj20ku0dsjxq.jpg',
    desc: '随机出现',
    baby: ['稀有动物出现的概率增加4%', '烧伤时间减慢8%'],
    skill: { 1: 4, 18: 8 }
  },
  {
    id: 2,
    name: '驯兽考拉',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue7oytlmtj20ku0dt0xg.jpg',
    desc: '随机出现',
    baby: ['稀有动物出现的概率增加4%', '动物们在水里的速度增加15%', '烧伤时间减慢8%'],
    skill: { 1: 4, 17: 15, 18: 8 }
  },
  {
    id: 3,
    name: '暴走考拉',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue7oz4dmzj20ku0dsjx6.jpg',
    desc: '随机出现',
    baby: ['套索减小幅度降低12%', '稀有动物出现的概率增加4%', '烧伤时间减慢12%'],
    skill: { 8: 12, 1: 4, 18: 12 }
  },
  {
    id: 4,
    name: '小丑考拉',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue7ozr3zhj20ku0dvte4.jpg',
    desc: '随机出现',
    baby: ['腾空跳起时获得10%额外速度', '驯服动物所需时间缩短16%', '烧伤时间减慢16%'],
    skill: { 16: 10, 3: 16, 18: 16 }
  },
  {
    id: 5,
    name: '考拉战车',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue7p08lk2j20ku0dtn1h.jpg',
    desc: '随机出现',
    baby: ['稀有动物出现的概率增加10%', '烧伤时间减慢20%', '被动：动物伴侣出现的概率增加1%'],
    skill: { 1: 10, 18: 20, 52: 1 }
  },
  {
    id: 6,
    name: '沼泽考拉怪',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue7p0ntp5j20ku0dv45h.jpg',
    desc: '2000米后火树随机出现',
    baby: ['稀有动物出现的概率增加8%', '任务奖励增加15%', '被动：箱子获得的金币增加3%'],
    skill: { 1: 8, 5: 15, 56: 3 }
  },
  {
    id: 7,
    name: '考拉男爵夫人',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fue7p1hy6gj20ku0dtten.jpg',
    desc: '9级栖息地随机出现',
    baby: ['初始套索增大8%', '稀有动物出现的概率增加6%', '烧伤时间减慢40%'],
    skill: { 7: 8, 1: 6, 18: 40 }
  },
  {
    id: 8,
    name: '考拉教授',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue7p0y3kmj20ku0dvwjw.jpg',
    desc: '1.7版本后濒危动物搜救',
    baby: ['腾空跳起时获得5%额外高度', '稀有动物出现的概率增加12%', '烧伤时间减慢20%'],
    skill: { 15: 5, 1: 12, 18: 20 }
  }
]

module.exports = data
