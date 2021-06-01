import {useState} from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const onChange = (e) => {
        if(e.target.name ==='username'){
            setUsername(e.target.value)
        }
        else if(e.target.name ==='password'){
            setPassword(e.target.value)
        }
    }

    return(
        <div className="Login view">
            <div className="content">
                <div className="header"><h1>Admin Portal</h1></div>
                <div className="form-container">
                    <form onSubmit={onSubmit}>
                        <div className="form-input">
                            <label htmlFor="username">Username</label>
                            <input name='username' type='text' value={username} onChange={onChange}></input>
                        </div>

                        <div className="form-input">
                            <label htmlFor="password">Password</label>
                            <input name='password' type='password' value={password} onChange={onChange}></input>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login