import { gql } from "apollo-boost"

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
