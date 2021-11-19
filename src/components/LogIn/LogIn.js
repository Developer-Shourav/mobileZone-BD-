


import React from 'react';
import { NavLink } from 'react-router-dom';
/* import { Link, useLocation, useHistory } from 'react-router-dom'; */
import useAuth from '../../hooks/useAuth';


const LogIn = () => {



    const { signInUsingGoogle } = useAuth();

    /*  const location = useLocation()
     const history = useHistory();
     const redirect_uri = location.state?.from || "/home";
   
     const handleGoogleLogIn = () => {
       
       signInUsingGoogle()
         .then(result => {
   
           history.push(redirect_uri);
         })
     } */



    return (
        /* ------- Login form container------------- */
        <div className="">
            <div className="d-flex justify-content-center align-items-center ">
                <div className="login-form card-style mt-5 px-3 py-3 rounded " >

                    <img src="/loginlogo.png" className='mx-auto d-block' alt="" />
                    <form  >
                        {/* ------------Log in input style -------------- */}
                        <input className=" ps-1 py-2 input-border w-100 my-1" type="email" placeholder="User email" />
                        
                        <br />
                        <input className=" ps-1 py-2 input-border mb-4 w-100 my-1" type="password" placeholder="Password" />
                        <br />
                        <input className="w-100 py-2 my-1 my-2 primery-btn rounded " type="submit" value="LOG IN" />
                        <span> New at MobileZone?  <NavLink to="/register">   go to register  </NavLink> </span>
                    </form>
                     
                    <div className="">------------------Or------------------</div>
                    <button
                        className="primery-btn rounded text-center w-100 px-4 py-2"
                        onClick={signInUsingGoogle}

                    > <i className="fab fa-google"></i> Log In With google</button>
                </div>
            </div>
            <div className="text-center mt-4"><p>[Note:Manual login is not available at this moment .Please log in with google.Thankes]</p> </div>
        </div>
    );
};

export default LogIn;