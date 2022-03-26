//Function search reutilizable

export const search = (data, query) => {
  return data.filter((item) => item.name.toLowerCase().includes(query))
  // return data.filter((item) =>
  //   keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
  // )
}
