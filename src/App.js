import React from "react"
import "./App.scss"
import ContentContinents from "./components/contentContinents/ContentContinents"
import ContentsLanguages from "./components/contentsLanguages/ContentsLanguages"
import { search } from "./helpers/search"
import { useCountries } from "./countries/hooks/useCountries"
import { useForm } from "./hooks/useForm"

const App = () => {
  /* Custom Hook creado para dejar la logica encapsulada en otro lado
    y traer los datos y metodos que voy a pasarle a los componentes*/
  const {
    countries,
    languages,
    continents,
    loading,
    error,
    action,
    handleBtn,
  } = useCountries()
  /* Custom hook que hace la logica para atrapar el event y el value
  de un input y devuelve un objeto con esos valores*/
  const { type, value, onChange } = useForm({ type: "text" })

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error: {error.message}</p>
  return (
    <div>
      <input type={type} placeholder="Search..." onChange={onChange} />
      <div>
        <button className={action && "active"} onClick={handleBtn}>
          CONTINENTS
        </button>
        <button className={!action && "active"} onClick={handleBtn}>
          LANGUAGES
        </button>
      </div>
      {/* Tome la decicion de hacer 2 componentes para el encapsulamiento de 
    continentes como de penguajes. No cree un solo componente que segun reciba
    el parametro ejecutes el mapeo, ya que los mapeos son diferentes en algunas
    propiedades*/}
      {action ? (
        <ContentContinents
          countries={countries}
          continents={continents}
          search={search}
          query={value}
        />
      ) : (
        <ContentsLanguages
          countries={countries}
          languages={languages}
          search={search}
          query={value}
        />
      )}
    </div>
  )
}
export default App
