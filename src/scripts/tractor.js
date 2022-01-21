import { addPlant, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (parentPlan) => {
    for (const childPlan of parentPlan) {
        for(const plan of childPlan) {
            if (plan === 'Asparagus') {
                const newAsparagus = createAsparagus()
                addPlant(newAsparagus)
            } else if (plan === 'Corn') {
                const newCorn = createCorn()
                addPlant(newCorn[0])
                addPlant(newCorn[1])
            } else if (plan === 'Potato') {
                const newPotato = createPotato()
                addPlant(newPotato)
            } else if (plan === 'Soybean') {
                const newSoybean = createSoybean()
                addPlant(newSoybean)
            } else if (plan === 'Sunflower') {
                const newSunflower = createSunflower()
                addPlant(newSunflower)
            } else if (plan === 'Wheat') {
                const newWheat = createWheat()
                addPlant(newWheat)
            }
        }
    }
    return usePlants()
}