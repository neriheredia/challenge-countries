import { useQuery } from "@apollo/react-hooks"
import { useEffect, useState } from "react"
import { GET_CONTINENTS_AND_COUNTRIES } from "../countries-querys"

export const useCountries = () => {
  const { data, loading, error } = useQuery(GET_CONTINENTS_AND_COUNTRIES)
  const [countries, setCountries] = useState([])
  const [languages, setLanguages] = useState([])
  const [continents, setContinents] = useState([])
  const [action, setAction] = useState(true)

  useEffect(() => {
    if (data) {
      setCountries(data.countries)
      setLanguages(data.languages)
      setContinents(data.continents)
    }
  }, [data])

  const handleBtn = () => {
    setAction(!action)
  }

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
