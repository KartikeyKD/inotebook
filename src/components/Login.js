import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

const [credential, setCredential] = useState({email:"", password:""})

let history = useNavigate();

    const handleSubmit=async (e)=>{
e.preventDefault()

const response = await fetch("http://localhost:5000/api/auth/login", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
         },
         body: JSON.stringify({email:credential.email,password: credential.password }), 
   });
const json = await response.json()
console.log(json)
if(json.success){
    //redirect and save token
    localStorage.setItem('token',json.authtoken);
    history("/");
}else{
    alert("invalid credentials")
}
    }

    const onChange=(e)=>{
        setCredential({...credential,[e.target.name]:e.target.value})
          }
        
  return (
    <div className="container-sm">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={credential.email}
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={onChange}
            className="form-control"
            id="password"
            name="password"
            value={credential.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
