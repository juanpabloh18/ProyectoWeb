import React, { useState,useEffect } from "react";
import { auth } from "../bd/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    

    const SignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then ((useCredential)=>{
            console.log(useCredential)
        }).catch((error)=>{
            console.log(error);
        })


    }
    

    return (
        <>
           <div>
            <form onSubmit={SignIn}>
                <h1>Login</h1>
                <input type="email" placeholder="Correo" value={email} onChange={(e) =>setEmail(e.target.value)}></input>
                <input type="password" placeholder="contraseña" value={password} onChange={(e) => setPassword(e.target.value)}></input>
              <button type="submit">Login</button>
            </form>
           </div>
        </>
    );
}

export default Login;

