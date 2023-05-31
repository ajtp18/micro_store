import {useFormik} from "formik";

export const UseFormik = () => {
  const submitFrom = (values) => {
    fetch('http://localhost:3000/item/add', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    }
  const {handleSubmit, handleChange} = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      stock: 'true',

    },
    onSubmit: submitFrom,
  });
  return {
    handleSubmit,
    handleChange,
  }
}
