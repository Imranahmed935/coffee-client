import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignup = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
        createUser(email, password)
        .then(result=>{
            console.log(result.user)
            const createdAt = result?.user?.metadata?.creationTime;
                const newUser = {name, email, createdAt}
            fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(newUser)
            })
            .then(res=> res.json())
            .then(data =>{
                if(data.insertedId){
                    alert('added')
                }
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">signUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;