import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
    const { userLogin, googleSignIn, } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        userLogin(email, password)
            .then(() => {
                toast("logged in successfully")
                setTimeout(function () {
                    navigate(location?.state ? location.state : "/")
                }, 2000);
            })
            .catch(error => console.log(error))
    }

    const GoogleSignInHandler = () => {

        googleSignIn()
            .then(() => {
                toast("you logged in successfully")
                setTimeout(function () {
                    navigate(location?.state ? location.state : "/")
                }, 1500);
            })
            .catch(() =>{
                toast("Email or password doesn't match")
            })

    }
    return (
        <div className="flex flex-col items-center justify-center ">
            <h2 className="text-center font-bold text-5xl">Login now!</h2>
            <div className="border p-5 rounded-lg border-[#4A07DA] mt-5">

                <form onSubmit={handleLogin} className="">
                    <label >Email:</label>
                    <input type="text" name="email" placeholder="Type here" className=" mb-3 input input-bordered input-primary w-full max-w-xs" /><br />
                    <label >password:</label>
                    <input type="password" name="password" placeholder="Type here" className=" mb-3 input input-bordered input-primary w-full max-w-xs" /><br />
                    <input type="submit" className="btn btn-primary w-full" value="Login" /><br />

                    <label className="label">
                        <Link to={'/register'}><p href="#" className="label-text-alt link link-hover text-[16px] mt-2">Dont have account? please register</p></Link>
                    </label>

                </form>
                <button onClick={GoogleSignInHandler} className=" mt-5 btn w-full btn-primary">Sign in with google</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;