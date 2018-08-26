const data = [
  {
    id: 1,
    name: '迅猛龙',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fueb4a2jooj20ku0du7ab.jpg',
    desc: '随机出现',
    baby: ['腾空跳起时获得6%额外速度'],
    skill: { 16: 6 }
  },
  {
    id: 2,
    name: '羽毛迅猛龙',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fueb4afhk9j20ku0dwdkw.jpg',
    desc: '随机出现',
    baby: ['腾空跳起时获得7%额外速度', '动物伴侣出现的概率增加7%', '被动：在侏罗纪能量消耗变慢1%'],
    skill: { 16: 7, 2: 7, 70: 1 }
  },
  {
    id: 3,
    name: '牙医迅猛龙',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fueb4azek9j20ku0dwgrg.jpg',
    desc: '随机出现',
    baby: ['腾空跳起时获得6%额外速度', '套索减小幅度降低6%', '驯服动物所需时间缩短6%'],
    skill: { 16: 6, 8: 6, 3: 6 }
  },
  {
    id: 4,
    name: '赖床迅猛龙',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fueb4cdmk7j20ku0dt0xu.jpg',
    desc: '随机出现',
    baby: ['驯服的动物速度变慢8%', '狂暴跳跃距离缩短8%', '被动：动物发怒的速度变慢1%'],
    skill: { 13: 8, 14: 8, 60: 1 }
  },
  {
    id: 5,
    name: '贵妇迅猛龙',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fueb4bdyetj20ku0duwkq.jpg',
    desc: '随机出现',
    baby: ['腾空跳起时获得6%额外速度', '稀有动物出现概率增加4%', '驯服动物伴侣时间缩短12%'],
    skill: { 16: 6, 1: 4, 4: 12 }
  },
  {
    id: 6,
    name: '哲学家迅猛龙',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fueb49de68j20ku0dtwld.jpg',
    desc: '随机出现',
    baby: ['腾空跳起时获得5%额外速度', '动物发怒的速度变慢7%', '箱子获得的金币增加20%'],
    skill: { 16: 5, 10: 7, 6: 20 }
  },
  {
    id: 7,
    name: '卷饼迅猛龙',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fueb4bys9qj20ku0dwgr6.jpg',
    desc: '随机出现',
    baby: ['套索减小幅度降低8%', '腾空跳起时获得6%额外速度', '吞食其他动物可延长12%效果'],
    skill: { 8: 8, 16: 6, 11: 12 }
  },
  {
    id: 8,
    name: '死神迅猛龙',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fueb49sikqj20ku0dwtej.jpg',
    desc: '随机出现',
    baby: ['初始套索增大15%', '骑乘的动物速度变快15%', '腾空跳起时获得5%额外速度'],
    skill: { 7: 15, 12: 15, 16: 5 }
  }
]

module.exports = data
