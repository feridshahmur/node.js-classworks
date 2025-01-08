import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);

  const BASE_URL = "http://localhost:8080";
  const getProducts = async () => {
    try {
      const res = await axios(`${BASE_URL}/products`);
      console.log(res.data);

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handledelete = async (pid) => {
    try {
      const res = await axios.delete(`${BASE_URL}/products/${pid}`)

     

      if (res.status === 200) {
        
        setProducts([...products.filter((p) => p.id !== pid)])
      } else {
        throw new Error("failed to delete")
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ul>
        {products.length >0 &&
          products.map((p) => {
            return <li key={p.id}>{p.name} <button onClick={()=>{handledelete(p.id)}}>Delete</button></li>;
          })}
      </ul>
      <ol>
        {products.length >0 &&
          products.map((p) => {
            return <li key={p.id}>{p.description} <button onClick={()=>{handledelete(p.id)}}>Delete</button></li>;
          })}
      </ol>
    </>
  );
}

export default App;
