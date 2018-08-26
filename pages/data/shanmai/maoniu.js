const data = [
  {
    id: 1,
    name: '牦牛',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue5dw0lzpj20ku0dt7ax.jpg',
    desc: '随机出现',
    baby: ['动物发怒的速度变慢5%'],
    skill: { 10: 5 }
  },
  {
    id: 2,
    name: '雪牛',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fue5dwdohej20ku0dwn40.jpg',
    desc: '随机出现',
    baby: ['动物发怒的速度变慢8%', '稀有动物出现的概率增加4%', '狂暴跳跃距离缩短5%'],
    skill: { 10: 8, 1: 4, 14: 5 }
  },
  {
    id: 3,
    name: '臭鼬牦牛',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue5dytn6mj20ku0dtteu.jpg',
    desc: '随机出现',
    baby: ['动物发怒的速度变慢5%', '骑乘的动物速度变快15%'],
    skill: { 10: 5, 12: 15 }
  },
  {
    id: 4,
    name: '牛脾气树',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fue5dwmo7rj20ku0dwtf2.jpg',
    desc: '随机出现',
    baby: ['动物发怒的速度变慢6%', '驯服的动物速度变慢8%'],
    skill: { 10: 6, 13: 8 }
  },
  {
    id: 5,
    name: '战牛',
    img: 'http://wx4.sinaimg.cn/mw690/6ff2374dly1fue5dwycw4j20ku0dvwkz.jpg',
    desc: '随机出现',
    baby: ['初始套索增大8%', '驯服动物所需时间缩短20%', '被动：动物发怒的速度变慢1%'],
    skill: { 7: 8, 3: 20, 60: 1 }
  },
  {
    id: 6,
    name: '蒸汽朋克',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fue5dygvc1j20ku0dt107.jpg',
    desc: '使用一只耗牛连撞10只动物',
    baby: ['动物发怒的速度变慢6%', '套索减小幅度降低12%'],
    skill: { 10: 6, 8: 12 }
  },
  {
    id: 7,
    name: '爱神牦牛',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fue5dxd6xlj20ku0dswjn.jpg',
    desc: '9级栖息地随机出现',
    baby: ['动物发怒的速度变慢7%', '动物伴侣出现的概率增加10%', '被动：驯服动物伴侣所需时间缩短1%'],
    skill: { 10: 7, 2: 10, 54: 1 }
  },
  {
    id: 8,
    name: '占星牛',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fue5dxsp7dj20ku0ds7a6.jpg',
    desc: '1.7版本后濒危动物搜救',
    baby: ['动物发怒的速度变慢8%', '任务奖励增加12%', '狂暴跳跃距离缩短10%'],
    skill: { 10: 8, 5: 12, 14: 10 }
  },
  {
    id: 9,
    name: '牦牛四分卫',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fue5dy4jfcj20ku0dw7am.jpg',
    desc: '春节活动或者周年庆活动获得',
    skill: { 10: 10, 15: 10 }
  }
]

module.exports = data
