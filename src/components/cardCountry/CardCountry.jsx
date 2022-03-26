import React from "react"
import "./cardCountry.scss"

// Componente CardCountry que recibe parametros y muestra en la card
const CardCountry = ({ name }) => {
  return <div className="cardContainer">{name}</div>
}

export default CardCountry
