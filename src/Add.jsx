import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
    const [inputData, setInputData] = useState({title:'', platform:'', developer:'', publisher:''});
    const navigat = useNavigate();
    const [editingGameId, setEditingGameId] = useState(null);
    
    function handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:5156/api/VideoGame', inputData)
        .then(res => {
            alert("Data Added Successfully")
            navigat('/');
        }).catch(err => console.log(err));
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">title:</label>
                        <input type="text" name='title' className='form-control' onChange={e=>setInputData({...inputData, title: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="platform">platform:</label>
                        <input type="text" name='platform' className='form-control' onChange={e=>setInputData({...inputData, platform: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="developer">developer:</label>
                        <input type="text" name='developer' className='form-control' onChange={e=>setInputData({...inputData, developer: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="publisher">publisher:</label>
                        <input type="text" name='publisher' className='form-control' onChange={e=>setInputData({...inputData, publisher: e.target.value})}/>
                    </div>
                    <br />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Add;