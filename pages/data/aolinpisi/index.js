const tianma = require('tianma.js')
const pinlu = require('pinlu.js')
const shijiu = require('shijiu.js')
const fenghuang = require('fenghuang.js')
const niutouren = require('niutouren.js')
const long = require('long.js')
const haigui = require('haigui.js')
const jiutoushe = require('jiutoushe.js')

const data = [
  { name: '天马', types: tianma, desc: '骑上瞬间天马会飞起一小段距离, 速度慢, 狂暴后不容易控制跳跃' },
  { name: '牝鹿', types: pinlu, desc: '升级后换乘不会减小索套大小, 速度中等, 狂暴后不容易控制跳跃' },
  { name: '狮鹫', types: shijiu, desc: '奔跑中会起飞两次, 升级后可吃一切动物, 速度快, 狂暴后会吃掉主角' },
  { name: '凤凰', types: fenghuang, desc: '狂暴后会从天空降到地面, 速度快, 撞到障碍物会甩出主角' },
  { name: '牛头人', types: niutouren, desc: '升级后可撞碎一切动物并撞碎树木, 速度中等, 狂暴会甩出主角' },
  { name: '龙', types: long, desc: '遇到障碍物会跳起, 可撞飞一切动物, 速度中等, 狂暴后会吃掉主角' },
  { name: '海龟', types: haigui, desc: '升级后可撞飞一切, 速度会越来越慢, 遇水会加速, 速度慢,' },
  { name: '九头蛇', types: jiutoushe, desc: '可撞飞中等体型动物, 速度中等, 狂暴后曲线加速前进' }
]
module.exports = data
