import { useState } from "react"

// Hook que recibe un type y devuelve un obejto con el type, el value y el onChage
export const useForm = ({ type }) => {
  const [value, setValue] = useState("")

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}
