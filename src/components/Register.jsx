import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Register = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState ("")
    const navigate = useNavigate()

    const handleRegister = (event)=>{
        event.preventDefault()
        const payLoad = {
            name : userName,
            email : email,
            password : password
        }
        console.log(payLoad)
        if(password == confirmPassword){
            localStorage.setItem("userData", JSON.stringify(payLoad))
            navigate('/')
        }else{
            // alert("password and confirm password not same")
             toast.error("password and confirm password not same")
        }
        
    }
  return (
    <>
     <div className='container w-50 mt-5'>
            <div className="container p-4 text-dark rounded-5"
                style={{backgroundColor:"#d2d2d2"}}>

                <h3>Register Here...</h3>
                <form onSubmit={handleRegister}>
                     <div className="mb-3" >
                        <label htmlFor="exampleInputUser" className="form-label">User Name</label>
                        <input type="text" className="form-control" 
                        id="exampleInputUser" 
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                        />
                        
                    </div>
                     <div className="mb-3" >
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" 
                        id="exampleInputEmail1" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                       
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassord1" className="form-label">Password</label>
                        <input type="password" className="form-control" 
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                         />
                         
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" 
                        id="exampleInputPassword2"
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                         />
                    </div>

                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                    <Link to="/">If already Registered</Link>
                </form>
            </div>
        </div>
        <ToastContainer />
        </>
  ) 
}

export default Register