const growingPlants = []

export const addPlant = (seedObj) => {
    growingPlants.push(seedObj)
    return growingPlants
}

export const usePlant = () => {
    const copyOfPlants = growingPlants.map((seedObj) => ({...seedObj}) )
    return copyOfPlants
}