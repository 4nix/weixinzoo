const mayi = require('mayi.js')
const mazha = require('mazha.js')
const chaochong = require('chaochong.js')
const qingting = require('qingting.js')
const zhizhu = require('zhizhu.js')
const jiakechong = require('jiakechong.js')
const wugong = require('wugong')
const hudie = require('hudie')

const data = [
  { name: '蚂蚁', types: mayi, desc: '可碰撞其它蚂蚁, 狂暴后甩出主角(务必升级多骑2秒)' },
  { name: '蚂蚱', types: mazha, desc: '跳跃前进, 非常不容易控制, 升级转弯也不容易, 狂暴后加速跳跃' },
  { name: '潮虫', types: chaochong, desc: '缓慢前进, 狂暴后卷成一个球飞速前进, 变得不易转弯, 升级后可撞碎障碍物并甩出主角' },
  { name: '蜻蜓', types: qingting, desc: '飞行昆虫, 狂暴后上下飞行(作为现实中的空中霸主, 连鸟都吃的蜻蜓在这连蚂蚁都啃不动了呢)' },
  { name: '蜘蛛', types: zhizhu, desc: '碰到蛛网或者吃糖果一定数量, 会突然从后面不顾一切的冲向你并吃掉你, 但是你骑上它就不能撞石头了耶(难不成我太沉了), 狂暴后会吃掉主角' },
  { name: '甲壳虫', types: jiakechong, desc: '速度快, 升级后可撞碎障碍物和中型动物, 撞不过其它甲壳虫, 切记, 狂暴后甩出主角' },
  { name: '蜈蚣', types: wugong, desc: '速度快, 升级后可吃掉一切, 狂暴后会吃掉主角' },
  { name: '蝴蝶', types: hudie, desc: '开始是一个绿色毛毛虫, 随后短时间狂暴变成蝴蝶飞起(为设计师点赞, 创意棒棒哒), 飞行一段距离后降落到地面' }
]
module.exports = data
