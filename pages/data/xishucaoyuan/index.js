const yeniu = require('yeniu.js')
const banma = require('banma.js')
const tuoniao = require('tuoniao.js')
const changjinglu = require('changjinglu.js')
const tuying = require('tuying.js')
const shizi = require('shizi.js')
const daxiang = require('daxiang.js')

const data = [
  { name: '野牛', types: yeniu, desc: '奔跑速度慢, 升级后换乘野牛会冲刺一段距离, 这个时间段内可撞碎一切, 狂暴后跳跃前进' },
  { name: '斑马', types: banma, desc: '奔跑速度慢, 换乘索套大小不减, 狂暴后跳跃前进' },
  { name: '鸵鸟', types: tuoniao, desc: '奔跑速度快, 狂暴后加速前进, 升级后撞击会甩出主角' },
  { name: '长颈鹿', types: changjinglu, desc: '奔跑速度中等, 可撞击中小型动物和树木, 撞击后腿瘸了, 腿瘸期间不可再撞击, 等回复了大长腿后还能接着撞 - -, 狂暴或换乘大幅度索套最大化的甩出主角' },
  { name: '秃鹰', types: tuying, desc: '飞行动物, 狂暴后上下翻滚' },
  { name: '狮子', types: shizi, desc: '升级后可吃掉一切, 一口一个, 声音特别脆 - -, 狂暴后会吃掉主角' },
  { name: '大象', types: daxiang, desc: '撞飞撞碎一切, 除了两边的墙和中间挡路的山, 都能撞, 狂暴后会甩出主角(看我把蓝色的硕牙像拍出了粉色的效果~)' }
]
module.exports = data
