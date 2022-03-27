import React from "react"
import "./home.scss"
import { useCountries } from "../../countries/hooks/useCountries"
import { useForm } from "../../hooks/useForm"
import { search } from "../../helpers/search"
import ContentContinents from "../../components/contentContinents/ContentContinents"
import ContentsLanguages from "../../components/contentsLanguages/ContentsLanguages"
import Topbar from "../../components/topbar/Topbar"

const Home = () => {
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
    <div className="App">
      {/* <img className="image" src={Mundo} alt="" /> */}
      <Topbar
        type={type}
        onChange={onChange}
        action={action}
        handleBtn={handleBtn}
      />
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

export default Home
