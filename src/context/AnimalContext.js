import { createContext, useContext, useState } from "react"
import { animals as initialAnimals} from "../data/dummyAnimals"

const AnimalContext = createContext()

const AnimalProvider = ({children}) => {

    const [ animals, setAnimals ] = useState(initialAnimals);

    const addNewAnimal = animal => {
        
        animal.id = Math.floor(Math.random() * 99999)
        setAnimals(prevAnimals => [...prevAnimals, animal])

    }
    return (
        <AnimalContext.Provider value={{animals, addNewAnimal}}>
            {children}
        </AnimalContext.Provider>
    )
}

export const useAnimal = () => {
    return useContext(AnimalContext);
}

export default AnimalProvider;