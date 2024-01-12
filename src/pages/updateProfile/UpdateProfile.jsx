import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import axios from "axios";
import { useForm } from "react-hook-form";
import userIcon from '../../assets/userIcon.png'

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateProfile = () => {
    const { user } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = async (data) => {
        const name = data.name
        const imageFile = { image: data.image[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": 'multipart/form-data'
            }
        })
        if (res.data.success) {
            updateProfile(auth.currentUser, {
                photoURL: res.data.data.display_url,
                displayName: name
            }).then(res => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your profile picture has been updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="">
                <img className="h-[280px] w-[280px] rounded-full" src={user?.photoURL?user?.photoURL:userIcon} alt="" />
            </div>
            <div className=" mb-12 mt-3">
                <form onSubmit={handleSubmit(onSubmit)} className='' >
                    <label htmlFor="">Your name</label><br />
                <input type="text" placeholder="your name" defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" {...register("name", { required: true })} id="" /> <br /><br />
                <label htmlFor="">Choose your profile picture</label><br />
                    <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" {...register("image", { required: true })} id="actual-btn" />
                    <button className="bg-[#3ABFF8] px-3 cursor-pointer py-2 mt-2 text-white rounded-lg ">upload photo</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;