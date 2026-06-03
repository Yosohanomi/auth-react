import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let data = await dispatch(login({email, password})).unwrap();
            if (data) {
                navigate("/")
            }
        } catch (error){
            console.error("Login failed: ", error)}
    }
  return (
    <form onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <div>
            <input type="email" placeholder='email@gmail.com' autoComplete='email' value={email} onChange={e => setEmail(e.target.value)} required/>
        </div>
        <div>
            <input type="password" placeholder='1230efwrrrWW' autoComplete='current-password' value={password} onChange={e => setPasword(e.target.value)} required/>
        </div>
        <button type="submit">Enter</button>
    </form>
  )
}
