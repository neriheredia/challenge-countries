import React from "react"
import "./home.scss"
import { useCountries } from "../../countries/hooks/useCountries"
import { useForm } from "../../hooks/useForm"
import { search } from "../../helpers/search"
import ContentContinents from "../../components/contentContinents/ContentContinents"
import ContentsLanguages from "../../components/contentsLanguages/ContentsLanguages"
import Topbar from "../../components/topbar/Topbar"

const Home = () => {
  /* Custom Hook creado para dejar la lógica encapsulada en otro lado
    y traer los datos y métodos que voy a pasarle a los componentes*/
  const {
    countries,
    languages,
    continents,
    loading,
    error,
    action,
    handleBtn,
  } = useCountries()
  /* Custom hook que hace la lógica para atrapar el evento y el valué
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
      {/* Tome la decisión de hacer 2 componentes para el encapsulamiento de 
        Continentes como de lenguajes. No cree un solo componente que según reciba
        el parámetro ejecutes el mapeo, ya que los mapeos son diferentes en algunas
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
