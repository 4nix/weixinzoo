const data = [
  {
    id: 1,
    name: '龙',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fu9owlcx1kj20ku0dvwkl.jpg',
    desc: '随机出现',
    baby: ['任务奖励增加12%'],
    skill: { 5: 12 }
  },
  {
    id: 2,
    name: '赫利俄斯之龙',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fu9owmjcyfj20ku0dsjxk.jpg',
    desc: '随机出现',
    baby: ['任务奖励增加10%', '骑乘的动物速度变快15%', '被动：套索减小幅度降低1%'],
    skill: { 5: 10, 12: 15, 58: 1 }
  },
  {
    id: 3,
    name: '红龙',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fu9owmy73lj20ku0dwte3.jpg',
    desc: '随机出现',
    baby: ['任务奖励增加12%', '动物伴侣出现的概率增加10%', '驯服动物伴侣所需时间缩短10%'],
    skill: { 5: 15, 2: 10, 4: 10 }
  },
  {
    id: 4,
    name: '鸡蛇',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fu9owopsfej20ku0dw44v.jpg',
    desc: '随机出现',
    baby: ['任务奖励增加15%', '动物发怒速度变慢12%', '被动：奥林匹斯山能量消耗变慢1%'],
    skill: { 5: 15, 10: 12, 71: 1 }
  },
  {
    id: 5,
    name: '戈里尼奇',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fu9owozv1jj20ku0dr44w.jpg',
    desc: '随机出现',
    baby: ['任务奖励增加10%', '腾空跳起时获得10%额外速度', '烧伤时间减慢40%'],
    skill: { 5: 10, 16: 10, 18: 40 }
  },
  {
    id: 6,
    name: '金羊毛的守护龙',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fu9owlyj0ij20ku0dvwke.jpg',
    desc: '随机出现',
    baby: ['任务奖励增加15%', '驯服动物所需时间缩短10%'],
    skill: { 5: 15, 3: 10 }
  },
  {
    id: 7,
    name: '黑龙',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fu9ownjngzj20ku0dw79w.jpg',
    desc: '随机出现',
    baby: ['任务奖励增加18%', '初始套索增大9%'],
    skill: { 5: 18, 7: 9 }
  },
  {
    id: 8,
    name: '奎兹特克',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fu9owo6orfj20ku0dtn4a.jpg',
    desc: '连续换乘8种不同动物',
    baby: ['任务奖励增加15%', '套索减小幅度降低5%', '会飞行的动物飞行平缓10%'],
    skill: { 5: 15, 8: 5, 9: 10 }
  }
]

module.exports = data
