import { createPlan } from "./plan.js"
const yearlyPlan = createPlan()
//console.log(yearlyPlan)

import { createCorn } from "./seeds/corn.js"
const cornPlan = createCorn()
//console.log(cornPlan)

import { createAsparagus } from "./seeds/asparagus.js"
const asparagusPlan = createAsparagus()
//console.log(asparagusPlan)

import { plantSeeds } from "./tractor.js"
const plantedSeeds = plantSeeds(yearlyPlan)
//console.log(plantedSeeds)


import { harvestPlants } from "./harvester.js"
const harvestedPlants = harvestPlants(plantedSeeds)
console.log(harvestedPlants)