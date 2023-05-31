import {useFetch} from '../Js/Exp_Hook'
import '../Styles/Productos.css'
export const Productos = () => {
  const {data, loading} = useFetch('http://localhost:3000/items')
  console.log(data)
  return (
      <div className='Container-Main-Card'>
          {loading ? 'Loading...' : data.map((item) => {
            return (
              <ol key={item._id} className='Container-1-Card'>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p> $ {item.price}</p>
              </ol>
            )
          }
          )}
      </div>
  )
}
