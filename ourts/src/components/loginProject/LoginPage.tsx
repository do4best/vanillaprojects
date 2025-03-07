function LoginPage() {
    return ( <>
    <div className=" m-auto flex justify-center h-100 shadow-lg shadow-amber-500">
   <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend className="fieldset-legend">Login</legend>
  
  <label className="fieldset-label">Email</label>
  <input type="email" className="input" placeholder="Email" />
  
  <label className="fieldset-label">Password</label>
  <input type="password" className="input" placeholder="Password" />
  
  <button className="btn btn-neutral mt-4">Login</button>
</fieldset>
</div>
    </> );
}

export default LoginPage;