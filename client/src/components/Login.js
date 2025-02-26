import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import Spinner from './Spinner';


const Login = (props) => {
    const [loading, setLoading] = useState(false)

    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            setLoading(false)
            history.push("/");
            props.showAlert("logged in successfully", "success");
        }
        else{
            setLoading(false)
            props.showAlert("Invalid credentials", "danger");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
       
        <div className='mt-3'>
            <h2>Please login</h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button><div style={{display:"inline-flex",alignItems:"center", marginLeft:"20px"}}>{loading && <><  Spinner /> <span  style={{marginLeft:"8px"}}>Plz wait, it might take max 1 min...</span></>}</div>

            </form>
        </div>
    )
}

export default Login
