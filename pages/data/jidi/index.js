const qie = require('qie.js')
const haibao = require('haibao.js')
const beijitu = require('beijitu.js')
const maotouying = require('maotouying.js')
const huli = require('huli.js')
const beijixiong = require('beijixiong.js')
const haixiang = require('haixiang.js')

const data = [
  { name: '企鹅', types: qie, desc: '奔跑缓慢, 狂暴后不易控制, 转弯困难' },
  { name: '海豹', types: haibao, desc: '奔跑缓慢, 在冰上滑行可撞飞其它动物, 狂暴后甩出主角' },
  { name: '北极兔', types: beijitu, desc: '奔跑中等, 狂暴后大幅度跳跃' },
  { name: '猫头鹰', types: maotouying, desc: '飞行动物, 狂暴后上下飞行, 并且可以撞飞中小型动物(6666)' },
  { name: '狐狸', types: huli, desc: '奔跑速度快, 狂暴后速度更快, 一不留神就从冰上滑海里去了 - -' },
  { name: '北极熊', types: beijixiong, desc: '奔跑慢, 升级可吃掉一切, 狂暴后会吃掉主角' },
  { name: '海象', types: haixiang, desc: '奔跑速度慢, 在冰上可滑行并延缓狂暴时间, 可撞碎一切, 狂暴后短!短!短!距离甩出主角' }
]
module.exports = data
