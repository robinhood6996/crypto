import './SignIn.scss'
import {useState} from "react";

function SignIn() {

    const [isSignIn, setIsSignIn]= useState(true)
    const btnToggleHandler = () => {
        setIsSignIn(prevState => !prevState);
    }

    return (
        <div className="sign-card-wrap">
            <div className={`sign-card cs-box-shadow ${isSignIn ? '' : 's--signup'}`}>
                <div className="form sign-in">
                    <h2 className="fs-30px mb-4 fw-700 text-center">Welcome back</h2>
                    <input placeholder="Email" type="email"/>
                    <input placeholder="Passrord" type="password"/>
                    <p className="forgot-pass">Forgot password?</p>
                    <button type="button" className="submit">Sign In</button>
                    <p className="fs-14px fw-600 mb-3 mt-5 text-cs-gray d-block d-lg-none" onClick={btnToggleHandler}>Want to create an account?<span className="ms-2 text--primary">Sign Up</span></p>
                </div>
                <div className="sub-cont">
                    <div className="img">
                        <div className="img__text m--up">
                            <h2>New here?</h2>
                            <p>Sign up and discover great amount of new opportunities!</p>
                        </div>
                        <div className="img__text m--in">
                            <h2>One of us?</h2>
                            <p>If you already has an account, just sign in. We've missed you!</p>
                        </div>
                        <div className="sing-in-wrap" onClick={btnToggleHandler}>
                            <span className="m--up">Sign Up</span>
                            <span className="m--in">Sign In</span>
                        </div>
                    </div>
                    <div className="form sign-up">
                        <h2>Sign Up</h2>
                        <input placeholder="Name" type="text"/>
                        <input placeholder="Email" type="email"/>
                        <input placeholder="Password" type="password"/>
                        <button type="button" className="submit">Sign Up</button>
                        <p className="fs-14px fw-600 mb-3 mt-5 text-cs-gray d-block d-lg-none"
                           onClick={btnToggleHandler}>Already have an account?<span className="ms-2 text--primary">Login</span>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default SignIn;