const area = require("../data/index.js")
const SKILLS = require("../data/skill.js")

Page({
  data: {
    detail: [],
    returntype: 0
  },

  onLoad: function (option) {
    let originList = area[option.race]['races'][option.type]
    let returntype = option.return ? option.type : 0
    let formatList = []
    let app = getApp()

    formatList = originList.types.map((item, index) => {
      item.formatSkill = this.formatSkillGroup(item.skill)

      return item
    })

    this.setData({
      detail: area[option.race]['races'][option.type],
      returntype: returntype
    })
    // this.list = area[option.race]['races'][option.type]
    // console.log(this.list)
  },

  formatSkill: function (key, val) {
    let str = SKILLS[key]

    return str.replace('x', ' ' + val)
  },

  formatSkillGroup: function (skills) {
    let keys = Object.keys(skills)
    let formatGroup = []
    keys.forEach(k => {
      formatGroup.push(this.formatSkill(k, skills[k]))
    })

    return formatGroup
  }
})
