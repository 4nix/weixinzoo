const fuzhilong = require('fuzhilong.js')
const xunmenglong = require('xunmenglong.js')
const jialong = require('jialong.js')
const yilong = require('yilong.js')
const sanjiaolong = require('sanjiaolong.js')
const bawanglong = require('bawanglong.js')
const leilong = require('leilong.js')
const jianlong = require('jianlong.js')
const yichilong = require('yichilong.js')

const data = [
  { name: '副栉龙', types: fuzhilong, desc: '奔跑速度慢, 狂暴后跳跃前进' },
  { name: '迅猛龙', types: xunmenglong, desc: '奔跑速度快, 狂暴后加速前进, 升级后撞击会甩出主角' },
  { name: '甲龙', types: jialong, desc: '可撞击一切一次, 不可撞雷龙！狂暴后会甩出主角' },
  { name: '翼龙', types: yilong, desc: '飞行动物, 狂暴后上下翻滚' },
  { name: '三角龙', types: sanjiaolong, desc: '奔跑速度慢, 骑上后会向前冲一段距离, 期间可撞击一下, 狂暴后跳跃前进' },
  { name: '霸王龙', types: bawanglong, desc: '毫无理由的从后面冲过来咬你, 5000米后自行体会前有陨石后有霸王龙的刺激, 狂暴后会吃掉主角' },
  { name: '雷龙', types: leilong, desc: '奔跑速度慢, 狂暴后会甩出主角。这里我一定要说一句, 这破玩意儿能不骑就不骑, 因为换乘的时候经常从后面冲出一只霸王龙把你俩都啃了' },
  { name: '剑龙', types: jianlong, desc: '奔跑速度快, 吃地上的草可延长狂暴时间, 狂暴时会甩出主角。这里我要说一句, 请躲它躲远点, 这货是大体型, 你以为你能擦身而过, 实际上你已经被它的剑气所伤 - - ' },
  { name: '异齿龙', types: yichilong, desc: '每隔一段时间会竖起背帆, 此刻会加速前进, 注意, 背帆在竖起时无法被骑乘!' }
]
module.exports = data
