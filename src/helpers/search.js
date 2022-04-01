//Function search reutilizable

//Realice esta función para reutilizarla en donde sea necesario
//recibe el array a filtrar y la query a buscar
export const search = (data, query) => {
  return data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )
}
