import axios from "axios";
import { useState } from "react";

function Signup() {
    const [name,setName] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        axios.post('https://localhost:3001/register',{name,email,password}).then(result=>console.log(result)).catch(err=>console.log(err))
    }
    return ( <>
     <div className="m-auto flex justify-center h-110 shadow-lg shadow-blue-500">
                <form onSubmit={handleSubmit} className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                    <fieldset>
                        <legend className="fieldset-legend text-3xl">Register</legend>
                        <label className="fieldset-label">Name</label>
                        <input type="text" className="input" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />

                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

                        <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        <label className="fieldset-label">Already have an Account</label>
                        <button type="button" className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
            </div>
    </> );
}

export default Signup;