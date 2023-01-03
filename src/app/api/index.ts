export const getGalaxiesJSON = async () => {
  try {
    const response = await fetch("https://images-api.nasa.gov/search?q=galaxies")
    const data = await response.json()
    return data?.collection?.items;
  } catch (error) {
    throw new Error(error)
  }
}