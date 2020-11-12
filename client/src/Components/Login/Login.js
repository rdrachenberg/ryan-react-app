import React, {useState}from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="container login-container">
            <div className="row">
                <div className='col-md-3'></div>
                <div className="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Email *" value="" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Your Password *" value="" />
                    </div>
                    <div className="form-group" id='login-btnSubmit'>
                        <input type="submit" className="btnSubmit" value="Login" />
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
            <div className="row" id='login-page-spacer'></div>
        </div>
    )
}
export default Login