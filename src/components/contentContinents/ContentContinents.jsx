import React from "react"
import CardCountry from "../cardCountry/CardCountry"
import "./contentsContinents.scss"

const ContentContinents = ({ continents, countries, search, query }) => {
  console.log(countries)
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
                      <CardCountry
                        key={country.code}
                        capital={country.capital}
                        emojiU={country.emojiU}
                        phone={country.phone}
                        name={country.name}
                        currency={country.currency}
                        states={country.states}
                      />
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
                      <CardCountry
                        key={n.code}
                        capital={n.capital}
                        emojiU={n.emojiU}
                        phone={n.phone}
                        name={n.name}
                        currency={n.currency}
                        states={n.states}
                      />
                    )
                )}
              </div>
            </div>
          ))}
    </>
  )
}

export default ContentContinents
