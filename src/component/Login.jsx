import React from "react";
import { signin } from "../service/ApiService";

function Login(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");
        signin({email: email, password : password});
    };

    return (
        <div>
            <div spacing={2}>
                <div xs={12}>
                    <div component="h1" variant="h5">로그인</div>
                </div>
            </div>
            <button className='btn btn-danger' onClick={ () => {location.href="/"}}>뒤로가기</button>
            <form noValidate onSubmit={handleSubmit}>
                <div spacing={2}>
                    <div xs={12}>
                        <input variant="outlined" required id="email" label="email" name="email" autoComplete="email" />
                    </div>
                    <div xs={12}>
                        <input variant="outlined" required id="password" label="password" name="password" autoComplete="password" />
                    </div>
                    <div xs={12}>
                        <button type="submit" variant="contained" color="primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;