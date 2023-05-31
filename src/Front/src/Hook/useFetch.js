import { useEffect, useState } from 'react'

export const useFetch = (URL) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [URL])
  return {
    data,
    loading
  }
}
