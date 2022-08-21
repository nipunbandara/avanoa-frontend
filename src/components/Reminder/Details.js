import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useNavigate  } from 'react-router-dom';
import "./Edit.css";
import Appbar from '../Appbar/Appbar';
import Sidebar from '../Sidebar/Sidebar';




const Details = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);

    const navigate = useNavigate();


    const getdata = async () => {

        const res = await fetch(`https://crudappreactjs.herokuapp.com/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`https://crudappreactjs.herokuapp.com/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            navigate('/Reminder');

        }

    }

    return (

        
        <div>
            <Appbar/>
            <Sidebar/>

        <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>Reminder</h1>

            <Card sx={{ maxWidth: 600 }}>
               
                    <div className="add_btn">
                        <NavLink to={`/edit/${getuserdata._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        <button className="btn btn-danger" onClick={() => deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_viewcol-lg-6col-md-6col-12">
                           
                            <h3 className="mt-3">Title: <span >{getuserdata.title}</span></h3>
                            <h3 className="mt-3">Description: <span >{getuserdata.description}</span></h3>
                            
                        </div>
                        <div className="right_viewcol-lg-6col-md-6col-12">
                            <h3 className="mt-3">Date: <span>{getuserdata.date}</span></h3>
                            <h3 className="mt-3">Time: <span>{getuserdata.time}</span></h3>
                        </div>
                    </div>

            </Card>
        </div>
        </div>
    )
}

export default Details