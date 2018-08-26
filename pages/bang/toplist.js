const SKILLS = require("../data/skill.js")
const area = require("../data/index.js")

Page({
  data: {
    detail: [],
  },

  onLoad: function (option) {
    let getSkillId = option.id
    let maxSkill = {}
    let formatSkill = {}
    let orderArr = []
    let formatOrder = []

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
            let skillVal = animal.skill[skillId]
            // 不记录被动技能

            // 如果技能不等，跳过
            if (skillId != getSkillId) {
              continue
            }

            // 如果没有此技能值数据, 初始化并添加
            if (!maxSkill[skillVal]) {
              maxSkill[skillVal] = []
              maxSkill[skillVal].push(animalInfo)
              continue
            }

            // 如果技能值相等
            if (maxSkill[skillVal][0]['skill'][skillId] == animal.skill[skillId]) {
              maxSkill[skillVal].push(animalInfo)
              continue
            }

            // 如果技能值比之大
            // if (maxSkill[skillId][0]['skill'][skillId] < animal.skill[skillId]) {
            //   maxSkill[skillId].length = 0
            //   maxSkill[skillId].push(animalInfo)
            //   continue
            // }
          }

        }
      }
    }

    // for (let skillId in SKILLS) {
    //   if (maxSkill[skillId]) {
    //     let desc = SKILLS[getSkillId].replace('x', maxSkill[skillId][0]['skill'][skillId])
    //     formatSkill[skillId] = desc
    //   }
    // }

    for (let skillVal in maxSkill) {
      let desc = SKILLS[getSkillId].replace('x', skillVal)
      formatSkill[skillVal] = desc
      orderArr.push(skillVal)
    }

    orderArr.sort((x, y) => x - y < 0 ? 1 : -1)

    this.setData({
      orderArr: orderArr,
      skillGroup: formatSkill,
      maxGroup: maxSkill
    })

  }
})