const SKILLS = require("../data/skill.js")
const area = require("../data/index.js")

Page({
  data: {
    detail: [],
  },

  onLoad: function () {
    let maxSkill = {}
    let formatSkill = {}

    for (let landId in area) {
      let land = area[landId]
      for (let raceId in land.races) {
        let race = land.races[raceId]
        for (let id in race.types) {
          let animal = race.types[id]
        
          let animalInfo = {
            land: landId,
            race: raceId,
            name: animal.name,
            id: id,
            skill: animal.skill
          }
          // console.log(animal.skill)
          for (let skillId in animal.skill) {
            // 不记录被动技能


            // 如果没有此数据, 初始化并添加
            if (!maxSkill[skillId]) {
              maxSkill[skillId] = []
              maxSkill[skillId].push(animalInfo)
              continue
            }

            // 如果技能值相等
            if (maxSkill[skillId][0]['skill'][skillId] == animal.skill[skillId]) {
              maxSkill[skillId].push(animalInfo)
              continue
            }

            // 如果技能值比之大
            if (maxSkill[skillId][0]['skill'][skillId] < animal.skill[skillId]) {
              maxSkill[skillId].length = 0
              maxSkill[skillId].push(animalInfo)
              continue
            }
          }
          
        }
      }
    }

    for (let skillId in SKILLS) {
      if (maxSkill[skillId]) {
        let desc = SKILLS[skillId].replace('x', maxSkill[skillId][0]['skill'][skillId])
        formatSkill[skillId] = desc
      }
    }
    
    this.setData({
      skillGroup: formatSkill,
      maxGroup: maxSkill
    })

  }
})