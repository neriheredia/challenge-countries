import { gql } from "apollo-boost"

// Query para la petición del grafo de las ciudades
export const GET_CONTINENTS_AND_COUNTRIES = gql`
  query fetchingContinents {
    continents {
      code
      name
    }
    languages {
      code
      name
    }
    countries {
      code
      name
      native
      phone
      capital
      currency
      emojiU
      states {
        name
      }
      continent {
        code
        name
      }
      languages {
        code
        name
      }
    }
  }
`
