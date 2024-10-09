import React, { useEffect, useState } from "react";
import '../css/Dashboard.css'
import axios from 'axios'

function Dashboard(){
    const [books , setBooks] = useState(0); 
    useEffect(() => {
        axios.get('http://localhost:3001/dashboard')
        .then(res => {setBooks(res.data)})
    },[])
    return(
        <div className="dashboard">
            <div className="dashboard-box">
                <h2>Total Books</h2><br />
                <h2>{books}</h2>
            </div>
        </div>
    )
}

export default Dashboard;