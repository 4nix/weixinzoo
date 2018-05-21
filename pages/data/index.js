const xishucaoyuan = require("../data/xishucaoyuan/index.js")
const conglin = require("../data/conglin/index.js")
const shanmai = require("../data/shanmai/index.js")
const aozhou = require("../data/aozhou/index.js")
const jidi = require("../data/jidi/index.js")
const zhuluoji = require("../data/zhuluoji/index.js")
const aolinpisi = require("../data/aolinpisi/index.js")
const huayuan = require("../data/huayuan/index.js")

module.exports = [
  { name: '稀树草原', classname: 'xishucaoyuan', races: xishucaoyuan },
  { name: '丛林', classname: 'conglin', races: conglin },
  { name: '山脉', classname: 'shanmai', races: shanmai },
  { name: '澳洲', classname: 'aozhou', races: aozhou },
  { name: '极地', classname: 'jidi', races: jidi },
  { name: '侏罗纪', classname: 'zhuluoji', races: zhuluoji },
  { name: '奥林匹斯', classname: 'aolinpisi', races: aolinpisi },
  { name: '花园', classname: 'huayuan', races: huayuan }
]
