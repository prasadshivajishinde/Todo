import React from "react";
import './SignInSignUp.css';
import App from "../App";

const Home=()=> {
    const logout = () => {
        localStorage.removeItem("signUp");
        window.location.reload();
    };

    const deleteAccount = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <>
       
        <div className="container text-center mt-5">
            <h1>Home Page</h1>
            <p>Welcome {localStorage.getItem('name')}</p>
            <div className="d-flex justify-content-start">
                <button onClick={logout} className="btn btn-primary m-2">LogOut</button>
                <button onClick={deleteAccount} className="btn btn-danger m-2">Sign in with different user</button>
            </div>

        

        </div>

        <div className="container-fluid mt-5 w-100 ">
            

        </div>

        <App/>

       

        
        </>


        
    );
}

export default Home;
