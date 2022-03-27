import React from "react"
import "./cardCountry.scss"

// Componente CardCountry que recibe parametros y muestra en la card
const CardCountry = ({ name }) => {
  return (
    <div className="cardContainer">
      <div className="topContainerCard">
        <span>emoji</span>
        <h5>{name}</h5>
      </div>
      <div className="bottonContainerCard">
        <div className="topBottonCard">
          <p>Capital</p>
          <p>Phone</p>
        </div>
        <div className="bottonBottonCard">
          <p>Divisa</p>
          <select>Estados</select>
        </div>
      </div>
    </div>
  )
}

export default CardCountry
