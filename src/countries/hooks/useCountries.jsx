// Primero realice la logica en app y luego hice una refactorizacion
// y cree este custom hook para que sea mas facil de usar y deje el
// codigo mas limpio.
import { useQuery } from "@apollo/react-hooks"
import { useEffect, useState } from "react"
import { GET_CONTINENTS_AND_COUNTRIES } from "../countries-querys"

// Declaracion de la custom hook
export const useCountries = () => {
  // Uso el hook de Apollo para traer todos los datos como tambien el loading y el error
  const { data, loading, error } = useQuery(GET_CONTINENTS_AND_COUNTRIES)
  const [countries, setCountries] = useState([])
  const [languages, setLanguages] = useState([])
  const [continents, setContinents] = useState([])
  // Estado para el control de los botones de continentes y lenguajes
  const [action, setAction] = useState(true)

  // Una vez que exista data, guardo los datos en los estados
  useEffect(() => {
    if (data) {
      setCountries(data.countries)
      setLanguages(data.languages)
      setContinents(data.continents)
    }
  }, [data])

  // Funcion que se ejecuta al hacer click en los botones
  const handleBtn = () => {
    setAction(!action)
  }

  // Devuelvo un objeto con los metodos y los estados que puede usar los componentes
  return {
    countries,
    languages,
    continents,
    loading,
    error,
    action,
    handleBtn,
  }
}
