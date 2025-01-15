import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { BASE_URL } from '../../Products'; // Make sure the BASE_URL is correct
import axios from 'axios';
import { FaTrashCan } from "react-icons/fa6";


const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  imageUrl: Yup.string().url('Invalid URL').required('Required'),
  price: Yup.number().required('Required'),
});

const Add = () => {
  
  const [products, setProducts] = useState([]);

  const getAllData = async () => {
    try {
      const res = await axios.get(BASE_URL);  // Make sure to use the correct method (GET)
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDelete = async(id)=>{
    try {
      const res = await axios.delete(`${BASE_URL}/${id}`)
      console.log(res.data);
      if (res.status === 200) {
        setProducts([...products].filter((q) => q._id !== id))
    }
      
    } catch (error) {
      console.log(error);
      
    }

  }

  useEffect(() => {
    getAllData(); // Load products on initial render
  }, []);

  return (
    <div>
      <div className="container">
        <h1 style={{ textAlign: "center", margin: '2rem' }}>Add Product</h1>
        <Formik
          initialValues={{
            title: '',
            description: '',
            price: '',
            imageUrl: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const response = await axios.post(`${BASE_URL}`, values);
              resetForm();
              alert("Product added successfully!");
              setProducts((prevProducts) => [...prevProducts, response.data]); // Assuming response.data contains the newly added product
            } catch (error) {
              console.log(error.message);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <div>
                <Field name="title" placeholder="Title" style={{ padding: "1rem", width: "300px" }} />
                {errors.title && touched.title ? <div>{errors.title}</div> : null}
              </div>
              <div>
                <Field name="description" placeholder="Description" style={{ padding: "1rem", width: "300px" }} />
                {errors.description && touched.description ? <div>{errors.description}</div> : null}
              </div>
              <div>
                <Field name="imageUrl" type="url" placeholder="Image URL" style={{ padding: "1rem", width: "300px" }} />
                {errors.imageUrl && touched.imageUrl ? <div>{errors.imageUrl}</div> : null}
              </div>
              <div>
                <Field name="price" type="number" placeholder="Price" style={{ padding: "1rem", width: "300px" }} />
                {errors.price && touched.price ? <div>{errors.price}</div> : null}
              </div>
              <button type="submit" style={{ padding: "1rem", border: "none", backgroundColor: "blue", color: "white" }}>
                Submit
              </button>
            </Form>
          )}
        </Formik>

        <table className="table" style={{ marginTop: '2rem' }}>
          <thead>
            <tr>
              
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {products.map((product) => (
              <tr key={product._id }> 
                
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td><img src={product.imageUrl} alt={product.title} style={{ width: '50px', height: '50px' }} /></td>
                <td style={{color:"red"}}><FaTrashCan onClick={()=>{window.confirm("are u sure?") && handleDelete(product._id)}} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Add;
            