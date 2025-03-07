function Signup() {
    return ( <>
    
    <div className=" m-auto flex justify-center h-110 shadow-lg shadow-blue-500">
   <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend className="fieldset-legend text-3xl">Register</legend>
  <label className="fieldset-label">Name</label>
  <input type="email" className="input" placeholder="Enter your Name" />
  
  <label className="fieldset-label">Email</label>
  <input type="email" className="input" placeholder="Email" />
  
  <label className="fieldset-label">Password</label>
  <input type="password" className="input" placeholder="Password" />
  
  <button className="btn btn-neutral mt-4">Register</button>
  <label className="fieldset-label">Already have a Account</label>
  <button className="btn btn-neutral mt-4">Login</button>
</fieldset>
</div>
    </> );
}

export default Signup;