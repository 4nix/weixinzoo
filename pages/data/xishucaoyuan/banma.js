const data = [
  {
    id: 1,
    name: '斑马',
    img: 'http://wx3.sinaimg.cn/mw690/6ff2374dly1fuc0grf0l6j20ku0dwgsg.jpg',
    desc: '随机出现',
    baby: ['套索减小幅度降低4%'],
    skill: { 8: 4 }
  },
  {
    id: 2,
    name: '黄铜斑马',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fuc0jlkm7hj20ku0dtteu.jpg',
    desc: '随机出现',
    baby: ['套索减小幅度降低5%', '狂暴跳跃距离缩短5%'],
    skill: { 8: 5, 14: 5 }
  },
  {
    id: 3,
    name: '薄荷斑马',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fuc0grskgnj20ku0dwtem.jpg',
    desc: '随机出现',
    baby: ['套索减小幅度降低5%', '稀有动物出现的概率增加4%'],
    skill: { 8: 5, 1: 4 }
  },
  {
    id: 4,
    name: '闷骚斑马',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fuc0gsjeuhj20ku0ds79b.jpg',
    desc: '随机出现',
    baby: ['套索减小幅度降低6%', '骑乘的动物速度变快10%', '被动：稀有动物出现的概率增加1%'],
    skill:  { 8: 6, 12: 10, 51: 1 }
  },
  {
    id: 5,
    name: '电子斑马',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fuc0gtaac2j20ku0dwjw9.jpg',
    desc: '随机出现',
    baby: ['驯服动物所需时间缩短15%', '套索减小幅度降低9%'],
    skill: { 3: 15, 8: 9 }
  },
  {
    id: 6,
    name: '特洛伊斑马',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fuc0gtvtgmj20ku0dvdkz.jpg',
    desc: '连续骑乘7种不同草原动物出',
    baby: ['套索减小幅度降低6%', '动物伴侣出现的概率增加8%', '驯服动物伴侣所需时间缩短5%'],
    skill: { 8: 6, 2: 8, 4: 5 }
  },
  {
    id: 7,
    name: '赛尔马传奇',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fuc0guc3htj20ku0dvgra.jpg',
    desc: '9级栖息地随机出现',
    baby: ['套索减小幅度降低8%', '箱子所获得的金币增加25%'],
    skill: { 8: 8, 6: 25 }
  },
  {
    id: 8,
    name: '闪亮天马',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fuc0guscdoj20ku0dsgs8.jpg',
    desc: '1.7版本后濒危动物搜救',
    baby: ['套索减小幅度降低8%', '腾空跳起时获得8%额外速度', '被动：动物伴侣出现的概率增加1%'],
    skill: { 8: 8, 16: 8, 52: 1 }
  },
  {
    id: 9,
    name: '龙马',
    img: 'http://wx2.sinaimg.cn/mw690/6ff2374dly1fuc0gvp0f0j20ku0dsgrw.jpg',
    desc: '1.14春节活动',
    baby: ['套索减小幅度降低8%', '被动：动物伴侣出现的概率增加1%'],
    skill: { 8: 8, 52: 1 }
  },
  {
    id: 10,
    name: '旋转木马',
    img: 'http://wx1.sinaimg.cn/mw690/6ff2374dly1fuc0gv5t7tj20ku0dvwl3.jpg',
    desc: '万圣节和周年庆活动获得',
    skill: { 8: 5, 6: 20, 5: 6 }
  }
]

module.exports = data
