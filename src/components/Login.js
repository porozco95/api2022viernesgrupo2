import React, {useEffect, useState} from "react";
import LoginForm from '../components/LoginForm'

export default function Login() {
    const adminUser = {
        email: "admin@admin.com",
        password: "1234"
    }
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login_1 = details => {
        console.log(details)
        if (details.email == adminUser.email && details.password == adminUser.password)
            console.log("Logged In");
        else 
            console.log("Details Dont Match");
    }

    const Logout = details => {
        console.log(details)
    }

  return (
    <div className='Login'>
        {(user.email != "") ? (
            <div className="welcome">
                <h2>Bienvenido, <span>{user.name}</span></h2>
                <button>LogOut</button>
            </div>
        ) : (
            <LoginForm Login={Login_1} error={error}/>
        )}
    </div>
  )
}
