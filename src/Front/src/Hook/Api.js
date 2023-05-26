import { useEffect, useState } from 'react'

export const Api = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch('http://localhost:8000/items')
      .then((respuesta) => respuesta.json())
      .then((data) => setData(data))
  })

  return {
    data
  }
}
