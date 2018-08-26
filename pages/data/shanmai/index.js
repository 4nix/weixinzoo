const shanyang = require('shanyang.js')
const yangtuo = require('yangtuo.js')
const xiong = require('xiong.js')
const yelang = require('yelang.js')
const laoying = require('laoying.js')
const tuolu = require('tuolu.js')
const maoniu = require('maoniu.js')

const data = [
  { name: '山羊', types: shanyang, desc: '奔跑缓慢, 狂暴后跳跃前进' },
  { name: '羊驼', types: yangtuo, desc: '奔跑快, 换乘或狂暴后会大幅度甩出主角' },
  { name: '熊', types: xiong, desc: '奔跑慢, 升级可吃掉一切, 狂暴后会吃掉主角' },
  { name: '野狼', types: yelang, desc: '奔跑快, 狂暴后速度加快, 升级后撞击会甩出主角' },
  { name: '老鹰', types: laoying, desc: '基本在悬崖上, 抓捕需要心平气和, 几率都不算太低, 狂暴后上下翻滚' },
  { name: '驼鹿', types: tuolu, desc: '奔跑速度快, 每隔一段时间等头上有风时可撞碎一切, 撞击后会减慢速度, 狂暴奔跑速度加快' },
  { name: '牦牛', types: maoniu, desc: '骑上它会乱七八糟的跳, 最难骑的动物, 没有之一, 幸好可撞碎一切, 不然我就弃坑了, 狂暴后会甩出主角' }
]
module.exports = data
