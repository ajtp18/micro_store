import {UseFormik} from "../Js/Exp_Hook";

export const AddProduct = () => {

  const{handleChange, handleSubmit} = UseFormik ()
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder="Name" type='text' onChange={handleChange}/>
        <input name='description' placeholder="Description" type='text' onChange={handleChange}/>
        <input name='price' placeholder="Price" type='text' onChange={handleChange}/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
