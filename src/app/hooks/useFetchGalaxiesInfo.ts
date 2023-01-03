import { useEffect, useState } from "react"
import { getGalaxiesJSON } from "../api"

export const COMPLETED_STATUS = "COMPLETED"
export const LOADING_STATUS = "LOADING"
export const ERROR_STATUS = "ERROR"

export const useFetchGalaxiesInfo = () => {

  const [requestStatus, setRequestStatus] = useState(LOADING_STATUS)
  const [galaxies, setGalaxies] = useState([])

  useEffect(() => {
    setRequestStatus(LOADING_STATUS)
    getGalaxiesJSON()
      .then(data => {
        setGalaxies(data)
        setRequestStatus(COMPLETED_STATUS)
      })
      .catch(err => {
        setRequestStatus(ERROR_STATUS)
        console.error("Error in request galaxies", err)
      })
  }, [])

  return { galaxies, requestStatus }
}