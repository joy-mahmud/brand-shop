import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const ViewDetails = () => {
    const productDetails = useLoaderData()
    const {user} =useContext(AuthContext)
    const { photo, model, year, bodystyle, color, engine, horsepower, torque,model_id } = productDetails[0]
    const {price}=productDetails[1]
    const handleAddCart =(model_id)=>{
        const userId = user.uid
        console.log(user,model_id)
        const cartData = {userId,model_id,photo,model,price,horsepower}
        fetch('http://localhost:5000/usersCart',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(cartData)
        })
        .then(()=>toast("You added this product to your cart"))

    }
    return (
        <div>
            <div className="md:flex items-center justify-around">
                <div>
                    <img src={photo} alt="" className="md:h-[400px]" />
                </div>
                <div className="space-y-2">
                    <p><span className="text-4xl font-medium text-[#4A07DA]">Model: </span><span className="text-4xl font-semibold">{model}</span></p>
                    <p><span className="text-xl font-medium text-[#4A07DA]">Year:</span> {year}</p>
                    <p><span className="text-xl font-medium text-[#4A07DA]">Body-Style: </span>{bodystyle}</p>
                    <p><span className="text-xl font-medium text-[#4A07DA]">Color: </span>{color}</p>
                    <p><span className="text-xl font-medium text-[#4A07DA]">Engine: </span>{engine}</p>
                    <p><span className="text-xl font-medium text-[#4A07DA]">HorsePower: </span>{horsepower}</p>
                    <p><span className="text-xl font-medium text-[#4A07DA]">Torque: </span>{torque}</p>
                    <p><span className="text-xl font-medium text-[#4A07DA]">price: </span>{price}$</p>
                    <button onClick={()=>handleAddCart(model_id)} className="btn btn-primary">Add to cart</button>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default ViewDetails;