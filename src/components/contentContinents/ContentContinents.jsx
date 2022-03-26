import React from "react"
import CardCountry from "../cardCountry/CardCountry"

const ContentContinents = ({ continents, countries, search, query }) => {
  return (
    <div>
      {query
        ? search(countries, query)?.map((country) =>
            continents.map(
              (n) =>
                country.continent.code === n.code && (
                  <div key={n.code}>
                    <h2>{n.name}</h2>
                    <CardCountry key={country.code} name={country.name} />
                  </div>
                )
            )
          )
        : continents.map((continent) => (
            <div key={continent.code}>
              <h2>{continent.name}</h2>
              {countries.map(
                (n) =>
                  n.continent.code === continent.code && (
                    <CardCountry key={n.code} name={n.name} />
                  )
              )}
            </div>
          ))}
    </div>
  )
}

export default ContentContinents
