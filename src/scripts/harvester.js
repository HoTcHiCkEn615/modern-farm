export const harvestPlants = (plantsArray) => {
    const harvestedPlants = []
    for (let plant of plantsArray) {
        if (plant.type === "Corn"){
            let cornOutput = plant.output / 2
            for (let i = 0 ; i < cornOutput ; i++) {
                harvestedPlants.push(plant)
        }         
    } else {
        for (let i = 0 ; i < plant.output ; i++) {
            harvestedPlants.push(plant)
        }
        
    }
}
return harvestedPlants
}
