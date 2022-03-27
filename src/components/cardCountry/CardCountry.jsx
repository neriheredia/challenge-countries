import React from "react"
import "./cardCountry.scss"
import { emojiUnicode } from "../../helpers/emojiUnicode"

// Componente CardCountry que recibe parametros y muestra en la card
const CardCountry = ({ name, emojiU, capital, phone, currency, states }) => {
  return (
    <div className="cardContainer">
      <div className="topContainerCard">
        <span className="cardEmoji">{emojiU && emojiUnicode(emojiU)}</span>
        <h5 className="cardTitle">{name}</h5>
      </div>
      <div className="bottonContainerCard">
        <div className="topBottonCard">
          <p className="capitalCard">
            Capital: {capital ? capital : "Has no capital"}
          </p>
          <p className="phoneCard">Phone: +{phone}</p>
        </div>
        <div className="bottonBottonCard">
          <p>Divisa: {currency}</p>
          {states ? (
            <>
              <select className="selectCard">
                <option>States</option>
                {states.map((state) => (
                  <option key={state.name}>{state.name}</option>
                ))}
              </select>
            </>
          ) : (
            <select>
              <option>There are no states</option>
            </select>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardCountry
