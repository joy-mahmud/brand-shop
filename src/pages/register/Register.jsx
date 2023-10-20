import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {
    const [msg, setmsg] = useState('')
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const uppercase = /[A-Z]/;
        const SpecialChar = /[\W_]/;

        //check password validation
        if (!uppercase.test(password)) {

            return setmsg("Please enter at least one uppercase letter In the password")
        } else if (!SpecialChar.test(password)) {
            return setmsg("Password should have at least one special character")
        } else {
            createUser(email, password)
                .then(() => {
                    event.target.reset()
                    toast("you registered successfully")


                    updateProfile(auth.currentUser, {
                        displayName: name,
                    }).then(() => {
                        console.log("Profile updated successfully")
                    }).catch(() => {

                    });
                    setTimeout(function () {
                        navigate(location?.state ? location.state : "/")
                    }, 15000);

                })
                .catch(() => setmsg("password should be at least 6 characters"))
        }

    }
    return (
        <div className="flex flex-col items-center justify-center ">
            <h2 className="text-center font-bold text-5xl">Register now!</h2>
            <div className="border p-5 rounded-lg border-[#4A07DA] mt-5">

                <form onSubmit={handleRegister} className="">
                    <label >Name:</label>
                    <input type="text" name="name" placeholder="Enter your name" className=" mb-3 input input-bordered input-primary w-full max-w-xs" /><br />
                    <label >Email:</label>
                    <input type="text" name="email" placeholder="Enter your email" className=" mb-3 input input-bordered input-primary w-full max-w-xs" /><br />
                    <label >password:</label>
                    <input type="password" name="password" placeholder="Enter your password" className=" mb-3 input input-bordered input-primary w-full max-w-xs" /><br />
                    <input type="submit" className="btn btn-primary w-full" value="Register" /><br />

                    <label className="label">
                        <Link to={'/login'}><p href="#" className="label-text-alt link link-hover text-[16px] mt-2">Already have an account? please login</p></Link>
                    </label>
                    
                    <ToastContainer></ToastContainer>
                </form>
               
            </div>
            <h2 className="text-[20px] font-medium text-[#CB0202] text-center">{msg}</h2>
        </div>
    );
};

export default Register;