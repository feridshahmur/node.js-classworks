import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const BASE_URL = "http://localhost:8080/users";
  const [users, setUsers] = useState([]);

  const getAllData = async () => {
    try {
      const res = await axios(`${BASE_URL}`);
      console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index}>
              <td>{user.title}</td>
              <td>{user.description}</td>
              <td>
                <img src={user.imageUrl} alt="img" style={{ width: "100px" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
