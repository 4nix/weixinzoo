const SKILLS = require("../data/skill.js")
const area = require("../data/index.js")

Page({
  data: {
    detail: [],
  },

  onLoad: function (option) {
    let skill = SKILLS[option.id] || SKILLS['1']
    let animals = {}
    let animalSkill = []  // 排序使用

    for (let landId in area) {
      let land = area[landId]
      for (let raceId in land.races) {
        let race = land.races[raceId]
        for (let typesId in race.types) {
          let types = race.types[typesId]
          for (let id in types) {
            if (types[id].skill[option.id]) {
              let skillVal = types[id].skill[option.id]
              animalSkill.includes(skillVal) || animalSkill.push(skillVal)
              animals[skillVal].push(
                {
                  id: id,
                  name: types[id].name,
                  land: landId,
                  race: raceId
                }
              )
            }
          }
        }
      }
    }
  }
})