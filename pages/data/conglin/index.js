const yezhu = require('yezhu.js')
const xingxing = require('xingxing.js')
const eyu = require('eyu.js')
const hema = require('hema.js')
const laohu = require('laohu.js')
const jvzuiniao = require('jvzuiniao.js')
const xiniu = require('xiniu.js')

module.exports = [
  { name: '野猪', types: yezhu, desc: '狂暴后快速跳跃' },
  { name: '大猩猩', types: xingxing, desc: '遇到障碍物会飞起, 落下时会砸碎地面的一切(猩猩神掌！)' },
  { name: '鳄鱼', types: eyu, desc: '陆地爬行缓慢, 水中爬行飞快, 升级可吃掉一切, 路过它会爬过来吃主角, 狂暴时吃掉主角' },
  { name: '河马', types: hema, desc: '陆地奔跑缓慢, 狂暴时间短, 在水中会加速前进, 升级可撞飞一切, 并延缓狂暴时间, 狂暴的时候一屁股坐死主角(- - 尼玛, 憋不憋屈)' },
  { name: '老虎', types: laohu, desc: '不能吃一切, 升级也不行, 只能吃小动物, 连同类都不能吃(跟狮子比差远了)' },
  { name: '巨嘴鸟', types: jvzuiniao, desc: '飞行动物, 狂暴后上下飞行' },
  { name: '犀牛', types: xiniu, desc: '可撞飞一切, 每次碰撞都会加快速度, 狂暴后甩出主角' }
]
