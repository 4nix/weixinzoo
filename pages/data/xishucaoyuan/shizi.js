const data = [
  {
    id: 1,
    name: '狮子',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fue01h1s5ij20ku0dwaey.jpg',
    desc: '随机出现',
    baby: ['吞食其他动物可延长5%效果'],
    skill: { 11: 5 }
  },
  {
    id: 2,
    name: '绿植狮',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue039dtayj20ku0dvjxw.jpg',
    desc: '随机出现',
    baby: ['吞食其他动物可延长5%效果', '动物伴侣出现的概率增加6%'],
    skill: { 11: 5, 2: 6 }
  },
  {
    id: 3,
    name: '剑齿虎',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fue01ht9vmj20ku0dyn1z.jpg',
    desc: '随机出现',
    baby: ['吞食其他动物可延长7%效果', '腾空跳起时获得5%额外速度'],
    skill: { 11: 7, 16: 5 }
  },
  {
    id: 4,
    name: '狮鹫',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue01hdyfej20ku0dw43l.jpg',
    desc: '随机出现',
    baby: ['套索减小幅度降低4%', '腾空跳起时获得6%额外高度', '吞食其他动物可延长6%效果'],
    skill: { 8: 4, 15: 6, 11: 6 }
  },
  {
    id: 5,
    name: '哭吼狮',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue01iuescj20ku0dv45j.jpg',
    desc: '随机出现',
    baby: ['驯服动物时间缩短10%', '吞食其他动物可延长9%效果', '被动：驯服动物伴侣时间缩短1%'],
    skill: { 3: 10, 11: 9, 54: 1 }
  },
  {
    id: 6,
    name: '油炸狮',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue01jgmg3j20ku0dvwju.jpg',
    desc: '连续吃30只动物',
    baby: ['驯服的动物速度变慢6%', '吞食其他动物可延长6%效果', '被动：动物的发怒速度减慢1%'],
    skill: { 13: 6, 11: 6, 60: 1 }
  },
  {
    id: 7,
    name: '马赛狮',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue01k17ayj20ku0dvdm8.jpg',
    desc: '9级栖息地随机出现',
    baby: ['吞食其他动物可延长6%效果', '腾空跳起时获得3%额外速度', '驯服动物所需时间缩短16%'],
    skill: { 11: 6, 15: 3, 3: 16 }
  },
  {
    id: 8,
    name: '年兽(伪)',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue01laeydj20ku0ds7bt.jpg',
    desc: '1.5版本活动获得',
    baby: ['吞食其他动物可延长6%效果', '腾空跳起时获得3%额外速度', '驯服动物所需时间缩短16%'],
    skill: { 11: 6, 16: 3, 3: 16 }
  },
  {
    id: 9,
    name: '海狮',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue01kskaoj20ku0dv44z.jpg',
    desc: '春节和周年庆活动获得',
    skill: { 11: 12, 17: 12 }
  }
]

module.exports = data
