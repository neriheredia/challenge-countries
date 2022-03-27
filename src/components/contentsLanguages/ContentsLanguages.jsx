import React from "react"
import CardCountry from "../cardCountry/CardCountry"
import "./contentsLanguages.scss"

const ContentsLanguages = ({ countries, languages, search, query }) => {
  return (
    <div>
      {query
        ? search(countries, query)?.map((country) =>
            languages.map(
              (n) =>
                country.languages.some(
                  (language) => language.code === n.code
                ) && (
                  <div className="containerLanguages" key={n.code}>
                    <h2>{n.name}</h2>
                    <div className="continentLanguages">
                      <CardCountry key={country.code} name={country.name} />
                    </div>
                  </div>
                )
            )
          )
        : languages.map((language) => (
            <div className="containerLanguages" key={language.code}>
              <h2>{language.name}</h2>
              <div className="continentLanguages">
                {countries.map(
                  (n) =>
                    n.languages.some((key) => key.code === language.code) && (
                      <CardCountry key={n.code} name={n.name} />
                    )
                )}
              </div>
            </div>
          ))}
    </div>
  )
}

export default ContentsLanguages
