import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Edit() {
    const {id} = useParams();
    const [data, setData] = useState({})
    useEffect(()=> {
        axios.get('http://localhost:5156/api/VideoGame/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    
    const navigat = useNavigate();
    function handleSubmit(event) {
        event.preventDefault()
        axios.put('http://localhost:5156/api/VideoGame/'+id, data)
        .then(res => {
            alert("Data Update Successfully")
            navigat('/');
        }).catch(err => console.log(err));
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="id">id:</label>
                        <input type="text" name='id' className='form-control'  value={data.id} disabled/>
                    </div>
                    <div>
                        <label htmlFor="title">title:</label>
                        <input type="text" name='title' className='form-control'  value={data.title} onChange={e=>setData({...data, title: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="platform">platform:</label>
                        <input type="text" name='platform' className='form-control'  value={data.platform} onChange={e=>setData({...data, platform: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="developer">developer:</label>
                        <input type="text" name='developer' className='form-control'  value={data.developer} onChange={e=>setData({...data, developer: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="publisher">publisher:</label>
                        <input type="text" name='publisher' className='form-control'  value={data.publisher} onChange={e=>setData({...data, publisher: e.target.value})}/>
                    </div>
                    <br />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit;