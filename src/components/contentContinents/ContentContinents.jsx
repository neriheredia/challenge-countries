import React from "react"
import CardCountry from "../cardCountry/CardCountry"
import "./contentsContinents.scss"

const ContentContinents = ({ continents, countries, search, query }) => {
  return (
    <>
      {query
        ? search(countries, query)?.map((country) =>
            continents.map(
              (n) =>
                country.continent.code === n.code && (
                  <div className="containerContinents" key={n.code}>
                    <h2>{n.name}</h2>
                    <div className="continentContainer">
                      <CardCountry key={country.code} name={country.name} />
                    </div>
                  </div>
                )
            )
          )
        : continents.map((continent) => (
            <div className="containerContinents" key={continent.code}>
              <h2>{continent.name}</h2>
              <div className="continentContainer">
                {countries.map(
                  (n) =>
                    n.continent.code === continent.code && (
                      <CardCountry key={n.code} name={n.name} />
                    )
                )}
              </div>
            </div>
          ))}
    </>
  )
}

export default ContentContinents
