import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css";


const Header = () => {

    const activeStyle = {
        color: "white",
        padding: '5px ',
        backgroundColor: "#ff3783",
        borderRadius: '3px'
    };
    const { user, logOut } = useAuth();

    return (
        <div className = 'mb-5 pb-2'>
            <div className="container-fluid navbar-color  ">
                <nav className="navbar navbar-expand-lg navbar-dark navbar-color container " >
                    <div className="container-fluid py-1">
                        <img className="bg-white border rounded" src="./sitelogo1.png" alt="..." width="150px" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >


                                <li className="nav-item ">
                                    <NavLink activeStyle={activeStyle} className=" nav-items-style nav-items-style " to="/home"> Home</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className=" nav-items-style" to="/allProducts"> Explore</NavLink>
                                </li>

                                
                                

                                {user?.email && <li className="nav-item ">
                                    <NavLink activeStyle={activeStyle} className="admin-btn " to="/dashboard"> Admin Control</NavLink>
                                </li>}

                                {user?.email && <li className="nav-item ">
                                    <NavLink activeStyle={activeStyle} className="admin-btn " to="/userdashboard"> User Dashboard</NavLink>
                                </li>}



                                {user?.email && <li className="">
                                    <span className="fs-6 fw-bold" >  <img className='profile-photo-style' src={user.photoURL} alt="" /></span>
                                </li>}


                                {user?.displayName && <li className="">
                                    <span className="fs-6 fw-bold" style={{ color: "#ff3f62de" }}> <i className="fas fa-user"></i> {user?.displayName}</span>
                                </li>}
                               
                                <li className="nav-item">
                                    {
                                        user?.email ?
                                            <button className="log-out-btn " onClick={logOut}>Log out</button> : <NavLink activeStyle={activeStyle} className=" nav-items-style" to="/login">Log In </NavLink>
                                    }
                                </li>




                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
