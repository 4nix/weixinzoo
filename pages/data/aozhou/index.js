const mianyang = require('mianyang.js')
const daishu = require('daishu.js')
const daixiong = require('daixiong.js')
const ermiao = require('ermiao.js')
const luotuo = require('luotuo.js')
const hufu = require('hufu.js')
const kaola = require('kaola.js')

const data = [
  { name: '绵羊', types: mianyang, desc: '可与其他绵羊碰撞, 狂暴后疯狂跳跃' },
  { name: '袋鼠', types: daishu, desc: '跳跃前进, 狂暴后大幅度增加跳跃幅度' },
  { name: '袋熊', types: daixiong, desc: '骑上后短时间内狂暴, 之后钻入地下速度加快, 如果撞到动物或障碍物会大幅度飞出去' },
  { name: '鸸鹋', types: ermiao, desc: '狂暴后加速奔跑, 升级后碰撞障碍物会甩出主角' },
  { name: '骆驼', types: luotuo, desc: '换乘或狂暴时大幅度甩出主角, 过水洼可延长骑乘时间(骗人的- -, 该扔你还是扔你)' },
  { name: '狐蝠', types: hufu, desc: '飞行动物, 狂暴后上下飞行' },
  { name: '考拉', types: kaola, desc: '遇到障碍物会跳起, 落下时如果有动物会吃掉, 奔跑速度快(这TA么是考拉?这么凶残的吗), 狂暴后会吃掉主角' }
]
module.exports = data
