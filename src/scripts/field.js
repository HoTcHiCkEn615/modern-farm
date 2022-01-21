const growingPlants = []

export const addPlant = (seedObj) => {
    growingPlants.push(seedObj)
    return growingPlants
}

export const usePlants = () => {
    const copyOfPlants = growingPlants.map((seedObj) => ({...seedObj}) )
    return copyOfPlants
}