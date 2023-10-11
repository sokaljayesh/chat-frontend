import React,{useEffect,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username,setUsername] = useState("");
  const [number,setNumber] = useState(0);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [cPass,setCPass] = useState("");

  const navigator = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if(isNaN(number) || number.length!==10){
      alert("Phone number is invalid!");
      return;
    }
    else if(!(emailRegex.test(email))){
      alert("Invalid email");
      return;
    }
    else if(password.length<6){
      alert("Password must be atleast 6 digit long");
      return;
    }
    else if(password!==cPass){
      alert("password and confirm password are not same");
      return;
    }

    const data = { username,email,password,number };


    axios.post("http://localhost:5000/user/signup",data).then(res=>{navigator("/user/login"); console.log(res)}).catch(err=>alert(err));

    
  };
  return (
    <form>
      <label htmlFor="name">Username </label>
      <br />
      <input
        type="text"
        id="name"
        name="username"
        placeholder="username"
        autoComplete="on"
        autoFocus
        required
        onChange={(e)=>setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="number">Phone Number </label>
      <br />
      <input
        type="text"
        id="number"
        name="number"
        placeholder="number"
        autoComplete="on"
        required
        onChange={(e)=>setNumber(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email </label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="email"
        autoComplete="on"
        required
        onChange={(e)=>setEmail(e.target.value)}
      />
      <br />
      <label for="pass">Password </label>
      <br />
      <input
        type="password"
        id="pass"
        name="password"
        placeholder="password"
        required
        onChange={(e)=>setPassword(e.target.value)}
      />
      <br />
      <label for="confirmPass">Confirm Password </label>
      <br />
      <input
        type="password"
        id="confirmPass"
        name="cpassword"
        placeholder="confirm password"
        required
        onChange={(e)=>setCPass(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>SignUp</button>
    </form>
  );
};

export default Signup;
