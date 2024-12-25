import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function App() {
  const [columns, setColumns] = useState([])
  const [records, setRecords] = useState([])
  const navigat = useNavigate();

  useEffect(()=> {
      axios.get('http://localhost:5156/api/VideoGame')
      .then(res => {
          setColumns(Object.keys(res.data[0]))
          setRecords(res.data)
      })
  }, [])

  return (
    
    <div className='container mt-5'>
      <div className="text-end"><Link to="/create" className="btn btn-primary">Add</Link></div>
      <table className='table'>
          <tbody>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
              <th>Action</th>
            </tr>
          </tbody>
          <tbody>
            {
              records.map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.title}</td>
                  <td>{d.platform}</td>
                  <td>{d.developer}</td>
                  <td>{d.publisher}</td>
                  <td><Link to={`/edit/${d.id}`} className="btn btn-sm btn-success">Edit</Link></td>
                  <td><button onClick={e=> handleSubmait(d.id)} className="btn btn-sm btn-danger">Delete</button></td>
                </tr>
              ))
            }
          </tbody>
      </table>
    </div>
  )
  function handleSubmait(id){
    const conf = window.confirm("Do you want to delete")
    if(conf) {
      axios.delete('http://localhost:5156/api/VideoGame/'+id)
      .then(res => {
        alert("record has deleted");
        navigat('/');
    }).catch(err => console.log(err));
    }
  }
}

export default App
