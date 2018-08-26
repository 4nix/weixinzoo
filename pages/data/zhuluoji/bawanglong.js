const data = [
  {
    id: 1,
    name: '霸王龙',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fuecbo08jfj20ku0dqq96.jpg',
    desc: '随机出现',
    baby: ['稀有动物出现概率增加5%'],
    skill: { 1: 5 }
  },
  {
    id: 2,
    name: '墨西哥霸王龙',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fuecbonxbvj20ku0dtjxg.jpg',
    desc: '随机出现',
    baby: ['稀有动物出现概率增加6%', '吞食其他动物可延长5%效果'],
    skill: { 1: 6, 11: 5 }
  },
  {
    id: 3,
    name: '海洋霸王龙',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fuecboc53lj20ku0dsq9i.jpg',
    desc: '随机出现',
    baby: ['稀有动物出现概率增加4%', '动物们在水里速度增加12%'],
    skill: { 1: 4, 17: 12 }
  },
  {
    id: 4,
    name: '说唱霸王龙',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fuecbp98o5j20ku0dw44f.jpg',
    desc: '随机出现',
    baby: ['箱子获得的金币增加15%', '任务奖励增加10%', '稀有动物出现概率增加5%'],
    skill: { 6: 15, 5: 10, 1: 5 }
  },
  {
    id: 5,
    name: '巫术霸王龙',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fuecbplfbfj20ku0dt79g.jpg',
    desc: '随机出现',
    baby: ['稀有动物出现概率增加8%', '动物发怒速度变慢5%'],
    skill: { 1: 8, 10: 5 }
  },
  {
    id: 6,
    name: '暴君霸王龙',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fuecbq8inbj20ku0dpag2.jpg',
    desc: '随机出现',
    baby: ['任务奖励增加20%', '稀有动物出现概率增加8%', '被动：箱子获得的金币增加3%'],
    skill: { 5: 20, 1: 8, 56: 3 }
  },
  {
    id: 7,
    name: '破坏者霸王龙',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fuecbnp4d2j20ku0dugrh.jpg',
    desc: '9级栖息地出现',
    baby: ['稀有动物出现概率增加10%', '套索减小幅度降低15%'],
    skill: { 1: 10, 8: 15, 70: 2 }
  },
  {
    id: 8,
    name: '健身霸王龙',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fuecbpy5klj20ku0dxn3t.jpg',
    desc: '随机出现, 收集5个蛋',
    baby: ['稀有动物出现概率增加6%', '初始套索增大6%', '腾空跳起时获得6%额外速度'],
    skill: { 1: 6, 7: 6, 16: 6 }
  }
]

module.exports = data
